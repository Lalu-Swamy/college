import './App.css';
import Header from "./components/header"
import { Hero } from './components/Hero';
import { Notify } from './components/Notify';
import { Overview } from './components/Overview';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Notify/>
      <Overview/>
    </div>
  );
}

export default App;
