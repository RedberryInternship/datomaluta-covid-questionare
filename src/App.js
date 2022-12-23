import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartingPage } from './pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<StartingPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
