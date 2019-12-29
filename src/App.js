import React from 'react';
import './assets/scss/style.scss';
import './App.scss';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';

const App = () => {  
    return (
      <React.Fragment>
        <WelcomeScreen />
        <SortingVisualizer />
      </React.Fragment>
    )
}

export default App;
