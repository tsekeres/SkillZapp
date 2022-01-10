import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassForm from '../Forms/ClassForm';
import {
  ClassCard,
  ClassCardButtons,
  ClassCardHeader,
  ClassCardBody,
  ClassCardDelete,
  ClassCardEdit,
  CardTitle,
  CardText,
  Button1,
  Button,
  Modal
} from './ClassCardsElements';
import deleted from '../../Assets/Delete.png';
import { deleteClassName, getClassNamesWithGradeLevelByUserId } from '../../helpers/data/classNamesData';
import edit from '../../Assets/Edit.png';

function ClassCards({
  gradeLevelDescription,
  teacherName,
  id,
  user,
  setClassNames,
  classNames,
  setGradeLevels,
  gradeLevels,
}) {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Classes/${id}`);
        break;
      case 'delete':
        deleteClassName(id).then(() => getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList)));
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <ClassCard>
      <ClassCardHeader className='ClassCardHeader'>
        <ClassCardButtons className='ClassCardButtons'>
          <Button1 id='editSingleClass' onClick={openModal}>
            <ClassCardEdit className='ClassCardEdit' src={edit}></ClassCardEdit>
          </Button1>
          <Button1 id='deleteClass' onClick={() => handleClick('delete')}>
            <ClassCardDelete
              className='ClassCardDelete'
              src={deleted}
            ></ClassCardDelete>
          </Button1>
        </ClassCardButtons>
      </ClassCardHeader>
      <ClassCardBody
        className='ClassCard'
        id='ClassCard'
        onClick={() => handleClick('view')}
      >
        <CardTitle>{teacherName}</CardTitle>
        <CardText>{gradeLevelDescription}</CardText>
      </ClassCardBody>
      <Modal
        isOpen={modalIsOpen}
        className='Modal'
        parentSelector={() => document.querySelector('#ClassContainer')}
      >
        <Button className='modalClose' onClick={closeModal}>
          <ClassCardDelete src={deleted} />
        </Button>
        <ClassForm
          classFormTitle='Edit Class'
          setClassNames={setClassNames}
          classNames={classNames}
          setGradeLevels={setGradeLevels}
          gradeLevels={gradeLevels}
          gradeLevelDescription={gradeLevelDescription}
          teacherName={teacherName}
          id={id}
          user={user}
          closeModal={closeModal}
        />
      </Modal>
    </ClassCard>
  );
}

ClassCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  setClassNames: PropTypes.func,
  classNames: PropTypes.any,
  setGradeLevels: PropTypes.func,
  gradeLevels: PropTypes.any,
};

export default ClassCards;
