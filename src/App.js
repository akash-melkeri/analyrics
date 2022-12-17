import './App.css';
import Home from "./pages/Home"
import MAIN_BG from './assets/bg.jpg'

function App() {
  return (
    <div className="App tw-h-screen tw-w-screen tw-text-[#d6e2ff] tw-relative tw-animate-move-random tw-overflow-y-auto" style={{background:`url(${MAIN_BG})`,backgroundSize:'300%'}}>
      <div className='tw-absolute tw-h-full tw-w-full '></div>
      <Home className='' />
      
    </div>
  );
}

export default App;
