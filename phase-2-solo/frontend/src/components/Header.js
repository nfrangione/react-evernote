import React from 'react';

const Header = (props) => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item"><h2> Nick's React Evernote </h2></li>
        <li className="nav-item"><h4> Sort Notes Options </h4></li>
        <div className='button-row'>
          <button value='created' onClick={(e)=>props.sortNotes(e)}>Creation Order</button>
          <button value='alphabetical' onClick={(e)=>props.sortNotes(e)}>Alphabetical Order</button>
          <button value='edited' onClick={(e)=>props.sortNotes(e)}>Recently Edited</button>
          <button value='recency' onClick={(e)=>props.sortNotes(e)}>Recently Created</button>
        </div>
      </ul>
    </div>
  );
}

export default Header;