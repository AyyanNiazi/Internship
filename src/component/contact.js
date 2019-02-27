import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './main.css'
import logo from './images/logo.png'; import mb1 from './images/bm1.jpg'
import mb2 from './images/bm2.jpg'; import mb3 from './images/bm3.jpg'
import man from './images/man.jpeg'; import cont from './images/cont.jpg' 
import blb from './images/blb.gif'; import stat from './images/stat.png' 
import mat from './images/mat.png'; import px from './images/px.jpg' 
import pss from './images/pss.png'; import mtab from './images/mtab.png' 
import pm from './images/pm.png'

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
           <nav class="navbar  navbar-default nav-fixed  bg-light navbar-expand-md"  >
                 <div class="container">
                   <div class="navbar-header ml-auto">
                        <a class="navbar-brand" href="#"> <img src={logo} width='110px' height='59px' /> </a>
                   </div>

                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

                 <div class='navbar-collapse in collapse text-center' aria-expanded='false' id='navbarSupportedContent' >  
                 <ul class="nav navbar-nav ml-auto ">
                 <li class="active nav-item"> <a class='nav-link' href="#">Home</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#about">About</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#contact">Contact</a></li>
                 <li class="active nav-item"> <a class='nav-link' href="#why-us">Why Choose us</a></li>
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

            <section class='header sec-section' style={{marginTop: '0px;'}} > 
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
                 <a class='btn btn-lg text-center' ><i class="far fa-comments-o"></i> CHAT nOW </a>
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
                    <a class='btn btn-lg far fa-comments-o ' > GET IT NOW! </a>
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
                    <div class='col-sm-3 ' style={{textAlign: 'center', border: '1px solid black'}} >
                        <img height='220' width='255' src={cont} style={{margin: '0px auto'}} />
                        <div class='btn-bluec'  >
                        <br/>
                        <a class='button-c ' style={{borderRadius: '5px', }}> <i class='fa fa-comments-o '></i> CHAT NOW </a>
                        </div>
                    </div>
                <div clas='col-sm-9 '> 

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
                        <p  class='pitem'> Phd Qualified Uk Editor  </p>
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-font'style={{color: 'green'}} >  </span>
                        <p class='pitem' >  Safe & Secure Payment Method </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-file'  style={{color: 'green'}}> </span>
                        <p class='pitem'> Safe & Secure Payment Method  </p> 
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-eye' style={{color: 'green'}}>  </span>
                        <p class='pitem' >  Adhere to Standard Practices </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-magic' style={{color: 'green'}} >  </span>
                        <p class='pitem' >  &nbsp    Affordable Service Guaranteed </p> 
                    </div>
                    <div class='col-md-6' >
                        <span class='fa fa-file'style={{color: 'green'}} >  </span>
                        <p class='pitem' >Unlimited Revisions </p>
                    </div>
                    <div class='col-md-6 border-right' >
                        <span class='fa fa-support' style={{color: 'green'}} > </span>
                        <p  class='pitem'>24x7 Priority Support Desk </p> 
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            
            {/* Next Section */}

            <section class='get-started' >
                <div class='container' >
                    <div class='col-sm-6  no-padding' > 
                    <img src={blb}/>
                    </div>
                    <div class='col-sm-6' >
                        <h1> HOW TO GET STARTED? </h1>
                        <h4> THE PROCEDURE IS VERY SIMPLE. JUST FOLLOW THE STEPS BELOW: </h4>
                        <ul >
                            <li class='first' style={{color:'black'}}  > Fill out the 
                            <a href='#signup'> Sign-up Form  </a>
                             </li>
                            <li style={{color:'black'}}  > Or <a href='#signup'> Live Chat </a>  directly with our Expert Consultants for detailed academic guidance. We are available online 24/7. 
                             </li>
                             <li style={{color: 'black'}}  class='last'>That’s it! Now we’ll take care of the rest for you.  </li>
                        </ul>
                    </div>
                </div>
                <div class='col-lg-12 col col-md-12 col-sm-12 text-center' >
                    <a class='button-c'><i class='fa fa-comments-o'> </i> Consult Now  </a>
                </div>
            </section>

                {/* Section Ended */}

            <section class='statistics-section'>
                <div class='container'>
                <div class='col-sm-8' >
                <h1 class="heading">Assisstance by the Data Analysis Software of your choice.</h1>
                <p>
                For your assistance, we can use any data analysis software of your choice for your project. Usually, the majority of my clients asks for (SPSS/PASW, SAS, MINITAB, STATA, NVivo, SmartPLS, EViews, MATLAB, S-Plus, LISREL, and AMOS). I can also help you out with different software packages irrespective of the above, so you may ask for any other specific software package to use for your assistance.
                </p>
                <div class='brand-logo' >
                    <img src={mtab} />
                    <img src={stat} />
                    <img src={pss} />
                    <img src={mat} />
                </div>
                <div class='col-sm-4' >
                    <img src={px} />
                </div>
                </div>
                </div>
            </section>

            {/* Section Starting **Why Choose us*** -----------!!!!!!!!!! */}

            <section class='service-section bg-black' id="why-us" >
                <div class='container' >
                    <h1 class="heading text-center">Why choose our services</h1>
                    <p class='para' >
                        We strictly adhere to Standard Practices and we ensure to provide good quality work. Our Experts choose the methods that are simple yet attractive &amp; informative. We have proved ourselves to clients all over the world and students from all academic levels. Let us help you succeeded with flying colors.   
                    </p>
                    <div class='col-md-4' >
                        <span class='icon-1' style={{backgroundPosition: '-5px -1px'}} >  </span>
                        <p class="pitem">Accounting &amp; Finance</p>
                    </div>
                    <div class='col-md-4' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -1px'}} >  </span>
                        <p class="pitem">Earth &amp; Marine Sciences</p>                    
                    </div>
                    <div class='col-md-4  border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -1px'}} >  </span>
                        <p class="pitem"> Literature & Creative Drafting </p>             
                    </div>
                    <div class='col-md-4 ' >
                        <span class='icon-1' style={{backgroundPosition: '-2px -46px'}} >  </span>
                        <p class="pitem">  Archaeology</p>   
                    </div>
                    <div class='col-md-4 ' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -46px'}} >  </span>
                        <p class="pitem">  Economics</p>   
                    </div>
                    <div class='col-md-4  border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -46px'}} >  </span>
                        <p class="pitem"> Marketing & Advertising </p>             
                    </div>
                    <div class='col-md-4 ' >
                        <span class='icon-1' style={{backgroundPosition: '-2px -89px'}} >  </span>
                        <p class="pitem">  Art & Design </p>   
                    </div>
                    <div class='col-md-4 ' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -89px'}} >  </span>
                        <p class="pitem">  Environmental </p>   
                    </div>
                    <div class='col-md-4  border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -89px'}} >  </span>
                        <p class="pitem"> Media Studies  & Publishing </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-5px -134px'}} >  </span>
                        <p class="pitem"> Biological Science </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -134px'}} >  </span>
                        <p class="pitem"> Health Science </p>             
                    </div>
                    <div class='col-md-4  border-bottom border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -134px'}} >  </span>
                        <p class="pitem"> Medicine Surgery </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-2px -179px'}} >  </span>
                        <p class="pitem"> Bussines & Management </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-63px -179px'}} >  </span>
                        <p class="pitem"> History </p>             
                    </div>
                    <div class='col-md-4  border-bottom border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -179px'}} >  </span>
                        <p class="pitem"> Pharmacy & Pharmalogy </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-2px -222px'}} >  </span>
                        <p class="pitem"> Chemistry </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -222px'}} >  </span>
                        <p class="pitem"> Law legal </p>             
                    </div>
                    <div class='col-md-4  border-bottom border-right' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -222px'}} >  </span>
                        <p class="pitem"> Philosphy </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-2px -263px'}} >  </span>
                        <p class="pitem"> Computer Sciences &  It </p>             
                    </div>
                    <div class='col-md-4  border-bottom' >
                        <span class='icon-1' style={{backgroundPosition: '-60px -263px'}} >  </span>
                        <p class="pitem"> life Science & Technology </p>             
                    </div>
                    <div class='col-md-4  border-bottom border-rights' >
                        <span class='icon-1' style={{backgroundPosition: '-121px -263px'}} >  </span>
                        <p class="pitem"> political Science </p>             
                    </div>
                </div>
            </section>

            {/* !----------****Payment Method Section*** ---------!!!!! */}

            <section class='payment-method-section' >
                <div>
                    <div class='container' >
                        <div col-sm-3 >
                            <img src={pm} />
                        </div>
                        <div class='col-sm-9' >
                            <h1 class='heading'> Your Data Is safe with us </h1>
                            <p>
                            You can entrust your data with us without worrying about it since we are a team of professionals who are well aware of the importance of data in Research work. 
                            Your data is secure with us. Data will not be shared with a 3rd party whatsoever. We will not disclose our contributions in your work and grant all the exclusive rights.           
                            </p>
                            <div class='col-sm-12 text-center' >
                                <a class='button-c' > <i class='fa fa-comments-o' ></i> Chat Now </a>
                                <a class='button-c' > <i class='fa fa-facebook-messenger' ></i> MESSAGE US </a>
                            </div>                            
                            <div class='col4' >
                                <div class='container' >
                                    <div class='col-md-4 col4-outers' >
                                        <div class='col4-border' >
                                            <img src={mb1} />
                                            <h4>100% Satisfaction Guaranteed</h4>
                                        </div>
                                        <div class='palign' >
                                            <div class='money-back-png' ></div>
                                                Money Back Gurranty
                                            
                                        </div>
                                        <div class='palign' >
                                            <div class='paper-png' > </div>
                                            Non-Plagiarized Sample Work   
                                       </div>
                                        <div class='palign' >
                                            <div class='deadline-png' ></div>
                                            Prioritize as per the Dead-Line
                                       </div>
                                    </div>
                                    <div class='col-md-4 col4-outers' >
                                        <div class='col4-border' >
                                            <img src={mb2} />
                                            <h4> MAINTAIN 100% CONFIDENTIALITY </h4>
                                        </div>
                                        <div class='palign' >
                                            <div class='Shield-png' ></div>
                                            Safe & Secure
                                        </div>
                                        <div class='palign' >
                                            <div class='protection-png' > </div>
                                            Client Privacy Assured   
                                       </div>
                                        <div class='palign' >
                                            <div class='checklist-png' ></div>
                                            Strict Adherence to Legit Practices
                                       </div>
                                    </div>

                                    <div class='col-md-4 col4-outers' >
                                        <div class='col4-border' >
                                            <img src={mb3} />
                                            <h4> TOP QUALITY SERVICES </h4>
                                        </div>
                                        <div class='palign' >
                                            <div class='support-png' ></div>
                                            Priority Customer Support
                                        </div>
                                        <div class='palign' >
                                            <div class='file-png' > </div>
                                            Priority Customer Support                                       </div>
                                        <div class='palign' >
                                            <div class='dollar-png' ></div>
                                            Quality Services In Low Price
                                       </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* !-------------** Contact Us Section ***-----------------!!!!!!!! */}

            <section class='contact bg-contact' id='contact' >
                <div class='container' id='#mysocial-section' >
                    <div class='col-md-8 contact-left' >

                    </div>
                </div>
            </section>
            </main>


















                <br/><br/>
            <div class='row ' >
                <div class='middle col-lg-7  col-md-2 col-sm-2 col-10 m-auto mid-head'>
                </div>
                <div class='col-lg-4 col-md-4  col-sm-4 col-12 m-auto mid-img '>                
                </div>
            </div>
            {/* // end middle */}


           
        </div>
        
        )
    }
}

export default Contact