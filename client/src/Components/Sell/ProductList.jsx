import React from 'react';
import { Box, styled } from '@mui/material';
import Product from './Product';

// this styled div should also take care of grid styling
// to make each card responsive to screen sizes
const Wrapperstyle = styled('div')({
  // backgroundColor: "blue",
  padding: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
});

function ProductList(props) {
  const { products } = props; // deconstruction

  console.log('print something', products);

  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component */}
      {products.map((product, i) => <Product product={product} key={i} />)}
    </Wrapperstyle>
  );
}

export default ProductList;
