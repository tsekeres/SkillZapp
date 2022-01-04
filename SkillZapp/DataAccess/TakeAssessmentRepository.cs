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

        internal IEnumerable<TakeAssessment> GetTakeAssessmentByAssessmentId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT A.Id, A.UserId, A.StandardId, A.AssessmentDate, A.ClassNameId,
                        RubricName, CN.TeacherName, GL.GradeLevelDescription, GL.GradeLevelNumber, S.StandardName, 
                        S.StandardDescription, ST.Id as StudentId, ST.StudentName, R.RubricLevelA, R.RubricLevelB,
                        R.RubricLevelB, R.RubricLevelC, R.RubricLevelD FROM Assessments A
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
                            WHERE A.Id = @AssessmentId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<TakeAssessment>(sql, parameters);
            return result;
        }
    }
}
