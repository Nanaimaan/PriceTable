import React from 'react';
import Register from '../Auth/Register';
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import Homepage from '../UI/Homepage';
import AddProduct from '../Products/AddProduct';


const MainRouts = () => {
    return (
        <Routes>
              <Route path="/" element={<Homepage/>}> </Route>
             <Route path="/signup" element={<Register />}> </Route>
             <Route path="/signin" element={<Login />}>   </Route>
             <Route path="/add" element={<AddProduct />}> </Route>
            

           
        </Routes>
    );
};

export default MainRouts;