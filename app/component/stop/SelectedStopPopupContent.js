import React from 'react';

import ComponentUsageExample from '../documentation/ComponentUsageExample';

const SelectedStopPopupContent = ({ stop }) => (
  <div className="origin-popup">
    <div className="origin-popup-header">
      {stop.name}
    </div>
    <div>
      <div className="origin-popup-name">
        <div className="selected-stop-popup">
          <p className="card-code">{stop.code}</p>
          <p className="description">{stop.desc}</p>
        </div>
      </div>
      <div className="shade-to-white" />
    </div>
  </div>
);

SelectedStopPopupContent.propTypes = {
  stop: React.PropTypes.object.isRequired,
};

SelectedStopPopupContent.displayName = 'SelectedStopPopupContent';

SelectedStopPopupContent.description = (
  <div>
    <p>Renders a popup with the selected stop</p>
    <ComponentUsageExample description="example">
      <SelectedStopPopupContent
        stop={{ name: 'Name', code: '123', desc: 'Desc' }}
      />
    </ComponentUsageExample>
  </div>
);

export default SelectedStopPopupContent;
