import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import React from 'react';
import TabbedContent, { Props as TabbedContentProps } from './TabbedContent';
import { TabbedContentCanvasMapping } from './TabbedContent.mapper';
import { mapJson } from '@zengenti/contensis-react-base/util';

const TabbedContentCanvas = (
  props: RenderBlockProps<ComponentBlock<TabbedContentProps>>
) => {
  return <TabbedContent {...mapJson(props, TabbedContentCanvasMapping)} />;
};

export default TabbedContentCanvas;
