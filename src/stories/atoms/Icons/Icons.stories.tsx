import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icons } from './Icons';

export default {
  title: 'Atoms/Icon',
  component: Icons,
} as ComponentMeta<typeof Icons>;


const Template: ComponentStory<typeof Icons> = () => <Icons/>;

export const List = Template.bind({});