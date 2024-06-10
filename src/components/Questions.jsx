import { ArrowLeft, Eye, Info, Pencil, ThumbsUp, MessageSquareMore } from "lucide-react";
import '../styles/question.css'

function Question() {
    return (
        <>
            {/* Back to question Header */}
            <div className="question-header">
                <ArrowLeft />
                <p>Back to Questions</p>
            </div>

            {/* Question */}

            <div className="question-body">
                <div className="body-head">
                    <div className="tag">
                        <p>Design</p>
                        <p>Technology</p>
                    </div>

                    <img src="rocket.png" alt="" />

                </div>
                <div className="content">
                    <p>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </p>
                    <p>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
                </div>
                <div className="subdetails">
                    <div className="views">
                        <Eye size={18} />
                        <p>100 Views</p>
                    </div>
                    <button className="dummy"> <div className="info">
                        <Info size={13} />
                        <p>How should you word your answer?</p>
                    </div></button>
                </div>
            </div>

            {/* Separator */}
            <div className="body-separator">
                <div className="answer">
                    <p>Answers (23)</p>
                </div>
                <div className="sort">
                    <p>Sort By:</p>
                    <select id="sort" name="sort">
                        <option value="popular">Popular</option>
                        <option value="recent">Recent</option>
                    </select>
                </div>


            </div>

            {/* Answers */}
            <div className="answer-body">
                <div className="body-head">
                    <div className="profile">
                        <img src="user.png" alt="" />
                        <div className="detail">
                            <p className="name">Neha Bhat  <span>(You)</span></p>
                            <p>Jun 27, 2023</p>
                        </div>
                    </div>

                    <button className="dummy"><div className="edit">
                        <Pencil size={14} />
                        <p>Edit</p>
                    </div></button>



                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... <button className="dummy"><span>Show more</span></button></p>
                </div>
                <div className="subdetails">
                    <button className="dummy"> <div className="like">
                        <ThumbsUp size={14} />
                        <p>Like</p>
                    </div>
                    </button>
                    <div className="comment">
                        <MessageSquareMore size={20} />
                        <input type="text" name="" id="" placeholder="Add a comment" />
                        <input type="button" value="Post" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;