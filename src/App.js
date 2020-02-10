import "./App.css";
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: "auto"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 0
  }
];

class TwoLevelPieChart extends React.Component {
  render() {
    return (
      <RadarChart
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
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}

function App() {
  const [eye, eyeCount] = useState(10);
  const [hand, handCount] = useState(10);
  const [head, headCount] = useState(10);
  const [mouse, mouseCount] = useState(10);
  const [leg, legCount] = useState(10);
  const [mental, mentalCount] = useState(10);
  const classes = useStyles();

  return (
    <>
      <div className="App">
        <TwoLevelPieChart
          eye={eye}
          hand={hand}
          head={head}
          mouse={mouse}
          leg={leg}
          mental={mental}
        />
        <div className={classes.root}>
          <Typography id="discrete-slider-custom" gutterBottom>
            目
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              eyeCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Typography id="discrete-slider-custom" gutterBottom>
            手
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              handCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Typography id="discrete-slider-custom" gutterBottom>
            頭
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              headCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Typography id="discrete-slider-custom" gutterBottom>
            口
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              mouseCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Typography id="discrete-slider-custom" gutterBottom>
            足
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              legCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Typography id="discrete-slider-custom" gutterBottom>
            心
          </Typography>
          <Slider
            defaultValue={10}
            max={120}
            getAriaValueText={value => {
              mentalCount(value);
            }}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
      </div>
    </>
  );
}

export default App;
