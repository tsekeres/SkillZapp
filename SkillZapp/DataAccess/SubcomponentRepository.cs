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
    public class SubcomponentRepository
    {
        readonly string _connectionString;

        public SubcomponentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Subcomponent> GetAllSubcomponents()
        {
            using var db = new SqlConnection(_connectionString);
            var Subcomponents = db.Query<Subcomponent>(@"Select * FROM Subcomponents");
            return Subcomponents;
        }

        internal Subcomponent GetSubcomponentsById(Guid subcomponentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Subcomponents where id = @id";
            var Subcomponent = db.QuerySingleOrDefault<Subcomponent>(sql, new { id = subcomponentId });
            return Subcomponent;
        }

        internal Subcomponent GetByName(string subcomponentName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Subcomponents where SubcomponentName = @SubcomponentName";
            var Subcomponent = db.QuerySingleOrDefault<Subcomponent>(sql, new { SubcomponentName = subcomponentName });
            return Subcomponent;
        }

        internal IEnumerable<Subcomponent> GetSubcomponentsByComponentId(Guid componentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Subcomponents
                        WHERE ComponentId = @ComponentId";

            var parameters = new
            {
                ComponentId = componentId
            };

            var result = db.Query<Subcomponent>(sql, parameters);
            return result;
        }

        internal void Delete(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Subcomponents Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal void Add(Subcomponent newSubcomponent)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Subcomponents]
                        ([ComponentId],
                         [SubcomponentName])
                            OUTPUT inserted.Id
                            VALUES
                          (@ComponentId,
                          @SubcomponentName
                          )";


            id = db.ExecuteScalar<Guid>(sql, newSubcomponent);
            newSubcomponent.Id = id;
        }

        internal Subcomponent Update(Guid id, Subcomponent subcomponent)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Subcomponents 
                        SET SubcomponentName = @SubcomponentName,
                            componentId = @componentId     
                            WHERE Id = @Id";
            subcomponent.Id = id;
            var subcomponentUpdated = db.QuerySingleOrDefault<Subcomponent>(sql, subcomponent);
            return subcomponentUpdated;
        }
    }
}
