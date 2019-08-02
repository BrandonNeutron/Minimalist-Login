import React, { Component } from 'react';
import Firebase from 'firebase';
import '../../App.css';
import config from '../../config'
import CreateAccount from '../create-account/CreateAccount';

export default class Login extends Component{
    constructor(props){
        super(props);

        Firebase.initializeApp(config);

        this.state = {
            users:[],
            displayCreate: false
        }

        this.submitClick = this.submitClick.bind(this);
        this.createClick = this.createClick.bind(this);
        this.writeUserData = this.writeUserData.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    writeUserData(){
      Firebase.database().ref('/').set(this.state);
      console.log("DATA SAVED");
    }
    
    getUserData(){
        var ref = Firebase.database().ref('/');
    
        console.log("REF: ", ref);

        ref.on('value', snapshot => {
            const state = snapshot.val();
            console.log("STOOT: ", state)
            this.setState(state);
        });
   
        console.log("Data retrieved");

        console.log("STATE: ", this.state);
    }
  
    componentDidMount(){
      this.getUserData();
    }
    
    componentDidUpdate(prevProps, prevState){
      if(prevState !== this.state){
        this.writeUserData();
      }
    }

    handleSubmit(event){
        event.preventDefault();

        var username = this.refs.username.value;
        var password = this.refs.password.value;

        if(username && password){
            const {users} = this.state;

            const userIndex = users.findIndex(data => {
                return data.username === username;            
            })

            users[userIndex].username = username;
            users[userIndex].password = password;
        }

        this.refs.username.value = '';
        this.refs.password.value = '';
        
    }

    submitClick(){ 
        this.getUserData();

        var username = this.refs.username.value;
        var password = this.refs.password.value;

        if(username && password){
            console.log("USER: ", username);
            console.log("PASS: ", password);
        }
    }

    createClick(){
        this.setState({displayCreate: true});
    }

    render(){
        if(!this.state.displayCreate){
            return(
                <div>
                    <div className="login-header">LOGIN</div>

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
                            <div className="create-button" onClick={this.createClick}>
                                Create
                            </div>
                            <div className="submit-button" onClick={this.submitClick}>
                                Submit
                            </div>
                        </div>

                    </div>
                
                </div>
            )
        } else{
            return(
                <CreateAccount/>
            )
        }
    }
}