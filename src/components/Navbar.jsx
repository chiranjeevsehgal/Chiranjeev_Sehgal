import { ChevronDown } from 'lucide-react';
import '../styles/navbar.css'
import { useState } from 'react';

function Navbar({login, setLogin}){
    // const [login, setLogin] = useState(false)
    const handleLogin = ()=>{
        setLogin(!login)
    }
    return(
        <>
        <div className="nav">
            <div className="logo">
                <p>THE</p>
                <p className='id'>PRODUCT</p>
                <p>PLATFORM</p>
            </div>
        <ul>
            <button onClick={handleLogin}><li>
                {login ? "Log Out": "Login"}
            </li></button>
            <li>
                Learn <ChevronDown size={20}/>
            </li>
            <li>
                Practise <ChevronDown size={20}/>
            </li>
            <li>
                <img className="user" src="user.png" />
            </li>
        </ul>
        </div>
        </>
    )
}

export default Navbar;