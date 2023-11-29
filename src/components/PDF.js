import React from 'react'
import Zoom from 'react-medium-image-zoom'
import PDF from "../images/Udemy.pdf";
import 'react-medium-image-zoom/dist/styles.css'

// <img />
export const MyImg = () => (
  <Zoom>
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={PDF}
      width="500"
    />
  </Zoom>
)

// <div>
export const MyDiv = () => (
  <Zoom>
    <div
      aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
      role="img"
      style={{
        backgroundColor: '#fff',
        backgroundImage: `url({PDF})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '0',
        paddingBottom: '56%',
        width: '100%',
      }}
    />
  </Zoom>
)

// <picture>
export const MyPicture = () => (
  <Zoom>
    <picture>
      <source media="(max-width: 800px)" srcSet="/path/to/teAraiPoint.jpg" />
      <img
        alt="A beautiful, serene setting in nature"
        src="/path/to/thatwanakatree.jpg"
        width="500"
      />
    </picture>
  </Zoom>
)
