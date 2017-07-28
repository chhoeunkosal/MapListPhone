import React from 'react'
export default class Item extends React.Component{
    render(){
        return(
            <div className="col-md-3">
                <h1>{this.props.item.name}</h1>
                <img src={this.props.item.Photo}/>
                <p>{this.props.item.desc}</p>
            </div>
        )
    }
}