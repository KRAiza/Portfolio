import React from 'react';

import { buttonLandingPage } from './buttonLandingPage'

export default {
  title: 'Skilled E Learning',
  component: buttonLandingPage
}

const Template = (args) => <buttonLandingPage {...args} />;

export const Primary = {
  args: {
    label:'Button Landing Page'
  }
}