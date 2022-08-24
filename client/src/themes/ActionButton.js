import { Button, styled } from '@mui/material';

export default styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.otherColor,
  color: '#888',
  margin: 5,
  '&:hover': {
    backgroundColor: 'lightblue',
  },
  '&:disabled': {
    backgroundColor: 'gray',
    color: 'white',
  },
}));
