using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class PatientNutritionist
    {
        public int id_patient { get; set; }
        public int id_nutritionist { get; set; }
    }
}