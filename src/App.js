import "./App.css";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomeMain from "./HomeMain";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginReg from "./components/loginReg/loginReg";
import Courses from "./components/Courses/Courses";
import Course1 from "./components/Courses/Course1";
import Course2 from "./components/Courses/Course2";

// import CommentSection from "./components/discussion/discussion";

function App() {
  const [user, setUser] = useState(null);
 const [cookie,setCookie]=useState(null);
 /*
 useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser && storedUser!==undefined) {
      setUser(JSON.parse(storedUser));
    }
  }, [cookie]);
  */
  useEffect(() => {
    // Check if user data is stored in cookies
    const storedUser = Cookies.get('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser)); // Parse only if storedUser is valid
      } catch (error) {
        console.error("Error parsing user data from cookies:", error);
      }
    }
  }, []);
  
  const handleData = (data) => {
    Cookies.set('user', JSON.stringify(data), { expires: 7 });
    setUser(data);
    setCookie(data);
  }
  const handleLogout = () => {
    Cookies.remove('user');
    setUser(null);
  }

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomeMain />} >
          
           <Route path="/dashboard" element={user && user._id ? <Dashboard data={user} handleLogin={handleData} handleLogout={handleLogout}/> : <LoginReg handleLogin={handleData} />} />
           <Route path="/courses" element={<Courses data={user} />} />
           <Route path="/course1" element={<Course1 data={user} />} />
           <Route path="/course2" element={<Course2 data={user}/>}/>
        
        
          
            {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;