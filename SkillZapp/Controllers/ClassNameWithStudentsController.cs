using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/classNameWithStudents")]
    [ApiController]
    public class ClassNameWithStudentsController : ControllerBase
    {
        private ClassNameWithStudentsRepository _repo;

        public ClassNameWithStudentsController(ClassNameWithStudentsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("className/{classNameId}")]
        public IActionResult GetClassNameWithStudentsByTeacherName(Guid classNameId)
        {
            _repo.GetClassNameWithStudentsByTeacherName(classNameId);

            return Ok(_repo.GetClassNameWithStudentsByTeacherName(classNameId));
        }
    }
}
