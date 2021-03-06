import PropTypes from "prop-types";
import React from "react";
import createReactClass from "create-react-class";

var ChartStripes = createReactClass({
  displayName: "ChartStripes",

  propTypes: {
    count: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  },

  getStripes(props) {
    var count = props.count;
    var width = props.width / (2 * count);

    return Array(count)
      .fill()
      .map(function(v, i) {
        // indent with margin, start one width length in
        // and add two times width per step
        var position = width + i * 2 * width;

        return (
          <rect
            key={i}
            className="background"
            x={position + "px"}
            y={0}
            height={props.height}
            width={width}
          />
        );
      });
  },

  render() {
    return <g>{this.getStripes(this.props)}</g>;
  }
});

module.exports = ChartStripes;
