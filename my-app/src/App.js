import logo from './logo.svg';
import './App.css';

const style2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const style = ({ bg = '#222' }) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
});

const Li = ({ children }) => {
  return (
    <li style={{ ...style2, ...style({ bg: '#333' }) }} className="li-class">{ children }</li>
  )
};

const App = () => {
  const mood = "Sad";
  return (
    <ul style={ style({ bg: '#750' }) } className="css-class">
      <Li mood="Happy">li value</Li>
    </ul>
  );
}

export default App;
