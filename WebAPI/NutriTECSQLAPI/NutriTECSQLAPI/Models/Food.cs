using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class Food
    {
        public int id_food { get; set; }
        public string description_food { get; set; }
        public string portion_food { get; set; }
        public float fat_food { get; set; }
        public string vitamins_food { get; set; }
        public float calcium_food { get; set; }
        public float iron_food { get; set; }
        public float sodium_food { get; set; }
        public float carbs_food { get; set; }
        public float energy_food { get; set; }
        public float protein_food { get; set; }
        public int food_state { get; set; }
    }
}