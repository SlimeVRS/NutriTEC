using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class Admin
    {
        public int id_admin { get; set; }
        public string first_name_admin { get; set; }
        public string second_name_admin { get; set; }
        public string first_last_name_admin { get; set; }
        public string second_last_name_admin { get; set; }
        public string phone_admin { get; set; }
    }
}