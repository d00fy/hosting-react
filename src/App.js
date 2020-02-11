import "./App.css";
import React, { ReactDOM, useState, useEffect } from "react";

import TwoLevelPieChart from "./Chart";
import Canvas from "./Canvas";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// import saveSvgAsPng from "../node_modules/save-svg-as-png/lib/saveSvgAsPng";
// var XMLParser = require("react-xml-parser");
import { TwitterShareButton } from "react-twitter-embed";

//----------------スライダー関連
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
const divStyle = {
  overflowY: "scroll",
  border: "1px solid grey",
  borderRadius: "3px",
  width: "500px",
  height: "200px",
  position: "relative",
  margin: "auto"
};
//-------------------------------スライダー関連

function App() {
  const [eye, eyeCount] = useState(90);
  const [hand, handCount] = useState(90);
  const [head, headCount] = useState(90);
  const [mouse, mouseCount] = useState(90);
  const [leg, legCount] = useState(90);
  const [mental, mentalCount] = useState(90);
  const [name, setName] = useState("肩書き");
  const [svg, setSvg] = useState("");

  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSvg = sentSvg => {
    setSvg(sentSvg);
    console.log(svg);
  };

  return (
    <>
      <div className="App">
        <TwoLevelPieChart
          id="testes"
          eye={eye}
          hand={hand}
          head={head}
          mouse={mouse}
          leg={leg}
          mental={mental}
          name={name}
          val={handleSvg}
        />
        {/* <form> */}
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        {/* <input
            type="button"
            value="click"
            onClick={() => {
              // svgToPng(React.createElement(TwoLevelPieChart), 200, 200);
              // console.log(<RadarChart />);
            }}
          /> */}
        {/* </form> */}

        {/* //--------------------- スライダー関連*/}
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
        <Canvas svg={svg} name={name} />
        <TwitterShareButton
          url={"https://d00fy.github.io/hosting-react/"}
          options={{ text: "デザインチャート", via: "uchibashi" }}
        />
      </div>
    </>
  );
}

export default App;
