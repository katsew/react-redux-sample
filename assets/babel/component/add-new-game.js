const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./header.js');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;
const actionCreator = require('../action/manipulate-type-list');
const Tooltip = require('./enhance/tooltip.js');
const TooltipContent = require('./content/add-new-type/tooltip-types.js');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Calendar = require('./enhance/calendar.js');


const mapStateToProps = (state) => {
  return {
    manipulateTypeList: state.manipulateTypeList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (payload) => {
      dispatch(actionCreator.add(payload));
    },
    remove: (payload) => {
      dispatch(actionCreator.remove(payload));
    }
  };
};

const AddNewGame = React.createClass({
  addNewType() {
    console.log('--- add new type ---');
    let elem = ReactDOM.findDOMNode(this.refs.selectedType);
    let val = elem.value;
    this.props.add([val]);
  },
  removeType(idx) {
    this.props.remove(idx);
  },
  submit(e) {
    e.preventDefault();
    console.log('--- submit new game schema ---');
  },
  render() {
    let typeList = ['login', 'registration', 'payment', 'event'];
    let types = typeList.map((item, idx, arr) => {
      return (
        <option key={`option_${idx}`}>{item}</option>
      );
    });
    let manipulated = this.props.manipulateTypeList.map((item, idx, arr) => {
      return (
        <div key={`manipulated_${idx}`}>
          <label><input type="text" disabled="disabled" value={item} /></label>
          <button onClick={this.removeType.bind(this, idx)}>[-] remove</button>
        </div>
      );
    });
    return (
      <div className="section">
        <div className="content">
          <Calendar
            onSelectPrev={(idx) => {
              console.log('--- select prev ---');
            }}
            onSelectNext={(idx) => {
              console.log('--- select next ---');
            }}
            onSelectDay={(day) => {
              console.log('--- select day ---');
              console.log(day);
            }}
          />
          <label>
            <span>ゲームID</span>
            <input type="text" ref="game_id" />
          </label>
          <div>
            <ReactCSSTransitionGroup
              transitionName="anim-todo"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={300}
            >
              {manipulated}
            </ReactCSSTransitionGroup>
          </div>
          <div style={{
            marginTop: 20 + 'px'
          }}>
            <select ref="selectedType">
              {types}
            </select>
            <button onClick={this.addNewType}>[+] add new type</button>
            <Tooltip tooltipType="types">
              <TooltipContent />
            </Tooltip>
          </div>
          <div style={{marginTop: 20 + 'px'}}>
            <button onClick={this.submit}>submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewGame);
