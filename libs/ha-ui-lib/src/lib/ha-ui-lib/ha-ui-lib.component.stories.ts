import type { Meta, StoryObj } from '@storybook/angular';
import { HaUiLibComponent } from './ha-ui-lib.component';

const meta: Meta<HaUiLibComponent> = {
  component: HaUiLibComponent,
  title: 'HaUiLibComponent',
};
export default meta;
type Story = StoryObj<HaUiLibComponent>;

export const Primary: Story = {
  args: {},
};
