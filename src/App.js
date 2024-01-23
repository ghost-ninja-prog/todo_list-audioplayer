import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import './styles/reset.css'
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
