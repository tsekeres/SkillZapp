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
    public class RubricRepository
    {
        readonly string _connectionString;

        public RubricRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Rubric> GetAllRubrics()
        {
            using var db = new SqlConnection(_connectionString);
            var Rubrics = db.Query<Rubric>(@"Select * FROM Rubrics");
            return Rubrics;
        }

        internal Rubric GetRubricsById(Guid rubricId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Rubrics where id = @id";
            var Rubric = db.QuerySingleOrDefault<Rubric>(sql, new { id = rubricId });
            return Rubric;
        }

        internal Rubric GetRubricByName(string rubricName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Rubrics where RubricName = @RubricName";
            var Rubric = db.QuerySingleOrDefault<Rubric>(sql, new { RubricName = rubricName });
            return Rubric;
        }

        internal IEnumerable<Rubric> GetRubricsByStandardId(Guid standardId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Rubrics
                        WHERE StandardId = @StandardId";

            var parameters = new
            {
                StandardId = standardId
            };

            var result = db.Query<Rubric>(sql, parameters);
            return result;
        }

        internal void DeleteRubric(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Rubrics Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal void AddRubric(Rubric newRubric)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Rubrics]
                        ([StandardId],
                         [RubricName],
                         [RubricLevelA],
                         [RubricLevelB],
                         [RubricLevelC],
                         [RubricLevelD])
                            OUTPUT inserted.Id
                            VALUES
                          (@StandardId,
                          @RubricName,
                          @RubricLevelA,
                          @RubricLevelB,
                          @RubricLevelC,
                          @RubricLevelD
                          )";

            id = db.ExecuteScalar<Guid>(sql, newRubric);
            newRubric.Id = id;
        }

        internal Rubric UpdateRubric(Guid id, Rubric rubric)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Rubrics 
                        SET RubricName = @RubricName,
                            StandardId = @StandardId,
                            RubricLevelA = @RubricLevelA,
                            RubricLevelB = @RubricLevelB,
                            RubricLevelC = @RubricLevelC,
                            RubricLevelD = @RubricLevelD
                            WHERE Id = @Id";
            rubric.Id = id;
            var rubricUpdated = db.QuerySingleOrDefault<Rubric>(sql, rubric);
            return rubricUpdated;
        }
    }
}
