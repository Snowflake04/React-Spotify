import { Link } from "react-router-dom";

const LeftNavTop = () => {
  return (
    <div className='top_nav'>
      <ul>
        <li>
          <Link  to="/">
            <i className='fa-solid fa-house'></i> Home
          </Link>
        </li>
        <li>
          <a href=''>
            <i className='fa-solid fa-magnifying-glass'></i> Search
          </a>
        </li>
      </ul>
    </div>
  );
};
export default LeftNavTop