import React from "react";
import dzyn from "./index.module.css"

 class Thirdpart extends React.Component{
    render(){
        return(
            <>
            <div className={dzyn.container}>
            <div className={dzyn.xettust}></div>
            
            <div style={{display:'flex',width:'100%',position:'absolute','top':'100px'}}>
                <div className={dzyn.one}><h1 style={{textAlign:'center',paddingTop:'50px'}}>{this.props.soz}</h1><p style={{textAlign:'center',paddingTop:'30px'}}>{this.props.ses}</p>
                </div>
                <div className={dzyn.two}><img style={{height:'200px',paddingLeft:'250px'}} src="https://wallpaperaccess.com/full/3056086.jpg"></img></div>
            </div>

            <div className={dzyn.xettalt}></div>    
                </div>
            </>
        )
    }
 }
 export default Thirdpart