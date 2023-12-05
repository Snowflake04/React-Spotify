import { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { GetAPI } from '../../../APIContext';
import { Link } from 'react-router-dom';

function getDuration(millisec) {
  var seconds = (millisec / 1000).toFixed(0);
  var minutes = Math.floor(seconds / 60);
  var hours = '';
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    hours = hours >= 10 ? hours : '0' + hours;
    minutes = minutes - hours * 60;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
  }

  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : '0' + seconds;
  if (hours !== '') {
    return hours + ':' + minutes + ':' + seconds;
  }
  return minutes + ':' + seconds;
}

const PlaylistCard = ({ systemPlaylist, tracks }) => {
  const [loadedTracks, setLoadedTracks] = useState([]);
  const APIParams = GetAPI();
 
  let index = 1;

  useEffect(() => {
    let tempTracks;
    if (systemPlaylist) {
      tempTracks = _.chunk(tracks, 20);
    } else {
      tempTracks = tracks;
      setLoadedTracks(tempTracks.splice(0, 5));
      tempTracks = _.chunk(tempTracks, 20);
    }

    tempTracks.forEach((trackGroup) => {
      let api = `${APIParams.baseURL}tracks?ids=${trackGroup
        .map((tracks) => tracks.id)
        .join('%2C')}&client_id=${
        APIParams.clientID
      }&%5Bobject%20Object%5D=&app_version=1701429092&app_locale=en`;

      const getTracks = async () => {
        try {
          let response = await fetch(api, {
            method: 'GET',
            headers: {
              Authorization: APIParams.Authorization,
            },
          });

          response = await response.json();
          setLoadedTracks((list) => [...list, ...response]);
        } catch (error) {
          console.warn(error);
        }
      };
      getTracks();
    });
  }, [tracks]);
  console.log(loadedTracks);
  return loadedTracks.map((track) => {
    return (
      <div className='playlist_card' key={index}>
        <div className='container'>
          <div className='index'>
            {index++}
            {/* <!-- <button
                  className="RfidWIoz8FON2WhFoItU"
                  aria-label="Play Remind Me to Forget by Kygo, Miguel"
                  tabindex="-1"
                >
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 iYxpxA UIBT7E6ZYMcSDl1KL62g"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                    ></path>
                  </svg>
                </button> --> */}
          </div>
        </div>
        <div className='card'>
          <img
            src={track.artwork_url ?? track.calculated_artwork_url}
            alt=''
            className='playlist_image'
          />
          <div className='card_text'>
          <Link to={"/track/" + track.id}>
              <div className='song_name'>{track.title}</div>
              </Link>
            <span className='artists'>
              <div className='Type__TypeElement-sc-goli3j-0 bGROfl'>
                <a
                  draggable='true'
                  dir='auto'
                  href='/artist/23fqKkggKUBHNkbKtXEls4'
                  tabindex='-1'
                >
                  {track.user.username}
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className='album_name'>
          <span>
            <span
              data-encore-id='type'
              className='Type__TypeElement-sc-goli3j-0 ieTwfQ'
            >
              <a
                draggable='true'
                className='standalone-ellipsis-one-line'
                dir='auto'
                href='/album/47oyrKaeobswT4T8zyaxdM'
              >
                {track.publisher_metadata?.album_title ?? track.label_name}
              </a>
            </span>
          </span>
        </div>
        <div className='duration_main'>
          {/* <!-- <button
                aria-checked="false"
                data-testid="add-button"
                className="Button-sc-1dqy6lx-0 lhGroS tGKwoPuvNBNK3TzCS5OH"
                aria-label="Save to Your Library"
                data-encore-id="buttonTertiary"
                tabindex="-1"
              >
                <span
                  aria-hidden="true"
                  className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
                  ><svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="Svg-sc-ytk21e-0 kPpCsU"
                  >
                    <path
                      d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"
                    ></path>
                  </svg>
                </span>
              </button> --> */}
          <div className='song_duration'>{getDuration(track.duration)}</div>
          {/* <!-- <button
                aria-haspopup="menu"
                data-testid="more-button"
                className="Button-sc-1dqy6lx-0 lhGroS mYN_ST1TsDdC6q1k1_xs"
                aria-label="More options for Remind Me to Forget by Kygo, Miguel"
                data-encore-id="buttonTertiary"
                tabindex="-1"
              >
                <span
                  aria-hidden="true"
                  className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
                >
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="Svg-sc-ytk21e-0 kPpCsU"
                  >
                    <path
                      d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    ></path>
                  </svg>
                </span>
              </button> --> */}
        </div>
      </div>
    );
  });
};

export default PlaylistCard;
