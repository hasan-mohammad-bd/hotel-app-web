import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home/Home';
import About from './conponents/About/About';
import Packages from './conponents/Packages/Packages';
import CheckOut from './conponents/CheckOut/CheckOut';
import Signin from './conponents/Signin/Signin';
import Login from './conponents/Login/Login';
import NoPageFound from './conponents/NoPageFound/NoPageFound';
import Header from './conponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/packages" element={<Packages></Packages>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NoPageFound></NoPageFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
