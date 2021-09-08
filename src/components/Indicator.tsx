import React from 'react';
import { Dimensions, View } from 'react-native';
import { Dot } from './Dot';

export interface IIndicator<T> {
  data: T[];
  currentIndex: number;
  lastIndex: number;
}

export function Indicator<T>({ data, currentIndex, lastIndex }: IIndicator<T>) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%',
        left: 0,
        width: Dimensions.get('window').width,
        height: 24,
        backgroundColor: 'transparent',
        zIndex: 1,
      }}
    >
      {data.map((_, i) => (
        <Dot
          key={`simple_carousel_indicator_key_${i}`}
          index={i}
          currentIndex={currentIndex}
          lastIndex={lastIndex}
        />
      ))}
    </View>
  );
}
