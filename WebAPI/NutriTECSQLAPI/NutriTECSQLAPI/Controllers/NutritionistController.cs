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
    public class NutritionistController : ApiController
    {
        // GET api/<controller>
        public List<Nutritionist> GetAllNutritionists()
        {
            return NutritionistData.GetAllNutritionists();
        }

        // GET api/<controller>/5
        public Nutritionist GetNutritionistById(int id)
        {
            return NutritionistData.GetNutritionistById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewNutritionist([FromBody] Nutritionist nutritionist)
        {
            return NutritionistData.RegisterNewNutritionist(nutritionist);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyNutritionist([FromBody] Nutritionist nutritionist)
        {
            return NutritionistData.ModifyNutritionist(nutritionist);
        }

        // DELETE api/<controller>/5
        public bool DeleteNutritionistById(int id)
        {
            return NutritionistData.DeleteNutritionistById(id);
        }
    }
}