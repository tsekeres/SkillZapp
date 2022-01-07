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
    public class TakeAssessmentRepository
    {
        readonly string _connectionString;
        public TakeAssessmentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<TakeAssessment> GetTakeAssessmentByAssessmentId(Guid assessmentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT A.Id as AssessmentId, A.UserId, A.StandardId, A.AssessmentDate,
                        RubricName, CN.TeacherName, GL.GradeLevelDescription, GL.GradeLevelNumber, S.StandardName, 
                        R.RubricLevelA, R.RubricLevelB, R.RubricLevelC,
                        R.RubricLevelD, STA.Id as Id, STA.Score FROM Assessments A
		                    JOIN ClassNames CN
		                    ON A.ClassNameId = CN.ID
		                    JOIN GradeLevels GL
		                    ON CN.GradeLevelId = GL.ID
		                    JOIN Standards S
		                    ON A.StandardId = S.ID
							JOIN Students ST
							ON CN.Id = ST.ClassNameId
							Join Rubrics R
							ON A.RubricId = R.Id
							Join StudentAssessments STA
							ON ST.Id = STA.StudentId
                            WHERE A.Id = @AssessmentId";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.Query<TakeAssessment>(sql, parameters);
            return result;
        }
    }
}
