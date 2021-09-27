import React,{useState, useEffect} from 'react';
import './App.css';
import { ThemeContext, Theme } from './ThemeContext';
import MyPage from './MyPage';


function App() {
  const [theme, setTheme] = React.useState(Theme.Light);
  const [data,setData] = useState(null);

  useEffect(()=>{
    fetch('./static/test.json').then((res)=>{
      res.json().then((dt)=>{
        setData(dt)
      })
    })
  },[])


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className="App-header">
          <MyPage />
          {JSON.stringify(data)}
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;