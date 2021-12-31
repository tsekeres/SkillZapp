// needs an add a new class button that opens modal form
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassForm from '../components/Forms/ClassForm';
import ClassCards from '../components/Cards/ClassCards';
import { getClassNamesWithGradeLevelByUserId } from '../helpers/data/classNamesData';
import SearchBarClasses from '../components/Searchbar/SearchBarClasses';
import {
  ClassContainer,
  TitleContainer,
  // ClassSearchContainer,
  // AddClassContainer,
  ClassCardContainer,
  // Button,
} from './ClassesElements';
import add from '../Assets/Add.png';
import deleted from '../Assets/Delete.png';

function Classes({ user }) {
  const [classNames, setClassNames] = useState(null);
  const [gradeLevels, setGradeLevels] =useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (user) {
      getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList));
      
    }
  }, []);

  return (
    <ClassContainer>
      <TitleContainer className="classes-header">
        <h1>CLASSES</h1>
      </TitleContainer>

      <SearchBarClasses user={user} />

      <AddButtonContainer className="AddButtonContainer">
          <AddClassButton className="addClass" onClick={openModal}>
            <AddClassButtonImg
              className="AddClassButtonImg"
              src={add}
            ></AddClassButtonImg>
          </AddClassButton>
      </AddButtonContainer>
      <Modal isOpen={modalIsOpen} className="Modal">
        <Button className="modalClose" onClick={closeModal}>
          <ButtonImg src={deleted} />
        </Button>
        <ClassForm
          ClassFormTitle="Create Class"
          setClassNames={setClassNames}
          classNames={classNames}
          user={user}
        />
      </Modal>

      <ClassCardContainer className="card-container class-view">
        {classNames &&
          classNames.map((classInfo) => (
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
