import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    
const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)

function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length)
    let url = memesArray[randomNumber].url
    setMeme(prevMeme => {
        return{
            ...prevMeme,
            randomImage: url
        }
    })
}
return (
        <>
            <div className="meme">
                <div className="meme-input">
                    <input type="text" placeholder="Top text"/>
                    <input type="text" placeholder="Bottom text"/>
                </div>
                <input onClick={getMemeImage} className="meme-button" type="button" value="Get a new meme image 🖼️"/>
                <img className="meme-image" src={meme.randomImage}/>
            </div>
        </>
    )
}