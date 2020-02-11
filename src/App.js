import "./App.css";
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Text,
  Legend
} from "recharts";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
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
        <Legend
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

const divStyle = {
  overflowY: "scroll",
  border: "1px solid grey",
  borderRadius: "3px",
  width: "500px",
  height: "200px",
  position: "relative",
  margin: "auto"
};

function App() {
  const [eye, eyeCount] = useState(90);
  const [hand, handCount] = useState(90);
  const [head, headCount] = useState(90);
  const [mouse, mouseCount] = useState(90);
  const [leg, legCount] = useState(90);
  const [mental, mentalCount] = useState(90);
  const [name, setName] = useState("肩書き");
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
    console.log(name);
  };

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
          name={name}
        />
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          {/* <input
            type="button"
            value="click"
            onClick={() => {
              console.log("aa");
            }}
          /> */}
        </form>
        <div style={divStyle}>
          <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom>
              目
            </Typography>
            <Slider
              defaultValue={90}
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
              defaultValue={90}
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
              defaultValue={90}
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
              defaultValue={90}
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
              defaultValue={90}
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
              defaultValue={90}
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
        <TwitterShareButton
          url={"https://d00fy.github.io/hosting-react/"}
          options={{ text: "デザイナー診断", via: "uchibashi" }}
        />
      </div>
    </>
  );
}

export default App;
