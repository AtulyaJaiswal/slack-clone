import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

function Sidebar() {

    const[channels,setChannels] = useState([]);
    const[{user}] = useStateValue();

    //Running it when sidebar loads
    useEffect(()=> {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=> ({
                id: doc.id,
                name: doc.data().name
            })))
        ));
    }, []);

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h2>TUTU</h2>
                <h3><FiberManualRecordIcon/> {user?.displayName}</h3>
            </div>
            <CreateIcon/>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Comment"/>
        <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
        <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="People & User Groups"/>
        <SidebarOption Icon={AppsIcon} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title="Show More"/>
        <hr/>
        <SidebarOption Icon={AddIcon} addChannelOption="addChannel" title="Add Channels"/>

        {channels.map((channel) => (
            <SidebarOption title={channel.name} id={channel.id}/>
        ))}
    </div>
  )
}

export default Sidebar;