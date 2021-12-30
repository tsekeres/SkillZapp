import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { SearchBarBar } from './SearchBarElements';
import { getAllClassNames } from '../../helpers/data/classNamesData';

const SearchBar = () => {
  const history = useHistory();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    getAllClassNames()
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

export default SearchBar;
