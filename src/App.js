import { ContextWrapper } from './context/Context';
import Header from './layout/Header';
import Gallery from './layout/Gallery';
import './App.css';
import './componets/media.css';

function App() {
  return (
    <ContextWrapper>
      <div className="container">
        <Header />
        <Gallery />
      </div>
    </ContextWrapper>
  );
}

export default App;
