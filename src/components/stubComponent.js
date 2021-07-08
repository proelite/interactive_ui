import React from 'react';
import Button from '@material-ui/core/Button';
import { List } from '@material-ui/core';

function stubComponent(props) {
  return (<Button variant="contained" color="primary">
          Hello World
     </Button>);
}

export default React.memo(stubComponent);