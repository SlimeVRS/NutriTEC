package com.example.nutritec;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.nutritec.databinding.FragmentSecondBinding;
import com.google.android.material.snackbar.Snackbar;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class SecondFragment extends Fragment {

    private FragmentSecondBinding binding;
    private String productos="",valores,food,time_text;
    private int porcion,energia,grasa,sodio,carbohidratos,proteína,vitaminas,calcio,hierro,codigo;
    private ArrayAdapter<String> adapterTiempos,adapterComidas;
    private ArrayList<String> arr_comidas,arr_tiempos;
    private Spinner spinTiempo,spinComida;
    private boolean F=false,bool_food=F,bool_time=F,add_food=F;
    private RequestQueue queue;
    private JSONArray comidas_arr,recetas_arr;
    private JSONObject comida,receta;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentSecondBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        queue = Volley.newRequestQueue(getActivity());

        binding.bntReceta.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                NavHostFragment.findNavController(SecondFragment.this)
                        .navigate(R.id.action_second_to_recipeFragment);
            }
        });
        binding.start1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                pedir_comidas();
            }
        });
        EditText editTextBusqueda = getActivity().findViewById(R.id.id_produc_1);
        editTextBusqueda.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                try{
                    spinComida.setSelection(0);
                }catch (Exception e){

                }
                //se puede cambiar por una busqueda y una carga de datos al spiner
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });
        binding.registrarBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (add_food && bool_time){
                    Snackbar.make(view, "Su consumo se ha registrado", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                }else{
                    Snackbar.make(view, "Debe escoger un horario y haber agregado al menos una comida", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                }
            }
        });
        binding.addComida1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                    if(bool_food){
                        try {
                            add_producto();
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        return;
                    }else{
                        EditText codigo_text=getActivity().findViewById(R.id.id_produc_1);
                        String codigo_str=codigo_text.getText().toString();
                        if (!codigo_str.isEmpty()){
                            codigo = Integer.parseInt(codigo_str);
                            //buscar con esto el dato de la comida
                            for(int i=0;i<comidas_arr.length();i++){
                                try {
                                    comida= (JSONObject) comidas_arr.get(i);
                                    if(codigo==comida.getInt("id_food")){
                                        food=comida.getString("description_food");
                                        add_producto();
                                        return;
                                    }else{
                                        Toast.makeText(getActivity(),"No se encontró una comida con ese codigo",Toast.LENGTH_SHORT).show();
                                    }
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }

                            }

                            return;
                        }else{
                            Snackbar.make(view, "Debe Ingresar el codigo de la comida o seleccionar una", Snackbar.LENGTH_LONG)
                                    .setAction("Action", null).show();
                        }
                    }
                }

        });
    }
    private void pedir_comidas(){
        String url ="http://192.168.0.2:45456/api/food";
        RequestQueue queue = Volley.newRequestQueue(getActivity());
        // Request a string response from the provided URL.
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            comidas_arr=new JSONArray(response);
                            iniciar();
                            return;

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


    private void add_producto() throws JSONException {
        //se llama al api
        //usar food para buscar en el api los datos
        productos+=food+"\n";
        for(int i=0;i<comidas_arr.length();i++){
            comida= (JSONObject) comidas_arr.get(i);
            if(comida.getString("description_food")==food){
                String portion=comida.getString("portion_food");
                portion=portion.replace(" g","");
                porcion+=(int) Double.parseDouble(portion);
                energia+=comida.getInt("energy_food");
                grasa+=comida.getInt("fat_food");
                sodio+=comida.getInt("sodium_food");
                carbohidratos+=comida.getInt("carbs_food");
                proteína+=comida.getInt("protein_food");
                vitaminas+=2;
                calcio+=comida.getInt("calcium_food");
                hierro+=comida.getInt("iron_food");
                add_food=true;
                mostrar_productos();
                mostrar_valores_nut();
            }
        }
    }
    private void mostrar_productos(){
        TextView productos_text=(TextView) getActivity().findViewById(R.id.productos_text_1);
        productos_text.setText( productos);
    }

    private void iniciar() throws JSONException {
        spinTiempo();
        spinFood();
    }
    private void spinTiempo(){
        spinTiempo=getActivity().findViewById(R.id.horario_1);
        arr_tiempos=new ArrayList();
        arr_tiempos.add("Seleccione el horario de su consumo");
        arr_tiempos.add("Desayuno");
        arr_tiempos.add("Almuerzo");
        arr_tiempos.add("Cena");
        arr_tiempos.add("Merienda");
        adapterTiempos = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_spinner_item,arr_tiempos);
        adapterTiempos.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinTiempo.setAdapter(adapterTiempos);
        spinTiempo.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int pos, long l) {
                if (pos>0){
                    bool_time=true;
                    time_text=(String) spinTiempo.getAdapter().getItem(pos);
                }
                else{
                    bool_time=false;
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    private void spinFood() throws JSONException {
        spinComida=getActivity().findViewById(R.id.comidas_1);
        arr_comidas=new ArrayList();
        arr_comidas.add("Seleccione una comida");

        for(int i=0;i<comidas_arr.length();i++){
            comida= (JSONObject) comidas_arr.get(i);
            arr_comidas.add(comida.getString("description_food"));
            //valores_text.setText(comida.getString("id_food"));
        }
        adapterComidas = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_spinner_item,arr_comidas);
        adapterComidas.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinComida.setAdapter(adapterComidas);
        spinComida.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int pos, long l) {
                if(pos>0){
                    bool_food=true;
                    food=(String) spinComida.getAdapter().getItem(pos);
                    EditText codigo_text=getActivity().findViewById(R.id.id_produc_1);
                    codigo_text.getText().clear();

                }else{
                    bool_food=F;
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    private void mostrar_valores_nut(){
        valores="Nutrientes     Cantidad\n"+
                "Porciones:          "+Integer.toString(porcion)+"g\n" +
                "Energia:              "+Integer.toString(energia)+"Kcal\n"+
                "Grasa:                 "+Integer.toString(grasa)+"g\n"+
                "Sodio:                  "+Integer.toString(sodio)+"mg\n"+
                "Carbohidratos:  "+Integer.toString(carbohidratos)+"g\n"+
                "Proteinas:           "+Integer.toString(proteína)+"g\n"+
                "Vitaminas:           "+Integer.toString(vitaminas)+"\n"+
                "Calcio:                  "+Integer.toString(calcio)+"mg\n"+
                "Hierro:                  "+Integer.toString(hierro)+"mg";

        TextView valores_text=(TextView) getActivity().findViewById(R.id.datos_comida_1);
        valores_text.setText( valores);
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

}