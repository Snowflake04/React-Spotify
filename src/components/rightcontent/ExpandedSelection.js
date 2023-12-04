import ContentCards from './helpers/ContentCards';
import { useLocation } from 'react-router-dom';
import Footer from './helpers/Footer';
const ExpandedSelection = () => {
  console.log("expanded")
  let state = useLocation().state;
  return (
    <>
      <ContentCards
        selection={state.selection}
        addnav={false}
        key={state.selection.title}
      />
      <Footer />
    </>
  );
};

export default ExpandedSelection;
