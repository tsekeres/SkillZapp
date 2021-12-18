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
    [Route("api/rubrics")]
    [ApiController]
    public class RubricController : ControllerBase
    {
        private RubricRepository _repo;

        public RubricController(RubricRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllRubrics()
        {
            _repo.GetAllRubrics();
            return Ok(_repo.GetAllRubrics());
        }

        [HttpGet("{rubricId}")]
        public IActionResult GetRubricById(Guid rubricId)
        {
            _repo.GetRubricsById(rubricId);

            return Ok(_repo.GetRubricsById(rubricId));
        }

        [HttpGet("{rubricName}")]
        public IActionResult GetRubricByRubricName(string rubricName)
        {
            _repo.GetRubricByName(rubricName);

            return Ok(_repo.GetRubricByName(rubricName));
        }

        [HttpGet("{standardId}")]
        public IActionResult GetRubricsByStandardId(Guid standardId)
        {
            _repo.GetRubricsByStandardId(standardId);

            return Ok(_repo.GetRubricsByStandardId(standardId));
        }

        [HttpPost]
        public IActionResult CreateRubric(Rubric rubric)
        {
            _repo.CreateRubric(rubric);

            return Created($"/api/rubrics/{rubric.Id}", rubric);
        }

        [HttpDelete("{rubricId}")]

        public IActionResult DeleteRubric(Guid rubricId)
        {
            _repo.DeleteRubric(rubricId);
            return Ok($"Rubric with Id {rubricId} was deleted");
        }

        [HttpPut("{rubricId}")]
        public IActionResult UpdateStudentAssessment(Guid rubricId, Rubric rubric)
        {
            _repo.UpdateRubric(rubricId, rubric);
            return Ok($"Rubric with id {rubricId} has been updated");
        }
    }
}
