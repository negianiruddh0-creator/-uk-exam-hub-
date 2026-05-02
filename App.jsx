import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Pdfs from './pages/Pdfs';
import ExamPattern from './pages/ExamPattern';
import PrepGuide from './pages/PrepGuide';
import CurrentAffairs from './pages/CurrentAffairs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pdfs" element={<Pdfs />} />
            <Route path="/exam-pattern" element={<ExamPattern />} />
            <Route path="/prep-guide" element={<PrepGuide />} />
            <Route path="/current-affairs" element={<CurrentAffairs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
