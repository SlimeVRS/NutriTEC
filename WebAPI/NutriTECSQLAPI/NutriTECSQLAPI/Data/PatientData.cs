using NutriTECSQLAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NutriTECSQLAPI.Data
{
    public class PatientData
    {
        public static bool RegisterNewPatient(Patient patient)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registernewpatient", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_patient", patient.id_patient);
                cmd.Parameters.AddWithValue("@first_name_patient", patient.first_name_patient);
                cmd.Parameters.AddWithValue("@second_name_patient", patient.second_name_patient);
                cmd.Parameters.AddWithValue("@first_last_name_patient", patient.first_last_name_patient);
                cmd.Parameters.AddWithValue("@second_last_name_patient", patient.second_last_name_patient);
                cmd.Parameters.AddWithValue("@birth_date_patient", patient.birth_date_patient);
                cmd.Parameters.AddWithValue("@initial_weight_patient", patient.initial_weight_patient);
                cmd.Parameters.AddWithValue("@actual_weight_patient", patient.actual_weight_patient);
                cmd.Parameters.AddWithValue("@imc_patient", patient.imc_patient);
                cmd.Parameters.AddWithValue("@calories_patient", patient.calories_patient);
                cmd.Parameters.AddWithValue("@country_patient", patient.country_patient);
                cmd.Parameters.AddWithValue("@waist_patient", patient.waist_patient);
                cmd.Parameters.AddWithValue("@neck_patient", patient.neck_patient);
                cmd.Parameters.AddWithValue("@hip_patient", patient.hip_patient);
                cmd.Parameters.AddWithValue("@thigh_patient", patient.thigh_patient);
                cmd.Parameters.AddWithValue("@fat_patient", patient.fat_patient);
                cmd.Parameters.AddWithValue("@id_nutritionist_patient", patient.id_nutritionist_patient);
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

        public static bool ModifyPatient(Patient patient)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_modifypatient", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_patient", patient.id_patient);
                cmd.Parameters.AddWithValue("@first_name_patient", patient.first_name_patient);
                cmd.Parameters.AddWithValue("@second_name_patient", patient.second_name_patient);
                cmd.Parameters.AddWithValue("@first_last_name_patient", patient.first_last_name_patient);
                cmd.Parameters.AddWithValue("@second_last_name_patient", patient.second_last_name_patient);
                cmd.Parameters.AddWithValue("@birth_date_patient", patient.birth_date_patient);
                cmd.Parameters.AddWithValue("@initial_weight_patient", patient.initial_weight_patient);
                cmd.Parameters.AddWithValue("@actual_weight_patient", patient.actual_weight_patient);
                cmd.Parameters.AddWithValue("@imc_patient", patient.imc_patient);
                cmd.Parameters.AddWithValue("@calories_patient", patient.calories_patient);
                cmd.Parameters.AddWithValue("@country_patient", patient.country_patient);
                cmd.Parameters.AddWithValue("@waist_patient", patient.waist_patient);
                cmd.Parameters.AddWithValue("@neck_patient", patient.neck_patient);
                cmd.Parameters.AddWithValue("@hip_patient", patient.hip_patient);
                cmd.Parameters.AddWithValue("@thigh_patient", patient.thigh_patient);
                cmd.Parameters.AddWithValue("@fat_patient", patient.fat_patient);
                cmd.Parameters.AddWithValue("@id_nutritionist_patient", patient.id_nutritionist_patient);
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

        public static bool ModifyPatientMeasures(PatientMeasures patient)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_registerpatientmeasures", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@date_patient", patient.date_patient);
                cmd.Parameters.AddWithValue("@waist_patient", patient.waist_patient);
                cmd.Parameters.AddWithValue("@neck_patient", patient.neck_patient);
                cmd.Parameters.AddWithValue("@hip_patient", patient.hip_patient);
                cmd.Parameters.AddWithValue("@fat_patient", patient.fat_patient);
                cmd.Parameters.AddWithValue("@muscle_patient", patient.muscle_patient);
                cmd.Parameters.AddWithValue("@weight_patient", patient.weight_patient);
                cmd.Parameters.AddWithValue("@id_patient_owner", patient.id_patient_owner);
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

        public static List<PatientMeasures> GetAllPatientMeasures(int id_patient)
        {
            List<PatientMeasures> patientMeasures = new List<PatientMeasures>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getpatientmeasures", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_patient_owner", id_patient);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            patientMeasures.Add(new PatientMeasures()
                            { 
                                id_patientM = Convert.ToInt32(dataReader["id_patientM"]),
                                date_patient = Convert.ToDateTime(dataReader["date_patient"]),
                                waist_patient = Convert.ToSingle(dataReader["waist_patient"]),
                                neck_patient = Convert.ToSingle(dataReader["neck_patient"]),
                                hip_patient = Convert.ToSingle(dataReader["hip_patient"]),
                                fat_patient = Convert.ToSingle(dataReader["fat_patient"]),
                                muscle_patient = Convert.ToSingle(dataReader["muscle_patient"]),
                                weight_patient = Convert.ToSingle(dataReader["weight_patient"]),
                                id_patient_owner = Convert.ToInt32(dataReader["id_patient_owner"])
                            });
                        }
                    }
                    return patientMeasures;
                }
                catch
                {
                    return patientMeasures;
                }
            }
        }

        public static List<Patient> GetAllPatients()
        {
            List<Patient> patientList = new List<Patient>();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getallpatients", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    { 
                        while(dataReader.Read())
                        {
                            patientList.Add(new Patient()
                            {
                                id_patient = Convert.ToInt32(dataReader["id_patient"]),
                                first_name_patient = dataReader["first_name_patient"].ToString(),
                                second_name_patient = dataReader["second_name_patient"].ToString(),
                                first_last_name_patient = dataReader["first_last_name_patient"].ToString(),
                                second_last_name_patient = dataReader["second_last_name_patient"].ToString(),
                                birth_date_patient = Convert.ToDateTime(dataReader["birth_date_patient"].ToString()),
                                initial_weight_patient = Convert.ToSingle(dataReader["initial_weight_patient"].ToString()),
                                actual_weight_patient = Convert.ToSingle(dataReader["actual_weight_patient"].ToString()),
                                imc_patient = Convert.ToSingle(dataReader["imc_patient"].ToString()),
                                calories_patient = Convert.ToSingle(dataReader["calories_patient"].ToString()),
                                country_patient = dataReader["country_patient"].ToString(),
                                waist_patient = Convert.ToSingle(dataReader["waist_patient"].ToString()),
                                neck_patient = Convert.ToSingle(dataReader["neck_patient"].ToString()),
                                hip_patient = Convert.ToSingle(dataReader["hip_patient"].ToString()),
                                thigh_patient = Convert.ToSingle(dataReader["thigh_patient"].ToString()),
                                fat_patient = Convert.ToSingle(dataReader["fat_patient"].ToString()),
                                id_nutritionist_patient = Convert.ToInt32(dataReader["id_nutritionist_patient"])
                            });
                        }
                    }
                    return patientList;
                }
                catch
                {
                    return patientList;
                }
            }
        }

        public static Patient GetPatientById(int id_patient)
        {
            Patient patient = new Patient();
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_getpatientbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id_patient", id_patient);
                try
                {
                    connection.Open();
                    using (SqlDataReader dataReader = cmd.ExecuteReader())
                    {
                        while(dataReader.Read())
                        {
                            patient = new Patient()
                            {
                                id_patient = Convert.ToInt32(dataReader["id_patient"]),
                                first_name_patient = dataReader["first_name_patient"].ToString(),
                                second_name_patient = dataReader["second_name_patient"].ToString(),
                                first_last_name_patient = dataReader["first_last_name_patient"].ToString(),
                                second_last_name_patient = dataReader["second_last_name_patient"].ToString(),
                                birth_date_patient = Convert.ToDateTime(dataReader["birth_date_patient"].ToString()),
                                initial_weight_patient = Convert.ToSingle(dataReader["initial_weight_patient"].ToString()),
                                actual_weight_patient = Convert.ToSingle(dataReader["actual_weight_patient"].ToString()),
                                imc_patient = Convert.ToSingle(dataReader["imc_patient"].ToString()),
                                calories_patient = Convert.ToSingle(dataReader["calories_patient"].ToString()),
                                country_patient = dataReader["country_patient"].ToString(),
                                waist_patient = Convert.ToSingle(dataReader["waist_patient"].ToString()),
                                neck_patient = Convert.ToSingle(dataReader["neck_patient"].ToString()),
                                hip_patient = Convert.ToSingle(dataReader["hip_patient"].ToString()),
                                thigh_patient = Convert.ToSingle(dataReader["thigh_patient"].ToString()),
                                fat_patient = Convert.ToSingle(dataReader["fat_patient"].ToString()),
                                id_nutritionist_patient = Convert.ToInt32(dataReader["id_nutritionist_patient"])
                            };
                        }
                    }
                    return patient;
                }
                catch
                {
                    return patient;
                }
            }
        }

        public static bool DeletePatientById(int id_patient)
        {
            using (SqlConnection connection = new SqlConnection(Connection.connectionStringSQL))
            {
                SqlCommand cmd = new SqlCommand("usp_deletepatientbyid", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id_patient", id_patient);
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