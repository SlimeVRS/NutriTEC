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
        public string breakfast { get; set; }
        public string morning_snack { get; set; }
        public string lunch { get; set; }
        public string afternoon_snack { get; set; }
        public string dinner { get; set; }
        public int id_patient_nutritionist { get; set; }
    }
}