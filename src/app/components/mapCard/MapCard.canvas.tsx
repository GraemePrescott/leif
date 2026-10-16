import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import React from 'react';
import MapCard, { Props as MapCardProps } from './MapCard';
import { MapCardCanvasMapping } from './MapCard.mapper';
import { mapJson } from '@zengenti/contensis-react-base/util';

const MapCardCanvas = (
  props: RenderBlockProps<ComponentBlock<MapCardProps>>
) => {
  console.log('RAW MAPCARD PROPS', props);

  const mappedProps = mapJson(props, MapCardCanvasMapping) as MapCardProps;

  console.log('MAPPED MAPCARD PROPS', mappedProps);

  return <MapCard {...mappedProps} />;
};

export default MapCardCanvas;
