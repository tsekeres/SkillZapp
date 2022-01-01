import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { SearchBarBar } from './SearchBarClassesElements';
import { getClassNamesByUserId } from '../../helpers/data/classNamesData';

const SearchBarClasses = ({ user }) => {
  const history = useHistory();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    getClassNamesByUserId(user.id)
      .then((resultArr) => {
        for (let i = 0; i < resultArr.length; i += 1) {
          const option = {
            value: resultArr[i].id,
            label: `${resultArr[i].teacherName}`,
          };
          optionsArr.push(option);
        }
        setOptions(optionsArr);
      })
      .catch(setOptions([]));
  }, []);

  const handleSelectClick = (e) => {
    history.replace(`/Classes/${e.value}`);
    window.location.reload(false);
  };

  return (
    <SearchBarBar>
      <Select
        options={options}
        onChange={handleSelectClick}
        defaultValue={{ value: '', label: 'Search By Teacher Name' }}
      />
    </SearchBarBar>
  );
};

SearchBarClasses.propTypes = {
  user: PropTypes.any,
};

export default SearchBarClasses;
