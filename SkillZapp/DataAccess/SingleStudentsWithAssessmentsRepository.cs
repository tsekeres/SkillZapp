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
    public class SingleStudentsWithAssessmentsRepository
    {
        readonly string _connectionString;
        public SingleStudentsWithAssessmentsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<SingleStudentsWithAssessments> GetSingleStudentsWithAssessmentsByStudentId(Guid studentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT TeacherName, StudentName, GradeLevelDescription, AssessmentDate, 
						Score, StandardName FROM StudentAssessments
                        WHERE StudentId = @StudentId";

            var parameters = new
            {
                StudentId = studentId
            };

            var result = db.Query<SingleStudentsWithAssessments>(sql, parameters);
            return result;
        }
    }
}
