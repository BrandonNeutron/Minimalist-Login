import React, {Component} from 'react';
import '../../App.css';

export default class CreateAccount extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="login-header">Register</div>

                <div class="page">
                    <div class="page__demo">
                        <label class="field a-field a-field_a2 page__field">
                            <input ref="username" class="field__input a-field__input" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">Username</span>
                            </span>
                        </label>
                        <br></br>
                        <label class="field a-field a-field_a2 page__field">
                            <input ref="password" type="password" class="field__input a-field__input" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">Password</span>
                            </span>
                        </label>
                        
                    </div>
                    <div>
                        <div className="create-button">
                            Create
                        </div>
                        <div className="submit-button" onClick={this.submitClick}>
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}