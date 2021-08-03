import { Component} from "react";
import Search from './../images/main-panel/search.svg';

import ComingSoon from "./coming-soon-page";
import HomePage from './home-page';

export default class MainPanel extends Component{
  constructor(props){
    super(props);
    this.pages = [
      <HomePage data={this.props.data}/>, 
      <ComingSoon />,
      <ComingSoon />,
      <ComingSoon />
    ]
  }

  render(){
    return(
      <div className={this.props.class}>
        <div className="main-panel-header">
          <div>
            <a href={'./'}><img src={Search} alt=""/></a>
            <input type="text" size="35"  placeholder="Search Activites, messages"/>
          </div>
          <button>Schedule events</button>
        </div>
        {this.pages[this.props.page]}
        
      </div>
    );
  }
}