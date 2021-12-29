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
    public class ClassNameWithGLRepository
    {
        readonly string _connectionString;
        public ClassNameWithGLRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<ClassNameWithGL> GetClassNamesWithGradeLevelByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT CN.Id, GradeLevelId, UserId, TeacherName, GradeLevelNumber, GradeLevelDescription FROM ClassNames CN
                            JOIN GradeLevels GL
                           ON CN.GradeLevelId = GL.ID
                            WHERE UserId =@UserId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<ClassNameWithGL>(sql, parameters);
            return result;
        }
    }
}
