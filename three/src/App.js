import './App.css';
import Gallery from './componets/Gallery';
import Header from './componets/Header';
import { ContextWrapper } from './context/Context';

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
