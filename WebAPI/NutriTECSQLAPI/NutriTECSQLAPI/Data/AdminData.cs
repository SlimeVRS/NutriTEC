using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Data
{
    public class AdminData
    {
        public static bool RegisterNewAdmin(Admin admin)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewadmin", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_admin", admin.id_admin);
                cmd.Parameters.AddWithValue("@first_name_admin", admin.first_name_admin);
                cmd.Parameters.AddWithValue("@second_name_admin", admin.second_name_admin);
                cmd.Parameters.AddWithValue("@first_last_name_admin", admin.first_last_name_admin);
                cmd.Parameters.AddWithValue("@second_last_name_admin", admin.second_last_name_admin);
                cmd.Parameters.AddWithValue("@phone_admin", admin.phone_admin);
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

        public static bool ModifyAdmin(Admin admin)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifyadmin", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_admin", admin.id_admin);
                cmd.Parameters.AddWithValue("@first_name_admin", admin.first_name_admin);
                cmd.Parameters.AddWithValue("@second_name_admin", admin.second_name_admin);
                cmd.Parameters.AddWithValue("@first_last_name_admin", admin.first_last_name_admin);
                cmd.Parameters.AddWithValue("@second_last_name_admin", admin.second_last_name_admin);
                cmd.Parameters.AddWithValue("@phone_admin", admin.phone_admin);
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

        public static List<Admin> GetAllAdmins()
        {
            List<Admin> adminList = new List<Admin>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getalladmins", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            adminList.Add(new Admin()
                            {
                                id_admin = Convert.ToInt32(dataReader["id_admin"]),
                                first_name_admin = dataReader["first_name_admin"].ToString(),
                                second_name_admin = dataReader["second_name_admin"].ToString(),
                                first_last_name_admin = dataReader["first_last_name_admin"].ToString(),
                                second_last_name_admin = dataReader["second_last_name_admin"].ToString(),
                                phone_admin = dataReader["phone_admin"].ToString(),
                            });
                        }
                    }
                    return adminList;
                }
                catch
                {
                    return adminList;
                }
            }
        }

        public static Admin GetAdminById(int id_admin)
        {
            Admin admin = new Admin();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getadminbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_admin", id_admin);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            admin = new Admin()
                            {
                                id_admin = Convert.ToInt32(dataReader["id_admin"]),
                                first_name_admin = dataReader["first_name_admin"].ToString(),
                                second_name_admin = dataReader["second_name_admin"].ToString(),
                                first_last_name_admin = dataReader["first_last_name_admin"].ToString(),
                                second_last_name_admin = dataReader["second_last_name_admin"].ToString(),
                                phone_admin = dataReader["phone_admin"].ToString(),
                            };
                        }
                    }
                    return admin;
                }
                catch
                {
                    return admin;
                }
            }
        }

        public static bool DeleteAdminById(int id_admin)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deleteadminbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_admin", id_admin);
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