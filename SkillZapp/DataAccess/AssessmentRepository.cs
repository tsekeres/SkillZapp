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
    public class AssessmentRepository
    {
        readonly string _connectionString;
        public AssessmentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Assessment> GetAllAssessments()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Assessments";
            var result = db.Query<Assessment>(sql);
            return result;
        }

        internal Assessment GetAssessmentById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Assessments
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Assessment>(sql, parameters);
            return result;
        }

        internal IEnumerable<Assessment> GetAssessmentsByStandardNameId(Guid standardNameId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Assessments
                        WHERE StandardNameId = @StandardNameId";

            var parameters = new
            {
                StandardNameId = standardNameId
            };

            var result = db.Query<Assessment>(sql, parameters);
            return result;
        }
        internal IEnumerable<Assessment> GetAssessmentsByClassNameId(Guid classNameId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Assessments
                        WHERE ClassNameId = @ClassNameId";

            var parameters = new
            {
                ClassNameId = classNameId
            };

            var result = db.Query<Assessment>(sql, parameters);
            return result;
        }
        internal IEnumerable<Assessment> GetAssessmentsByRubricId(Guid rubricId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Assessments
                        WHERE RubricId = @RubricId";

            var parameters = new
            {
                RubricId = rubricId
            };

            var result = db.Query<Assessment>(sql, parameters);
            return result;
        }
        internal IEnumerable<Assessment> GetAssessmentsByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Assessments
                            WHERE UserId = @UserId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<Assessment>(sql, parameters);
            return result;
        }

        internal Guid CreateAssessment(Assessment assessment)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Assessments]
                        ([StandardId], 
                         [ClassNameId],
                         [RubricId],
                         [UserId]),
                        OUTPUT inserted.Id
                        VALUES
                       (@StandardId,
                        @ClassNameId,
                        @RubricId,
                        @UserId)";

            id = db.ExecuteScalar<Guid>(sql, assessment);
            if (!id.Equals(Guid.Empty))
            {
                assessment.Id = id;
            }
            return id;
        }

        internal bool DeleteAssessment(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Assessments
                        OUTPUT Deleted.Id
                        WHERE Id = @Id";
            var parameters = new
            {
                Id = id
            };

            var result = db.Query(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }

        internal Assessment UpdateAssessment(Guid id, Assessment assessment)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Assessments
                        SET RubricId = @RubricId,
                            UserId = @UserId,
                            StandardId = @StandardNameId,
                            ClassNameId = @ClassNameId
                        OUTPUT Inserted.*
                        WHERE Id = @Id";

            assessment.Id = id;
            var updatedAssessment = db.QuerySingleOrDefault<Assessment>(sql, assessment);

            return updatedAssessment;
        }
    }
}
