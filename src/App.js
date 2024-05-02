import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {

  const [country, setCountry] = useState('in');
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <div>

        <Navbar changeCountry={setCountry} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={(progress) => { setProgress(progress) }}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key={`general ${country}`} pageSize={15} country={country} category='general' />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key={`general ${country}`} pageSize={15} country={country} category='general' />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key={`business ${country}`} pageSize={15} country={country} category='business' />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key={`science ${country}`} pageSize={15} country={country} category='science' />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key={`health ${country}`} pageSize={15} country={country} category='health' />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key={`sports ${country}`} pageSize={15} country={country} category='sports' />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key={`technology ${country}`} pageSize={15} country={country} category='technology' />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key={`entertainment ${country}`} pageSize={15} country={country} category='entertainment' />}></Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App;