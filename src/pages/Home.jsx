import { useState } from "react";
import FAB from "../components/FAB";
import Navbar from "../components/Navbar";
import Question from "../components/Questions";
import '../styles/home.css'

function Home(){
    const [login, setLogin] = useState(false)
    const email = "demo@gmail.com"

    const options = [
        { id: 'issue', icon: "issue.png", title: 'Report an Issue' },
        { id: 'feedback', icon: "feedback.png", title: 'Share Feedback' },
        { id: 'suggestion', icon: "suggestion.png", title: 'Give Suggestion' },
        { id: 'contact', icon: "contact.png", title: 'Contact Us' }
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