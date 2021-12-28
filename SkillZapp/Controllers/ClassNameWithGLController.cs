using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassNameWithGLController : ControllerBase
    {
        private ClassNameWithGLRepository _repo;

        public ClassNameWithGLController(ClassNameWithGLRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetClassNamesWithGradeLevelByUserId(Guid userId)
        {
            _repo.GetClassNamesWithGradeLevelByUserId(userId);

            return Ok(_repo.GetClassNamesWithGradeLevelByUserId(userId));
        }
    }
}
