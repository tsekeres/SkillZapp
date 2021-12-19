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
    [Route("api/students")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private StudentRepository _repo;

        public StudentController(StudentRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{StudentId}")]
        public IActionResult GetStudentById(Guid studentId)
        {
            _repo.GetStudentById(studentId);

            return Ok(_repo.GetStudentById(studentId));
        }

        [HttpGet("gradeLevel/{gradeLevelId}")]
        public IActionResult GetStudentByGradeLevelId(Guid gradeLevelId)
        {
            _repo.GetStudentsByGradeLevelId(gradeLevelId);

            return Ok(_repo.GetStudentsByGradeLevelId(gradeLevelId));
        }

        [HttpGet("className/{classNameId}")]
        public IActionResult GetStudentByClassNameId(Guid ClassNameId)
        {
            _repo.GetStudentsByClassNameId(ClassNameId);

            return Ok(_repo.GetStudentsByClassNameId(ClassNameId));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetStudentByUserId(Guid UserId)
        {
            _repo.GetStudentsByUserId(UserId);

            return Ok(_repo.GetStudentsByUserId(UserId));
        }

        [HttpGet("student/{StudentName}")]
        public IActionResult GetStudentsByStudentName(string studentName)
        {
            _repo.GetStudentsByStudentName(studentName);

            return Ok(_repo.GetStudentsByStudentName(studentName));
        }

        [HttpGet]
        public IActionResult GetAllStudents()
        {
            _repo.GetAllStudents();
            return Ok(_repo.GetAllStudents());
        }

        [HttpPost]
        public IActionResult CreateStudent(Student student)
        {
            _repo.AddStudent(student);

            return Created($"/api/students/{student.Id}", student);
        }

        [HttpDelete("{studentId}")]
        public IActionResult DeleteStudent(Guid studentId)
        {
            _repo.DeleteStudent(studentId);
            return Ok($"Student with Id {studentId} was deleted");
        }

        [HttpPut("{StudentId}")]
        public IActionResult UpdateStudent(Guid studentId, Student student)
        {
            _repo.UpdateStudent(studentId, student);
            return Ok($"Student with id {studentId} has been updated");
        }
    }
}
