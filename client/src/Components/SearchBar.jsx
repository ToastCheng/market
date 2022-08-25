import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/productsActions';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const fetchbytitle = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/products?title[regex]=${query}`,
    );
    dispatch(setProducts(response.data.products));
    console.log('click submitsearch, keyword', query);
  };

  const keyDownHandler = (event, query) => {
    if (event.key === 'Enter') {
      console.log('User pressed: ', event.key);
      event.preventDefault();
      // call submit function here
      fetchbytitle();
    }
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        placeholder="Feed me some keywords"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <SummitButton id="submitsearch" onClick={fetchbytitle}>
        Submit
      </SummitButton>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
  padding: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  background: papayawhip;
  padding: 0.5em;
  border: 0.25em;
  border-radius: 5px;
  width: 40%;
`;

const SummitButton = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 5px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  vertical-align: baseline;
`;
