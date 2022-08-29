import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './app'

const root = document.getElementById('root')

const roott =  createRoot(root)

roott.render(
    <StrictMode>
        <App />
    </StrictMode>
)
