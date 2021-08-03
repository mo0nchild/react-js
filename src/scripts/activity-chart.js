import { Component } from "react";
import {Line} from 'react-chartjs-2';

export default class ActivityChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chart_data:[0, 3, 3, 4, 2, 5, 6]
    };

    this.chart_option ={  
      plugins: {
        title: {display: false,text: 'Chart Title'},
        mode: 'index',
        legend: {display: false},
        tooltip:{
          displayColors: false,
          backgroundColor:'#E95F8B',
          footerFont:{size: 12,weight: 'normal'},
          caretSize: 5.5,
          caretPadding: 11,
          bodyFont:{size: 15,weight: 'bold'},
          footerMarginTop: -1,
          callbacks: {
            footer: (tooltipItems) => 'Steps',
            label: (items)=>`${this.state.chart_data[items.dataIndex]}`,
            title: ()=>'',
          }
        },
      },
      scales: {
        x: {
          stackWeight: .9,
          grid: {color: '#AEA8FF',drawBorder: false,lineWidth: 2},
          ticks:{font:{size: 15},color: '#DDDDDD',padding: 9,sampleSize: 10},
        },
        y: {display: false}, 
      },
    };
  }

  updateChart(){
    this.setState({chart_data: this.props.data['chart-data']})
  }
  componentDidMount = () => this.updateChart();

  render(){
    return(

      <Line style={{marginTop:'15px', marginLeft: '15px'}}
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',],
          datasets: [{
            label: '# of Votes',
            tension: .45,
            data: this.state.chart_data,
            backgroundColor: '#E95F8B',
            borderColor: '#E95F8B',
            borderWidth: 5,
            pointRadius: 6,
            pointHoverRadius: 9,
            pointHoverBackgroundColor: 'white',
            hoverBorderWidth : 4,
            hoverBorderColor: '#E95F8B',
          }]
        }}
        options={this.chart_option}
        height={200} width={500} id = "myChart"
      />
      
    );
  }
}