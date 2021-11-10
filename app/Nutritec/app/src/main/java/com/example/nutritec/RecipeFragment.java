package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.nutritec.databinding.ActivityFragmentRecipeBinding;


public class RecipeFragment extends Fragment {
    private ActivityFragmentRecipeBinding binding;
    private String productos="",valores;
    private int porcion,energia,grasa,sodio,carbohidratos,proteína,vitaminas,calcio,hierro;

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
                add_producto();
            }
        });

    }

    private void add_producto(){
        //se llama al api
        productos+="Comida"+Integer.toString(porcion)+"\n";
        porcion+=2;
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
        //displayTextView.setText("Hello");
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