import {Routes, Route, Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";




function Home() {
  const [count, setCount] = useState(2);
  useEffect(() => {
console.log("Home component mounted");
return () => console.log("Home component unmounted");
  },[])

  return (
  <div>
    <h1> This is a home page</h1>

  <button 
  onClick={()=>setCount((state)=> ++state)}>
    Click me {count}
  
  </button>
  </div>
  )
}

function About() {
  const [count, setCount] = useState(7);
  
  return <div><h1>This is a about page</h1>
  <button 
  onClick={()=>setCount((state)=> ++state)}>
    Click me {count}
  
  </button>
  
  </div>
}

function Users() {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
          <Link to="/users/2">User 2</Link>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
      <button onClick={()=>{
      navigate("/");
      }}>Go Home Page</button>
      
      </div>
  )
} 

function User() {
  const params = useParams();
  console.log("params", params);
  return (
  <div><h3>Selected user:{params.id}</h3></div>
)
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>

  </nav>
}

export function App() {
 return (
  <div>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users/>}>
      <Route path=":id" element={<User/>}/>
    </Route>
 </Routes>
  <Navigation />
  </div>

 )
}


