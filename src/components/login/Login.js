import React, { Component } from 'react';
import Firebase from 'firebase';
import '../../App.css';

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="login-header">LOGIN</div>

                <div class="page">
                    <div class="page__demo">
                        <label class="field a-field a-field_a2 page__field">
                            <input class="field__input a-field__input" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">Username</span>
                            </span>
                        </label>
                        <br></br>
                        <label class="field a-field a-field_a2 page__field">
                            <input type="password" class="field__input a-field__input" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">Password</span>
                            </span>
                        </label>


                        
                    </div>

                    <div className="submit-button">
                        Submit
                    </div>

                </div>
                
            </div>
        )
    }
}