import { mapJson } from '@zengenti/contensis-react-base/util';

export const TabbedItemMapping = {
  title: 'title',
  text: 'text',
};

export const TabbedContentCanvasMapping = {
  title: 'block.value.title',
  tabs: {
    $path: 'block.value.tabItem',
    $formatting: (tab: any) => mapJson(tab, TabbedItemMapping),
  },
};
