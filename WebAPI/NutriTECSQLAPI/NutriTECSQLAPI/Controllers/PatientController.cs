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
    public class PatientController : ApiController
    {
        // GET api/<controller>
        public List<Patient> GetAllPatients()
        {
            return PatientData.GetAllPatients();
        }

        // GET api/<controller>/5
        public Patient GetPatientById(int id)
        {
            return PatientData.GetPatientById(id);
        }

        [Route("api/patient/mymeasures/{id_patient}")]
        public List<PatientMeasures> GetAllPatientMeasures(int id_patient)
        {
            return PatientData.GetAllPatientMeasures(id_patient);
        }
        // POST api/<controller>
        [HttpPost]
        public bool Post([FromBody] Patient patient)
        {
            return PatientData.RegisterNewPatient(patient);
        }

        [HttpPost]
        [Route("api/patient/mymeasures/")]
        public bool ModifyPatientMeasures([FromBody] PatientMeasures patient)
        {
            return PatientData.ModifyPatientMeasures(patient);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyPatient([FromBody] Patient patient)
        {
            return PatientData.ModifyPatient(patient);
        }

        // DELETE api/<controller>/5
        public bool DeletePatientById(int id)
        {
            return PatientData.DeletePatientById(id);
        }
    }
}