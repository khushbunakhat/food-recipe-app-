import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent'
import Login from './Login'
import RecipeDetail  from './RecipeDetail';
import Home from './Home';
import Nav from './Nav';

const Router =()=>{
    return(
    <div>
    <BrowserRouter >
    <Nav />
   <Routes>
   <Route element={<PrivateComponent />}>
   <Route path="/" element={<Home />} />
     <Route path="/recipeDetail/:id" element={<RecipeDetail />} />
     <Route path="/logout" element={<Login />} />
     </Route>
     <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
     </div>
)
}
export default Router