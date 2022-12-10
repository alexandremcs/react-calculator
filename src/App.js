import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='calculator-title'> React Calculator</div>
        <div className='previous-operand'>123 *</div>
        <div className='current-operand'>1234</div>
      </div>
      <button className='ac-del-btn'>AC</button>
      <button className='ac-del-btn'>DEL</button>
      <button className='operand-btn'>%</button>
      <button className='operand-btn'>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='operand-btn'>X</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='operand-btn'>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='operand-btn'>+</button>
      <button className='operand-btn'>.</button>
      <button>0</button>
      <button className='span-two operand-btn'>=</button>
    </div>
  );
}

export default App;
