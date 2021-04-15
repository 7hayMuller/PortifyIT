import { FC } from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';

const App: FC = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
