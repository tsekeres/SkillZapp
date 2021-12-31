using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/StudentWithDetails")]
    [ApiController]
    public class StudentWithDetailsController : ControllerBase
    {
        private StudentWithDetailsRepository _repo;

        public StudentWithDetailsController(StudentWithDetailsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetAllStudentsWithDataByUserId(Guid userId)
        {
            return Ok(_repo.GetAllStudentsWithDataByUserId(userId));
        }
    }
}
