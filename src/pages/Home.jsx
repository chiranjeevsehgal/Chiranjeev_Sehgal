import { useState } from "react";
import FAB from "../components/FAB";
import Navbar from "../components/Navbar";
import Question from "../components/Questions";
import '../styles/home.css'
import { Flag, MessagesSquare, SquarePen, ThumbsDown, ThumbsUp } from "lucide-react";

function Home(){
    const [login, setLogin] = useState(false)
    const email = "demo@gmail.com"

    const options = [
        { id: 'issue', icon: <Flag />, title: 'Report an Issue' },
        { id: 'feedback', icon: <><ThumbsUp /><ThumbsDown /></>, title: 'Share Feedback' },
        { id: 'suggestion', icon: <SquarePen />, title: 'Give Suggestion' },
        { id: 'contact', icon: <MessagesSquare />, title: 'Contact Us' }
      ];
    return(
        <div>
            <Navbar login={login} setLogin={setLogin} />
            <Question/>
            <FAB options={options} activeOptions={['issue','feedback','suggestion','contact']} login={login} loginemail={email} />
            </div>
    )
}

export default Home;