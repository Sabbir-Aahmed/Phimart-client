
import { Route, Routes } from 'react-router';
import About from '../pages/About';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import Activation from '../Components/registration/Activation';
import DashboardLayouts from '../Layouts/DashboardLayouts';

const AppRoutes = () => {
    return (
        <div>
            <Routes >
                <Route element = {<MainLayout/>}>
                    <Route path='/' element = {<Home/>} />
                    {/* <Route path='about' element = {<About/>} /> */}
                    <Route path = 'shop' element = {<Shop/>}/>
                    <Route path='login' element = {<Login/>}/>
                    <Route path='register' element = {<Register/>}/>
                    <Route path='activate/:uid/:token' element= {<Activation/>}/>
                </Route>
                <Route 
                    path='dashboard'
                        element={
                        <PrivateRoute>
                            <DashboardLayouts/>
                        </PrivateRoute>
                }>
                    <Route index element={
                            <Dashboard/>
                    }>

                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;