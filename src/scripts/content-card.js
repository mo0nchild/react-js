import { Component } from "react";
import More from './../images/main-panel/more.svg';

export default class Card extends Component{
  constructor(props){
    super(props);
    this.state = {progress: 0};
  }

  componentDidMount(){
    setInterval(() => {
      if(this.state.progress < this.props.data.progress)
        this.setState(prevState=>({progress: prevState.progress+=1}));
      else clearInterval(this);
    }, 30);
  }

  render(){
    return (
      <div key={this.props.data.id} className="card">

        <div className="card-header"><img src={this.props.card.icon} alt=""/></div>
        <div className="card-data"> 
        <button onClick={()=>console.log('pressed')}><img src={More} alt="" /></button>
          <h3>{this.props.card.title}</h3>
          <p>{this.props.data.info}</p>
          <div className = "card-progress">
      
      <div className="card-progress-info">
        <p>Progress</p>
        <p><span>{this.state.progress}</span>%</p>
      </div>
      <progress max="100" value={this.state.progress}></progress>
      <p style={{alignSelf:'flex-start', marginTop: '16px', fontSize: '16px'}}>
        Target: <span>{this.props.data.target}</span>
      </p>

          </div>
          
        </div>
      </div>
    );
  }
}