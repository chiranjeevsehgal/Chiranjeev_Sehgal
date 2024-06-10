import { useState } from "react";
import FAB from "../components/FAB";
import Navbar from "../components/Navbar";
import Question from "../components/Questions";
import '../styles/home.css'

function Home(){
    const [login, setLogin] = useState(false)
    const email = "demo@gmail.com"
    return(
        <div>
            <Navbar login={login} setLogin={setLogin} />
            <Question/>
            <FAB login={login} loginemail = {email}/>
        </div>
    )
}

export default Home;