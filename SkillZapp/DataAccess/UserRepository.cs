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
    public class UserRepository
    {
        readonly string _connectionString;

        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<User> GetAllUsers()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select * From Users");
            return users;
        }

        internal void AddUser(User newUser)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Users]
                        ([FirstName],
                         [LastName],
                         [ProfilePicUrl])
                            OUTPUT inserted.Id
                            VALUES
                         (@FirstName,
                          @LastName,
                          @ProfilePicUrl)";


            id = db.ExecuteScalar<Guid>(sql, newUser);
            newUser.Id = id;
        }

        internal User GetById(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Users where id = @id";
            var user = db.QuerySingleOrDefault<User>(sql, new { id = userId });
            if (user == null) return null;
            return user;
        }

        internal void Delete(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Users Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal User Update(Guid id, User user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Users
                        Set FirstName = @FirstName,
                            LastName = @LastName
                       output Inserted.*
                        Where id = @id";
            user.Id = id;
            var userUpdate = db.QuerySingleOrDefault<User>(sql, user);
            return userUpdate;
        }
    }
}
