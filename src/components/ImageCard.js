import React from "react";



export class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}




/*





*/


// bygg om till funct component med hooks: