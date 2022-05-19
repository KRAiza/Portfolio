import React from 'react';

import Typography from './typography';

export default {
  title: 'Skilled-E-Learning/Typography',
  component: Typography,

  argTypes: {
    fontFamily : { control: 'text' },
  },
}

const Template = (args) => <Typography {...args}/>;

export const HeadingXL = Template.bind({});
HeadingXL.args = {
  label:'Increase your skillwith minimal budget',
  fontFamily:'Barlow Condensed',
  fontSize:'56px',
  

}

export const HeadingL = Template.bind({});
HeadingL.args = {
  label:'Users all around the globe',
  fontFamily:'Barlow Condensed',
  fontSize:'40px',


}

export const HeadingM = Template.bind({});
HeadingM.args = {
  label:'Check out our most popular courses',
  fontFamily:'Barlow Condensed',
  fontSize:'32px',


}

export const HeadingS = Template.bind({});
HeadingS.args = {
  label:'Photography',
  fontFamily:'Barlow Condensed',
  fontSize:'24px',


}

export const BodyM = Template.bind({});
BodyM.args = {
  label:'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. ',
  fontFamily:'Barlow Condensed',
  fontSize:'18px',


}

export const BodyS = Template.bind({});
BodyS.args = {
  label:'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. ',
  fontFamily:'Barlow Condensed',
  fontSize:'16px',


}