import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  getStudentAssessmentsByAssessmentId,
  GetStudentAssessmentScoresByAssessmentId,
} from '../helpers/data/studentAssessmentData';
import StudentAssessmentCards from '../components/Cards/StudentAssessmentCards';
import DonutChart from '../components/Charts/DonutChart';
import {
  SingleAssessmentContainer,
  ChartContainer,
  TitleContainer,
  StudentScoreCardContainer,
} from './SingleAssessmentElements';
import { getAssessmentsWithDetailsByAssessmentId } from '../helpers/data/assessmentsData';

function SingleAssessment() {
  const [assessmentDetails, setAssessmentDetails] = useState(null);
  const [scoredAssessments, setScoredAssessments] = useState(null);
  const [chartScores, setChartScores] = useState(null);
  const { assessmentId } = useParams();
  useEffect(() => {
    if (assessmentId) {
      getStudentAssessmentsByAssessmentId(assessmentId).then((resp) => setScoredAssessments(resp));
      getAssessmentsWithDetailsByAssessmentId(assessmentId).then((response) => setAssessmentDetails(response));
      GetStudentAssessmentScoresByAssessmentId(assessmentId).then((data) => setChartScores(data));
    }
  }, []);
  return (
    <SingleAssessmentContainer>
      {assessmentDetails && chartScores && (
        <>
          <TitleContainer className='classes-header'>
            <h1>{assessmentDetails.standardName}</h1>
            <h2>Teacher: {assessmentDetails.teacherName}</h2>
            <h2>Grade Level: {assessmentDetails.gradeLevelDescription}</h2>
          </TitleContainer>
          <ChartContainer>
            <DonutChart
              key={assessmentId}
              excellent={chartScores.excellent}
              satisfactory={chartScores.satisfactory}
              needsImprovment={chartScores.needsImprovement}
              notTested={chartScores.notTested}
              />
          </ChartContainer>
          {scoredAssessments && (
            <>
              <StudentScoreCardContainer className='card-container student-view'>
                {scoredAssessments?.map((reportInfo, index) => (
                  <StudentAssessmentCards
                    key={index}
                    assessmentId={reportInfo.assessmentId}
                    studentName={reportInfo.studentName}
                    teacherName={reportInfo.teacherName}
                    gradeLevelDescription={reportInfo.gradeLevelDescription}
                    score={reportInfo.score}
                    assessmentDate={reportInfo.assessmentDate}
                    standardName={reportInfo.standardName}
                  />
                ))}
              </StudentScoreCardContainer>
            </>
          )}
        </>
      )}
    </SingleAssessmentContainer>
  );
}

SingleAssessment.propTypes = {
  assessmentId: PropTypes.any,
};

export default SingleAssessment;
