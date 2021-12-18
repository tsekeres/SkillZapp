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
    [Route("api/standards")]
    [ApiController]
    public class StandardController : ControllerBase
    {
        private StandardRepository _repo;

        public StandardController(StandardRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{StandardId}")]
        public IActionResult GetStandardById(Guid standardId)
        {
            _repo.GetStandardsById(standardId);

            return Ok(_repo.GetStandardsById(standardId));
        }

        [HttpGet("{subcomponentId}")]
        public IActionResult GetStandardsBySubcomponentId(Guid subcomponentId)
        {
            _repo.GetStandardsBySubcomponentId(subcomponentId);

            return Ok(_repo.GetStandardsBySubcomponentId(subcomponentId));
        }

        [HttpGet("{StandardName}")]
        public IActionResult GetStandardByName(string standardName)
        {
            _repo.GetStandardByName(standardName);

            return Ok(_repo.GetStandardByName(standardName));
        }

        [HttpGet]
        public IActionResult GetAllStandards()
        {
            _repo.GetAllStandards();
            return Ok(_repo.GetAllStandards());
        }

        [HttpPost]
        public IActionResult CreateStandard(Standard standard)
        {
            _repo.CreateStandard(standard);

            return Created($"/api/standards/{standard.Id}", standard);
        }

        [HttpDelete("{standardId}")]
        public IActionResult DeleteStandard(Guid standardId)
        {
            _repo.DeleteStandard(standardId);
            return Ok($"Standard with Id {standardId} was deleted");
        }

        [HttpPut("{standardId}")]
        public IActionResult UpdateStudentAssessment(Guid standardId, Standard standard)
        {
            _repo.UpdateStandard(standardId, standard);
            return Ok($"Standard with id {standardId} has been updated");
        }
    }
}
