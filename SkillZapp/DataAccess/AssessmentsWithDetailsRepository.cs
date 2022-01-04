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
    public class AssessmentsWithDetailsRepository
    {
        readonly string _connectionString;
        public AssessmentsWithDetailsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

        internal IEnumerable<AssessmentsWithDetails> GetAssessmentsWithDetailsByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT A.Id, A.UserId, A.StandardId, ClassNameId, RubricId, CN.TeacherName, GL.GradeLevelDescription, S.StandardName FROM Assessments A
		                    JOIN ClassNames CN
		                    ON A.ClassNameId = CN.ID
		                    JOIN GradeLevels GL
		                    ON CN.GradeLevelId = GL.ID
		                    JOIN Standards S
		                    ON A.StandardId = S.ID
                            WHERE A.UserId = @UserId";

            var parameters = new
            {
                UserId = userId
            };

            var result = db.Query<AssessmentsWithDetails>(sql, parameters);
            return result;
        }
    }
}
