import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor ] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return (props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  },[props.basePrice, props.sizes, currentSize]);
  
  const addToCart = () => {
    console.log('Name:', props.title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);

  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={props.currentColor} title={props.title} />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm addToCart={addToCart} sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={setCurrentSize} colors={props.colors} currentColor={props.currentColor} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  );
};

Product.propTypes = {
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
basePrice: PropTypes.number.isRequired,
colors: PropTypes.array.isRequired, 
sizes: PropTypes.array.isRequired
};

export default Product;