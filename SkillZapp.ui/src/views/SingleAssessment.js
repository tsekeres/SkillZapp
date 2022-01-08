import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getStudentAssessmentsByAssessmentId } from '../helpers/data/studentAssessmentData';
import StudentAssessmentCards from '../components/Cards/StudentAssessmentCards';
import DonutChart from '../components/Charts/DonutChart';
import {
  SingleAssessmentContainer,
  ChartContainer,
  TitleContainer,
  // CardText,
  StudentScoreCardContainer,
} from './SingleAssessmentElements';

function SingleAssessment() {
  const [scoredAssessments, setScoredAssessments] = useState(null);
  const { id } = useParams();
  // const [date] = useState(scoredAssessments.assessmentDate.split('T'));

  useEffect(() => {
    if (id) {
      getStudentAssessmentsByAssessmentId(id).then((resp) => setScoredAssessments(resp));
    }
  }, []);

  return (
    <SingleAssessmentContainer>
      <TitleContainer className="classes-header">
        {/* <h1>{scoredAssessments.standardName}</h1>
        <h2>Teacher: {scoredAssessments.teacherName}</h2>
        <h2>Grade Level: {scoredAssessments.gradeLevelDescription}</h2>
        <h2>Date Assessed: {date[0]}</h2> */}
      </TitleContainer>
      <ChartContainer>
        <DonutChart />
      </ChartContainer>
      {scoredAssessments && (
        <>
          {/* <CardText tag="h2">{scoredAssessments.studentName}</CardText> */}
          <StudentScoreCardContainer className="card-container student-view">
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
    </SingleAssessmentContainer>
  );
}

SingleAssessment.propTypes = {
  id: PropTypes.any,
};

export default SingleAssessment;
