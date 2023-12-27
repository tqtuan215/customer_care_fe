import './App.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <footer>Loyalty</footer>
    </>
  );
}

export default App;
