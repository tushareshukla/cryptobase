import Button from "../../Common/Button"
import "./styles.css"
import React from 'react'

const MainComponet = () => {
  return (
    <div className="flex-info">
        <div className="left-component">
 {/* import React from 'react'          
  */}
  <h1 className="first-heading">Base for</h1>
  <h1 className="second-heading">CryptoLovers.</h1>
  <p className="p-tag">Track crypto from with public api realtime with amazing ui</p>
  <div className="btn-flex">
    <Button text={"Dashboard"}/>
    <Button text={'Share App'} outlined={true}/>   
  </div>
        </div>
        <div className=" right-component">
            Image

            </div>
    </div>
  )
}

export default MainComponet