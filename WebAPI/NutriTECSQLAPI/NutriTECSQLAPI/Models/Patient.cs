using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace NutriTECSQLAPI.Models
{
    public class Patient
    {
        public int id_patient { get; set; }
        public string first_name_patient { get; set; }
        public string second_name_patient { get; set; }
        public string first_last_name_patient { get; set; }
        public string second_last_name_patient { get; set; }
        [DataType(DataType.Date)]
        public DateTime birth_date_patient { get; set; }
        public float initial_weight_patient { get; set; }
        public float actual_weight_patient { get; set; }
        public float imc_patient { get; set; }
        public float calories_patient { get; set; }
        public string country_patient { get; set; }
        public float waist_patient { get; set; }
        public float neck_patient { get; set; }
        public float hip_patient { get; set; }
        public float thigh_patient { get; set; }
        public float fat_patient { get; set; }
        public int id_nutritionist_patient { get; set; }
    }
}