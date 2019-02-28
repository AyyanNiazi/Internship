import React from 'react';
import {Link,BrowserRouter,Redirect, Route,withRouter, } from 'react-router-dom'
import * as matui from 'material-ui'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import { auth, database, } from './config'
import './login.css'
import lock from './images/lock.png'
import logo from './images/logo.png'
import { grey500 } from 'material-ui/styles/colors';
import Contact from '../component/congrats';

class Login extends React.Component {
 
 //initialize state
  constructor(props){
    super(props);
    this.state = {
      open: false,
      email: '',
      _uid: null,
      toDasboard: false,
      toAdminDashboard: false,
      password: '',
      error: {
        message: '',
      }
    }
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  Handler(){
    console.log('working')
    
  }
 
  formHandler (eve) {
  eve.preventDefault();
  const {history} = this.props
  const {email, password} = this.state;
  auth.signInWithEmailAndPassword(email, password)
  .then((res) => {
    var isAdmin;
    var uuid= auth.currentUser.uid
    this.setState({
      _uid: uuid,
      email: '',
      password: '',
      error: '',
      toDasboard : true,
    })
    var userRef = database.ref('users/'+uuid)
    // userRef.on('value' , snap => {
    //   isAdmin=snap.val()
    //   if(isAdmin==='admin@gmail.com'){
    //     // this.props.history.push('/adminDashboard')
    //     this.setState({toAdminDashboard:true})
    //     console.log('succesfully admin logged in')
    //   }else{
    //     console.log( "props", this.props)
    //     this.setState({
    //       toDasboard: true
    //     })
    //     // this.props.history.push("/userDashboard")
    //     console.log("succeesfully user logged in")
    //   }
    // }
    // )
    console.log(res)
  })
  .catch((error) => {
    this.setState({error})
  })
 

  console.log(this.state)

}

  render() {
    if(this.state.toDasboard === true){
      return <Redirect to='/contact' />
    }
    // if(this.state.toAdminDashboard === true  && this.state.password === 'q1w2e3'  ){
    //   return <Redirect to='/adminDashboard' />
    // }

    const isInvalid =   this.state.email === '' || this.state.password === '' ;

    return (
      <div>
               <BrowserRouter  >
                <div>
                   <Route path="/contact" component={Contact} />
                   {/* <Route path="/adminDashboard" component={AdminDasboard} /> */}
                  </div>
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
     <form onSubmit={this.formHandler.bind(this)} >
       <matui.CardText>
       <matui.TextField
        type='text' 
        floatingLabelText="Email"
        style={{ width: '100%',textAlign: "center" }}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        value={this.state.email}
        onChange={eve => this.setState({email: eve.target.value} )}    
        required
       />

        <matui.TextField
        type='password' 
        floatingLabelText="Password"
        style={{ width: '100%' }}

        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        value={this.state.password}
        onChange={eve => this.setState({password: eve.target.value} )}    
        required
         />
        <p  style={{color: 'red'}}> {this.state.error.message}</p>
              </matui.CardText>
                <matui.CardActions>
                  <div>
                    <matui.Checkbox
                      label="Remember"
                      className="classRemember"
                      labelStyle={{color: grey500}}
                      iconStyle={{color: grey500, borderColor: grey500,
                      fill: grey500}}
                      />
                  <matui.RaisedButton 
                  label="Submit"
                  onClick={this.handleClick.bind(this)}
                  type="submit" primary={true}
                   className="raisedbutton"
                  disabled={isInvalid}
                  styles={styles}> 
                   </matui.RaisedButton>  
                   </div>
                   <matui.Snackbar
                   open={this.state.open}
                   message="Thanks For Joining Us"
                   style={{color: 'red'}}
                   autoHideDuration={4000}
                   onRequestClose={this.handleRequestClose}
                  />
              </matui.CardActions> 
              <br/><br/>
                  </form> 
                  <div> <Link to='/signup' >
                  <matui.FlatButton
                     label="Register"                
                      className="registerbt"
                    icon={<PersonAdd />}
                    />
                   </Link>  </div>
            </matui.Card>
  
            </div>

    );
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

export default  Login;