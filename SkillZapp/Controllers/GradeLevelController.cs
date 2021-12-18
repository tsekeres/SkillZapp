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
    [Route("api/gradeLevels")]
    [ApiController]
    public class GradeLevelController : ControllerBase
    {
        private GradeLevelRepository _repo;

        public GradeLevelController(GradeLevelRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllGradeLevels()
        {
            _repo.GetAllGradeLevels();
            return Ok(_repo.GetAllGradeLevels());
        }

        [HttpGet("{gradeLevelId}")]
        public IActionResult GetGradeLevelsById(Guid gradeLevelId)
        {
            _repo.GetGradeLevelsById(gradeLevelId);

            return Ok(_repo.GetGradeLevelsById(gradeLevelId));
        }

        [HttpGet("{standardId}")]
        public IActionResult GetGradeLevelsByStandardId(Guid standardId)
        {
            _repo.GetGradeLevelsByStandardId(standardId);

            return Ok(_repo.GetGradeLevelsByStandardId(standardId));
        }

        [HttpGet("{gradeLevelNumber}")]
        public IActionResult GetGradeLevelByNumber(string gradeLevelNumber)
        {
            _repo.GetGradeLevelByNumber(gradeLevelNumber);

            return Ok(_repo.GetGradeLevelByNumber(gradeLevelNumber));
        }

        [HttpPost]
        public IActionResult CreateGradeLevel(GradeLevel gradeLevel)
        {
            _repo.CreateGradeLevel(gradeLevel);

            return Created($"/api/gradeLevels/{gradeLevel.Id}", gradeLevel);
        }

        [HttpDelete("{gradeLevelId}")]
        public IActionResult DeleteGradeLevel(Guid gradeLevelId)
        {
            _repo.DeleteGradeLevel(gradeLevelId);
            return Ok($"GradeLevel with Id {gradeLevelId} was deleted");
        }

        [HttpPut("{gradeLevelId}")]
        public IActionResult UpdateGradeLevel(Guid gradeLevelId, GradeLevel gradeLevel)
        {
            _repo.UpdateGradeLevel(gradeLevelId, gradeLevel);
            return Ok($"GradeLevel with id {gradeLevelId} has been updated");
        }
    }
}
