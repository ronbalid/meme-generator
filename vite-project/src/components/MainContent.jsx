import React from 'react'
import "../Styles/mainContent.css"

export default function MainContent() {
    return (
        <main>
          <form action="">
            <input type="text" name="top-text" id="top-text" placeholder='Top Text' />
            <input type="text" name="bottom-text" id="bottom-text" placeholder='Bottom Text' />
            <button>Get a new meme image 🖼</button>
          </form>
        </main>
    )
}