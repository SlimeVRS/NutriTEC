using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class Recipe
    {
        public int id_recipe { get; set; }
        public string name_recipe { get; set; }
        public string ingredients { get; set; }
        public int id_patient_recipe { get; set; }
    }
}