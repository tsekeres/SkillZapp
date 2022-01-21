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
    public class AssessmentsWithDetailsRepository
    {
        readonly string _connectionString;
        public AssessmentsWithDetailsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<AssessmentsWithDetails> GetAssessmentsWithDetailsByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT A.AssessmentId, A.UserId, A.StandardId, A.AssessmentDate,
                        ClassNameId, RubricId, CN.TeacherName, GL.GradeLevelDescription,
                        S.StandardName FROM Assessments A
		                    JOIN ClassNames CN
		                    ON A.ClassNameId = CN.ID
		                    JOIN GradeLevels GL
		                    ON CN.GradeLevelId = GL.ID
		                    JOIN Standards S
		                    ON A.StandardId = S.ID
                            WHERE A.UserId = @UserId
                            ORDER by AssessmentDate";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<AssessmentsWithDetails>(sql, parameters);
            return result;
        }

        internal AssessmentsWithDetails GetAssessmentsWithDetailsByAssessmentId(Guid assessmentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT A.AssessmentId, A.UserId, A.StandardId, A.AssessmentDate,
                        ClassNameId, RubricId, CN.TeacherName, GL.GradeLevelDescription,
                        S.StandardName FROM Assessments A
		                    JOIN ClassNames CN
		                    ON A.ClassNameId = CN.ID
		                    JOIN GradeLevels GL
		                    ON CN.GradeLevelId = GL.ID
		                    JOIN Standards S
		                    ON A.StandardId = S.ID
                            WHERE A.AssessmentId = @AssessmentId";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.QueryFirstOrDefault<AssessmentsWithDetails>(sql, parameters);
            return result;
        }
    }
}
