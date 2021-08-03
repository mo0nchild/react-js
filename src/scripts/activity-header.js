import { Component} from "react";
import ArrowDown from './../images/main-panel/arrow-down.svg';

export default class ActivityHeader extends Component{
  constructor(props){
    super(props);
    this.selections = ['Weekly', 'Mothly' ,'Yearly'];
    this.state={selectorHover: false, currentSelection: this.selections[0]}
  }

  renderSelectorButton = (title, id) =>{
    return(
      <div className='window-selection' key={id}>
        <p>{title}</p>
        <button onClick={()=>{
          this.setState({currentSelection: title});
          this.props.update(this.state.currentSelection);
        }}><img src={ArrowDown} alt=""/></button>
      </div>
    );
  }

  renderSelectorWindow(data){
    return(
      <div className={"selector-window"}>
        {this.selections.map((el,index)=>this.renderSelectorButton(el, index))}
      </div>
    );
  }

  render(){
    const widgetClass = (this.state.selectorHover) ? 
      "selector-window-open":
      "selector-window-close"
    //const selectorClass = (this.state.selectorHover)?"selector-open": "selector-close";
    return(
  <div className="activity-header" >
    <h3>Activity</h3>
    <div className={"activity-selector " + widgetClass}
      onClick = {()=>this.setState({selectorHover: !this.state.selectorHover})}>   
      <p>{this.state.currentSelection}</p><img src={ArrowDown} alt=""/>
      {this.renderSelectorWindow()}
    </div>
  </div>
    );
  }
}