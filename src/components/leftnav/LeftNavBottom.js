const LeftNavBottom= ()=>{
    return(
        <div className="bottom_nav">
              <div className="top_library">
                <div className="library">
                  <div className="container">
                    <div className="name">
                      <svg viewBox="0 0 24 24" className="library_icon">
                        <path
                          d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                        ></path>
                      </svg>
                      <div className="heading">Library</div>
                    </div>
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div className="buttons">
                  <button type="button">Playlist</button>
                  <button type="button">Artists</button>
                </div>
              </div>
              <div className="bottom_search">
                <div className="search_header">
                  <i className="fa-solid fa-search"></i>
                  <div className="recent">
                    Recents <i className="fa-solid fa-bars"></i>
                  </div>
                </div>
                <div className="recents_section">
                  <div className="card">
                    <div className="image_holder">
                      <img
                        src="https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952"
                        alt=""
                      />
                    </div>
                    <div className="about">
                      <div className="name">Ariana Grande</div>
                      <div className="particular">Popular Artist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default LeftNavBottom