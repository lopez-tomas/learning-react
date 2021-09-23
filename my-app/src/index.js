import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//const Li = ({ children, mood, age, sex, home }) => {
  //console.log(age, home);

  //let pronoun;
  //if (sex.toLowerCase() == 'm') {
    //pronoun = 'He';
  //} else {
    //pronoun = 'She';
  //}
  
  //return (
    //<li>{ children } is { mood }. { pronoun } has { age } years old.</li>
  //)
//}

//const X = () => // Functional component
  //<ul>
    //<Li 
      //mood={ "happy" }
      //age={ 24 }
      //sex={ 'm' }
      //home={ true }
    //>
      //Pig A
    //</Li>
    //<Li 
      //mood={ "sad" }
      //age={ 33 }
      //sex={ 'f' }
      //mood={ false }
    //>
      //Pig B
    //</Li>
    //<Li
      //mood={ "excited" }
      //sex={ 'm' }
    //>
      //Felipe
    //</Li>
  //</ul>

//ReactDOM.render(
 //<X />, document.getElementById('root')
//)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
