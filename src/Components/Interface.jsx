import {Html} from "@react-three/drei"
import {carPaintSecondaryColors, carPaintPrimaryColors, useCustomization, sideMirrorSecondaryColor, sideMirrorPrimaryColor} from "../Contexts/Customization";
import { rgbToHex } from "@mui/material";
import { change_color } from "../scripts/inputs";

const Interface = () => {
  const {
    tires,
    setTires,
    sideMirrors,
    setSideMirrors,
    carPaintPrimary,
    setCarPaintPrimaryColors,
    carPaintSecondary,
    setCarPaintSecondaryColors,
    sideMirrorPrimary,
    setSideMirrorsPrimaryColors,
    sideMirrorSecondary,
    setSideMirrorsSecondaryColors, } = useCustomization();
  return (<>
    <nav className="navigation">
      <div className="navigation_bar">
        <img src="lambo_logo.png" alt="lamboghini" className="big_logo"></img>
        <button className="navigation_button btn_selected">
          Models  
        </button>
        <button className="navigation_button" onClick={() => change_color()}>
          Services  
        </button>
        <button className="navigation_button">
          Experience  
        </button>
        <button className="navigation_button">
          Shop  
        </button>
        <button className="navigation_button">
          Purchase  
        </button>
      </div>
    </nav>
    <div className="interface_details">
      <div className="text_column">
      <div className="component_text" style={{marginLeft:'25px',marginBottom:'5px', color:'#253529', opacity:0.5, fontWeight:'bold'}}> Flashy Sports Car</div>
      <div className="component_strong_text" style={{fontSize: '25px'}}>Lamborghini LP-720</div>
      </div>
      <div className="btn_container">
        <button className="btn btn_color_1">Exterior</button>
        <button className="btn btn_color_1">Interior</button>
        <button className="btn btn_color_1">Customization</button>
      </div>
      <div className="text_column" style={{marginLeft:'18vw'}}>
      <div className="component_text" style={{marginLeft:'25px',textAlign:'right', color:'#253529',marginBottom:'5px', opacity:0.5, fontWeight:'bold'}}> Total</div>
        <div className="component_strong_text" style={{ fontSize: '25px' }}>$34,000</div>
      </div>
      <button className="btn btn_color_2" style={{marginBottom: '2vh', marginLeft:'2vw'}}>Contact Dealer</button>
    </div>
    <div className="interface">
      <div className="interface_item">
        <div className="component_strong_text">Power</div>
        <div className="text_row">
          <div className="component_text">
            Max Power
          </div>
          <div className="component_text_right">
            565 HP
          </div>
        </div>
        <div className="text_row">
          <div className="component_text">
            0-60 Mph
          </div>
          <div className="component_text_right">
            2.5 S
          </div>
        </div>
        <div className="text_row">
          <div className="component_text">
            Top Track Speed
          </div>
          <div className="component_text_right">
            205 Mph
          </div>
        </div>
        </div>
      <div className="interface_item">
        <div className="component_strong_text">Paint</div>
        <div className="component_text_tight_spaced">Primary Color</div>
        <div className="color_row">
        {
          carPaintPrimaryColors.map((item, index) => (
            <div key={index} className={`${item.color === carPaintPrimary.color ? "color-active" : ""}`} onClick={() => setCarPaintPrimaryColors(item)}>
              <div className="color_item" style={{backgroundColor:`rgb(${item.color[0]}, ${item.color[1]}, ${item.color[2]})`}}> </div>
            </div>
          ))}
        </div>
        <div className="component_text_tight_spaced">Secondary Color</div>
        <div className="color_row">
        {
          carPaintSecondaryColors.map((item, index) => (
            <div key={index} className={`${item.color === carPaintSecondary.color ? "color-active" : ""}`} onClick={() => setCarPaintSecondaryColors(item)}>
              <div className="color_item" style={{backgroundColor:`rgb(${item.color[0]}, ${item.color[1]}, ${item.color[2]})`}}> </div>
            </div>
          ))}
        </div>
      </div>
      <div className="interface_item">
        <div className="component_strong_text">Wheels</div>
        <section className="container">
          <div className="slidder-wrapper">
            <div className="slider">
              <img id="slide-1" className="option_image" src="wheel_icon_1.png" alt="First wheel option" onClick={() =>setTires(0)}/>
              <img id="slide-2" className="option_image" src="wheel_icon_2.png" alt="Second wheel option"  onClick={() =>setTires(1)}/>
              <img id="slide-3" className="option_image" src="wheel_icon_3.png" alt="Third wheel option"  onClick={() =>setTires(2)}/>
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>
      </div>
      <div className="interface_item">
        <div className="component_strong_text">Side Mirrors</div>
        <div  className="component_text_tight_spaced">Primary Color</div>
        <div className="color_row">
        {
          sideMirrorPrimaryColor.map((item, index) => (
            <div key={index} className={`${item.color === sideMirrorPrimary.color ? "color-active" : ""}`} onClick={() => setSideMirrorsPrimaryColors(item)}>
              <div className="color_item" style={{backgroundColor:`rgb(${item.color[0]}, ${item.color[1]}, ${item.color[2]})`}}> </div>
            </div>
          ))}
        </div>
        <div  className="component_text_tight_spaced">Secondary Color</div>
        <div className="color_row">
        {
          sideMirrorSecondaryColor.map((item, index) => (
            <div key={index} className={`${item.color === sideMirrorSecondary.color ? "color-active" : ""}`} onClick={() => setSideMirrorsSecondaryColors(item)}>
              <div className="color_item" style={{backgroundColor:`rgb(${item.color[0]}, ${item.color[1]}, ${item.color[2]})`}}> </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Interface;