import React from "react";
import dezayn from "./index.module.css"

 class Firstpart extends React.Component{
    render(){
        return(
            <>
            <div className={dezayn.container}>
            <div className={dezayn.xettust}></div>
            
            <div style={{display:'flex',width:'100%',position:'absolute','top':'100px'}}>
                <div className={dezayn.one}><h1 style={{textAlign:'center',paddingTop:'50px'}}>{this.props.soz}</h1><p style={{textAlign:'center',paddingTop:'30px'}}>{this.props.ses}</p>
                </div>
                <div className={dezayn.two}><img src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/03/18074959/72354623_743029929493734_4704406170316788179_n-e1584871654126.jpg" style={{position:'absolute','bottom':'10px',height:'200px',right:'150px'}}></img></div>
            </div>

            <div className={dezayn.xettalt}></div>    
                </div>
            </>
        )
    }
 }
 export default Firstpart