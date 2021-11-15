using NutriTECSQLAPI.Data;
using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NutriTECSQLAPI.Controllers
{
    public class RecipeController : ApiController
    {
        // GET api/<controller>
        public List<Recipe> GetAllRecipes()
        {
            return RecipeData.GetAllRecipes();
        }

        // GET api/<controller>/5
        public Recipe GetRecipeById(int id)
        {
            return RecipeData.GetRecipeById(id);
        }

        [Route("api/recipe/unrelated")]
        public List<Recipe> GetUnrelatedRecipes()
        {
            return RecipeData.GetUnrelatedRecipes();
        }

        [Route("api/recipe/addnewrecipe")]
        [HttpPost]
        public bool laskdjal([FromBody] RecipePatient recipe)
        {
            return RecipeData.GiveNewRecipe(recipe);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewRecipe([FromBody] Recipe recipe)
        {
            return RecipeData.RegisterNewRecipe(recipe);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyRecipe([FromBody] Recipe recipe)
        {
            return RecipeData.ModifyRecipe(recipe);
        }

        [Route("api/recipe/myrecipes/{id_patient}")]
        public List<Recipe> GetRecipesByPatientId(int id_patient)
        {
            return RecipeData.GetRecipesByPatientId(id_patient);
        }
        // DELETE api/<controller>/5
        public bool Delete(int id)
        {
            return RecipeData.DeleteRecipeById(id);
        }
    }
}