import './ImageList.css'
import React from "react";
import {ImageCard} from './ImageCard'
// ...................

const styles = ['color: green', 'background: yellow'].join(';');
const message = 'I am so happy to see you are here!';
console.log('%c%s', styles, message);

const styles2 = ['color: pink', 'background: #363434', 'font-size: 24px', 'border: dotted 1px red', 'padding: 10px', 'margin: 20px'].join(';');
const message2 = 'WE ARE THE ROBOTS';
console.log('%c%s', styles2, message2);
// 3. Using the styles and message variable
// https://www.samanthaming.com/tidbits/40-colorful-console-message/
// ...................

export const ImageList = (props) => {
  // console.log(props.images);

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
    
  })
  

  return <div className="image-list">{images}</div>;
};


/*
export const ImageList = (props) => {
  // console.log(props.images);

  const images = props.images.map(({ description, id, urls }) => {
    // return <img src={urls.regular} alt={description} key={id} />
    return <ImageCard src={urls.regular} alt={description} key={id} />
    
  })
  

  return <div className="image-list">{images}</div>;
};
*/