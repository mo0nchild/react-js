import { Component } from "react";

import ActivityChart from './activity-chart';
import ActivityHeader from "./activity-header";
import Card from './content-card';

import Walking from './../images/main-panel/walking.svg';
import Water from './../images/main-panel/water0.png';
import Spray from './../images/main-panel/water1.svg';

import Cycling from './../images/main-panel/cycling.svg';
import Running from './../images/main-panel/running.svg';
import Steps from './../images/main-panel/steps.svg';

export default class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalGlass: 4,
      cardsData:[
        {progress: 55, target: '50 km', info: '10 km / week'},
        {progress: 75, target: '7 km / week', info: '5 km / week'},
        {progress: 95, target: '12000 steps / week', info: '10000 steps / week'},
      ]
    };

    this.cards=[
      {icon: Cycling, title: 'Cycling Hero'},
      {icon: Running, title: 'Daily Running'},
      {icon: Steps, title: 'Daily Steps'}
    ];
  }

  updateChart = (data) => this.setState({});
  componentDidMount = () => this.updateProps();

  updateProps(){
    if(this.props.data !== null){
      this.setState({
        totalGlass: this.props.data['total-glass'],
        cardsData:this.props.data['cards-content'].map((el)=>el)
      })
    }
  }

  banner_render(data){
    return(
      <><div className="content-icon" style={{backgroundColor: data.color}}>
        <img src={data.icon} alt="" />
      </div><h3>{data.text}</h3></>
    );
  }

  render(){
    return (
      <div className="home-page">
        <div className = "main-panel-content" >
          <div className="activity">
            <ActivityHeader update={this.updateChart}/>
            <ActivityChart  data = {this.props.data}/>
          </div>

    <div className="content-container">
      <div className="daily-walking">
      {this.banner_render({color:'rgba(255,255,255,.2)',icon: Walking, text:'Daily Walking'})}
      </div>
      <div className="water">

    <div className="water-header">
    {this.banner_render({color:'#FF8CB1',icon: Water, text: 'Water'})}
    </div>

          <div className="water-footer">
            
      <div className="water-info">
        <p>Total Glass</p>
        <h3>{this.state.totalGlass}</h3>
      </div>
      <img src={Spray} alt="" />

          </div>
            </div>
          </div>
        </div>

        <div className="cards-content" >
  {this.state.cardsData.map(
    (el, id)=><Card data={el} key={id} card={this.cards[id]}/>)}
        </div>

      </div>
    );
  }
}