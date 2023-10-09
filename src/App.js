import './App.css';
import Parent from './Components/Parent';
import UsestateExamples from './Components/UsestateExamples';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsestateExamples />
        <Parent />
      </header>
    </div>
  );
}

export default App;
