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
    [Route("api/assessments")]
    [ApiController]
    public class AssessmentController : ControllerBase
    {
        private AssessmentRepository _repo;

        public AssessmentController(AssessmentRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public IActionResult GetAllAssessments()
        {
            _repo.GetAllAssessments();
            return Ok(_repo.GetAllAssessments());
        }

        [HttpGet("{assessmentId}")]
        public IActionResult GetAssessmentById(Guid assessmentId)
        {
            _repo.GetAssessmentById(assessmentId);

            return Ok(_repo.GetAssessmentById(assessmentId));
        }

        [HttpGet("standardName/{standardNameId}")]
        public IActionResult GetAssessmentsByStandardNameId(Guid standardNameId)
        {
            _repo.GetAssessmentsByStandardNameId(standardNameId);

            return Ok(_repo.GetAssessmentsByStandardNameId(standardNameId));
        }

        [HttpGet("className/{classNameId}")]
        public IActionResult GetAssessmentsByClassNameId(Guid classNameId)
        {
            _repo.GetAssessmentsByClassNameId(classNameId);

            return Ok(_repo.GetAssessmentsByClassNameId(classNameId));
        }

        [HttpGet("rubric/{rubricId}")]
        public IActionResult GetAssessmentsByRubricId(Guid rubricId)
        {
            _repo.GetAssessmentsByRubricId(rubricId);

            return Ok(_repo.GetAssessmentsByRubricId(rubricId));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetAssessmentsByUserId(Guid userId)
        {
            _repo.GetAssessmentsByUserId(userId);

            return Ok(_repo.GetAssessmentsByUserId(userId));
        }

        [HttpPost]
        public IActionResult CreateAssessment(Assessment assessment)
        {
            _repo.CreateAssessment(assessment);

            return Created($"/api/assessments/{assessment.AssessmentId}", assessment);
        }

        [HttpDelete("{assessmentId}")]
        public IActionResult DeleteAssessment(Guid assessmentId)
        {
            _repo.DeleteAssessment(assessmentId);
            return Ok($"Assessment with Id {assessmentId} was deleted");
        }

        [HttpPut("{assessmentId}")]
        public IActionResult UpdateAssessment(Guid assessmentId, Assessment assessment)
        {
            _repo.UpdateAssessment(assessmentId, assessment);
            return Ok($"Assessment with id {assessmentId} has been updated");
        }
    }
}
