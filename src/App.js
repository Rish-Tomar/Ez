
import './Appp.css';
import LeftMenu from './components/LeftMenu';
import MainPage from './components/MainComponnent/MainPage';

function App() {
  return (
    <div className='App'>
      <div className='leftPannel'>
        <LeftMenu/>
      </div>
      <div className='rightPannel'>
        <MainPage/>
      </div>

    </div>
  );
}

export default App;
