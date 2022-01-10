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
    public class ClassNameRepository
    {
        readonly string _connectionString;
        public ClassNameRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<ClassName> GetAllClassNames()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM ClassNames";
            var result = db.Query<ClassName>(sql);
            return result;
        }

        internal ClassName GetClassNameByClassNameId(Guid classNameId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from ClassNames
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = classNameId
            };

            var result = db.QuerySingleOrDefault<ClassName>(sql, parameters);
            return result;
        }

        internal IEnumerable<ClassName> GetClassNamesByGradeLevelId(Guid gradeLevelId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from ClassNames
                        WHERE GradeLevelId = @GradeLevelId";

            var parameters = new
            {
                GradeLevelId = gradeLevelId
            };

            var result = db.Query<ClassName>(sql, parameters);
            return result;
        }
        
        internal IEnumerable<ClassName> GetClassNamesByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from ClassNames
                        WHERE UserId = @UserId
                        ORDER by TeacherName";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<ClassName>(sql, parameters);
            return result;
        }

        internal IEnumerable<ClassName> GetClassNamesByTeacherName(string teacherName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from ClassNames
                        WHERE TeacherName = @TeacherName";

            var parameters = new
            {
                TeacherName = teacherName
            };

            var result = db.Query<ClassName>(sql, parameters);
            return result;
        }
        internal Guid CreateClassName(ClassName className)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[ClassNames]
                        ([GradeLevelId], 
                         [TeacherName],
                         [UserId])
                        OUTPUT inserted.Id
                        VALUES
                       (@GradeLevelId,
		                @TeacherName,
                        @UserId)";

            id = db.ExecuteScalar<Guid>(sql, className);
            if (!id.Equals(Guid.Empty))
            {
                className.Id = id;
            }
            return id;
        }

        internal bool DeleteClassName(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM ClassNames
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

        internal ClassName UpdateClassName(Guid id, ClassName className)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE ClassNames
                        SET TeacherName = @TeacherName,
                            UserId = @UserId,
                            GradeLevelId = @GradeLevelId
                        OUTPUT Inserted.*
                        WHERE Id = @Id";

            className.Id = id;
            var updatedClassName = db.QuerySingleOrDefault<ClassName>(sql, className);

            return updatedClassName;
        }
    }
}
