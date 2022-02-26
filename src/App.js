import './App.css';
import { ContextWrapper } from './context/Context';
import './componets/media.css';
import Header from './layout/Header';
import Gallery from './layout/Gallery';

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
