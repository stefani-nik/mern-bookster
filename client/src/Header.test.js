import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("header", ()=> {
    it("Should render correctly", ()=>{
        const wrapper = shallow(<Header title="Test title"/>);
        expect(wrapper).toMatchSnapshot();
    });
});