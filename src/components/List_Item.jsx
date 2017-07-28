import React from 'react'
import Item from './Item'
export default class List_Item extends React.Component{
    constructor(){
        super()
        this.state={
            items:[
                {
                    name:'IPhone 6Plus',
                    Photo:'icon1.png',
                    desc:'Smart Phone from Apple generation 5'
                },
                {
                    name:'IPhone 7Plus',
                    Photo:'icon1.png',
                    desc:'Smart Phone from Apple generation 5'
                },
                {
                    name:'IPhone 5s',
                    Photo:'icon1.png',
                    desc:'Smart Phone from Apple generation 5'
                },
                {
                    name:'IPhone 6',
                    Photo:'icon1.png',
                    desc:'Smart Phone from Apple generation 5'
                },
            ]
        }
    }
    render(){
        var a=this.state.items.map(item=>{
            return <Item item={item}/>
        })
        return(
            <div>
                    {a}
            </div>
        )
    }
}