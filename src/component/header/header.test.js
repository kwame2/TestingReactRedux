import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './index';





describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    const setUp = (props={}) => {
        const component = shallow(<Header {...props} />);
        return component;
    }

    it('It should render without errors', () => {
       //const component = shallow(<Header/>)
       //const component = setUp();
       //const wrapper = component.find(`[data-test='headerComponent']`);
       const wrapper = findByTestAttr(component, 'headerComponent')
       expect(wrapper.length).toBe(1);


    });

    it('It should render my logo', () => {
        //const component = shallow(<Header/>)
        //const component = setUp();
        //const logo = component.find(`[data-test='logoIMG']`);
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
 
 
     });
});
