
import { Route, Routes } from 'react-router';
import About from '../pages/About';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <div>
            <Routes >
                {/* <Route index element= {<Home/>}></Route>
                <Route path='about' element = {<About />}></Route> */}

                <Route element = {<MainLayout/>}>
                    <Route path='/' element = {<Home/>} />
                    {/* <Route path='about' element = {<About/>} /> */}
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;