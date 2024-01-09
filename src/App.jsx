import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Authpage from './pages/AuthPage/Authpage';
import PageLayout from './layout/PageLayout';
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="auth" element={<Authpage></Authpage>}></Route>
      </Routes>
    </PageLayout>
  );
}

export default App;
