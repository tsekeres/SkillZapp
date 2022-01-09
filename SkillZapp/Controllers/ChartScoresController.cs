using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/ChartScores")]
    [ApiController]
    public class ChartScoresController : ControllerBase
    {
        private ChartScoresRepository _repo;

        public ChartScoresController(ChartScoresRepository repo)
        {
            _repo = repo;
        }


        [HttpGet("scores/{assessmentId}")]
        public IActionResult GetStudentAssessmentScoresByAssessmentId(Guid assessmentId)
        {
            _repo.GetStudentAssessmentScoresByAssessmentId(assessmentId);

            return Ok(_repo.GetStudentAssessmentScoresByAssessmentId(assessmentId));
        }
    }
}
