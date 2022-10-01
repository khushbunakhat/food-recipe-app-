import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    const handleBack=()=>{
        navigate('/')
    }
    console.log('hey', window.location.href)
    return (
        <div>
            {
                auth ?
                    <ul className="nav-ul nav-right">
                        {window.location.href.includes("recipeDetail") &&
                         <img onClick={handleBack}style={{marginRight:"400px", cursor:'pointer'}}width="25px" height="25px"src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"/>}
                         <li style={{textAlign:'center', marginRight:'500px', fontSize:'24px',fontSize:'bold'}}><Link to="/">Food Recipes</Link></li>
                         <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li> 
                    </ul> 
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;