import React from 'react'
import "../Styles/mainContent.css"
import memesData from '../data/memesData'

export default function MainContent() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
      const memes = memesData.data.memes
      const randomMemeImage = memes[Math.floor(Math.random() * memes.length)].url
      
      setMemeImage(randomMemeImage)
    }

    return (
        <main>
          <div className='form'>
            <input type="text" name="top-text" id="top-text" placeholder='Top Text' />
            <input type="text" name="bottom-text" id="bottom-text" placeholder='Bottom Text' />
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
          </div>
          <div className="memeImageContainer">
            <img src={memeImage} alt="" id="meme-image" />
          </div>
        </main>
    )
}