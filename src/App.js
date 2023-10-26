import logo from './logo.svg';
import './App.css';
import {BuzzerPage} from "./jeopardy/BuzzerPage";
import {MqttBuzzerContextProvider} from "./mqttBuzzerContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <MqttBuzzerContextProvider>
            <BuzzerPage />
        </MqttBuzzerContextProvider>
      </header>
    </div>
  );
}

export default App;
