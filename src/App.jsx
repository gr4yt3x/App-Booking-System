import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';
import "./App.css";
import Layout from "./Layout"

function App() {
  return (
    <Router>
     <Layout >
      <AppRoutes />
     </Layout >
    </Router>
  );
}

export default App;

