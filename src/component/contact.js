import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './main.css'
import './main2.css'
import logo from './images/logo.png'; import mb1 from './images/bm1.jpg'
import mb2 from './images/bm2.jpg'; import mb3 from './images/bm3.jpg'
import man from './images/man.jpeg'; import cont from './images/cont.jpg' 
import blb from './images/blb.gif'; import stat from './images/stat.png' 
import mat from './images/mat.png'; import px from './images/px.jpg' 
import pss from './images/pss.png'; import mtab from './images/mtab.png' 
import pm from './images/pm.png'
import msg from './images/msg-icon.png'
import fb from './images/fb-icon.png'
import chat1 from './images/chat1.png'
import p1 from './images/p1.png'




class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            login: false,
            logout: false,
            error: '',
            selector: null,
            scrolled: false,
        }
        this.onsubmit = this.onsubmit.bind(this)
        this.logouthandler = this.logouthandler.bind(this)
    }

componentDidMount(){
    window.addEventListener('scroll', ()=> {
        const isTop = window.scrollY < 100;
        console.log(isTop);
        if (isTop !== true){
            this.setState({  scrolled: true   })
        }
        else{
            this.setState({ scrolled: false   })
        }
    })
}

componentWillMount(){
    window.removeEventListener('scroll ', ()=>{
        console.log('remover')
    })
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

            <div className={this.state.scrolled ? ' nav scrolled' : 'navreact'} > 
            <nav class="navbar navbar-default "  id='mynavbar'>
            <div class="container-fluid">
                    
                    <div class="navbar-header log">
                        <a class="navbar-brand" href="#"> <img src={logo} width='110px' height='59px' /> </a>
                   </div>

                   <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" nav navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About us </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#why">Why choose us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#contact">Contact us</a>
                        </li>
                    </ul>
                    <ul class='nav navbar-nav navbar-right head' >
                    <li id="top-btn-c" class="first last"><a href='#' class="button-c">
                    <i class="fa fa-comments-o"></i>Consult Now</a> </li>
                        
                    </ul>
                </div>
                </div>
            </nav>
            </div>
                    
                    {/* !!!!!!----------navbar section end----!!!!!!!!!!!!!!!!! */}
            
                        <section class='header sec-section' style={{marginTop: '0px;'}} > 
                            <div className='img-container'>
                
                        <div class='container col-md-8 banner ' >
                            {/* <img className='head-img' src={mainjp} /> */}
                            <h1 className='upperh1'>UK'S BEST ACADEMIC <br/> CONSULTANCY & RESEARCHS <br/> ASSISTANCE SERVICE<br/> <span > WHY CHOOSE US </span>  </h1>
                            {/* <h5>   Why Choose us </h5> */}
                            <br/>
                          
                             <ul>
                                 <li><i class="fas fa-hand-point-right" ></i>  Qualified PhD Editors & Proofreaders,</li>
                                 <li><i class="fas fa-hand-point-right"></i> Affordable Prices with Special Discounts, </li>
                                 <li><i class="fas fa-hand-point-right"></i> Specialists for 80+ Subjects,  </li>
                                 <li><i class="fas fa-hand-point-right"></i>  100% Satisfactory Results,</li>
                                 <li><i class="fas fa-hand-point-right"></i>  Premium Quality Assistance,</li>
                                 <li><i class="fas fa-hand-point-right"></i>On-Time Delivery, </li>
                                 <li><i class="fas fa-hand-point-right"></i>Reliable & Genuine. </li>
                             </ul>
                             <div class='btn-blue text-center' >
                             <a class='button-c' ><i class="fa fa-comments-o"></i> CHAT nOW </a>
                             </div>
                            </div>
                
           
                            <div class="col-md-4 right-side-form upper">
                                <form >
                                    <div class="form-group">
                                        <input type="text" name="first_name" class='form-control' placeholder="FULL NAME" required=""/>
                                    </div>
                                  <div class="form-group">
                                          <input type="email" class='form-control' placeholder="Email" name="email" required=""/>
                                    </div>
                                <div class="form-group contact-phone">
                              <div class="field phone">
                                    <div class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-5">
                                        <div class="flag-container">
                                            <div class="selected-flag" tabindex="0" title="">
                                                <div class="iti-flag mp"></div>
                                                    <div class="selected-dial-code"></div>
                                                        <div class="iti-arrow"></div>
                                  </div>
                       
                                 </div>

                    <div class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
                        <div class="flag-container">
                                </div>
                                <input type="text" name="pn" id="phone" minlength="7" maxlength="11" class="number required form-control" autocomplete="off"
                                 onkeypress="return numbersonly(this, event)" required=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="iti-arrow"> </div>

                <div class="clear"></div>
            <br/>

            <input type="hidden" name="cc" id="cc" value="+92"/>
            <input type="hidden" name="is_from_bing" value=""/>

        <div class="clearfix">
            <button type="submit" id="sub" class="signupbtn btn btn-primary button-c">GET IT NOW!</button>

        </div>
        
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

                            <a target="_self" href="#" class="btn btn-lg"><i class="fa fa-comments-o"></i>Live Chat</a>                          
                            <a href="#" class="btn btn-lg"><i class="fab fa-facebook-messenger"></i>Message Us</a>
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
{/*                         
                        <section class='service-section first-sec' >
                            <div class='container' >
                                <h1 class='text-center' style={{textAlign: 'center', fontWeight: '500', fontSize:'30px' }} > TAKING STRESS OVER ACADEMIC PROJECTS IS NOT A SOLUTION. TRY CONTACTING US, WE CAN MAKE IT WORK. </h1><br/>
                                <div class='col-sm-3 ' style={{textAlign: 'center'}} >
                                    <img height='145' width='195' src={cont} style={{margin: '0px auto'}} />
                                    
                                     <div class='btn-bluec'  >
                                    <br/>
                                    <a class='button-c ' style={{borderRadius: '5px', }}> <i class='fa fa-comments-o '></i> CHAT NOW </a>
                                    </div>
                                </div>


                            <div clas='col-sm-9 cd'> 
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
                                    <p class='pitem' >     Affordable Service Guaranteed </p> 
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
                    </section>
                         */}

<section class="service-section first-sec">
      <div class="container">
        <h1 class="heading text-center">Taking Stress over Academic Projects is not a solution. Try Contacting us, we can make it work.  </h1>
        <div class="col-md-3 col-sm-3 img-containerc" style={{border: '1px solid black'}} >
              <img src={p1} width='144.45'  height="195" style={{margin: '0 auto'}}/>
                  <div class="btn-bluec" style={{width: 'fit-content' , height: 'fit-content'}}>
                    <a target="_self" href="javascript:void(Tawk_API.toggle())" class="button-c"><i class="fa fa-comments-o"></i> Chat Now </a>
                   </div>
        </div>
        <div class="col-md-9 col-sm-9 c" style={{border: '1px solid black', paddingBottom: '12px'}} >
            <div class="col-md-12 col-sm-12">
                  <h3>FEATURES THAT HELP BUILD A TRUSTED RELATIONSHIP</h3>
            </div>
        <div class="col-md-6">
          <span class="fa fa-desktop"></span>
          <p class="pitem">100% Confidential Services</p>
        </div>
        <div class="col-md-6 border-right">
          <span class="fa fa-flask"></span>
          <p class="pitem">PhD Qualified UK Editors</p>
        </div>
        <div class="col-md-6">
          <span class="fa fa-font"></span>
          <p class="pitem">Strict Quality Control Policy</p>
        </div>
        <div class="col-md-6 border-right">
          <span class="fa fa-file"></span>
          <p class="pitem">Safe &amp; Secure Payment Method</p>
        </div>
        <div class="col-md-6">
         <span class="fa fa-eye"></span>
          <p class="pitem">Adhere to Standard Practices</p>
        </div>
        <div class="col-md-6 border-right">
          <span class="fa fa-magic"></span>
          <p class="pitem">Affordable Service Guaranteed</p>
        </div>
        <div class="col-md-6">
          <span class="fa fa-file"></span>
          <p class="pitem">Unlimited Revisions</p>
        </div>
        <div class="col-md-6 border-right">
          <span class="fa fa-support"></span>
          <p class="pitem">24x7 Priority Support Desk</p>
        </div>
       
        </div>
      </div>
    </section>
                        
                        {/* Next Section */}
                        <section class='get-started' >
                            <div class='container' >
                                <div class='col-sm-4  no-padding' > 
                                <img src={blb} width='350'  height='320'  />
                                </div>

                                <div class='col-sm-' >
                                    <h1> HOW TO GET STARTED? </h1>
                                    <h4> THE PROCEDURE IS VERY SIMPLE. JUST FOLLOW THE STEPS BELOW: </h4>
                                    <ul style={{marginLeft: '15px'}} >
                                        <li class='first' style={{color:'black'}}  > Fill out the 
                                        <a href='#signup'> Sign-up Form  </a>
                                         </li>
                                        <li style={{color:'black'}}  > Or <a href='#signup'> Live Chat </a>  directly with our Expert Consultants for detailed academic guidance. We are available online 24/7. 
                                         </li>
                                         <li style={{color: 'black'}}  class='last'>That’s it! Now we’ll take care of the rest for you.  </li>
                                    </ul>
                                </div>
                            </div>
                            <div class='col-lg-12 col-md-12 col-sm-12 text-center' >
                                <a class='button-c'><i class='fa fa-comments-o'> </i> Consult Now  </a>
                            </div>
                        </section><br/>
                            
                            
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
                         </div>

                                     <div class='col-sm-4' >
                                          <img src={px} width='422' height='330' />
                                    </div>
                             </div>

                        </section>


                        {/* Section Starting **  Choose us*** -----------!!!!!!!!!! */}


                        <section class='service-section bg-black' id="why" >
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
                                <div class='col-md-4  border-bottom border-right' >
                                    <span class='icon-1' style={{backgroundPosition: '-121px -263px'}} >  </span>
                                    <p class="pitem"> political Science </p> 
                                </div>
                                <br/>
                            </div>
                        </section> <br/>


                        {/* !----------****Payment Method Section*** ---------!!!!! */}


                        <section class='payment-method-section' >
                            <div>
                                <div class='container' >
                                    <div class='col-sm-3' >
                                        <img src={pm}  width='250' height='229' />
                                    </div>

                                    <div class='col-sm-9' >
                                        <h1 class='heading'> Your Data Is safe with us </h1>
                                        <p>
                                        You can entrust your data with us without worrying about it since we are a team of professionals who are well aware of the importance of data in Research work. 
                                        Your data is secure with us. Data will not be shared with a 3rd party whatsoever. We will not disclose our contributions in your work and grant all the exclusive rights.           
                                        </p>
                                        <br/>
                                        <div class='col-sm-12 text-center' >
                                            <a class='button-c' > <i class='fa fa-comments-o' ></i> Chat Now </a>
                                            <a class='button-c' > <i class='fa fa-facebook-messenger' ></i> MESSAGE US </a>
                                        </div>   
                                    </div>       
                            </div>       
                            </div>       
                        </section>  
                        <section class='col4' > 
                                        <div>
                                            <div class='container' >
                                                <div class='col-md-4 col4-outers' >
                                                    <div class='col4-border' >
                                                        <img src={mb1} />
                                                        <h4>100% Satisfaction Guaranteed</h4>
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
                                                   
                                                </div>
                                                <div class='col-md-4 col4-outers' >
                                                    <div class='col4-border' >
                                                        <img src={mb2} />
                                                        <h4> MAINTAIN 100% CONFIDENTIALITY </h4>
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
                                                    
                                                </div>
                                                <div class='col-md-4 col4-outers' >
                                                    <div class='col4-border' >
                                                        <img src={mb3} />
                                                        <h4> TOP QUALITY SERVICES </h4>
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
                        </section>


                        {/* !-------------** Contact Us Section ***-----------------!!!!!!!! */}
            
                        
            

            {/* !!!!!!!!--------- Side Fixed Social Media Section */}

                <section class='fixed-sider' >
                <div id='fix-social-box' >
                 <a id='msgs' href='#fix-social-box' onclick='window.open("https://www.facebook.com/ ");' > 
                  <i class='fab fa-facebook-messenger' > </i> </a>
                <a id='chatc' href='#fix-social-box' onclick='window.open("https://www.facebook.com/ ");' > 
                  <i class='fa fa-comments-o' > </i> </a>
                
            </div>
            </section>


          
                      
                        
            {/* Copy Element */}

            <div>
            <section class="contact bg-contact" id="contact">
    <div class="container" id="#mysocial-section">
        <div class="col-md-8    left">
            <div class="contact-content">
                <h1 class="heading text-center">Get Connected</h1>
                <h4 class="text-center">
                             Start Your Journey to Help Secure Your Future
                        </h4>
            </div>
            <section>
                <div class="col_full nobottommargin clearfix page-id-3983">
                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <div class="feature-box fbox-center fbox-bg fbox-plain">
                                <div class="fbox-icon">
                                    <p>
                                        <a href="#mysocial-section" onclick="window.open('http://m.me/divineconsultantcom');"><img src={msg} alt="Messanger" width="75" height="75"/></a>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                                <a href="#mysocial-section" onclick="window.open('http://m.me/divineconsultantcom');"><h3>Message Us<span class="subtitle">Support Services</span></h3></a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="feature-box fbox-center fbox-bg fbox-plain">
                                <div class="fbox-icon circle">
                                    <p>
                                        <a href="#mysocial-section" onclick="window.open('https://fb.com/divineconsultantcom');">
                                            <img src={fb} width="75" height="75" alt="Facebook"/>
                                        </a>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                                <a href="#mysocial-section" onclick="window.open('https://fb.com/divineconsultantcom');"><h3>Explore More<span class="subtitle">For More Updates</span></h3></a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="feature-box fbox-center fbox-bg fbox-plain">
                                <div class="fbox-icon">
                                    <p>
                                        <a target="_self" href="javascript:void(Tawk_API.toggle())">
                                            <img src={chat1} alt="Chat" width="75" height="75"  />
                                        </a>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                                <a target="_self" href="javascript:void(Tawk_API.toggle())">
                                    <h3>Live Chat<span class="subtitle">Lets Talk Now</span></h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-md-4 contact-right">
            <h1 class="heading text-center">Contact Us</h1>

              <form >
        <div class="form-group">
            <input type="text" name="first_name" class="form-control" placeholder="FULL NAME" required=""/>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" name="email" required=""/>
        </div>
        <div class="form-group contact-phone">
            <div class="field phone">
                <div class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-5">

                    <div class="flag-container">
                        <div class="selected-flag" tabindex="0" title="">
                            <div class="iti-flag mp"></div>
                            <div class="selected-dial-code"></div>
                            <div class="iti-arrow"></div>
                                 </div>
                                </div>

                                <div class="selected-flag" tabindex="0" title="Pakistan : +92">
                                      <div class="iti-flag pk"></div>
                                      <div class="selected-dial-code">+92</div>
                                    
                                             <div class="iti-arrow"></div>
                                </div>
                                    <ul class="country-list">
                                    </ul>
                                    <input type="text" name="pn" id="phone"
                                      minlength="7"
                                      maxlength="11" class="number required form-control" autocomplete="off" 
                                      onkeypress="return numbersonly(this, event)" required=""/>
                            </div>
                        </div>
                    </div>
                <div class="iti-arrow"> </div>

                <div class="clear"></div>
            <br/>

            <input type="hidden" name="cc" id="ccc" value="+92"/>
            <input type="hidden" name="is_from_bing" value=""/>

                <div class="form-group">
            <textarea name="description" style={{resize: 'none'}} class="form-control msg" rows="6" id="description" placeholder="Message"></textarea>
        </div>
        <div class="clearfix">
            <button type="submit" id="sub" class="signupbtn btn btn-primary button-c">GET IT NOW!</button>

        </div>
    </form>

        </div>
    </div>
</section>

           
            </div>


            </main>

            {/* !-------Footer Section***----!!!!!!!!! */}


            <footer>
        <div class="footer-top">
            <div class="container">
                <div class="col-md-4">
                    <h3><img src={logo} width='130' height='89' /></h3>
                    <p>Divine Consultant consists of qualified professionals having years of experience in research work which makes them competent enough to help you overcome all your academic troubles. We Provide quality assistance in affordable prices.</p>
                </div>
                <div class="col-md-4">
                    <h3>Disclaimer</h3>
                    <p>We strictly adhere to international policies and do not provide academic writing or content writing services. Also, we do not entertain students needing test taking services. All the files given to customers / students are only meant to be used as reference material and are not to be submitted for academic grading. </p>
                
				</div>
                <div class="col-md-4">
                    <h3>Subscribe Us</h3>
                    <div class="simple-subscription-form">
                     <form >
                         <p>Receive updates and special offers:</p>
                        <div class="input-group">
                          <input class="input-group-field" type="email" name="email" placeholder="Email" id="subs-email" required=""/>
                          <button class="button-c Subscribe-btn" type="submit"><i class="fa fa-envelope"></i> </button>
                        </div>
                          <label class="container-checkbox">
                    <div class="input-group">
                     <div>
                        <input type="checkbox" value="" class="checkbx" required=""/>
                    </div>
                        <div class="checkbx-txt">I have read and accept the <a href="terms-and-conditions.php">Terms and Conditions</a> and <a href="privacy-policy.php">Privacy Policy</a> of Divine Consultant.
                    </div>
                    </div>
                    </label>
                      </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer footer-bottom">
            <div class="container">
              <div class="col-md-6">
                <p>Copyrights Divine Consultant © 2017 All Rights Reserved</p>
              </div>
              <div class="col-md-6">
                <ul>
                  <li class="first"><a href="#">Terms and Conditions</a> </li>
                </ul>
              </div>
            </div>
        </div>
    </footer>
            

            <section class='fixed-sider' >
                <div id='fix-social-box' >
                    <a id='msgs' href='#fix-social-box' onclick='window.open("https://www.facebook.com/ ");' > 
                        <i class='fab fa-facebook-messenger' > </i> </a>
                    <a id='chatc' href='#fix-social-box' onclick='window.open("https://www.facebook.com/ ");' > 
                        <i class='fa fa-comments-o' > </i> </a>
    
                </div>
            </section>

            

            </div>

         
            
      
                       
           
        
        )
    }
}

export default Contact