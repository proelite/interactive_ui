import React, { useCallback, useState } from 'react';
import SimpleList from './components/SimpleList';

function App() {
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

  const onUserItemClick = useCallback((event) => {
    console.log('event', event);
  }, [users]);

  const onFileItemClick = useCallback((event) => {
    console.log('event', event);
  }, [files]);

  return (
    <SimpleList users={users} files={files} onUserItemClick={onUserItemClick} ononFileItemClick={onFileItemClick}  />
  );
}

export default App;
