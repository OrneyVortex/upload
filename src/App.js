import Grid from './components/Grid';
import {Upload} from './components/Uplaod';
import './index.css';


function App() {
  return (
    <div className="App">

      <div class="flex-container">
        <div><Upload/></div>
        <div><Grid/></div>
      </div>
      <div className="chat">
      <img src="https://cdn-icons-png.flaticon.com/512/309/309666.png" alt="" />
      </div>
    </div>
  );
}

export default App;
