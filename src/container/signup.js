import React, {Component} from 'react'
import {fireApp,auth,database} from './config'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import * as matui from 'material-ui'
import lock from './images/lock.png'
import logo from './images/logo.png'
// import {FormControl,FormGroup,form,ControlLabel } from 'react-bootstrap'
import {Link, BrowserRouter,Route,withRouter} from 'react-router-dom'
import Contact from '../component/contact'
import './login.css'

class Signup extends React.Component {
    constructor(props){ 
    super(props);

    this.state = {
      open: false,
      email : '',
      password: '',
      username: '',
      error: {
        message: '',
      }

    }
      
  
//   handleClick = () => {
//     this.setState({
//       open: true,
//     });
//   };
  
//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   };
    
  //update app after exams
}
  createUserAccount (e) {
      e.preventDefault();
      const {username,email, password} = this.state;
       
      // this.props.userListState(this.state);
      fireApp.auth().createUserWithEmailAndPassword(email,password)
      .then((res) => {
      console.log("succesfull")
      const _uid = fireApp.auth().currentUser.uid;
      //send and get _uid from fb
      fireApp.database().ref("users/"+_uid) .set({
        username: username,
        email: email
      })
      //  .push(this.state.username.value,this.state.email.value)
     console.log(res)
      console.log("succesfully done sign up")
      fireApp.database().ref("users/")
      .on('value',(snap)=> {
        console.log("Succesfully loggen in")
        this.props.history.push("/userDashboard")
      })
      })
      .catch(error => {
        console.log(error)
        this.setState({error})
      })
  
      
      }
    
    render() {
      const isInvalid = this.state.username === '' ||  this.state.email === '' || this.state.password === '' ;
      return (

        <div>
        <BrowserRouter >
        <Route path="/contact" component={Contact} />
        </BrowserRouter>
        <div>   
            <matui.AppBar 
               title="Divine Consultant"
            //    iconClassNameRight="Login"
               />
        </div>
        <matui.Card  className='crime-card'>
        <div> 
              <img src={logo} className='logo'  />  
        </div>
                <img className='lock' src={lock} style={{height: '55px' }} /> 
                <p>  Member Login  </p>
              <form onSubmit={this.createUserAccount.bind(this)} >
               <matui.CardText>
               <matui.TextField 
                  style={{ width: '100%' }}
                  type='text' 
                  floatingLabelText="User Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  ref="username"
                  id="username"
                  value={this.state.username}
                  onChange={eve => this.setState({username: eve.target.value} )}    
                  required
                  />
  
                <matui.TextField 
                style={{ width: '100%' }}
                type='text' 
                value={this.state.email}
                floatingLabelText="Email"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}              onChange={eve => this.setState({email: eve.target.value} )}    
                required
                 />
                 <matui.TextField 
                  style={{ width: '100%', textAlign: "center" }}
                  floatingLabelText="Password"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                   type='password' 
                  value={this.state.password}
                  onChange={eve => this.setState({password: eve.target.value} )}    
                  required
                   />
                   </matui.CardText>
                   <matui.CardActions>
                    <matui.RaisedButton label="Submit"
                     type="submit" primary={true} className="button"
                     disabled={isInvalid}
                      styles={styles}> 
                      </matui.RaisedButton> 
                      <matui.Snackbar
                       open={this.state.open}
                       message="Thanks For Joining Us"
                      style={{color: 'red'}}
                      autoHideDuration={4000}
                      onRequestClose={this.handleRequestClose}
                    /> 
                 </matui.CardActions> 
                  <p style={{color: 'red'}}> {this.state.error.message} </p> <br/>
                  {/* <button  type='submit' > Sign up </button> */}
                 
              </form>  
              <div> <Link to='/' >
                      <matui.FlatButton
                         label="Login"                
                         className="long-loginBtn"
                         icon={<PersonAdd />}
                      />
                     </Link>  </div>
              </matui.Card>
                <br/> <br/> 
                </div>
                
       ) ;
    }
      }
      
const styles = {
 
    floatingLabelStyle: {
      color: 'green',
    },
    floatingLabelFocusStyle: {
      color: 'green',
    },
    
  };
export default Signup