
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Products from '../pages/products/Products';
import MainLayout from '../Layouts/MainLayout';

const AppRoutes = () => {
    return (
        <div>
            <Routes >
                {/* <Route index element= {<Home/>}></Route>
                <Route path='about' element = {<About />}></Route> */}

                <Route element = {<MainLayout/>}>
                    <Route path='/' element = {<Home/>} />
                    <Route path='products' element = {<Products/>} />
                    <Route path='about' element = {<About/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;