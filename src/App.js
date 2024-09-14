import './App.scss';

// Importing components
import HeaderComponent from './components/ComonComponents/HeaderComponent/HeaderComponent.tsx';
import LandingPage from './components/LandingPage/LandingPage.tsx';

function App() {
  return (
    <div>
      <header>
        <HeaderComponent/>
      </header>

      <main>
        <LandingPage/>
      </main>
    </div>
  );
}

export default App;
