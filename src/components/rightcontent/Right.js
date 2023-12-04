import { Route, Routes } from 'react-router-dom';
import RightBinder from './RightContent';
import ExpandedSection from './ExpandedSelection';

const RightContent = () => {
  return (
    <Routes>
        <Route path='/' element={<RightBinder/>}/>
      <Route path='selection/*' element={<ExpandedSection />} />
    </Routes>
  );
};

export default RightContent;
