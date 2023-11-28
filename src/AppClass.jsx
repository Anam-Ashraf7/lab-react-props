import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  

  render() {

    const data = this.props.imageData()
    
    return (
      <>
        <h1 className="title">Kalvium Gallery</h1>
        <div className="flex">
          {data.map(item => (
            <img key={item.id} src={item.img} alt="" />
          ))}
        </div>
      </>
    )

  }

}
