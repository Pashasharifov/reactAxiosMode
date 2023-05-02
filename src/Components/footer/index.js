import React from "react";
import ftr from './index.module.css'

class Footer extends React.Component{
    render(){
        return(
            <>
            <div className={ftr.container}>
                <p className={ftr.pe}>Questions ? Contact us</p>
                <div style={{display:'flex','gap':'200px',marginLeft:'150px',marginTop:'50px'}}>
                <span className={ftr.spanone}><a href="https://help.netflix.com/tr/node/412">FAQ</a>
                <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relationship</a>
                <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                <a href="https://fast.com/tr/">Speed Test</a>
                </span>
                <span className={ftr.spantwo}><a href="https://help.netflix.com/tr/">Help Center</a>
                <a href="https://jobs.netflix.com/">Jobs</a>
                <a href="#">Cookie Preferences</a>
                <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
                </span>
                <span className={ftr.spanthree}><a href="https://www.netflix.com/az/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a>
                <a href="https://devices.netflix.com/tr/">Ways to Watch</a>
                <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                <a href="https://www.netflix.com/az/browse/genre/839338">Only on Netflix</a>
                </span>
                <span className={ftr.spanfour}><a href="https://media.netflix.com/tr/">Media Center</a>
                <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                <a href="https://help.netflix.com/tr/contactus">Contact Us</a>
                </span>
                </div>
            </div>
            </>
        )
    }
}
export default Footer