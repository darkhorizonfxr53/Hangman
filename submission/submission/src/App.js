import HelpSection from './components/HelpSection';
import './App.css';
import Hangman from './components/Hangman/Hangman';
import HomePage from './components/HomePage/HomePage';

//imported the necessary files

function App() {
  return (
    <div className='container'>
      {/* Bringing all the components */}
      <HomePage />
      <HelpSection />
      <Hangman />
    </div>
  );
  }

export default App;
