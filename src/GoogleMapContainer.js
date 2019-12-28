import React from "react";
import RenderMap from "./renderMap";

class GoogleMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "38.627003", //47.359423
      long: "-90.199402" // -122.021071
    };
  }

  handleButtonClick = e => {
    console.log(e);
    e.preventDefault();
    console.log(this.lat.value);
    console.log(this.long.value);
    this.setState({ lat: this.lat.value, long: this.long.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            lat:
            <input type="text" name="lat" ref={input => (this.lat = input)} />
          </label>
          <label>
            long:
            <input type="text" name="long" ref={input => (this.long = input)} />
          </label>
          <button type="button" onClick={this.handleButtonClick}>
            {" "}
            Submit{" "}
          </button>
        </form>
        <RenderMap lat={this.state.lat} long={this.state.long} />;
      </div>
    );
  }
}

//{ lat: 38.627003, lng: -90.199402 }
export default GoogleMapContainer;