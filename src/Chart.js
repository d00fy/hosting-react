import React, { ReactDOM, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from "recharts";

class TwoLevelPieChart extends React.Component {
  exportSVG = element => {
    const svg = element;
    const oSerializer = new XMLSerializer();
    const svgString = oSerializer.serializeToString(svg);
    return svgString;
    // generateLink(fileName + '.svg', 'data:image/svg+xml;utf8,' + svgString).click();
  };

  componentDidUpdate(prevProps) {
    // 典型的な使い方(props を比較することを忘れないでください)
    if (this.props !== prevProps) {
      //   console.log(this.exportSVG(document.getElementById("tes")));
      console.log(document.getElementsByClassName("katagaki"));
      this.props.val(this.exportSVG(document.getElementById("tes")));
    }
  }

  render() {
    return (
      <RadarChart
        id="tes"
        className="App"
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={[
          { subject: "目", A: this.props.eye, B: 110, fullMark: 150 },
          { subject: "手", A: this.props.hand, B: 130, fullMark: 150 },
          { subject: "頭", A: this.props.head, B: 130, fullMark: 150 },
          { subject: "口", A: this.props.mouse, B: 100, fullMark: 150 },
          { subject: "足", A: this.props.leg, B: 90, fullMark: 150 },
          { subject: "心", A: this.props.mental, B: 85, fullMark: 150 }
        ]}
      >
        <Legend
          id="katagaki"
          verticalAlign={"center"}
          iconType={"star"}
          wrapperStyle={{
            marginTop: "24px"
          }}
        />
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name={this.props.name}
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        ></Radar>
      </RadarChart>
    );
  }
}

export default TwoLevelPieChart;
