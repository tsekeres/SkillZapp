// needs an add a new class button that opens modal form
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassCards from '../components/Cards/ClassCards';
import { getClassNamesWithGradeLevelByUserId } from '../helpers/data/classNamesData';
import SearchBar from '../components/Searchbar/SearchBar';
import {
  ClassContainer,
  TitleContainer,
  // ClassSearchContainer,
  // AddClassContainer,
  ClassCardContainer,
  // Button,
} from './ClassesElements';

function Classes({ user }) {
  const [classNames, setClassNames] = useState(null);
  // const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (user) {
      getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList));
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
    <ClassContainer>
      <TitleContainer className="classes-header">
        <h1>CLASSES</h1>
      </TitleContainer>
      <SearchBar user={user} />
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
      <ClassCardContainer className="card-container class-view">
        {classNames
          && classNames.map((classInfo) => (
            <ClassCards
              key={classInfo.id}
              id={classInfo.id}
              setClassNames={setClassNames}
              gradeLevelId={classInfo.gradeLevelId}
              teacherName={classInfo.teacherName}
              gradeLevelDescription={classInfo.gradeLevelDescription}
            />
          ))}
      </ClassCardContainer>
    </ClassContainer>
  );
}

Classes.propTypes = {
  user: PropTypes.any,
};

export default Classes;
