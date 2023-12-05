


 const ListHeader = ({list, handleClick}) =>{

    return(
        <>
        <div className='playlist_header'>
        <div className='playlist_image'>
          <img
            src={list.artwork_url ?? list.calculated_artwork_url}
            alt=''
          />
        </div>
        <div className='text_container'>
          <div className='type'>
            {list.tracking_feature_name ?? list.playlist_type}
          </div>
          <div className='name'>{list.title}</div>
          <div className='description'>
            {(list.description ? list.description.substring(0,100) + "..." : null) ?? list.user?.full_name}
          </div>
          <div className='stats'>{`${list.tracks?.length} Songs`}</div>
        </div>
      </div>
      <div className='controls'>
        <div className='left_controls'>
          <div className='play_button_container'>
            <button id="play_button" onClick={handleClick} className='play_button'>
              <span>
                <svg viewBox='0 0 24 24' className='svg_play_button'>
                  <path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z'></path>
                </svg>
              </span>
            </button>
          </div>

          <button className='button_heart'>
            <span>
              <svg viewBox='0 0 24 24' className='svg_heart'>
                <path d='M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z'></path>
              </svg>
            </span>
          </button>
          <button className='button_menu'>
            <span>
              <svg viewBox='0 0 24 24' className='svg_menu'>
                <path d='M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'></path>
              </svg>
            </span>
          </button>
        </div>
        <div className='right_controls'>
          <button className='button_list'>
            <span>List</span>
            <svg className='svg_list'>
              <path d='M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z'></path>
            </svg>
          </button>
        </div>
      </div>
      </>
    )
}
export default ListHeader