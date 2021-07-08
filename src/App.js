import React, { useState } from 'react';
import SimpleList from './components/SimpleList';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const [{ open, message }, setSnackbar] = useState({
    open: false, 
  });

  const [users, setUsers] = useState([
    'A', 
    'B', 
    'C',
    'D',
  ]);

  const [files, setFiles] = useState([
    '1', 
    '2', 
    '3',
    '4',
  ]);

  const onUserItemClick = (user) => {
    setSnackbar( { open: true, message: user });
    setUsers([...users, user]);
  };

  const onFileItemClick = (file) => {
    setSnackbar( { open: true, message: file });
    setFiles([...files, file]);
  };

  return (
    <div>
    <Snackbar
        open={open}
        message={message}
      />
    <SimpleList users={users} files={files} onUserItemClick={onUserItemClick} onFileItemClick={onFileItemClick}  />
    </div>
  );
}

export default App;
