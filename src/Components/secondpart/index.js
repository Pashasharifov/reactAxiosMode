import React from "react";
import styl from './index.module.css'
class Secondpart extends React.Component{
    render(){
        return(
            <>
            <div className={styl.container}>
                <div className={styl.flexone}><img style={{paddingTop:'10px',paddingLeft:'230px'}} src="https://upload.wikimedia.org/wikipedia/en/1/11/Behind_Her_Eyes_TV_series.jpg"/></div>
                <div className={styl.flextwo}><h1 style={{paddingTop:'90px'}}>Download your shows<br/> to watch offline</h1><p style={{paddingTop:'30px'}}>Save your favorites easily and alsways have<br/>something to watch</p></div>
               
            </div>
            </>
        )
    }
}
export default Secondpart