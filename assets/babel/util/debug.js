const React = require('react');
const DevTools = require('redux-devtools/lib/react').DevTools;
const DebugPanel = require('redux-devtools/lib/react').DebugPanel;
const LogMonitor = require('redux-devtools/lib/react').LogMonitor;

const DebugComponent = React.createClass({
  render() {
    return (
      <DebugPanel top left bottom>
        <DevTools store={this.props.store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
});

module.exports.DebugComponent = DebugComponent;
