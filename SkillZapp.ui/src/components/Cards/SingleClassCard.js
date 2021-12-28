import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SingleProductContainer,
  SingleProductCards,
  SingleProductCardImg,
  SingleProductCardHeader,
  SingleProductCardButtons,
  SingleProductCardEdit,
  SingleProductCardDelete,
  SingleProductCardBody,
  CardTitle,
  CardText,
  Button,
  Button1,
  CartButton,
  Modal,
} from './SingleProductCardElements';
import {
  getProducts,
  deleteProduct,
  getSingleProduct,
} from '../../../helpers/data/productData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const SingleClassCard = ({
  user,
}) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [classNames, setClassNames] = useState({});
  const { id } = useParams();
  // const timeStamp = new Date();
        //  add this to new class or assessment object --->       orderDate: timeStamp.toISOString(),


  useEffect(() => {
    let mounted = true;
    getClassNameById(id).then(setClassNames);
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteClass(id).then(() => getClassNames().then((response) => setClassNames(response)));
        history.push('/Classes');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <SingleProductContainer className='single-product-view'>
      <SingleProductCards
        className='SingleProductCard'
        key={id}
        id='SingleProductCard'
      >
        <SingleProductCardHeader className='SingleProductCardHeader'>
                <SingleProductCardButtons className='SingleProductCardButtons'>
                  {/* make this an add student form on each student card */}
                    <Button1 id='editSingleProduct' onClick={openModal}>
                      <SingleProductCardEdit
                        className='SingleProductCardEdit'
                        src={edit}
                      ></SingleProductCardEdit>
                    </Button1>
                 
                 
                    <Button1
                      id='deleteSingleProduct'
                      onClick={() => handleClick('delete')}
                    >
                      <SingleProductCardDelete
                        className='SingleProductCardDelete'
                        src={deleted}
                      ></SingleProductCardDelete>
                    </Button1>
                  
                </SingleProductCardButtons>
             
        </SingleProductCardHeader>
        <Button>
          <SingleProductCardImg
            className='SingleProductCardImg'
            src={product.productImageUrl}
            onClick={() => handleClick('view')}
          />
        </Button>
        <hr/>
        <SingleProductCardBody>
          <CardTitle tag='h5'>{product.productName}</CardTitle>
          <hr></hr>
          <CardText>{product.productDescription}</CardText>
          <hr></hr>
          <CardText>Price: {product.price}</CardText>
        </SingleProductCardBody>
        <Modal
          isOpen={modalIsOpen}
          className='Modal'
          parentSelector={() => document.querySelector('#ProductContainer')}
        >
          <Button className='modalClose' onClick={closeModal}>
            <SingleProductCardDelete src={deleted} />
          </Button>
          <ProductForm
            productFormTitle='Edit Product'
            productTypeId={product.productTypeId}
            productTypes={productTypes}
            setProducts={setProducts}
            product={product}
            id={id}
            productDescription={product.productDescription}
            productImageUrl={product.productImageUrl}
            productName={product.productName}
            price={product.price}
            inventoryCount={product.inventoryCount}
            user={user}
          />
        </Modal>
      </SingleProductCards>
    </SingleProductContainer>
  );
};

SingleProductCard.propTypes = {
  product: PropTypes.any,
  setProducts: PropTypes.func,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  id: PropTypes.string,
  setCartCount: PropTypes.func,
  setCartId: PropTypes.func,
  user: PropTypes.any,
};

export default SingleProductCard;
