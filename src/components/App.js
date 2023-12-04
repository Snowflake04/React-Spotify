import LeftNav from './leftnav/LeftNav';
import NowPlaying from './nowplaying/NowPlaying';
import RightContent from './rightcontent/RightContent';
import './App.css';
import { useEffect, useState } from 'react';
import { GetAPI } from '../APIContext';

function App() {
  const apiParams = GetAPI();
  let api = `${apiParams.baseURL}mixed-selections?variant_ids=&client_id=${apiParams.clientId}&limit=20&offset=0&linked_partitioning=1&app_version=1701178439&app_locale=en`;

  const [curatedList, setCuratedList] = useState([]);
  useEffect(() => {
    const getCuratedList = async () => {
      try {
        let response = await fetch(api, {
          method: 'GET',
          headers: {
            Authorization: apiParams.Authorization,
          },
        });
        response = await response.json();
        setCuratedList(response.collection);
      } catch (error) {
        console.warn(error);
      }
    };
    getCuratedList();
  }, []);
  return (
    <div className='main_container'>
      <LeftNav />
      <NowPlaying />
      <RightContent curatedList={curatedList} />
    </div>
  );
}

export default App;
