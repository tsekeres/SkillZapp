import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from "react-router-dom";

function SingleStudent() {
    <div>
      <h2>Single Student View</h2>
    </div>;

  // const [className, setClassName] = useState({});
  // const [students, setStudents] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   let mounted = true;
  //   getClassNameById(id).then(setClassName);
  //   getStudentsByClassNameId(id).then(setStudents);
  //   return () => {
  //     mounted = false;
  //     return mounted;
  //   };
  // }, []);

  // return (
  //   // needs title section
  //   // needs map of class's assessment cards /simple view/ to display
  //   // needs an add student button for modal and form
  //   // needs map of student name cards /simple view/ to display
  //   // needs new assessment button that links to modal form
  //   <SingleClassContainer className="single-class-view">
  //     <SingleClassCard key={id} id={id} className={className} user={user} />
  //   </SingleClassContainer>
  // );
}

SingleStudent.propTypes = {
  user: PropTypes.any,
};

export default SingleStudent;
