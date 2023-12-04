import TopNav from './helpers/TopNav';
import MainPage from './MainPage';
import ExpandedSelection from './ExpandedSelection';
import { Route, Routes } from 'react-router-dom';
import Playlist from '../playlist/playlist';

const RightContent = ({ curatedList }) => {
  console.log("right")
  return (
    <div className='right_content'>
      <TopNav />
      <section className='home-page'>
        <div className='main'>
          <div className='content_wrapper'>
            <Routes>
              <Route path='/' element={<MainPage curatedList={curatedList}/>} />
              <Route path='selection/*' element={<ExpandedSelection />} />
              <Route path='foryou/:id' element={<Playlist systemPlaylist={true} />} />
              <Route path='playlist/:id' element={<Playlist/>} />
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RightContent;
