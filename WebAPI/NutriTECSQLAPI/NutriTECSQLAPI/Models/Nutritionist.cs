using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace NutriTECSQLAPI.Models
{
    public class Nutritionist
    {
        public int id_nutritionist { get; set; }
        public string first_name_nutritionist { get; set; }
        public string second_name_nutritionist { get; set; }
        public string first_last_name_nutritionist { get; set; }
        public string second_last_name_nutritionist { get; set; }
        [DataType(DataType.Date)]
        public DateTime birth_date_nutritionist { get; set; }
        public float weight_nutritionist { get; set; }
        public float imc_nutritionist { get; set; }
        public int code_nutritionist { get; set; }
        public string pfp_nutritionist { get; set; }
        public int card_nutritionist { get; set; }
        public int payment_nutritionist { get; set; }
        public string direction_nutritionist { get; set; }
    }
}