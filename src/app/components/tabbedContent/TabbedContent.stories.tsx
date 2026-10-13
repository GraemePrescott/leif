import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import TabbedContent, { Props } from './TabbedContent';

export default {
  title: 'Content/Components/TabbedContent',
  component: TabbedContent,
} as Meta;

const Template: Story<Props> = args => {
  return <TabbedContent {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      title: 'Tab 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Tab 2',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Tab 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ],
  defaultTabIndex: 0,
};
