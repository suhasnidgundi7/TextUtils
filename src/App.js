import Header from './Components/Header';
import './includes/css/App.css';
import React, { useState } from 'react'
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const ThemeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
    }
  }

  const [Window_State, setWindow_State] = useState(
    
  )

  return (
    <>
      <Header title="SUVEESOFT" mode={mode} ThemeMode={ThemeMode} />
      <TextForm heading="Enter The Text To Analyze:"></TextForm>
    </>
  );
}

export default App;
