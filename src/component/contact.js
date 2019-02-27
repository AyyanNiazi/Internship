import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './main.css'
import mb1 from './images/bm1.jpg'
import mb2 from './images/bm2.jpg'
import mb3 from './images/bm3.jpg'
import man from './images/man.jpeg' 
import cont from './images/cont.jpg' 
import blb from './images/blb.gif' 

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            login: false,
            logout: false,
            error: '',
            selector: null
        }
        this.onsubmit = this.onsubmit.bind(this)
        this.logouthandler = this.logouthandler.bind(this)
    }

logouthandler = () => {
   this.setState({
       logout: true
   })
}
    onsubmit=(e)=>{
        console.log('running')
        e.preventDefault()
        let {name,email} = this.state
        if(name === 'admin' && email === 'admin@gmail.com' ){
            this.setState({
                login: true
            })
        }
        else{
            console.log("Logged in fail")
            this.setState({
                error: 'Please Enter valid Information'
            })
        }
    }
    render(){
        if(this.state.login === true ){
            return (
                <div> 
                <Redirect push to='/congrats' />
                </div>
            )
        }
        else if(this.state.logout === true){
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div> 
           <nav class="navbar   navbar-default nav-fixed  bg-light navbar-expand-md">
                 <div class="container">
                   <div class="navbar-header ml-auto">
                        <a class="navbar-brand" href="#"></a>
                   </div>

                 <button class='navbar-toggler' type='button' data-toggle='collapse'
                 data-target='#collapsenavbar' aria-expended='true' >   
                        <span class='sr-only'> ...</span>
                        <span class='icon-bar'>  </span>
                        <span class='icon-bar'>  </span>
                        <span class='icon-bar'>  </span>
                        <span class='icon-bar'>  </span>
                 </button>

                 <div class='navbar-collapse in collapse text-center' aria-expanded='false' id='collapsenavbar' >  
                 <ul class="nav navbar-nav ml-auto ">
                 <li class="active nav-item"> <a class='nav-link' href="#">Home</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#about">About</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#">Contact</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#">Why Choose us</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right " >        
                 <button class="btn btn-outline-success my-2 my-sm-0 text-right" type="button"   onClick={this.logouthandler}  > <i class="far fa-comments"></i> LOGOUT</button>
                    <li  class="active nav-item" >    </li>
                </ul>
                {/* <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                </ul> */}
                </div>
                </div>
                </nav>
        
        {/* !!!!!!----------navbar section end----!!!!!!!!!!!!!!!!! */}

            <section class='header sec-section' > 
                <div className='img-container'>
    
            <div class='container col-md-8 banner ' >
                {/* <img className='head-img' src={mainjp} /> */}
                <h1 className='upperh1'>UK'S BEST ACADEMIC <br/> CONSULTANCY & RESEARCH <br/> ASSISTANCE SERVICE<br/> <span > WHY CHOOSE US </span>  </h1>
                {/* <h5>   Why Choose us </h5> */}
                 <ul>
                     <li><i class="fas fa-hand-point-right" ></i>  Qualified PhD Editors & Proofreaders,</li>
                     <li><i class="fas fa-hand-point-right"></i> Affordable Prices with Special Discounts, </li>
                     <li><i class="fas fa-hand-point-right"></i> Specialists for 80+ Subjects,  </li>
                     <li><i class="fas fa-hand-point-right"></i>  100% Satisfactory Results,</li>
                     <li><i class="fas fa-hand-point-right"></i>  Premium Quality Assistance,</li>
                     <li><i class="fas fa-hand-point-right"></i>On-Time Delivery, </li>
                     <li><i class="fas fa-hand-point-right"></i>Reliable & Genuine. </li>
                 </ul>
                 <div class='btn btn-blue text-center' >
                 <a class='btn btn-lg text-center' ><i class="far fa-comments-o"></i>     LIVE CHAT </a>
                 </div>
                </div>
                <div class='col-md-4 right-side-form'>
                    <form onSubmit={this.onsubmit} >
                    <div class='form-group' > 
                        <input className='name' placeholder='Full Name'
                        value={this.state.name} cass
                        onChange={(e)=> this.setState({ name: e.target.value }) }
                         />
                    </div>
                    <div class='form-group' > 
                        <input className='email' placeholder='Email'
                        value={this.state.email}  class
                        onChange={ (e)=> this.setState({ email: e.target.value}) } /><br/>
                    </div>
                    <div class='form-group' > 
                        <select className='select' >
                            <option value='pak' > +92 </option>
                        </select> <input className='select-inp' /> <br/> <br/>
                    </div>
                    <a class='btn btn-lg' ><i class="far fa-comments-o"></i>     LIVE CHAT </a>
                            <p> {this.state.error} </p>
                    </form>
                </div>
            </div>
            </section>  


        {/* !!!!!!!!!-------------Main Body Section -------------!!!!!!!! */}

            <main> 
            <section class='banner-bottom' > 
            <div class='container-fluid'>
                <div class='col-md-12' style={{ textAlign: 'center'}} >
                <h3>Get the Best Cost-Effective & Highly Professional Consultancy Services Now!</h3>
                <h4>  Don't have Much Time? Don't Worry! We have Experts Available To Provide Quick Help, Click Below And Get Connected  </h4>                
                <a class='btn btn-lg fas fa-comments upper-chat' >   LIVE CHAT </a> 
                <a class='btn btn-lg far fa-facebook-messenger' > MESSAGE US</a>
                </div>
            </div>   
            </section>

            {/* !!!!!!---------  aBOUT sECTION */}
            
            <section class='about' id='about' >
                <div class='container' >
                    <div class='col-sm-8' >
                    <h1 style={{textAlign: 'center'}} >   PROFICIENT UK BASED EDITORS OF ESSAY, ASSIGNMENT, DISSERTATION & THESIS  </h1>
                    <p>   Data mining, methodology, literature review, findings & Conclusion, no matter which part of your Thesis / Dissertation you get stuck in, no matter which subject you have taken, no matter the deadline you have, we are always here to help. You are just a few clicks away to get Professional Assistance for your projects.  </p>
                    <p>  Divine Consultant’s Essay, Assignment, Dissertation & Thesis Experts go above and beyond to meet your academic needs. In our academic life, we all need help to make our work standout among others. Our team of professional researchers are Qualified enough to ensure that you succeed with flying colors.   </p>
                    <p>We are lighter on pocket yet we do not compromise our Quality of work at any cost. Our online consultants are available 24/7 to help you in any way possible.</p>
                    </div>
                    <div class='col-sm-4' >
                    <img src={man}/>
                    </div>
                </div>
            </section>

            {/* !!!-------- About Section End */}

            <section class='service-section first-sec' >
                <div class='container' >

                    <h1 class='text-center' style={{textAlign: 'center'}} > TAKING STRESS OVER ACADEMIC PROJECTS IS NOT A SOLUTION. TRY CONTACTING US, WE CAN MAKE IT WORK. </h1><br/>
                    <div class='col-md-2 col-sm-2' style={{textAlign: 'center', border: '1px solid black'}}>
                        <img height='195' width='145' src={cont} style={{margin: '0px auto'}} />
                        <div class='btn-bluec' style={{ width: 'fit-content', height: 'fit-content' }} >
                        <a class=' far fa-comments-o' style={{borderRadius: '5px', marginBottom: '4px'}} > CHAT NOW </a>
                        </div>
                    </div>
                <div clas='col-md-10 col-sm-10'> 

                <div style={{border: '1px solid black'}}> 

                    <div class='col-md-12 col-sm-12' >       
                        <h3>        FEATURES THAT HELP BUILD A TRUSTED RELATIONSHIP</h3>
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-desktop'style={{color: 'green'}} > </span>
                        <p  class='pitem'  > 100% Confidential Service </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-flask'style={{color: 'green'}}> </span>
                        <p> Phd Qualified Uk Editor  </p>
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-font'style={{color: 'green'}} >  </span>
                        <p class='pitem' >  Safe & Secure Payment Method </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-file'  style={{color: 'green'}}> </span>
                        <p> Safe & Secure Payment Method  </p> 
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-eye' style={{color: 'green'}}>  </span>
                        <p class='pitem' >  Adhere to Standard Practices </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-magice' style={{color: 'green'}} >  </span>
                        <p>  Affordable Service Guaranteed </p> 
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-file'style={{color: 'green'}} >  </span>
                        <p class='pitem' >Unlimited Revisions </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-support' style={{color: 'green'}} > </span>
                        <p>24x7 Priority Support Desk </p> 
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            
            {/* Next Section */}

            <section class='get-started' >
                <div class='container' >
                    <div class='col-sm-3 col-lg-3 no-padding' > 
                    <img src={blb}/>
                    </div>
                    <div class='col-sm-9 col-lg-9'>
                        <h1> HOW TO GET STARTED? </h1>
                        <h4> THE PROCEDURE IS VERY SIMPLE. JUST FOLLOW THE STEPS BELOW: </h4>
                        <ul>
                            <li class='first'> Fill out the 
                            <a href='#signup'> Sign-up Form  </a> </li>
                            <li > Or <a href='#signup'> Live Chat </a>  directly with our Expert Consultants for detailed academic guidance. We are available online 24/7. 
                             </li>
                             <li class='last'>That’s it! Now we’ll take care of the rest for you.  </li>
                        </ul>
                    </div>
                </div>
            </section>
            </main>


















                <br/>
            <div class='row ' >
                <div class='middle col-lg-7  col-md-2 col-sm-2 col-10 m-auto mid-head'>
                </div>
                <div class='col-lg-4 col-md-4  col-sm-4 col-12 m-auto mid-img '>                
                </div>
            </div>
            {/* // end middle */}


            <section class='row' >  
                <div class='col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto'> 
                    <div class='card'>
                        <img src={mb1} class='card-img img-fluid'/>
                        <div class='card-body' >
                            <h2 class='card-title'> 100% SATISFACTION GUARANTEED  </h2>
                            <p class='card-text'> Money-Back Guaranteed  </p>
                            <p class='card-text'>  Non-Plagiarized Sample Work  </p>
                            <p class='card-text'>  Prioritize as per the Dead-Line  </p>
                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
        
        )
    }
}

export default Contact