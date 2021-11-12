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
    public class AdminController : ApiController
    {
        // GET api/<controller>
        public List<Admin> GetAllAdmins()
        {
            return AdminData.GetAllAdmins();
        }

        // GET api/<controller>/5
        public Admin GetAdminById(int id)
        {
            return AdminData.GetAdminById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewAdmin([FromBody] Admin admin)
        {
            return AdminData.RegisterNewAdmin(admin);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool Put([FromBody] Admin admin)
        {
            return AdminData.ModifyAdmin(admin);
        }

        // DELETE api/<controller>/5
        public bool Delete(int id)
        {
            return AdminData.DeleteAdminById(id);
        }
    }
}