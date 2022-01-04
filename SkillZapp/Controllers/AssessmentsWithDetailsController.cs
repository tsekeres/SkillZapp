using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using SkillZapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/AssessmentsWithDetails")]
    [ApiController]
    public class AssessmentsWithDetailsController : ControllerBase
    {
        private AssessmentsWithDetailsRepository _repo;

        public AssessmentsWithDetailsController(AssessmentsWithDetailsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetAssessmentsWithDetailsByUserId(Guid userId)
        {
            _repo.GetAssessmentsWithDetailsByUserId(userId);

            return Ok(_repo.GetAssessmentsWithDetailsByUserId(userId));
        }
    }
}
