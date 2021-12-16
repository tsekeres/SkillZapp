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
    public class StudentRepository
    {
        readonly string _connectionString;
        public StudentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<Student> GetAllStudents()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Students";
            var result = db.Query<Student>(sql);
            return result;
        }

        internal Student GetStudentById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Students
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Student>(sql, parameters);
            return result;
        }

        internal IEnumerable<Student> GetStudentsByGradeLevelId(Guid gradeLevelId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Students
                        WHERE GradeLevelId = @GradeLevelId";

            var parameters = new
            {
                GradeLevelId = gradeLevelId
            };

            var result = db.Query<Student>(sql, parameters);
            return result;
        }
        internal IEnumerable<Student> GetStudentsByClassNameId(Guid classNameId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Students
                        WHERE ClassNameId = @ClassNameId";

            var parameters = new
            {
                ClassNameId = classNameId
            };

            var result = db.Query<Student>(sql, parameters);
            return result;
        }
        internal IEnumerable<Student> GetStudentsByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Students
                        WHERE UserId = @UserId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<Student>(sql, parameters);
            return result;
        }

        internal Guid AddStudent(Student student)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Students]
                        ([GradeLevelId], 
                         [ClassNameId],
                         [StudentName],
                         [UserId])
                        OUTPUT inserted.Id
                        VALUES
                       (@GradeLevelId,
                        @ClassNameId,
		                @StudentName,
                        @UserId)";

            id = db.ExecuteScalar<Guid>(sql, student);
            if (!id.Equals(Guid.Empty))
            {
                student.Id = id;
            }
            return id;
        }

        internal bool DeleteStudent(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Students
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

        internal Student UpdateStudent(Guid id, Student student)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Students
                        SET StudentName = @StudentName,
                            UserId = @UserId,
                            GradeLevelId = @GradeLevelId,
                            ClassNameId = @ClassNameId
                        OUTPUT Inserted.*
                        WHERE Id = @Id";

            student.Id = id;
            var updatedStudent = db.QuerySingleOrDefault<Student>(sql, student);

            return updatedStudent;
        }
    }
}
