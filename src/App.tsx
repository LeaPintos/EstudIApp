import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import HomeView from './views/HomeView';
import MateriaView from './views/MateriaView';
import StudyHubView from './views/StudyHubView';
import StudyModeView from './views/StudyModeView';
import TestHubView from './views/TestHubView';
import TestModeView from './views/TestModeView';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* HOME: Command Center + subject management */}
          <Route path="/" element={<HomeView />} />
          <Route path="/materia/:id" element={<MateriaView />} />

          {/* STUDY MODE: Hub (select materia → unit) + generation view */}
          <Route path="/study" element={<StudyHubView />} />
          <Route path="/estudio/:unidadId" element={<StudyModeView />} />

          {/* TEST MODE: Hub (select materia → unit) + test view */}
          <Route path="/test-hub" element={<TestHubView />} />
          <Route path="/test/:unidadId" element={<TestModeView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
