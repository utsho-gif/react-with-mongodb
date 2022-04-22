import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUSer from './Component/AddUSer/AddUSer';
import Home from './Component/Home/Home';
import UpdateUser from './Component/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUSer></AddUSer>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
