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
    public class UserController : ApiController
    {
        // GET api/<controller>
        public List<User> GetAllUsers()
        {
            return UserData.GetAllUsers();
        }

        // GET api/<controller>/5
        public User GetUserById(int id)
        {
            return UserData.GetUserById(id);
        }

        [Route("api/user/{username}/{password}")]
        public User GetUserByNamePasswordEmail(string username, string password)
        {
            return UserData.GetUserByNamePasswordEmail(username, password);
        }

        // POST api/<controller>
        [HttpPost]
        public bool RegisterNewUser([FromBody] User user)
        {
            return UserData.RegisterNewUser(user);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool ModifyUser([FromBody] User user)
        {
            return UserData.ModifyUser(user);
        }

        // DELETE api/<controller>/5
        public bool DeleteUserById(int id)
        {
            return UserData.DeleteUserById(id);
        }
    }
}