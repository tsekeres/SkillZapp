﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillZapp.DataAccess;
using SkillZapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Controllers
{
    [Route("api/studentsAssessments")]
    [ApiController]
    public class StudentAssessmentController : ControllerBase
    {
        private StudentAssessmentRepository _repo;

        public StudentAssessmentController(StudentAssessmentRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{StudentAssessmentId}")]
        public IActionResult GetStudentAssessmentById(Guid studentAssessmentId)
        {
            _repo.GetStudentAssessmentById(studentAssessmentId);

            return Ok(_repo.GetStudentAssessmentById(studentAssessmentId));
        }

        [HttpGet("student/{studentId}")]
        public IActionResult GetStudentAssessmentByStudentId(Guid studentId)
        {
            _repo.GetStudentAssessmentsByStudentId(studentId);

            return Ok(_repo.GetStudentAssessmentsByStudentId(studentId));
        }

        [HttpGet("assessment/{assessmentId}")]
        public IActionResult GetStudentAssessmentsByAssessmentId(Guid assessmentId)
        {
            _repo.GetStudentAssessmentsByAssessmentId(assessmentId);

            return Ok(_repo.GetStudentAssessmentsByAssessmentId(assessmentId));
        }

        [HttpGet("{score}")]
        public IActionResult GetStudentAssessmentsByScore(string score)
        {
            _repo.GetStudentAssessmentsByScore(score);

            return Ok(_repo.GetStudentAssessmentsByScore(score));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetStudentAssessmentsByUserId(Guid userId)
        {
            _repo.GetStudentAssessmentsByUserId(userId);

            return Ok(_repo.GetStudentAssessmentsByUserId(userId));
        }

        [HttpGet]
        public IActionResult GetAllStudentAssessments()
        {
            _repo.GetAllStudentAssessments();
            return Ok(_repo.GetAllStudentAssessments());
        }

        [HttpPost]
        public void CreateStudentAssessment(StudentAssessment studentAssessment)
        {
            _repo.AddStudentAssessment(studentAssessment);

            //return Created($"/api/students/{studentAssessment.Id}", studentAssessment);
        }

        [HttpDelete("{studentAssessmentId}")]
        public IActionResult DeleteStudentAssessment(Guid studentAssessmentId)
        {
            _repo.DeleteStudentAssessment(studentAssessmentId);
            return Ok($"Student Assessment with Id {studentAssessmentId} was deleted");
        }

        [HttpDelete("{assessmentId}")]
        public IActionResult DeleteStudentAssessmentByAssessmentId(Guid assessmentId)
        {
            _repo.DeleteStudentAssessmentByAssessmentId(assessmentId);
            return Ok($"Student Assessment with Assessment Id {assessmentId} was deleted");
        }

        [HttpPut("{studentAssessmentId}")]
        public void UpdateStudentAssessment(Guid studentAssessmentId, StudentAssessment studentAssessment)
        {
            _repo.UpdateStudentAssessment(studentAssessmentId, studentAssessment);
        }
    }
}
