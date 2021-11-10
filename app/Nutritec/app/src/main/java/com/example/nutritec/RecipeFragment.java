package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

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

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.nutritec.databinding.ActivityFragmentRecipeBinding;
import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;


public class RecipeFragment extends Fragment {
    private ActivityFragmentRecipeBinding binding;
    private String productos="",valores,food;
    private int porcion,energia,grasa,sodio,carbohidratos,proteína,vitaminas,calcio,hierro,codigo;
    private ArrayAdapter<String> adapterComidas;
    private ArrayList<String> arr_comidas;
    private Spinner spinComida;
    private boolean F=false,bool_food=F,bool_add=F;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = ActivityFragmentRecipeBinding.inflate(inflater, container, false);
        return binding.getRoot();
    }
    public void onViewCreated(@NonNull View view,Bundle savedInstanceState){
        super.onViewCreated(view,savedInstanceState);
        binding.confirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                NavHostFragment.findNavController(RecipeFragment.this)
                        .navigate(R.id.action_recip_to_secondFragment);
            }
        });
        binding.addComida2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                bool_food=true;
                add_producto();
            }
        });
        binding.confirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText nombre =(EditText) getActivity().findViewById(R.id.nombre_receta_text);
                boolean nomb = nombre.getText().toString().isEmpty();
                if (bool_food && nomb){
                    Snackbar.make(view, "Se guardó la receta", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                    return;
                }else{
                    Snackbar.make(view, "Debe poner un nombre y haber agregado alimentos", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                }
            }
        });
        binding.start2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                spinFood();
            }
        });
        EditText editTextBusqueda = getActivity().findViewById(R.id.id_product_2);
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
        binding.addComida2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(bool_food){
                    add_producto();
                    return;
                }else{
                    EditText codigo_text=getActivity().findViewById(R.id.id_product_2);
                    String codigo_str=codigo_text.getText().toString();
                    if (!codigo_str.isEmpty()){
                        codigo = Integer.parseInt(codigo_str);
                        //buscar con esto el dato de la comida
                        if(codigo==1){
                            food="papas";
                            add_producto();
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

    private void add_producto(){
        //se llama al api
        //usar food para buscar en el api los datos
        productos+=food+"\n";
        porcion+=1;
        energia+=300;
        grasa+=100;
        sodio+=20;
        carbohidratos+=30;
        proteína+=100;
        vitaminas+=80;
        calcio+=50;
        hierro+=90;
        mostrar_productos();
        mostrar_valores_nut();
    }
    private void mostrar_productos(){
        TextView productos_text=(TextView) getActivity().findViewById(R.id.productos_text_2);
        productos_text.setText( productos);
    }
    private void spinFood(){
        spinComida=getActivity().findViewById(R.id.comidas2);
        arr_comidas=new ArrayList();
        arr_comidas.add("Seleccione una comida");
        //cambiar por la coneccion al api
        arr_comidas.add("papa");
        arr_comidas.add("chicles");
        arr_comidas.add("coca");
        adapterComidas = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_spinner_item,arr_comidas);
        adapterComidas.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinComida.setAdapter(adapterComidas);
        spinComida.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int pos, long l) {
                if(pos>0){
                    bool_food=true;
                    food=(String) spinComida.getAdapter().getItem(pos);
                    EditText codigo_text=getActivity().findViewById(R.id.id_product_2);
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

        TextView valores_text=(TextView) getActivity().findViewById(R.id.datos_comida_2);
        valores_text.setText( valores);
    }

    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}