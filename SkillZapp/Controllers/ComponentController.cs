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
    [Route("api/components")]
    [ApiController]
    public class ComponentController : ControllerBase
    {
        private ComponentRepository _repo;

        public ComponentController(ComponentRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public IActionResult GetAllComponents()
        {
            _repo.GetAllComponents();
            return Ok(_repo.GetAllComponents());
        }

        [HttpGet("{ComponentId}")]
        public IActionResult GetComponentById(Guid componentId)
        {
            _repo.GetComponentsById(componentId);

            return Ok(_repo.GetComponentsById(componentId));
        }

        [HttpGet("componentName/{componentName}")]
        public IActionResult GetComponentByName(string componentName)
        {
            _repo.GetComponentByName(componentName);

            return Ok(_repo.GetComponentByName(componentName));
        }

        [HttpGet("stateName/{stateName}")]
        public IActionResult GetComponentByStateName(string stateName)
        {
            _repo.GetComponentByStateName(stateName);

            return Ok(_repo.GetComponentByStateName(stateName));
        }

        [HttpPost]
        public IActionResult CreateComponent(Component component)
        {
            _repo.CreateComponent(component);

            return Created($"/api/components/{component.Id}", component);
        }

        [HttpDelete("{componentId}")]
        public IActionResult DeleteComponent(Guid componentId)
        {
            _repo.DeleteComponent(componentId);
            return Ok($"Component with Id {componentId} was deleted");
        }

        [HttpPut("{componentId}")]
        public IActionResult UpdateComponent(Guid componentId, Component component)
        {
            _repo.UpdateComponent(componentId, component);
            return Ok($"Component with id {componentId} has been updated");
        }
    }
}
