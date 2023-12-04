import App from './components/App';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import SignIn from './components/signIn/SignIn';

const RouteComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' exact element={<App />} />
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
