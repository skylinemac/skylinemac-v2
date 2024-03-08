import './App.css';

function App() {
  return (
    <div className='introButtonContainer'>
      <button onClick={() => window.location.href = '/home'} className='introButtons'>Home</button>
      <button onClick={() => window.location.href = '/past-tests'} className='introButtons'>Past Tests</button>
      <button onClick={() => window.location.href = '/competition-format'} className='introButtons'>Competition Format</button>
      <button onClick={() => window.location.href = '/about-us'} className='introButtons'>About Us</button>
    </div>
  );
}

export default App;
