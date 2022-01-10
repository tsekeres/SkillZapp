import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassForm from '../components/Forms/ClassForm';
import ClassCards from '../components/Cards/ClassCards';
import { getClassNamesWithGradeLevelByUserId } from '../helpers/data/classNamesData';
import SearchBarClasses from '../components/Searchbar/SearchBarClasses';
import {
  ClassContainer,
  TitleContainer,
  AddButtonContainer,
  AddClassButton,
  // AddClassButtonImg,
  ClassCardContainer,
  Modal,
  Button,
  ButtonImg,
} from './ClassesElements';
// import add from '../Assets/Add.png';
import deleted from '../Assets/Delete.png';
import getAllGradeLevels from '../helpers/data/gradeLevelsData';

function Classes({ user }) {
  const [classNames, setClassNames] = useState(null);
  const [gradeLevels, setGradeLevels] = useState(null);
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
      getAllGradeLevels().then((gradeLevelsList) => setGradeLevels(gradeLevelsList));
    }
  }, []);
  return (
    <ClassContainer>
      {classNames && gradeLevels
      && (
        <>
          <TitleContainer className="classes-header">
            <h1>{user.firstName}&apos;s Classes</h1>
          </TitleContainer>

          <SearchBarClasses user={user} classNames={classNames} />

          <AddButtonContainer className="AddButtonContainer">
            <AddClassButton className="addClass" onClick={openModal}>
              Add a New Class
            </AddClassButton>
          </AddButtonContainer>
          <Modal isOpen={modalIsOpen} className="Modal">
            <Button className="modalClose" onClick={closeModal}>
              <ButtonImg src={deleted} />
            </Button>
            <ClassForm
              classFormTitle="Create Class"
              setClassNames={setClassNames}
              classNames={classNames}
              setGradeLevels={setGradeLevels}
              gradeLevels={gradeLevels}
              user={user}
              closeModal={closeModal}
            />
          </Modal>

          <ClassCardContainer className="card-container class-view">
            {classNames
            && classNames.map((classInfo) => (
                <ClassCards
                  key={classInfo.id}
                  id={classInfo.id}
                  setClassNames={setClassNames}
                  classNames={classNames}
                  setGradeLevels={setGradeLevels}
                  gradeLevels={gradeLevels}
                  gradeLevelId={classInfo.gradeLevelId}
                  teacherName={classInfo.teacherName}
                  gradeLevelDescription={classInfo.gradeLevelDescription}
                  user={user}
                />
            ))}
          </ClassCardContainer>
        </>
      )}
    </ClassContainer>
  );
}

Classes.propTypes = {
  user: PropTypes.any,
};

export default Classes;
