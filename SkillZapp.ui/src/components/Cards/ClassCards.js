import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ClassCard,
  ClassCardButtons,
  ClassCardHeader,
  ClassCardBody,
  ClassCardDelete,
  CardTitle,
  CardText,
  Button1
} from './ClassCardsElements';
import deleted from '../../Assets/Delete.png';
import { deleteClassName, getClassNamesWithGradeLevelByUserId } from '../../helpers/data/classNamesData';

function ClassCards({
  gradeLevelDescription,
  teacherName,
  id,
  user,
  setClassNames
}) {
  const history = useHistory();
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
          <Button1 id='deleteProduct' onClick={() => handleClick('delete')}>
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
    </ClassCard>
  );
}

ClassCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  setClassNames: PropTypes.func,
};

export default ClassCards;
