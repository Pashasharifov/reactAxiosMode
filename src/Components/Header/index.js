import React from "react";
import dizayn from './index.module.css'
import axios from "axios";
var x=document.querySelector('#h2')
var y=String(x)

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ad:''
        }
    }
   
    btnClick=()=>{
        axios.get('http://www.omdbapi.com/?apikey=6da878a6&t='+this.state.ad).then((result)=>{
            this.setState({
                sekil:result.data.Poster,
                janr:result.data.Genre,
                olke:result.data.Country,
                aktyorlar:result.data.Actors,
                tarix:result.data.Year

            })
        })
    }
    inpFunk=(e)=>{
        this.setState({
            ad:e.target.value
        })
    }
    render(){
    return (
      <>
       <nav className={dizayn.nav}>
            <h1 className={dizayn.hebir}>Moi FilmBoi</h1>
            <span className={dizayn.spa}>You can search Unlimited Movies , TV Films and more</span>
        </nav>
     <div className={dizayn.bg}>
       <input type='text' onInput={this.inpFunk}></input>
       <button onClick={this.btnClick}>Search</button>
       <div style={{display:'flex', gap:'10px'}}> 
        <img src={this.state.sekil} style={{height:'455px',width:'40%'}}></img>
        <div>
        <h2 id="h2"  style={{color:'white',fontSize:'30px',paddingTop:'50px',paddingLeft:'80px'}}>Country of Film : {this.state.olke}</h2>
        <h2 id="h2"  style={{color:'white',fontSize:'30px',paddingLeft:'80px'}}>Genres of Film : {this.state.janr}</h2>
        <h2 id="h2"  style={{color:'white',fontSize:'30px',paddingLeft:'80px'}}>Actors of Film : {this.state.aktyorlar}</h2>
        <h2 id="h2" style={{color:'white',fontSize:'30px',paddingLeft:'80px'}}>Year of Film  : {this.state.tarix}</h2></div>
       </div>
     </div>
      </>
    );
    }
  }
  
  export default Header;