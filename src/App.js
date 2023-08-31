import data from './data.json';
import Scp from './Scp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav';

function App() {
  return (
    <Router>
      <Nav data={data}/>
      <Routes>

        {
          data.map(
            scp=>(
              <Route key={scp.subject}
              path={`${scp.subject}`}
              element={<Scp scp={scp}/>}
              />
            )
          )
        }
      </Routes>
    </Router>
  );
}

export default App;
