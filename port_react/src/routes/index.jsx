import { BrowserRouter } from 'react-router-dom';

import { AppRouters } from './app.routes';

export function Routes() {
    return(
        <BrowserRouter>
            <AppRouters />
        </BrowserRouter>
    );
}