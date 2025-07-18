import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoJS from './VideoJS'
import { useRef } from 'react'
// import { response } from 'express'

function App() {
  const playerRef=useRef(null)
  const videoLink="http://localhost:8000/uploads/courses/798d59d6-475c-4d04-8876-169b7506057d/index.m3u8"

  const videoPlayerOptions={
    controls:true,
    responsive:true,
    fluid:true,
    sources:[
      {
        src:videoLink,
        type:"application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady=(player)=>{
    playerRef.current=player;

    // You can handle player evenets here, for eg
    player.on("waiting",()=>{
      videojs.log("player is waiting");
    })

    player.on("dispose",()=>{
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>

        <h1>Video Player</h1>
      </div>
      <VideoJS
      options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
