import './App.css';
import TransferComponent from './transfers-module/Transfer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
            <div className='col col-md-3'></div>
            <div className='col col-md-6'>
              <TransferComponent/>
            </div>
            <div className='col col-md-3'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
