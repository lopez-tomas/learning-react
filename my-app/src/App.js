import logo from './logo.svg';
import './App.css';

const Li = ({ children }) => {
  return (
    <li className="li-class">{ children }</li>
  )
};

const App = () => {
  const mood = "Sad";
  return (
    <ul className="css-class">
      <Li mood="Happy">li value</Li>
    </ul>
  );
}

export default App;
