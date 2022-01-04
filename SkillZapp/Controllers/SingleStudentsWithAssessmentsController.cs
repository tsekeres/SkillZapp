using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/SingleStudentWithAssessments")]
    [ApiController]
    public class SingleStudentsWithAssessmentsController : ControllerBase
    {
        private SingleStudentsWithAssessmentsRepository _repo;

        public SingleStudentsWithAssessmentsController(SingleStudentsWithAssessmentsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("studentId/{studentId}")]
        public IActionResult GetSingleStudentsWithAssessmentsByStudentId(Guid studentId)
        {
            return Ok(_repo.GetSingleStudentsWithAssessmentsByStudentId(studentId));
        }
    }
}
