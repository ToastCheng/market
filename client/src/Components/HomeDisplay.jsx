import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Stack } from '@mui/material';
import { fetchProducts, setProducts } from '../redux/actions/productsActions';
import Postsection from './Postsection';
import Sidebar from './Sidebar/Sidebar';

function HomeDisplay() {
  const products = useSelector((state) => state.productsReducer.products);
  const filter = useSelector((state) => state.productsReducer.filters);
  console.log('products at homedisplay', products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [selectedTab, setSelectedTab] = useState('sell');
  const handleTabChange = (event, selectedTab) => {
    setSelectedTab(selectedTab);
    console.log('tabswitch click!');
  };

  return (
    <Box bgcolor="skyblue" padding={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar selectedTab={selectedTab} />
        <Postsection
          products={products}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        />
      </Stack>
    </Box>
  );
}

export default HomeDisplay;
