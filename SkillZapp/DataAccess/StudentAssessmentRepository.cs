﻿using Dapper;
using Microsoft.Extensions.Configuration;
using SkillZapp.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.DataAccess
{
    public class StudentAssessmentRepository
    {
        readonly string _connectionString;
        public StudentAssessmentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<StudentAssessment> GetAllStudentAssessments()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM StudentAssessments";
            var result = db.Query<StudentAssessment>(sql);
            return result;
        }

        internal StudentAssessment GetStudentAssessmentById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from StudentAssessments
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<StudentAssessment>(sql, parameters);
            return result;
        }

        internal IEnumerable<StudentAssessment> GetStudentAssessmentsByStudentId(Guid studentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from StudentAssessments
                        WHERE StudentId = @StudentId";

            var parameters = new
            {
                StudentId = studentId
            };

            var result = db.Query<StudentAssessment>(sql, parameters);
            return result;
        }

        internal IEnumerable<StudentAssessment> GetStudentAssessmentsByAssessmentId(Guid assessmentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from StudentAssessments
                        WHERE AssessmentId = @AssessmentId
                        ORDER by StudentName";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.Query<StudentAssessment>(sql, parameters);
            return result;
        }
        internal StudentAssessment GetStudentAssessmentScoresByAssessmentId(Guid assessmentId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select Score as ScoreType,count(*) from StudentAssessments
                                WHERE AssessmentId = @AssessmentId
                                group by Score";

            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.QueryFirstOrDefault<StudentAssessment>(sql, parameters);
            return result;
        }
        internal IEnumerable<StudentAssessment> GetStudentAssessmentsByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from StudentAssessments
                        WHERE UserId = @UserId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<StudentAssessment>(sql, parameters);
            return result;
        }

        internal void AddStudentAssessment(StudentAssessment studentAssessment)
        {
            using var db = new SqlConnection(_connectionString);
            //Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[StudentAssessments]
                             ([StudentId]
                           ,[ClassNameId]
                           ,[AssessmentId]
                           ,[StudentName]
                           ,[TeacherName]
                           ,[GradeLevelDescription]
                           ,[StandardName]
                           ,[Score]
                           ,[AssessmentDate]
                           ,[UserId])
                        OUTPUT inserted.Id
                        VALUES
                       (@StudentId
                           ,@ClassNameId
                           ,@AssessmentId
                           ,@StudentName
                           ,@TeacherName
                           ,@GradeLevelDescription
                           ,@StandardName
                           ,@Score
                           ,@AssessmentDate
                           ,@UserId)";
            db.Execute(sql, studentAssessment);
            //id = db.ExecuteScalar<Guid>(sql, studentAssessment);
            //if (!id.Equals(Guid.Empty))
            //{
            //    studentAssessment.Id = id;
            //}
            //return id;
        }

        internal bool DeleteStudentAssessment(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM StudentAssessments
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


        internal bool DeleteStudentAssessmentByAssessmentId(Guid assessmentId)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM StudentAssessments
                        OUTPUT Deleted.Id
                        WHERE AssessmentId = @AssessementId";
            var parameters = new
            {
                AssessmentId = assessmentId
            };

            var result = db.Query(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }

        internal void UpdateStudentAssessment(Guid id, StudentAssessment studentAssessment)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE StudentAssessments
                        SET Score = @Score
                        WHERE Id = @Id";

            db.Execute(sql, studentAssessment);
        }
    }
}
