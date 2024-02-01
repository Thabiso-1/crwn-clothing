import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';



const Shop =()=>{
  return <h1>I am the shop</h1>
};

const Contact =() =>{
  return <h1>I am the contact</h1>
}



const Cart =() =>{
  return <h1>I am the cart</h1>
}

const App =() => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
      
      
  );
}

export default App;
