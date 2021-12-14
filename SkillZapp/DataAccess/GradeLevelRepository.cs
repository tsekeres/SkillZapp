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
    public class GradeLevelRepository
    {
        readonly string _connectionString;

        public GradeLevelRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<GradeLevel> GetAllGradeLevels()
        {
            using var db = new SqlConnection(_connectionString);
            var GradeLevels = db.Query<GradeLevel>(@"Select * FROM GradeLevels");
            return GradeLevels;
        }

        internal GradeLevel GetGradeLevelsById(Guid gradeLevelId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From GradeLevels where id = @id";
            var GradeLevel = db.QuerySingleOrDefault<GradeLevel>(sql, new { id = gradeLevelId });
            return GradeLevel;
        }

        internal GradeLevel GetGradeLevelByNumber(string gradeLevelNumber)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From GradeLevels where GradeLevelNumber = @GradeLevelNumber";
            var GradeLevel = db.QuerySingleOrDefault<GradeLevel>(sql, new { GradeLevelNumber = gradeLevelNumber });
            return GradeLevel;
        }

        internal IEnumerable<GradeLevel> GetGradeLevelsByStandardId(Guid standardId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from GradeLevels
                        WHERE StandardId = @StandardId";

            var parameters = new
            {
                StandardId = standardId
            };

            var result = db.Query<GradeLevel>(sql, parameters);
            return result;
        }

        internal void DeleteGradeLevel(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From GradeLevels Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal void AddGradeLevel(GradeLevel newGradeLevel)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[GradeLevels]
                        ([StandardId],
                         [GradeLevelNumber],
                         [GradeLevelDescription])
                            OUTPUT inserted.Id
                            VALUES
                          (@StandardId,
                          @GradeLevelNumber,
                          @GradeLevelDescription
                          )";

            id = db.ExecuteScalar<Guid>(sql, newGradeLevel);
            newGradeLevel.Id = id;
        }

        internal GradeLevel UpdateGradeLevel(Guid id, GradeLevel gradeLevel)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update GradeLevels 
                        SET GradLevelNumber = @GradeLevelNumber,
                            StandardId = @StandardId     
                            WHERE Id = @Id";
            gradeLevel.Id = id;
            var gradeLevelUpdated = db.QuerySingleOrDefault<GradeLevel>(sql, gradeLevel);
            return gradeLevelUpdated;
        }
    }
}
