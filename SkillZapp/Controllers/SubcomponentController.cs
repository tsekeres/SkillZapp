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
    [Route("api/subcomponents")]
    [ApiController]
    public class SubcomponentController : ControllerBase
    {
        private SubcomponentRepository _subcomponentRepository;

        public SubcomponentController(SubcomponentRepository subcomponentRepo)
        {
            _subcomponentRepository = subcomponentRepo;
        }

        [HttpGet("{SubcomponentId}")]
        public IActionResult GetSubcomponentById(Guid SubcomponentId)
        {
            _subcomponentRepository.GetSubcomponentById(SubcomponentId);
            
            return Ok(_subcomponentRepository.GetSubcomponentById(SubcomponentId));
        }

        [HttpGet("{ComponentId}")]
        public IActionResult GetSubcomponentByComponentId(Guid ComponentId)
        {
            _subcomponentRepository.GetSubcomponentsByComponentId(ComponentId);

            return Ok(_subcomponentRepository.GetSubcomponentsByComponentId(ComponentId));
        }

        [HttpGet("{SubcomponentName}")]
        public IActionResult GetSubcomponentBySubcomponentName(string subcomponentName)
        {
            _subcomponentRepository.GetByName(subcomponentName);

            return Ok(_subcomponentRepository.GetByName(subcomponentName));
        }

        [HttpGet]
        public IActionResult GetAllSubcomponents()
        {
            _subcomponentRepository.GetAllSubcomponents();
            return Ok(_subcomponentRepository.GetAllSubcomponents());
        }

        [HttpPost]
        public IActionResult CreateSubcomponent(Subcomponent subcomponent)
        {
            _subcomponentRepository.Add(subcomponent);
            
            return Created($"/api/subcomponents/{subcomponent.Id}", subcomponent);
        }

        [HttpDelete("{subcomponentId}")]
        public IActionResult DeleteSubcomponent(Guid subcomponentId)
        {
            _subcomponentRepository.Delete(subcomponentId);
            return Ok($"Subcomponent with Id {subcomponentId} was deleted");
        }

        [HttpPut("{SubcomponentId}")]
        public IActionResult UpdateSubcomponent(Guid subcomponentId, Subcomponent subcomponent)
        {
            _subcomponentRepository.Update(subcomponentId, subcomponent);
            return Ok($"Order with id {subcomponentId} has been updated");
        }
    }
}
