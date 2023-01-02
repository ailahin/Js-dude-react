import logo from './logo.svg';
import './App.css';
import tutorialsData from './tutorials.json'
import { useEffect, useState } from 'react';

//console.log(tutorialsData);

function App() {
  return (
    <div>

      <Header> </Header>
      <Main> </Main>



     
    </div>
  );
}



function Header(){
  return(
    <section className='header'>
    <div > 
     <div className='header-up'>
         <h3> That Js Dude </h3>
         <button id='details'> Sign in</button>
     </div>
    <div className='header-down'>
       <h1> Exclusive React Workshop for beginners!</h1> 
       <h2>  Once in a year opportunity to learn and build your <span> first React app </span>  </h2>
       <button id='details'> Learn More </button>
    </div>
 
   </div>
  </section>
  )
}

function Main(){

  return(
    <section className='main'>
      
      <Left>   </Left>
      
     <Right> </Right>
     
    </section>
  )
  
}

function Left(){

//const  [ , ] useState([])

const [tutorials, setTutorials] =useState([])
//useEffect(()=>{}, [])

useEffect(()=>{
  setTutorials(tutorialsData)


}, [])

  return (
    <div className='main-left' >


      <div >
        <Jsconfig> </Jsconfig>
      </div>

      <div className='tutorials' >
         {/* <Tutorials> </Tutorials> */}

         {
          tutorials.map(tutorial=> <Tutorial title={tutorial.title}  desc={tutorial.desc} ></Tutorial>)
         }
          
      </div>
   </div>

  )
}

function Right (){
  return(

    <div className='main-right'>

      <Personaltraining> </Personaltraining>
      <Recentvideos> </Recentvideos>
      <Recenttalks> </Recenttalks>
      <Invitetalk> </Invitetalk>


     

  </div>
      
  )
}

function Jsconfig(){
  return (

    <div className='js-config'> 
      <h1>
      JS Confusing Parts
      </h1>
      <p> Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats. </p>
    </div> 
  )
}

function Tutorial (props){
  const {title, desc}= props
  return (


 
    <div id='tutorial'>
    <h1> {title} </h1>
     <p>  {desc}</p>
    <button id='details'> View Detais </button>
    </div>


  )
}


function Personaltraining(){
  return(
    <div >
    <h1> Personal Training for $30</h1>
    <p> If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
 </div>
  )
}

function Recentvideos(){
  return(
    <div >
      <h1> Recent Videos</h1>
      <ul>
        <li>15+ tricks for dev tool </li>
        <li> Understanding this</li>
        <li>be expert in JS Array </li>
        <li>How Browsers works in 4 min </li>
      </ul>
      <button id='details'> More On Youtube</button>
     </div> 
  )
}

function  Recenttalks(){
  return(

    <div>
    <h1> Recent Talks </h1>
    <ul>
      <li>Functional Programming: What, Why and How </li>
      <li> JavaScript Code Quality </li>
      <li> Angular JS for Absolute Beginners </li>
      <li> Getting started with React JS High Perf JS </li>
      <li>Are you sure, you know JavaScripts </li>
      <li>High Performance JS and CSS </li>
      <li> What's New in ES6</li>
      <li>Make Web Faster </li>
    </ul>

    <button id='details'>Speaker Profile</button>
   </div>
  )
}

function Invitetalk(){
  return (
    <div>
      <h1> Invite to a talk </h1>
     <p>if you want to invite that js dude in any of your meetup, conference or hangout, send email to</p>
     <p>khan4019@gmail.com</p>
    </div>
  )
}

export default App;
