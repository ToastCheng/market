import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import Home from './Pages/Home';
import PostRequest from './Pages/PostRequest';
import Account from './Pages/Account';
import Message from './Pages/Message';

function App() {
  gapi.load('client:auth2', () => {
    gapi.auth2.init({
      clientId:
        '381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com',
      plugin_name: 'chat',
    });
  });

  const handleClose = () => {};

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post_request_items" element={<PostRequest />} />
        <Route path="/account" element={<Account />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <Dialog
        open={false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Use Google&apos;s location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

export default App;

// element = {<Home/>} is putting in the component we created (aka Home.js )
