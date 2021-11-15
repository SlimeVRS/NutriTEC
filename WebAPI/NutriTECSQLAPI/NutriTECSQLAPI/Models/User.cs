using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Models
{
    public class User
    {
        public int id_User { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public int usertype { get; set; }
        public int user_owner { get; set; }
    }
}