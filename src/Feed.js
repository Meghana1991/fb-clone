import React, { useState, useEffect } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            {/* Post */}
            {/* <Post
                profilePic='https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1021662/tgw_sp_hero_landscape.jpg'
                message="The Good Wife"
                timestamp="Timestamp"
                username="Alicia Florrick"
                image="https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w400-q80/blog/the_good_wife.jpg"
            />
            <Post />
            <Post /> */}
            {posts.map((post) => {
                return <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image} />
            })}
        </div>
    )
}

export default Feed