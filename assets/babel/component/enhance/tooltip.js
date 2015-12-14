const React = require('react');
const Classnames = require('classnames');

const Tooltip = React.createClass({
  getInitialState() {
    return {
      isHidden: true
    };
  },
  showTooltip() {
    this.setState(Object.assign({}, {
      isHidden: false
    }));
  },
  hideTooltip() {
    this.setState(Object.assign({}, {
      isHidden: true
    }));
  },
  render() {
    let classes = Classnames(`tooltip-item ${this.props.tooltipType || null}`, {
      'is-hidden': this.state.isHidden
    });
    return (
      <span className="tooltip">
        <i
          onMouseOver={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >(?)</i>
        <div className={classes}>
          {this.props.children}
        </div>
      </span>
    );
  }
});

module.exports = Tooltip;
