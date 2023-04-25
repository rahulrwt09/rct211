import './App.css'
import { PinTab } from './Component/PinTab';
function App() {


  return (
    <div className="App">
      <h2>Genric component</h2>
     <PinTab  length={5} maxchar={1} />
    </div>
  );
}

export default App;
