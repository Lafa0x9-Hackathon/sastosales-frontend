import CompletePayment from './CompletePayment/CompletePayment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Confirmation from './CompletePayment/Confirmation';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<CompletePayment/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
    </Router>
    </div>
  );

}

export default App

