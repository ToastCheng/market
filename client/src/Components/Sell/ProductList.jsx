import React from 'react';
import {
  Divider, Grid, Pagination, styled,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useDispatch } from 'react-redux';
import Product from './Product';
import { setPage, setPageAndFetch } from '../../redux/actions/productsActions';

// this styled div should also take care of grid styling
// to make each card responsive to screen sizes
const Wrapperstyle = styled('div')({
  padding: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
});

function ProductList(props) {
  const { products } = props; // deconstruction
  const dispatch = useDispatch();

  console.log('print something', products);

  const onPageSelected = (event, value) => {
    dispatch(setPageAndFetch(value));
  };

  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component */}
      <Stack sx={{ width: '1400px' }}>
        <Grid
          container
          justifyContent="flex-start"
        >
          {products.map((product, i) => <Product product={product} key={i} />)}
        </Grid>
        <Divider sx={{ m: '12px' }} />
        <Grid container justifyContent="center">
          <Pagination count={3} variant="outlined" shape="rounded" onChange={onPageSelected} />
        </Grid>
      </Stack>
    </Wrapperstyle>
  );
}

export default ProductList;
