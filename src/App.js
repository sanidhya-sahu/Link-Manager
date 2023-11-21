import './App.css';
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import Card from '@mui/joy/Card';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
          <Header data={"Link Manager"} />
          <Body/>
          {/* <Card>Card 2</Card> */}
          <Routes>
            <Route
              to="/"
              element={
                <Header data={"Links Manager"} />
              }>
            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
