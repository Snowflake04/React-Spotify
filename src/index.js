import ReactDOM from 'react-dom/client';
import './index.css';
import RouteComponent from './Routes';
import { APIProvider } from './APIContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <APIProvider>
      <RouteComponent />
    </APIProvider>
  </>
);
