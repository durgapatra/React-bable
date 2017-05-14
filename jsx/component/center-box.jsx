import React from "react";
import StyleInpBox from "./style-input-box";

export default class Master extends React.Component {
    constructor() {
        super();
        this.state = {
            schoolMode: false
        }
    }
    enterName(e) {
        console.log("name", e);
    }
    enterAddress(e) {
        console.log("address", e);
    }
    enterSchool(e) {
        console.log("school", e);
        if (e == 13) {
            this.state.schoolMode = true;
        } else {
            this.state.schoolMode = false;
        }
        this.setState(this.state);
    }
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="box">
                        <i className="fa fa-credit-card" style={{ fontSize: "50px", color: "white", alignSelf: "center" }} aria-hidden="true"></i>
                        <p style={{ fontSize: "20px", color: "white", alignSelf: "center", margin: "0" }}>We care for you money </p>
                    </div>
                    <div className="box1">
                        <div className="inpBox">
                            <StyleInpBox
                                placeholder="Enter your Name"
                                nearBarMsg="Enter your Name"
                                Width="300px"
                                handleKeyUp={this.enterName.bind(this)}
                            />
                            <StyleInpBox
                                placeholder="Enter your Address"
                                nearBarMsg=""
                                Width="300px"
                                handleKeyUp={this.enterAddress.bind(this)}
                            />
                            <StyleInpBox
                                placeholder="Enter your School"
                                nearBarMsg="Enter your School"
                                inputType="number"
                                Width="300px"
                                onRed={this.state.schoolMode}
                                handleKeyUp={this.enterSchool.bind(this)}
                            />
                        </div>
                        <div className="right-butoom"></div>
                    </div>
                </div>

            </div>
        )
    }
}