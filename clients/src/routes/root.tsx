import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from "../components/PrivateRoutes.tsx";
const Home = lazy(() => import("../pages/Home.tsx"))
const About = lazy(() => import("../pages/About.tsx"))
const Admin = lazy(() => import("../pages/Admin.tsx"))
const Login = lazy(() => import("../pages/Login.tsx"))


export default function RootRoutes() {
  return (

    <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/admin/*" element={<PrivateRoute element={<Admin/>} />} />
        {/* <Route path="/admin/*" element={<Admin />} /> */}
        <Route path="/login/*" element={<Login />} />
    </Routes>

  )
}

// function wait(time: number) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }