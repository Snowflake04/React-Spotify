import TopNav from './LeftNavTop';
import BottomNav from './LeftNavBottom';

const LeftNav = () => {
  return (
    <div className='left_nav'>
      <nav className='navigation'>
        <TopNav />
        <BottomNav />
      </nav>
    </div>
  );
};

export default LeftNav;