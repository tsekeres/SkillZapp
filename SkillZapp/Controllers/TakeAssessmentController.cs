using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/takeAssessment")]
    [ApiController]
    public class TakeAssessmentController : ControllerBase
    {
        private TakeAssessmentRepository _repo;

        public TakeAssessmentController(TakeAssessmentRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("assessment/{assessmentId}")]
        public IActionResult GetTakeAssessmentByAssessmentId(Guid userId)
        {
            _repo.GetTakeAssessmentByAssessmentId(userId);

            return Ok(_repo.GetTakeAssessmentByAssessmentId(userId));
        }
    }
}
