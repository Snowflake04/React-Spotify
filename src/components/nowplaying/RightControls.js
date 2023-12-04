const RightControls = () => {
  return (
    <div className='right_controls'>
      <div className='container'>
        <button className='button_queue'>
          <span className='icon_wrapper'>
            <svg viewBox='0 0 16 16' className='svg_cast'>
              <path d='M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z'></path>
            </svg>
          </span>
        </button>
        <div className='volume_section'>
          <button className='volume_button'>
            <svg id='volume-icon' viewBox='0 0 16 16' className='svg_volume'>
              <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
              <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
            </svg>
          </button>
        </div>

        <button className='button_cast'>
          <span className=''>
            <svg viewBox='0 0 16 16' className='svg_cast'>
              <path d='M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z'></path>
              <path d='M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z'></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default RightControls