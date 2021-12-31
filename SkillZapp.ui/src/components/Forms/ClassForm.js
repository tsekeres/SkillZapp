import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { createClassName, updateClassName, getAllClassNames, getClassNamesWithGradeLevelByUserId } from '../../helpers/data/classNamesData';
import {
  ProductFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
} from './ProductFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const ClassForm = ({
  classFormTitle,
  setClassNames,
  teacherName,
  gradeLevelDescription,
  gradeLevelNumber,
  id,
  gradeLevelId,
  userId,
}) => {
  const [classNames, setClassNames] = useState({
    gradeLevelId: gradeLevelId || '',
    teacherName: teacherName || '',
    gradeLevelDescription: gradeLevelDescription || '',
    gradeLevelNumber: gradeLevelNumber || '',
    id: id || '',
    userId: userId || '',
  });

  useEffect(() => {
    let mounted = true;
    const classNameObj = {
      gradeLevelId: gradeLevelId || '',
      teacherName: teacherName || '',
      gradeLevelDescription: gradeLevelDescription || '',
      gradeLevelNumber: gradeLevelNumber || '',
      id: id || '',
      userId: userId || '',
    };
    if (mounted) {
      setClassNames(classNamesObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [gradeLevelId, teacherName, gradeLevelDescription, gradeLevelNumber, userId]);

  const handleInputChange = (e) => {
    setClassNames((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classNames.id) {
      updateClassName(classNames.id, classNames).then(() => getClassNamesByUserId().then((response) => setClassNames(response))
      );
    } else {
      const classNameObj = {
        gradeLevelId: classNames.gradeLevelId,
        teacherName: classNames.teacherName,
        gradeLevelDescription: classNames.gradeLevelDescription,
        gradeLevelNumber: classNames.gradeLevelNumber,
        userId: user.id,
      };
      createClassName(classNameObj)
        .then(() => getClassNamesByUserId().then((response) => setClassNames(response)));
      setClassNames({
        gradeLevelId: '',
        teacherName: '',
        gradeLevelDescription: '',
        gradeLevelNumber: '',
        id: null,
      });
    }
  };

  return (
    <Form id="addClassNameForm" autoComplete="off" onSubmit={handleSubmit}>
      <ClassNameFormTitle id="ClassNameFormTitle">
        {classNameFormTitle}
      </ClassNameFormTitle>
      <Label className="ClassNameNameLabel"> Teacher Name:</Label>
      <Input
        name="teacherName"
        id="teacherName"
        value={classNames.teacherName}
        type="text"
        placeholder="Enter a Teacher Name"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="gradeLevelDescription">Grade Level Description: </Label>
      <Input
        name="gradeLevelDescription"
        id="gradeLevelDescription"
        value={classNames.gradeLevelDescription}
        type="text"
        placeholder="Enter a Grade Level Description"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="gradeLevelNumber">Grade Level Number: </Label>
      <Input
        name="gradeLevelNumber"
        id="gradeLevelNumber"
        value={classNames.gradeLevelNumber}
        type="text"
        placeholder="Enter a Grade Level Number"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="price">Inventory count: </Label>
      <Input
        name="inventoryCount"
        id="price"
        value={product.inventoryCount}
        type="text"
        placeholder="Enter number of items in stock"
        onChange={handleInputChange}
      ></Input>
      <Label>Product Type:</Label>
      <Input
        className="item"
        type="select"
        name="productTypeId"
        placeholder="Product Type"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        {productTypes?.map((productType) => (
          <Option
            key={productType.id}
            value={productType.id}
            selected={productType.id === productTypeId}
          >
            {productType.typeName}
          </Option>
        ))}
      </Input>
      <Button className="addProduct" type="submit">
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ClassForm.propTypes = {
  productFormTitle: PropTypes.string.isRequired,
  setProducts: PropTypes.func,
  productImageUrl: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.number,
  inventoryCount: PropTypes.number,
  id: PropTypes.string,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  user: PropTypes.any,
  product: PropTypes.any,
};

export default ClassForm;
