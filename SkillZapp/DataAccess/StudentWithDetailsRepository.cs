using Dapper;
using Microsoft.Extensions.Configuration;
using SkillZapp.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.DataAccess
{
    public class StudentWithDetailsRepository
    {
        readonly string _connectionString;
        public StudentWithDetailsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<StudentWithDetails> GetAllStudentsWithDataByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT U.Id as UserId, STU.Id as StudentId, TeacherName, StudentName,
		                        GradeLevelNumber, GradeLevelDescription, STU.ClassNameId as ClassNameId FROM Users U
		                        JOIN Students STU
		                        ON U.Id = STU.UserId
		                        JOIN ClassNames CN
		                        ON STU.ClassNameId = CN.ID
		                        JOIN GradeLevels GL
		                        ON CN.GradeLevelId = GL.ID
                                WHERE U.Id = @UserId
                                ORDER by GradeLevelNumber";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<StudentWithDetails>(sql, parameters);
            return result;
        }
    }
}
