import React from "react";
import $ from "jquery";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            student: {}
        }
    }

    handleClick() {
        var myInit = {
            method: 'POST',

             body: JSON.stringify({a: 7, str: 'Some string: &=&'})
        };

        fetch("/mydata", myInit).then((response) => {
            console.log(response);
            if (response.ok) {
                console.log("it is successfully send a post request");
                return response.json();
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log("errrrrr", err);
        })
    }

    clickAjax() {
        console.log($.ajax({}));
        $.ajax({
            type: 'POST',
            url: "mydata",
            data:JSON.stringify(this.refs.inputData.value)
        }).done((data) => {
            console.log("it is successfully send a ajax post request");
        })
    }
    render() {

        return (
            <div>
                <h2>
                    wellcome to home page durga {this.state.student.name}
                </h2>
                <input type="text" ref="inputData" />
                <button onClick={this.handleClick.bind(this)}>fetch</button>
                <button onClick={this.clickAjax.bind(this)}>ajax</button>
            </div>
        )
    }
}