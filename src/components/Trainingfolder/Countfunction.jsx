import React, { useState } from "react";

export default class Counterfunction extends React.Component{
    constructor(props){
        super(props);
        this.HandleAdd=this.HandleAdd.bind(this);
        this.HandleMinus=this.HandleRemoveAll.bind(this);
        // this.HandleReset=this.HandleReset.bind(this);
        this.state={
            count:0,
            items:[]
        }
    }
    HandleAdd=(e) =>{
        e.preventDefault();
       const data=e.target.elements.option.value.trim();
       const list={name:data}
       if(data!=""){
        this.setState(prevState=>{
            return {
                items:prevState.items.concat(list)
             }  
          })
       }

        e.target.elements.option.value=""
    }
    HandleRemove=(itemname)=>{
     this.setState((prevState) =>{
      return  {
         items : prevState.items.filter((item) => {
            return itemname != item.name;
          })
        }    
      })
    }
    HandleRemoveAll=()=>{
        this.setState((prevState=>{
            return {
                items: []
            }
        }))
    }
      render(){
        return (
            <>
            <div className="Data">
            <div className="product-list">
             {this.state.items.map(item => 
              <>
              <div className="list_item">
              <li>{item.name}</li>
              <button onClick={this.HandleRemove.bind(this,item.name)}>Remove</button> 
              </div>
              </>
              )}
              </div>
             <form onSubmit={this.HandleAdd}>
               <input type='text' name="option" className="itemname" placeholder="enter item"></input>
                <div className="btn-section">
                <button className="Addtoprod btn-prod"> Add Your product</button> 
                {this.state.items.length > 0 ? <button className="removeAllprod btn-prod"  onClick={this.HandleRemoveAll}>Remove All product</button> : ""}
               </div>
              </form>    
                     
            </div>   
               
            </>
        );
       }
    }
