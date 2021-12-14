using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.DataAccess
{
    public class ComponentRepository
    {
        readonly string _connectionString;

        public ComponentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Component> GetAllComponents()
        {
            using var db = new SqlConnection(_connectionString);
            var Components = db.Query<Component>(@"Select * FROM Components");
            return Components;
        }

        internal Component GetComponentsById(Guid componentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Components where id = @id";
            var Component = db.QuerySingleOrDefault<Component>(sql, new { id = componentId });
            return Component;
        }

        internal Component GetComponentByName(string componentName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Components where ComponentName = @ComponentName";
            var Component = db.QuerySingleOrDefault<Component>(sql, new { ComponentName = componentName });
            return Component;
        }
        internal Component GetComponentByStateName(string stateName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Components where StateName = @StateName";
            var Component = db.QuerySingleOrDefault<Component>(sql, new { StateName = stateName });
            return Component;
        }

        internal void DeleteComponent(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Components Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal Guid AddComponent(Component component)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT into Components
                        ( ComponentName,
                          StateName )
                        OUTPUT Inserted.Id
                        VALUES
                         (@ComponentName,
                          @StateName)";

            var result = db.ExecuteScalar<Guid>(sql, component);
            if (!result.Equals(Guid.Empty))
            {
                component.Id = result;
            }
            return result;
        }

        internal Component UpdateStandard(Guid id, Component component)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Components 
                        SET ComponentName = @ComponentName,
                            StateName = @StateName     
                            WHERE Id = @Id";
            component.Id = id;
            var componentUpdated = db.QuerySingleOrDefault<Component>(sql, component);
            return componentUpdated;
        }
    }
}
