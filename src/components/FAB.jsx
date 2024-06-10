import React, { act, useEffect, useState } from 'react';
import '../styles/fab.css'
import { NotebookPen, X, Flag, SquarePen, MessagesSquare, ThumbsUp, ThumbsDown, Paperclip } from 'lucide-react';

const FAB = ({ login, loginemail }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

    const [submitdisabled, setSubmitDisabled] = useState(true)
    
    const [issuedet, setIssueDet] = useState({ section: "", issue: "", email: "" })
    const [feedbackdet, setFeedbackDet] = useState({ feedback: "", anonymous: "NA", email: "" })
    const [suggestiondet, setSuggestionDet] = useState({ section: "", suggestion: "", email: "" })
    const [contactdet, setContactDet] = useState({ name: "", query: "", email: "", number: "" })

    const [showthankyou, setShowThankYou] = useState(false);
    const [thankyoumsg, setThankYouMsg] = useState("");

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);

    const toggleOptions = () => {
        if (activeOption !== null) {
            setActiveOption(null);
            setIsOpen(!isOpen);
            resetfields()
        } else {
            setIsOpen(!isOpen);
        }
    };


    const handleOptionClick = (option) => {
        setActiveOption(option);
        setSubmitDisabled(true);
        setSelectedFiles([])
        setFilePreviews([])
    };

    useEffect(() => {
        if (activeOption === "issue") {
            setThankYouMsg("Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!")
        }
        else if (activeOption === "feedback") {
            setThankYouMsg("Thanks for your valuable feedback!")

        }
        else if (activeOption === "suggestion") {
            setThankYouMsg("Thanks for your valuable Suggestion!")

        }
        else if (activeOption === "contact") {
            setThankYouMsg("Thanks for reaching out to us! We will get back to you as soon as possible")

        }
    }, [activeOption])

    useEffect(() => {
        resetfields()
    }, [login])

    useEffect(() => {
        if (!login) {

            if (activeOption === "issue" && issuedet.issue && issuedet.email) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "feedback" && feedbackdet.feedback && feedbackdet.email) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "suggestion" && suggestiondet.suggestion && suggestiondet.section && suggestiondet.email) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "contact" && contactdet.name && contactdet.email && contactdet.query) {
                setSubmitDisabled(false);
            }

            else {
                setSubmitDisabled(true);
            }
        }

        else {

            if (activeOption === "issue" && issuedet.issue) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "feedback" && feedbackdet.feedback) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "suggestion" && suggestiondet.suggestion && suggestiondet.section) {
                setSubmitDisabled(false);
            }

            else if (activeOption === "contact" && contactdet.name && contactdet.query) {
                setSubmitDisabled(false);
            }

            else {
                setSubmitDisabled(true);
            }
        }

    }, [issuedet, activeOption, feedbackdet, suggestiondet, contactdet, login])

    function resetfields() {
        setIssueDet({ section: "", issue: "", email: "" })
        setFeedbackDet({ feedback: "", anonymous: "NA", email: "" })
        setSuggestionDet({ section: "", suggestion: "", email: "" })
        setContactDet({ name: "", query: "", email: "", number: "" })
        setSelectedFiles([])
        setFilePreviews([])

    }

    const handleIssueChange = (e) => {
        const { name, value } = e.target;
        setIssueDet(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFeedbackChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFeedbackDet(prevState => ({
            ...prevState,
            [name]: fieldValue
        }));
    }

    const handleSuggestionChange = (e) => {
        const { name, value } = e.target;
        setSuggestionDet(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactDet(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        toggleOptions()
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 5000); // Hide after 3 seconds
        // Add your form submission logic here
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + selectedFiles.length <= 2) {
            setSelectedFiles(prevFiles => [...prevFiles, ...files]);

            const fileURLs = files.map(file => URL.createObjectURL(file));
            setFilePreviews(prevPreviews => [...prevPreviews, ...fileURLs]);
        } else {
            // Display an error message or prevent further selection
        }
    };

    return (
        <div className="fab-container">
            {showthankyou && <div className="thank-you-message"><p>{thankyoumsg}</p></div>}

             {/* Overlay */}
             {isOpen && <div className="overlay active" onClick={toggleOptions}></div>}

            <div className={`fab ${activeOption !== null ? 'open' : ''}`} onClick={toggleOptions}>
                <span className="fab-icon">{isOpen || activeOption !== null ? <X color='black' /> : <NotebookPen color='black' />}</span>
            </div>
            
            {isOpen && (
                <div className="fab-options">
                    {activeOption === null ? (
                        <>
                            <div className="fab-option" onClick={() => handleOptionClick('issue')}>
                                <span className='heading'>Report an Issue</span>
                                <span className='icon'><Flag /></span>
                            </div>
                            <div className="fab-option" onClick={() => handleOptionClick('feedback')}>
                                <span className='heading'>Share Feedback</span>
                                <span className='icon'><ThumbsUp /><ThumbsDown /></span>
                            </div>
                            <div className="fab-option" onClick={() => handleOptionClick('suggestion')}>
                                <span className='heading'>Give Suggestion</span>
                                <span className='icon'><SquarePen /></span>
                            </div>
                            <div className="fab-option" onClick={() => handleOptionClick('contact')}>
                                <span className='heading'>Contact Us</span>
                                <span className='icon'><MessagesSquare /></span>
                            </div>
                        </>
                    ) : (
                        <>
                        <div className="fab-new-content">

                            {activeOption === 'issue' &&
                                <div className='header'>
                                    <p>Let us know about the Issue you are facing right now!</p>
                                    <hr />

                                    <div className='content'>
                                        <div className='select'>
                                            <label htmlFor="section" className='section'>Choose a section</label>
                                            <select id="section" name="section" value={issuedet.section}
                                                onChange={handleIssueChange}>
                                                <option value="interview">Interview Questions</option>
                                                <option value="concept">Concept Cards</option>
                                                <option value="practise">Practise Questions</option>
                                                <option value="quiz">Quizzes</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <label htmlFor="issue" className='textbox-label'>Describe the issue in detail <strong>*</strong></label>
                                        <div className="textbox-wrapper">
                                            <input type="text" name="issue" id="" className='textbox' placeholder='Write here...' required value={issuedet.issue} onChange={handleIssueChange} />
                                            
                                            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} disabled={selectedFiles.length >= 2} />
                                            <button type="button" className="attach" disabled={selectedFiles.length >= 2} onClick={() => document.getElementById('file-upload').click()}><Paperclip size={12} />Attach</button>
                                            <div className="file-previews">
                                                {filePreviews.map((preview, index) => (
                                                    <div key={index} className="file-preview">
                                                        <img src={preview} alt={`file preview ${index}`} style={{ width: '50px', height: '50px' }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {!login &&
                                            <div className='profile'>
                                                <label htmlFor="profile" className='profile-label'>Enter your email to receive an update<strong>*</strong></label>
                                                <input type="email" name="email" id="email" placeholder='Enter your Email' required value={issuedet.email} onChange={handleIssueChange} />
                                            </div>
                                        }
                                    </div>

                                    <div className='btn'>
                                        <input type="submit" onClick={handleSubmit} disabled={submitdisabled} value="Submit" className='submit' />
                                    </div>

                                </div>
                            }

                            {activeOption === 'feedback' &&
                                <div className='header'>
                                    <p>Let us know your <span>Feedback</span> about us!</p>
                                    <hr />

                                    <div className='content'>
                                        <div className="textbox-wrapper">
                                            <input type="text" name="feedback" id="" className='textbox' placeholder='Write here...' required value={feedbackdet.feedback} onChange={handleFeedbackChange} />
                                            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} disabled={selectedFiles.length >= 2} />
                                            <button type="button" className="attach" disabled={selectedFiles.length >= 2} onClick={() => document.getElementById('file-upload').click()}><Paperclip size={12} />Attach</button>
                                            <div className="file-previews">
                                                {filePreviews.map((preview, index) => (
                                                    <div key={index} className="file-preview">
                                                        <img src={preview} alt={`file preview ${index}`} style={{ width: '50px', height: '50px' }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {login ?
                                            (
                                                <div className='checkbox'>
                                                    <input type="checkbox" name="anonymous" id="anonymous" className='anonymous' value={feedbackdet.anonymous} onChange={handleFeedbackChange} />
                                                    <label htmlFor="anonymous">Send feedback anonymously</label>
                                                </div>
                                            ) : (
                                                <div className='profile'>
                                                    <label htmlFor="email" className='profile-label'>Enter your email to receive an update <strong>*</strong></label>
                                                    <input type="email" name="email" id="email" placeholder='Enter your Email' value={feedbackdet.email} onChange={handleFeedbackChange} />
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className='btn'>
                                        <input type="submit" onClick={handleSubmit} value="Submit" disabled={submitdisabled} className='submit' />
                                    </div>

                                </div>
                            }

                            {activeOption === 'suggestion' &&
                                <div className='header'>
                                    <p>Share your <span>Suggestions</span> with us for a chance to earn rewards!</p>
                                    <hr />

                                    <div className='content'>
                                        <div className='select'>
                                            <label htmlFor="section" className='section'>Choose a section</label>
                                            <select id="section" name="section" value={suggestiondet.section} onChange={handleSuggestionChange}>
                                                <option value="select">Select</option>
                                                <option value="interview">Interview Questions</option>
                                                <option value="concept">Concept Cards</option>
                                                <option value="practise">Practise Questions</option>
                                                <option value="quiz">Quizzes</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <label htmlFor="suggestion" className='textbox-label'>Describe the suggestion in detail <strong>*</strong></label>
                                        <div className="textbox-wrapper">
                                            <input type="text" name="suggestion" id="" className='textbox' placeholder='Write here...' value={suggestiondet.suggestion} onChange={handleSuggestionChange} />
                                            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} disabled={selectedFiles.length >= 2} />
                                            <button type="button" className="attach" disabled={selectedFiles.length >= 2} onClick={() => document.getElementById('file-upload').click()}><Paperclip size={12} />Attach</button>
                                            <div className="file-previews">
                                                {filePreviews.map((preview, index) => (
                                                    <div key={index} className="file-preview">
                                                        <img src={preview} alt={`file preview ${index}`} style={{ width: '50px', height: '50px' }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {!login &&
                                            <div className='profile'>
                                                <label htmlFor="email" className='profile-label'>Enter your email to receive an update<strong>*</strong></label>
                                                <input type="email" name="email" id="email" placeholder='Enter your Email' value={suggestiondet.email} onChange={handleSuggestionChange} />
                                            </div>
                                        }

                                    </div>

                                    <div className='btn'>
                                        <input type="submit" onClick={handleSubmit} disabled={submitdisabled} value="Submit" className='submit' />
                                    </div>

                                </div>
                            }

                            {activeOption === 'contact' &&
                                <div className='header'>
                                    <p>Let us know what <span>your queries</span> are!</p>
                                    <hr />

                                    <div className='content' id='query'>
                                        <div className='profile'>
                                            <label htmlFor="name" className='profile-label'>Your Name <strong>*</strong></label>
                                            <input type="text" name="name" id="name" placeholder='Enter your Name' value={contactdet.name} onChange={handleContactChange} />
                                        </div>


                                        {!login &&
                                            <>
                                                <div className='profile'>
                                                    <label htmlFor="email" className='profile-label'>Your email <strong>*</strong></label>
                                                    <input type="email" name="email" id="email" placeholder='Enter your Email' value={contactdet.email} onChange={handleContactChange} />
                                                </div>

                                                <div className='profile'>
                                                    <label htmlFor="number" className='profile-label'>Your Mobile Number</label>
                                                    <input type="number" name="number" id="number" placeholder='Enter your number' value={contactdet.number} onChange={handleContactChange} />
                                                </div>
                                            </>
                                        }

                                        <label htmlFor="query" className='textbox-label'>What would you like to ask? <strong>*</strong></label>
                                        <div className="textbox_que">
                                            <input type="text" name="query" id="" className='textbox' placeholder='Write here...' value={contactdet.query} onChange={handleContactChange} />

                                        </div>


                                    </div>

                                    <div className='btn'>
                                        <input type="submit" onClick={handleSubmit} value="Submit" disabled={submitdisabled} className='submit' />
                                    </div>

                                </div>
                            }


                            <div className="fab-option-icons">
                                <span className='icon' onClick={() => handleOptionClick('contact')}><MessagesSquare /></span>
                                <span className='icon' onClick={() => handleOptionClick('suggestion')}><SquarePen /></span>
                                <span className='icon' onClick={() => handleOptionClick('feedback')}><ThumbsUp /><ThumbsDown /></span>
                                <span className='icon' onClick={() => handleOptionClick('issue')}><Flag /></span>
                            </div>
                        </div>

                    </>
                    
                    )}
                </div>
            )}
        </div>
    );
};

export default FAB;
