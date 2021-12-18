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
    [Route("api/classNames")]
    [ApiController]
    public class ClassNameController : ControllerBase
    {
        private ClassNameRepository _repo;

        public ClassNameController(ClassNameRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllClassNames()
        {
            _repo.GetAllClassNames();
            return Ok(_repo.GetAllClassNames());
        }

        [HttpGet("{classNameId}")]
        public IActionResult GetClassNameById(Guid classNameId)
        {
            _repo.GetClassNameById(classNameId);

            return Ok(_repo.GetClassNameById(classNameId));
        }

        [HttpGet("{gradeLevelId}")]
        public IActionResult GetClassNamesByGradeLevelId(Guid gradeLevelId)
        {
            _repo.GetClassNamesByGradeLevelId(gradeLevelId);

            return Ok(_repo.GetClassNamesByGradeLevelId(gradeLevelId));
        }

        [HttpGet("{userId}")]
        public IActionResult GetClassNameByUserId(Guid userId)
        {
            _repo.GetClassNamesByUserId(userId);

            return Ok(_repo.GetClassNamesByUserId(userId));
        }

        [HttpGet("{teacherName}")]
        public IActionResult GetClassNamesByTeacherName(string teacherName)
        {
            _repo.GetClassNamesByTeacherName(teacherName);

            return Ok(_repo.GetClassNamesByTeacherName(teacherName));
        }

        [HttpPost]
        public IActionResult CreateClassName(ClassName className)
        {
            _repo.CreateClassName(className);

            return Created($"/api/classNames/{className.Id}", className);
        }

        [HttpDelete("{classNameId}")]
        public IActionResult DeleteStudent(Guid classNameId)
        {
            _repo.DeleteClassName(classNameId);
            return Ok($"ClassName with Id {classNameId} was deleted");
        }

        [HttpPut("{classNameId}")]
        public IActionResult UpdateClassName(Guid classNameId, ClassName className)
        {
            _repo.UpdateClassName(classNameId, className);
            return Ok($"ClassName with id {classNameId} has been updated");
        }
    }
}
