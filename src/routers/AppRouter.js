import React from 'react';
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import EditPageHome from '../components/EditPageHome';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ()=> (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="edit" element={(<div><Outlet /></div>)}>
                <Route index element={<EditPageHome/>}/>
                <Route path=":id" element={<EditPage/>}/>
            </Route>
            <Route path="/help" element={<HelpPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;