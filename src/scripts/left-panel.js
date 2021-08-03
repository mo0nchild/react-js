import { Component } from "react";

import IconNotification from './../images/left-panel/icon-notification.svg';
import IconQuestions from './../images/left-panel/questions.svg';

import icon1 from './../images/left-panel/icon1.svg';
import icon2 from './../images/left-panel/icon2.svg';
import icon3 from './../images/left-panel/icon3.svg';
import icon4 from './../images/left-panel/icon4.svg';

const icons = [icon1, icon2, icon3,icon4];
class LeftPanel extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      currentPage: icon1, hoverBtn: null, windowHeight: window.innerHeight 
    };
  }

  button_render(icon, id){
    return(
      <button className="select-btn" style={{
        backgroundColor: 
          (icon === this.state.currentPage) ? '#3C3693' : 
          ((icon === this.state.hoverBtn)? '#4c44c7':'transparent')
      }} onClick = {()=>{
        this.setState({currentPage: icon});
        this.props.updatePage(id)
      }} 
      onMouseEnter = {()=>  this.setState({hoverBtn: icon})}
      onMouseLeave = {()=> this.setState({hoverBtn: null})}
      key={id}><img src={icon} alt=""/></button>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", ()=>this.setState({windowHeight: window.innerHeight }));
  }

  render()
  {
    return(
      <div style={{height: `${this.state.windowHeight-43}px`}} 
        className = {this.props.class}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}>
          <button className='btn-notification' ><img src={IconNotification} alt=""/></button>
          <hr style={{
            width: `${100*69/104}%`, height: '0px', backgroundColor: '#FFF', 
            border: '.5px solid #FFF', margin: '0px 0px 12px 0px'
          }}/>
          {icons.map((el, n)=>this.button_render(el,n))}
        </div>

        <button style={{backgroundColor:'transparent',border:'0px',al:'flex-end', marginBottom: '53px'}}>
          <img src={IconQuestions} alt =""/>
        </button>

      </div>
    );
  }
}

export default LeftPanel;