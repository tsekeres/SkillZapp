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
    public class ChartScoresRepository
    {
        readonly string _connectionString;
        public ChartScoresRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal ChartScores GetStudentAssessmentScoresByAssessmentId(Guid assessmentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT sum(case Score when 'Excellent' Then 1 Else 0 end) as Excellent,
		                    sum(case Score when 'Satisfactory' Then 1 Else 0 end) as Satisfactory,
		                    sum(case Score when 'Needs Improvement' Then 1 Else 0 end) as NeedsImprovement,
		                    sum(case Score when 'Not Tested' Then 1 Else 0 end) as NotTested
                            from StudentAssessments
                            WHERE AssessmentId = @AssessmentId";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.QueryFirstOrDefault<ChartScores>(sql, parameters);
            return result;
        }
    }
}
