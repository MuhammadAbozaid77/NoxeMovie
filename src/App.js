import React from 'react' ;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import Tvshow from './Component/Tvshow/Tvshow';
import People from './Component/People/People';
import About from './Component/About/About';
import Networks from './Component/Networks/Networks';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Notfound from './Component/Notfound/Notfound';
import Details from './Component/Details/Details';


let routers = createBrowserRouter([
  {path: "/" , element : <Layout/> , errorElement : <Notfound/>, children : [
    {index:true , element : <Home/>},
    {path: 'movies' , element : <Movies/>},
    {path: 'tvshow' , element : <Tvshow/>},
    {path: 'people' , element : <People/>},
    {path: 'about' , element : <About/>},
    {path: 'networks' , element : <Networks/>},
    {path: 'login' , element : <Login/>},
    {path: 'register' , element : <Register/>},
    {path: 'details/:mediaType/:id' , element :   <Details/> },

  ]}
])


export default function App() {
  return <>

    < RouterProvider router={routers} /> 

  </>
}

