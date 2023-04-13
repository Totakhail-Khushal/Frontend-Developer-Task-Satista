import React from 'react';
import { BsSpeedometer2} from 'react-icons/bs';
import { MdTimeline} from 'react-icons/md';
import { BiTransferAlt} from 'react-icons/bi';
import { RiLogoutCircleRLine} from 'react-icons/ri';
import { MdPublishedWithChanges} from 'react-icons/md';
import { BiAnalyse} from 'react-icons/bi';





function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className=''>ReQiew</h1>
      <ul className='nav'>
    
        <li><a href="#"><div><BsSpeedometer2 /></div> <p> Aspect</p></a></li>
        <li><a href="#"><div> <BiTransferAlt/></div> <p>benchmark</p></a></li>
        <li><a href="#"><div><MdTimeline/></div><p> Time series</p></a></li>
        <li><a href="#"><div> <BiAnalyse/></div><p> Driver analysis</p></a></li>
        <li><a href="#"><div> <MdPublishedWithChanges/></div> <p>Change Dashboard</p></a></li>
        <li><a href="#"><div><RiLogoutCircleRLine/></div> <p>Logout</p></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
