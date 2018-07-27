import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TodoContainer from './components/TodoContainer';

const App = ({}) => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <TodoContainer />
    </React.Fragment>
  );
}

export default App;
