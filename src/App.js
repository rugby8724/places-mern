import React from 'react';
import { Routes, Route} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  return(
    <>
    <main>
      <Routes>
        <Route index element={<Users />}/>
        <Route path='/places/new' element={<NewPlace />}/>
        <Route path='*' element={<Users />}/>
      </Routes>

    </main>
    </>
  )
}

export default App;
