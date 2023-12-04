import LeftBanner from './LeftBanner';
import MiddleControls from './MiddleControls';
import RightControls from './RightControls';

const NowPlaying = () => {
  return (
    <div className='now_playing'>
    <div className='container'>
      <LeftBanner />
      <MiddleControls />
      <RightControls />
    </div>
    </div>
  );
};

export default NowPlaying