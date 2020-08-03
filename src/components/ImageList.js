import React from "react";

export const ImageList = (props) => {
  // console.log(props.images);

  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />
    
  })
  

  return <div>{images}</div>;
};
