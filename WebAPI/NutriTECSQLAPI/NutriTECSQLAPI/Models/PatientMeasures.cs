using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace NutriTECSQLAPI.Models
{
    public class PatientMeasures
    {
        public int id_patientM { get; set; }
        
        [DataType(DataType.Date)]
        public DateTime date_patient { get; set; }
        public float waist_patient { get; set; }
        public float neck_patient { get; set; }
        public float hip_patient { get; set; }
        public float fat_patient { get; set; }
        public float muscle_patient { get; set; }
        public float weight_patient { get; set; }
        public int id_patient_owner { get; set; }
    }
}