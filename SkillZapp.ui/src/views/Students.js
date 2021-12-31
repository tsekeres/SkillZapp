// needs an add a new class button that opens modal form
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StudentNameCards from '../components/Cards/StudentNameCards';
import { getAllStudentsWithDataByUserId } from '../helpers/data/studentsData';
// import SearchBarStudents from '../components/Searchbar/SearchBarStudents';
import {
  StudentContainer,
  TitleContainer,
  // ClassSearchContainer,
  // AddClassContainer,
  StudentCardContainer,
  // Button,
} from './StudentsElements';

function Students({ user }) {
  const [studentNames, setStudentNames] = useState(null);
  // const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (user) {
      getAllStudentsWithDataByUserId(user.id).then((resp) => setStudentNames(resp));
    }
  }, []);
  // const handleClick = (type) => {
  //   switch (type) {
  //     // case 'addClass':
  //     //   setAdding((prevState) => !prevState);
  //     //   break;
  //     default:
  //       console.warn('error');
  //   }
  // };

  return (
    <StudentContainer>
      <TitleContainer className="classes-header">
        <h1>STUDENTS</h1>
      </TitleContainer>
      {/* <SearchBarStudents user={user} /> */}
      {/* <AddClassContainer>
          <Button color='info' size='sm' onClick={() => handleClick('addClass')}>
            {adding ? 'Close Form' : 'addClass'}
          </Button>
          {adding && (
            <AddClassForm
              formTitle='Adding New Class'
              user={user}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
              setTrips={setTrips}
              setUserTrips={setUserTrips}
              firebaseKey={trip.firebaseKey}
              camping={trip.camping}
              creator={trip.creator}
              description={trip.description}
              difficulty={trip.difficulty}
              distance={trip.distance}
              fees={trip.fees}
              image={trip.image}
              nearestHospital={trip.nearestHospital}
              parkName={trip.parkName}
              parkWebLink={trip.parkWebLink}
              reservations={trip.reservations}
              trailName={trip.trailName}
              trailMap={trip.trailMap}
              setUpdating={setUpdating}
            />
          )}
        </AddClassContainer> */}
      <StudentCardContainer className="card-container student-view">
        {studentNames
          && studentNames.map((studentInfo, index) => (
            <StudentNameCards
              key={index}
              id={studentInfo.studentId}
              studentName={studentInfo.studentName}
              teacherName={studentInfo.teacherName}
              gradeLevelDescription={studentInfo.gradeLevelDescription}
            />
          ))}
      </StudentCardContainer>
    </StudentContainer>
  );
}

Students.propTypes = {
  user: PropTypes.any,
};

export default Students;
