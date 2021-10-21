import "./form.css";
import { useState } from "react";

const Form = () => {
    const[clicked, setClick] = useState("v_likely");

    const clickedRadio = (e) => {
        setClick(e.target.name);
    }

    return (
        <div className="form">
            <div>Survey Form</div>
            <div style={{ fontSize: "15px", fontFamily: "cursive", marginBottom: "20px" }}>Thank you for taking the time to help us improve the platform</div>
            <div className="container">
                <div>
                    <label>Name</label>
                    <input className="input" type="text" placeholder="Enter Your Name Here"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input className="input" type="email" placeholder="Enter Your Email"></input>
                </div>
                <div>
                    <label>Age(optional)</label>
                    <input className="input" type="number" placeholder="Age"></input>
                </div>
                <div>
                    <label>Which option best describes your current role?</label>
                    <select className="options" name="options">
                        <option value="" disabled selected>Select current role</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                        <option value="e">E</option>
                        <option value="f">F</option>
                        <option value="g">G</option>
                    </select>
                </div>
                <div className="radio_button" style={{ fontSize: "12px" }}>
                    <label>Would you recommend to a friend?</label>
                    <div className="radio">
                        <div>
                            <input type="radio" name="v_likely" value={clicked} checked={clicked === "v_likely"} onClick={clickedRadio}></input>
                            <label>Very Likely</label>
                        </div>
                        <div>
                            <input type="radio" name="likely" value={clicked} checked={clicked === "likely"} onClick={clickedRadio}></input>
                            <label>Likely</label>
                        </div>
                        <div>
                            <input type="radio" name="think" value={clicked} checked={clicked === "think"} onClick={clickedRadio}></input>
                            <label>Will Think</label>
                        </div>
                        <div>
                            <input type="radio" name="no" value={clicked} checked={clicked === "no"} onClick={clickedRadio}></input>
                            <label>Not At All</label>
                        </div>
                    </div>
                </div>
                <div className="check">
                    <label>What would you like to see improved? <span style={{ fontSize: "10px" }}>(Check all that apply)</span></label>
                    <div className="box">
                        <div>
                            <input type="checkbox" value="front_end"></input>
                            <label>Front-End Projects</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Back-End Projects</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Data Visualization</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Challenges</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Open Source Community</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Gitter Help Rooms</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Videos</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>City Meetups</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Wiki</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Forum</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Additional Courses</label>
                        </div>
                    </div>
                </div>
                <div className="commentBox">
                    <label>Any comment or suggestions?</label>
                    <div>
                        <textarea rows="5" placeholder="Enter your comments here"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default Form;

