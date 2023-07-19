import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://shyamgr.in/icon.svg',
    brandTitle: 'Hamish Williams Components',
    brandUrl: 'https://shyamgr.in',
  },
});
