import { Component, createRef} from "react";
import UserCard from "./user-card";

import NextLogo from './../images/right-panel/next-logo.svg';
//import Arrow from './../images/right-panel/arrow.svg';

import icon1 from './../images/right-panel/icon-goals.svg';
import icon2 from './../images/right-panel/icon-diet.svg';
import icon3 from './../images/right-panel/icon-settings.svg';

const icons = [
  {color: '#FEF0E7', icon: icon1, text: 'Gloals'},
  {color: '#ECEAFF', icon: icon2, text: 'Diet'},
  {color: '#E5F8FF', icon: icon3, text: 'Settings'},
];

export default class RightPanel extends Component{
  constructor(props){
    super(props);
    this.meterRef = createRef();
    this.state = {
      fullSize: false,
      windowHeight: window.innerHeight,
      lossWeight: 5,
      userTime: '4 month',
      userName: 'UISoup'
    };
  }

  componentDidMount(){
    this.updateCanvas();
    this.updateData();
    window.addEventListener('resize', ()=>this.setState({windowHeight: window.innerHeight}))
  }

  updateCanvas(){
    this.ctx = this.meterRef.current.getContext('2d');
  }

  render_button(data, id){
    return(
      <div className="select-btn" key={id}>
        <div className="select-icon" style={{backgroundColor: data.color}}><img src={data.icon} alt=""/></div>
        <div className="select-content">
          <h3>{data.text}</h3>
          <button onClick={()=>this.setState({fullSize: true})}><img src={NextLogo} alt=""/></button>
        </div>
      </div>
    );
  }

  updateData(){
    if(this.props.data !== null){
      this.setState({
        lossWeight: this.props.data['loss-weight'],
        userTime: this.props.data['user-time'],
        userName: this.props.data['user-name']
      });
    }
  }

  render(){
    const extra = (this.state.fullSize)?'full-size':'panel-size';
    return(
      <div className={this.props.class + ` ${extra}`} style={{
        height:`${this.state.windowHeight-57}px`
      }}>
        <UserCard userName={this.state.userName} userTime={this.state.userTime}/>
        <button onClick={()=>this.setState({fullSize: false,})}>x</button>
        <div className="action">
          {icons.map((el, index)=>this.render_button(el, index))}

          <div className="meter-content">
            <p>Weight loss Goal</p>
            <h3>Loss: {`${this.state.lossWeight}kg`} <span>/ Month</span></h3>
            <canvas ref={this.meterRef} />
          </div>

        </div>
      </div>
    );
  }
}