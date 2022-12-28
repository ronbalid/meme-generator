import React from 'react'
import "../Styles/mainContent.css"
import memesData from '../data/memesData'

export default function MainContent() {


  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  
  const [allImages, setAllImages] = React.useState(memesData)
  
  function getMemeImage() {
    const memesArray = allImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const newURL = memesArray[randomNumber].url
    console.log(newURL)
    
    setMeme(prevMeme => {
        return {
            ...prevMeme,
            randomImage: newURL
        }
    })   
  }

    return (
        <main>
          <div className='form'>
            <input type="text" name="top-text" id="top-text" placeholder='Top Text' />
            <input type="text" name="bottom-text" id="bottom-text" placeholder='Bottom Text' />
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
          </div>
          <div className="memeImageContainer">
            <img src={meme.randomImage} alt="meme image" id="meme-image" />
          </div>
        </main>
    )
}