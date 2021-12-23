const searchClassesList = (teacherName) =>
  new Promise((resolve, reject) => {
    getClassNames()
      .then((classNamesArray) => {
        const searchItems = classNamesArray.filter((class) => class.teacherName.includes(teacherName));
        resolve(searchItems);
      })
      .catch((error) => reject(error));
  });
