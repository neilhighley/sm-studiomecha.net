// Import Jest renderer as well as Enzyme
import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Import component being tested
import AllApps from './AllApps';

it('displays correctly',()=>{
    <Button>button</Button>.toJSON();
    expect(wrapper).toMatchSnapShot();
});