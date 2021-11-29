// src/App.js
import './App.css';

import IronhackLogo from './images/ironhack-logo-xs.png';

import MenuTop from './images/menu-top-xs.png';

import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png';
import Icon3 from './images/icon3.png';
import Icon4 from './images/icon4.png';

function MyNavBar() {
  return (
  <nav className="myNavBar">
    <div>
    <img src={IronhackLogo} alt="Ironhack logo"></img>
    </div>
    <div>
    <img src={MenuTop} alt="Menu hamburguer"></img>
    </div>
  </nav>
  )
}

function MyHeader(){
  return (
    <div class="MyHeader">
      <h1> Say hello to <br/> ReactJS</h1>
      <p class="header-para"> You will learn how to use <br/>
      the most popular frontend library, <br/>
      and become a super Ninja developer</p>
      <br />
      <a class="awesome-btn"href="https://es.reactjs.org/">Awesome!</a>
    </div>
  )
}

function FirstSection(){
  return (
    <div class="firstSection">

      <div>
      <img src={Icon1} alt="Declarative icon"></img>
      <h2>Declarative</h2>
      <p>React makes it<br/>
      painless to create<br/>
      interactive UIs.</p>
      </div>

      <div>
      <img src={Icon2} alt="Components icon"></img>
      <h2>Components</h2>
      <p>Build encapsulated<br/>
      components that<br/>
      manage their state.</p>
      </div>

      <div>
      <img src={Icon3} alt="Single-way icon"></img>
      <h2>Single-way</h2>
      <p>A set of immutable<br/>
      values are passed to<br/>
      the component's.</p>
      </div>

      <div>
      <img src={Icon4} alt="JSX icon"></img>
      <h2>JSX</h2>
      <p>Statically-typed<br/>
      designed to run on<br/>
      modern browsers.</p>
      </div>

    </div>
  )
}



function App() {
  return (
    <div> 
      <div class="background">
      <MyNavBar />
      <MyHeader />
      </div>
    <FirstSection />
    </div>
  );
}


export default App;