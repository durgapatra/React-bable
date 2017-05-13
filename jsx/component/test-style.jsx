import React from "react";

export default class StyleInpBox extends React.Component {
    constructor() {
        super();
        this.state = {
            myColorMode: true
        }
    }
    onFocusInPutBox() {
        this.refs.inputBox.style.borderBottom = "2px solid blue";
        this.refs.label.style.top = "-15px";
        this.refs.label.style.fontSize = "15px"
        this.refs.label.style.color = "blue";
        this.refs.bar.style.color = "blue";
        this.setState(this.state);
    }
    onBlurInp() {
        if (!this.refs.inputBox.value) {
            this.refs.inputBox.style.borderBottom = "2px solid gray";
            this.refs.label.style.top = "-2px";
            this.refs.label.style.fontSize = "18px"
            this.refs.label.style.color = "gray";
            this.refs.bar.style.color = "gray";
        }

        this.setState(this.state);
    }
    handleKeyUp(e) {
        if (e.target.value) {
            this.props.handleKeyUp(e.target.value);
        }
    }
    componentDidUpdate() {
        if (this.props.onRed == true) {
            this.refs.inputBox.style.borderBottom = "2px solid red";
            this.refs.label.style.color = "red";
            this.refs.bar.style.color = "red";
        } else {
            if (this.props.onRed == false && this.refs.inputBox.style.borderBottom == "2px solid red") {
                this.refs.inputBox.style.borderBottom = "2px solid blue";
                this.refs.label.style.color = "blue";
                this.refs.bar.style.color = "blue";
            }
        }


    }
    render() {
        return (
            <div className="inpputContainer" ref="inpputContainer" style={this.props.Width ? { width: this.props.Width } : { width: "200px" }}>
                <input type={this.props.inputType ? this.props.inputType : "text"} style={this.props.Width ? { width: this.props.Width } : { width: "200px" }} onKeyUp={this.handleKeyUp.bind(this)} ref="inputBox" className="inputBox" onFocus={this.onFocusInPutBox.bind(this)} onBlur={this.onBlurInp.bind(this)} />
                <span className="nearbar" ref="bar">{this.props.nearBarMsg ? this.props.nearBarMsg : ""}</span>
                <span className="InputLabel" ref="label">{this.props.placeholder ? this.props.placeholder : "plase give a placeholder"}</span>
            </div>
        )
    }
}