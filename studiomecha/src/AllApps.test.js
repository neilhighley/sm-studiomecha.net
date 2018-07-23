import React from 'react';
import ReactDOM from 'react-dom';
import AllApps from './AllApps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllApps />, div);
  ReactDOM.unmountComponentAtNode(div);
});
