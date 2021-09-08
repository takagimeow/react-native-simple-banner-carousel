import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import React, { useEffect, useState } from 'react';

export interface IDot {
  index: number;
  currentIndex: number;
  lastIndex: number;
}

const initialStyle = {
  borderRadius: 25,
  width: 6,
  height: 6,
  backgroundColor: '#f0f0f0',
  marginHorizontal: 2,
};
export function getStyle({ index, currentIndex, lastIndex }: IDot): StyleProp<ViewStyle> {
  if (Platform.OS === 'android') {
    return {
      ...initialStyle,
      backgroundColor: index === currentIndex ? '#ffffff' : 'transparent',
      borderWidth: index === currentIndex ? 0 : 0.7,
      borderColor: index === currentIndex ? 'transparent' : '#ffffff',
      marginHorizontal: 2,
    };
  } else {
    return {
      ...initialStyle,
      backgroundColor:
        index === currentIndex
          ? index === 0 || index === lastIndex
            ? '#ffffff'
            : '#000000'
          : '#f0f0f0',
      opacity: index === currentIndex ? 1 : 0.5,
      width: 8,
      height: 8,
      marginHorizontal: 5,
    };
  }
}

export function Dot({ index, currentIndex, lastIndex }: IDot) {
  const [style, setStyle] = useState<StyleProp<ViewStyle>>(
    getStyle({ index, currentIndex, lastIndex }),
  );
  useEffect(() => {
    setStyle(getStyle({ index, currentIndex, lastIndex }));
  }, [index, currentIndex]);
  return <View style={style} />;
}
