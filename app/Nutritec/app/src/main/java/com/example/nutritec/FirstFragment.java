package com.example.nutritec;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.nutritec.databinding.FragmentFirstBinding;
import com.google.android.material.snackbar.Snackbar;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

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

        binding.buttonFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText email = (EditText) getActivity().findViewById(R.id.Email_text);
                EditText pasword = (EditText) getActivity().findViewById(R.id.Password_text);
                String correo = email.getText().toString();
                String pass = pasword.getText().toString();
                if(correo.isEmpty()||pass.isEmpty()){
                    Snackbar.make(view, "Debe ingresar el correo y la contraseña ", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                    return;
                }
                if(validarEmail(correo)){
                    NavHostFragment.findNavController(FirstFragment.this)
                            .navigate(R.id.action_FirstFragment_to_SecondFragment);
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

    boolean validarEmail(CharSequence email) {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }
    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

}