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
    public class ClassNameWithStudentsRepository
    {
        readonly string _connectionString;
        public ClassNameWithStudentsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<ClassNameWithStudents> GetClassNameWithStudentsByTeacherName(Guid classNameId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT CN.Id as ClassNameId, S.Id as StudentId, S.UserId, TeacherName, StudentName, GL.Id as GradeLevelId, GradeLevelNumber, GradeLevelDescription FROM Students S
                            JOIN ClassNames CN
							ON S.ClassNameId = CN.ID
							JOIN GradeLevels GL
							ON CN.GradeLevelId = GL.ID
                            WHERE ClassNameId = @ClassNameId";

            var parameters = new
            {
                ClassNameId = classNameId
            };

            var result = db.Query<ClassNameWithStudents>(sql, parameters);
            return result;
        }
    }
}
