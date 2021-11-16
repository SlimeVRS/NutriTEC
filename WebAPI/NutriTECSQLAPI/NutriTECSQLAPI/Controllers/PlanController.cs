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
    public class PlanController : ApiController
    {
        // GET api/<controller>
        public List<Plan> GetAllPlans()
        {
            return PlanData.GetAllPlans();
        }

        // GET api/<controller>/5
        public Plan Get(int id)
        {
            return PlanData.GetPlanById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewPlan([FromBody] Plan plan)
        {
            return PlanData.RegisterNewPlan(plan);
        }

        [HttpPost]
        [Route("api/plan/addnewrecipe")]
        public bool GiveNewPlan([FromBody] PlanPatient plan)
        {
            return PlanData.GiveNewPlan(plan);
        }
        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyPlan(Plan plan)
        {
            return PlanData.ModifyPlan(plan);
        }

        // DELETE api/<controller>/5
        public bool DeletePlanById(int id)
        {
            return PlanData.DeletePlanById(id);
        }
    }
}