import React from 'react';

import { ButtonLandingPage } from './buttonLandingPage'

export default {
  title: 'Skilled-E-Learning/Button',
  component: ButtonLandingPage,

  argTypes:{
    background: {control:'color'}
  }
}

const Template = (args) => <ButtonLandingPage {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  background:'#13183F',

}

export const Secondary = Template.bind({});

Secondary.args = {
  background:'linear-gradient(#F02AA6, #FF6F48)',

}

export const tertiary = Template.bind({});

tertiary.args = {
  background:'linear-gradient(#4851FF,#F02AA6)',

}

