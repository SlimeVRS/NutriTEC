using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Data
{
    public class UserData
    {
        public static bool RegisterNewUser(User user)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewuser", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", user.username);
                cmd.Parameters.AddWithValue("@password", user.password);
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@usertype", user.usertype);
                cmd.Parameters.AddWithValue("@user_owner", user.user_owner);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public static bool ModifyUser(User user)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifyuser", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_user", user.id_User);
                cmd.Parameters.AddWithValue("@username", user.username);
                cmd.Parameters.AddWithValue("@password", user.password);
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@usertype", user.usertype);
                cmd.Parameters.AddWithValue("@user_owner", user.user_owner);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public static List<User> GetAllUsers()
        {
            List<User> userList = new List<User>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallusers", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    // cmd.ExecuteNonQuery();

                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            userList.Add(new User()
                            {
                                id_User = Convert.ToInt32(dataReader["id_user"]),
                                username = dataReader["username"].ToString(),
                                // password = dataReader["password"].ToString(),
                                email = dataReader["email"].ToString(),
                                usertype = Convert.ToInt32(dataReader["usertype"]),
                                user_owner = Convert.ToInt32(dataReader["user_owner"])
                            });
                        }
                    }

                    return userList;
                }
                catch
                {
                    return userList;
                }
            }
        }

        public static User GetUserById(int id_user)
        {
            User user = new User();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getuserbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_user", id_user);
                try
                {
                    connection.Open();
                    // cmd.ExecuteNonQuery();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            user = new User()
                            {
                                id_User = Convert.ToInt32(dataReader["id_user"]),
                                username = dataReader["username"].ToString(),
                                // password = dataReader["password"].ToString(),
                                email = dataReader["email"].ToString(),
                                usertype = Convert.ToInt32(dataReader["usertype"])
                            };
                        }
                    }
                    return user;
                }
                catch
                {
                    return user;
                }
            }
        }

        public static User GetUserByNamePasswordEmail(string username, string password)
        {
            User user = new User();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getuserbynamepasswordemail", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", username);
                cmd.Parameters.AddWithValue("@password", password);
                try
                {
                    connection.Open();
                    // cmd.ExecuteNonQuery();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            user = new User()
                            {
                                id_User = Convert.ToInt32(dataReader["id_user"]),
                                username = dataReader["username"].ToString(),
                                // password = dataReader["password"].ToString(),
                                email = dataReader["email"].ToString(),
                                usertype = Convert.ToInt32(dataReader["usertype"]),
                                user_owner = Convert.ToInt32(dataReader["user_owner"])
                            };
                        }
                    }
                    return user;
                }
                catch
                {
                    return user;
                }
            }
        }
        public static bool DeleteUserById(int user_id)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deleteuserbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_user", user_id);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}