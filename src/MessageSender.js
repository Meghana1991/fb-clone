import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useState } from 'react'
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from './firebase';

function MessageSender() {
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [{ user }, setUser] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            message: input,
            timestamp: null,
            profilePic: "https://media-exp1.licdn.com/dms/image/C5103AQFd8dDDvwTFqQ/profile-displayphoto-shrink_400_400/0?e=1607558400&v=beta&t=2oWeAc5N4F1r1QB4dct9ZSck7FYUJaPCp_z-I7148mw",
            username: user.displayName,
            image: imageUrl
        });
        setInput("")
        setImageUrl("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src='https://media-exp1.licdn.com/dms/image/C5103AQFd8dDDvwTFqQ/profile-displayphoto-shrink_400_400/0?e=1607558400&v=beta&t=2oWeAc5N4F1r1QB4dct9ZSck7FYUJaPCp_z-I7148mw' />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What's on your mind?" className="messageSender__input" />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (optional)" />
                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender