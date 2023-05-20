
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Homes from "./pages/Homes";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/github/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
function App() {
  return (
    <AlertProvider>
    <GithubProvider>
  <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container">
          <Alert/>
          <Routes>
            <Route path="/" element={<Homes/>}/>
            <Route path="/user/:login" element={<User/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/notfound" element={<Notfound/>}/>
            <Route path="/*" element={<Notfound/>}/>
          </Routes>
          </main>

        <Footer/>
      </div>
      </Router>
      </GithubProvider>
      </AlertProvider>
    
   
  );
}

export default App;
