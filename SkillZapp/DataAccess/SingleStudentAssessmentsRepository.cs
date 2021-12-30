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
    public class SingleStudentAssessmentsRepository
    {
        readonly string _connectionString;
        public SingleStudentAssessmentsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<SingleStudentAssessments> GetSingleStudentAssessmentsByStudentId(Guid studentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT CN.Id as ClassNameId, STU.Id as StudentId, STU.UserId, TeacherName, StudentName,
		                GradeLevelNumber, GradeLevelDescription, AssessmentId, Score, StandardName FROM StudentAssessments SA
		                        JOIN Students STU
		                        ON SA.StudentId = STU.ID
		                        JOIN ClassNames CN
		                        ON STU.ClassNameId = CN.ID
		                        JOIN GradeLevels GL
		                        ON CN.GradeLevelId = GL.ID
		                        JOIN Assessments A
		                        ON SA.AssessmentId = A.ID
		                        JOIN Standards STA
		                        ON A.StandardId = STA.ID
                                WHERE StudentId = @StudentId";

            var parameters = new
            {
                StudentId = studentId
            };

            var result = db.Query<SingleStudentAssessments>(sql, parameters);
            return result;
        }
    }
}
