import './ImageList.css'
import React from "react";
import {ImageCard} from './ImageCard'
// ...................
// 3. Using the styles and message variable
// https://www.samanthaming.com/tidbits/40-colorful-console-message/
const styles = ['color: green', 'background: yellow'].join(';');
const message = 'I am so happy to see you are here!';
console.log('%c%s', styles, message);
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