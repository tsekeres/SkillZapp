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
    public class StandardRepository
    {
        readonly string _connectionString;

        public StandardRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Standard> GetAllStandards()
        {
            using var db = new SqlConnection(_connectionString);
            var Standards = db.Query<Standard>(@"Select * FROM Standards");
            return Standards;
        }

        internal Standard GetStandardsById(Guid standardId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Standards where id = @id";
            var Standard = db.QuerySingleOrDefault<Standard>(sql, new { id = standardId });
            return Standard;
        }

        internal Standard GetStandardByName(string standardName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Standards where StandardName = @StandardName";
            var Standard = db.QuerySingleOrDefault<Standard>(sql, new { StandardName = standardName });
            return Standard;
        }

        internal IEnumerable<Standard> GetStandardsBySubcomponentId(Guid subcomponentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Standards
                        WHERE SubcomponentId = @SubcomponentId";

            var parameters = new
            {
                SubcomponentId = subcomponentId
            };

            var result = db.Query<Standard>(sql, parameters);
            return result;
        }

        internal void DeleteStandard(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Standards Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal void AddStandard(Standard newStandard)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Standards]
                        ([SubcomponentId],
                         [StandardName])
                            OUTPUT inserted.Id
                            VALUES
                          (@SubcomponentId,
                          @StandardName
                          )";


            id = db.ExecuteScalar<Guid>(sql, newStandard);
            newStandard.Id = id;
        }

        internal Standard UpdateStandard(Guid id, Standard standard)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Standards 
                        SET StandardName = @StandardName,
                            SubcomponentId = @SubcomponentId     
                            WHERE Id = @Id";
            standard.Id = id;
            var standardUpdated = db.QuerySingleOrDefault<Standard>(sql, standard);
            return standardUpdated;
        }
    }
}
