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
            var sql = @"SELECT CN.Id as ClassNameId, S.Id as StudentId, S.UserId, CN.TeacherName, S.StudentName, 
            GL.Id as GradeLevelId, GradeLevelNumber, GL.GradeLevelDescription, 
            A.AssessmentId, ST.StandardName, A.AssessmentDate, R.RubricName, R.RubricLevelA, 
            R.RubricLevelB, R.RubricLevelC, R.RubricLevelD FROM Assessments A
                            JOIN ClassNames CN
							ON A.ClassNameId = CN.ID
							JOIN GradeLevels GL
							ON CN.GradeLevelId = GL.ID
							JOIN Students S
							ON CN.Id = S.ClassNameId
							JOIN Rubrics R
							ON A.RubricId = R.Id
							JOIN Standards ST
							ON A.StandardId = ST.Id
                            WHERE A.AssessmentId = @AssessmentId";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.Query<TakeAssessment>(sql, parameters);
            return result;
        }
    }
}
