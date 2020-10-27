import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story
                image="https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/08/PRI_80486093.jpg?quality=90&strip=all&zoom=1&resize=540%2C810&ssl=1"
                profileSrc="https://jackiekcooper.com/file/2019/01/marvelousmrsmaisel.jpg"
                title="Maisel" />

            <Story
                image="https://i.pinimg.com/originals/53/a4/81/53a48178302cde81f081f59e4b535237.jpg"
                profileSrc="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ba18291b09379d8efa2f12a56817b63e4566e0146a224af051c960818632fa40._RI_.jpg"
                title="Susie" />

            <Story
                image="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://i.guim.co.uk/img/media/85e3bad276c396cf6f055073b295a43044d88673/112_95_3590_2154/master/3590.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=23e0b42b441cafd677f0a945dc04ac63"
                title="Rose" />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi5J00zyLAHf_8DzhrzH4fqH43FkgRaS5jpg&usqp=CAU"
                profileSrc="https://jackiekcooper.com/file/2019/01/marvelousmrsmaisel.jpg"
                title="Bride" />
            
            <Story
                image="https://www.thejc.com/image/policy:1.464772:1527674573/lbd.jpg?f=default&h=576&w=1024&$p$f$h$w=9cad382"
                profileSrc="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Miriam" />
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </div>
    )
}

export default StoryReel
