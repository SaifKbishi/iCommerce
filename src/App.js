import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    
          <a className="App-link" href="https://www.youtube.com/watch?v=SSXA2XluIBU" target="_blank" rel="noopener noreferrer">Ecommerce App using React JS and Redux with Fetch API 2021 | React JS Project for Beginners</a><br/>
          <a className="App-link" href="https://www.youtube.com/watch?v=y66RgYMAgSo&t=1s" target="_blank" rel="noopener noreferrer">React Node.js E-Commerce App Full Tutorial (REDUX - Stripe - JWT ) - MERN Stack Shopping App</a><br/>
          <a className="App-link" href="https://www.youtube.com/watch?v=c1xTDSIXit8" target="_blank" rel="noopener noreferrer">React E-Commerce App Design Tutorial | React Shopping Cart UI Design</a><br/>
          <p><br/><br/>
          https://fakestoreapi.com/<br/>
          https://www.fakeshop-api.com/<br/>
          https://dummyproducts-api.herokuapp.com/<br/>
          https://mui.com/getting-started/installation/<br/>
          https://www.pluralsight.com/guides/installing-and-using-material-ui-with-react<br/>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
