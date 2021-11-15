using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;


namespace NutriTECSQLAPI.Data
{
    public class PlanData
    {
        public static bool RegisterNewPlan(Plan plan)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewplan", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@name_plan", plan.name_plan);
                cmd.Parameters.AddWithValue("@breakfast", plan.breakfast);
                cmd.Parameters.AddWithValue("@morning_snack", plan.morning_snack);
                cmd.Parameters.AddWithValue("@lunch", plan.lunch);
                cmd.Parameters.AddWithValue("@afternoon_snack", plan.afternoon_snack);
                cmd.Parameters.AddWithValue("@dinner", plan.dinner);
                cmd.Parameters.AddWithValue("@id_patient_nutritionist", plan.id_patient_nutritionist);
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

        public static bool ModifyPlan(Plan plan)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifyfoodplan", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_plan", plan.id_plan);
                cmd.Parameters.AddWithValue("@name_plan", plan.name_plan);
                cmd.Parameters.AddWithValue("@breakfast", plan.breakfast);
                cmd.Parameters.AddWithValue("@morning_snack", plan.morning_snack);
                cmd.Parameters.AddWithValue("@lunch", plan.lunch);
                cmd.Parameters.AddWithValue("@afternoon_snack", plan.afternoon_snack);
                cmd.Parameters.AddWithValue("@dinner", plan.dinner);
                cmd.Parameters.AddWithValue("@id_patient_nutritionist", plan.id_patient_nutritionist);
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

        public static List<Plan> GetAllPlans()
        {
            List<Plan> planList = new List<Plan>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallfoodplans", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();

                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            planList.Add(new Plan()
                            {
                                id_plan = Convert.ToInt32(dataReader["id_plan"]),
                                name_plan = dataReader["name_plan"].ToString(),
                                breakfast = dataReader["breakfast"].ToString(),
                                morning_snack = dataReader["morning_snack"].ToString(),
                                lunch = dataReader["lunch"].ToString(),
                                afternoon_snack = dataReader["afternoon_snack"].ToString(),
                                dinner = dataReader["dinner"].ToString(),
                                id_patient_nutritionist = Convert.ToInt32(dataReader["id_patient_nutritionist"])
                            });
                        }
                    }
                    return planList;
                }
                catch
                {
                    return planList;
                }
            }
        }

        public static Plan GetPlanById(int id_plan)
        {
            Plan plan = new Plan();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getplanbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_plan", id_plan);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            plan = new Plan()
                            {
                                id_plan = Convert.ToInt32(dataReader["id_plan"]),
                                name_plan = dataReader["name_plan"].ToString(),
                                breakfast = dataReader["breakfast"].ToString(),
                                morning_snack = dataReader["morning_snack"].ToString(),
                                lunch = dataReader["lunch"].ToString(),
                                afternoon_snack = dataReader["afternoon_snack"].ToString(),
                                dinner = dataReader["dinner"].ToString(),
                                id_patient_nutritionist = Convert.ToInt32(dataReader["id_patient_nutritionist"])
                            };
                        }
                    }
                    return plan;
                }
                catch
                {
                    return plan;
                }
            }
        }

        public static bool DeletePlanById(int id_plan)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deleteplanbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_plan", id_plan);
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