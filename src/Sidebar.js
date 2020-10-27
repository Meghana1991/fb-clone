import React, { Component } from 'react'
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import "./Sidebar.css"
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, setUser] = useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow
                src='https://media-exp1.licdn.com/dms/image/C5103AQFd8dDDvwTFqQ/profile-displayphoto-shrink_400_400/0?e=1607558400&v=beta&t=2oWeAc5N4F1r1QB4dct9ZSck7FYUJaPCp_z-I7148mw'
                title={user.displayName} />
            <SideBarRow Icon={LocalHospitalIcon} title="Covid 19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="MarketPlace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
