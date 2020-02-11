import React, { Component } from "react";

const style = {
  border: "1px solid gray",
  backgroundColor: "white"
};

class Canvas extends Component {
  constructor() {
    super();
    this.state = { drawing: "" };
  }

  getContext() {
    return this.refs.canvas.getContext("2d");
  }

  test() {
    this.setState({ drawing: true });
    const ctx = this.getContext();
    const image = new Image();
    image.src =
      "data:image/svg+xml;charset=utf-8;base64," +
      btoa(unescape(encodeURIComponent(this.props.svg)));
    image.onload = () => {
      // SVGデータをPNG形式に変換する
      ctx.drawImage(image, 0, 0, image.width, image.height);
      ctx.font = "24px serif";
      ctx.textBaseline = "hanging";
      ctx.fillText(this.props.name, 40, 50);
      var canvas = document.getElementById("canvas");
      console.log(canvas.toDataURL());
      this.setState({ drawing: canvas.toDataURL() });
    };
  }

  render() {
    return (
      <>
        <canvas
          id="canvas"
          ref="canvas"
          width="600px"
          height="500px"
          onMouseUp={() => {
            this.test();
          }}
          style={style}
        />
        <a
          onClick={() => {}}
          href={this.state.drawing}
          download={new Date().getTime() + ".png"}
        >
          <div className="box">
            <h2 className="title">画像をダウンロード</h2>
          </div>
        </a>
      </>
    );
  }
}
export default Canvas;
