import Navbar from "./components/Navbar/Navbar";
import Routing from "./routes/Routing";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routing/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
