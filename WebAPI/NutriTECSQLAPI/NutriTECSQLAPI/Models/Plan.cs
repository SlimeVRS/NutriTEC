using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class Plan
    {
        public int id_plan { get; set; }
        public string name_plan { get; set; }
        public float calories_plan { get; set; }
    }
}