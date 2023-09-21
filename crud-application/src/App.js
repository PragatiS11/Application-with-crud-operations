import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
       <BackgroundImage />
      <Navbar/>
     <MainRoutes/>
    </div>
  );
}

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://img.freepik.com/free-vector/gradient-blue-background_23-2149354574.jpg'); /* Replace with your image URL */
  background-size: cover;
  opacity: 0.4; 
  z-index: -1;
`;

export default App;
