import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Projects } from '../pages/Projects';

export function AppRouters() {
    return(
        <Routes>
            <Route path='/' element={<Details />} />
            <Route path='/projects/:id' element={<Projects />} />
        </Routes>
    );
}