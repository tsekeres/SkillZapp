using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/SingleStudentAssessments")]
    [ApiController]
    public class SingleStudentAssessmentsController : ControllerBase
    {
        private SingleStudentAssessmentsRepository _repo;

        public SingleStudentAssessmentsController(SingleStudentAssessmentsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("studentId/{studentId}")]
        public IActionResult GetSingleStudentAssessmentsByStudentId(Guid studentId)
        {
            return Ok(_repo.GetSingleStudentAssessmentsByStudentId(studentId));
        }
    }
}
