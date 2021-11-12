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
    public class FoodController : ApiController
    {
        // GET api/<controller>
        public List<Food> GetAllFoods()
        {
            return FoodData.GetAllFoods();
        }

        // GET api/<controller>/5
        public Food GetFoodById(int id)
        {
            return FoodData.GetFoodById(id);
        }

        [Route("api/food/{name}")]
        public List<Food> GetFoodsByName(string name)
        {
            return FoodData.GetFoodsByName(name);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewFood([FromBody] Food food)
        {
            return FoodData.RegisterNewFood(food);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyFood([FromBody] Food food)
        {
            return FoodData.ModifyFood(food);
        }

        // DELETE api/<controller>/5
        public bool DeleteFoodById(int id)
        {
            return FoodData.DeleteFoodById(id);
        }
    }
}