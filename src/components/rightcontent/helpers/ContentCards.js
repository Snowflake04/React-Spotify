import { Link } from 'react-router-dom';
const ContentCards = ({ selection, limit, addnav = true }) => {
  let playlists;
  limit
    ? (playlists = selection.items.collection.slice(0, limit))
    : (playlists = selection.items.collection);
  return (
    (playlists[0]?.artwork_url || playlists[0]?.calculated_artwork_url) && (
      <section className='trending'>
        <div className='title_holder title_main'>
          <div className='title'>
            <h2 className='text'>{selection.title}</h2>
          </div>
          {addnav && (
            <div className='show_all'>
              <Link
                to={
                  'selection/' +
                  selection.title.toLowerCase().replace(/\s+/g, '-')
                }
                state={{ selection: selection }}
              >
                Show all
              </Link>
            </div>
          )}
        </div>
        <div className='container'>
          {playlists.map((playlist) => {
            let id;
            if (playlist.kind === 'system-playlist') {
              id = playlist.id.split(':').slice(2);
              id = '/foryou/' + id.join(':');
            } else {
              id = '/playlist/' + playlist.id;
            }

            return (
              <div className='card' key={playlist.title}>
                <Link to={id}>
                  <img
                    src={
                      playlist.artwork_url ?? playlist.calculated_artwork_url
                    }
                    alt=''
                  />
                  <div className='bottom_text'>
                    <div className='name'>{playlist.title}</div>
                    <div className='description'>{playlist.kind}</div>
                    <div className='description'>{`${playlist.track_count} songs`}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default ContentCards;
