package com.example.nutritec;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.nutritec.databinding.FragmentFirstBinding;
import com.google.android.material.snackbar.Snackbar;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;
    private String user,mail;
    private boolean valid_pass,valid_mail;
    private JSONArray users;
    private RequestQueue queue;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentFirstBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        queue = Volley.newRequestQueue(getActivity());

        binding.buttonFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText email = (EditText) getActivity().findViewById(R.id.Email_text);
                EditText pasword = (EditText) getActivity().findViewById(R.id.Password_text);
                String correo = email.getText().toString();
                String pass = pasword.getText().toString();
                get_user(correo);


                if(validarEmail(correo)){
                    if(correo.isEmpty()||pass.isEmpty()){
                        Snackbar.make(view, "Debe ingresar el correo y la contraseña ", Snackbar.LENGTH_LONG)
                                .setAction("Action", null).show();
                        return;
                    }
                    String url ="http://192.168.0.2:45456/api/user/"+user+"/"+pass;
                    RequestQueue queue = Volley.newRequestQueue(getActivity());
                    StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                            new Response.Listener<String>() {
                                @Override
                                public void onResponse(String response) {
                                    try {
                                        JSONObject usuario=new JSONObject(response);
                                        valid_pass=usuario.getInt("id_User")!=0;
                                        if (valid_pass){
                                            NavHostFragment.findNavController(FirstFragment.this)
                                                    .navigate(R.id.action_FirstFragment_to_SecondFragment);
                                            return;
                                        }else{
                                            Toast.makeText(getActivity(),"Usuario o contraseña invalidos",Toast.LENGTH_SHORT).show();
                                        }

                                    } catch (JSONException  e) {
                                        e.printStackTrace();
                                    }
                                }
                            }, new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Toast.makeText(getActivity(),"no funcó",Toast.LENGTH_SHORT).show();
                        }
                    });
                    // Add the request to the RequestQueue.
                    queue.add(stringRequest);
                    return;
                }
                else{
                    Snackbar.make(view, "El correo que ingresó no es valido", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                    return;
                }

            }
        });
    }
    private void get_user(String email){
        String url ="http://192.168.0.2:45456/api/user";
        valid_mail=false;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            users=new JSONArray(response);

                            for (int i=0;i<users.length();i++){
                                JSONObject usuario= (JSONObject) users.get(i);

                                mail=usuario.getString("email");
                                if(mail.compareTo(email)==0){
                                    user=usuario.getString("username");
                                    return;

                                }else {
                                    valid_mail=false;
                                }
                            }
                        } catch (JSONException  e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity(),"no funcó",Toast.LENGTH_SHORT).show();
            }
        });
        // Add the request to the RequestQueue.
        queue.add(stringRequest);


    }

    boolean validarEmail(CharSequence email) {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }
    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

}