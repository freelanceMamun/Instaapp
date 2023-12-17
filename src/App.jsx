import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Authpage from './pages/AuthPage/Authpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="auth" element={<Authpage></Authpage>}></Route>
    </Routes>
  );
}

export default App;
