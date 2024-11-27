import { useState } from 'react'
import './App.css'
import OldHistory from './Components/OldHistory/OldHistory.jsx'
import Weekly from './Components/Weekly/Weekly.jsx'
import Today from './Components/Today/Today.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab,setActiveTab] = useState('home')

  const handleTabChange = (tabname) => {
    setActiveTab(tabname);
  }
  

  return (
    <div className="page">
      <div className="tab_box">
          <button onClick={() => {handleTabChange('home')}} className={`tab_btn ${activeTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => {handleTabChange('history')}} className={`tab_btn ${activeTab === 'history' ? 'active' : ''}`}>History</button>
          <button onClick={() => {handleTabChange('weekly')}} className={`tab_btn ${activeTab === 'weekly' ? 'active' : ''}`}>Weekly Report</button>
          <div className="line"></div>
      </div>
      <div className="content-container">
        {activeTab === "home" && <Today />}
        {activeTab === "history" && <OldHistory />}
        {activeTab === "weekly" && <Weekly />}
      </div>
    </div>
  )
}

export default App
