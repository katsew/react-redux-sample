const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./header.js');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;
const actionCreator = require('../action/manipulate-type-list');
const Tooltip = require('./enhance/tooltip.js');
const TooltipContent = require('./content/add-new-type/tooltip-types.js');

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
        <option key={`option_${item}_${idx}`}>{item}</option>
      );
    });
    let manipulated = this.props.manipulateTypeList.map((item, idx, arr) => {
      return (
        <div key={`manipulated_${item}_${idx}`}>
          <label><input type="text" disabled="disabled" value={item} /></label>
          <button onClick={this.removeType.bind(this, idx)}>[-] remove</button>
        </div>
      );
    });
    return (
      <div className="section">
        <div className="content">
          <label>
            <span>ゲームID</span>
            <input type="text" ref="game_id" />
          </label>
          <div>
            {manipulated}
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
