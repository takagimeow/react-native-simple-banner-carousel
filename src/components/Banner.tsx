import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export interface IBanner {
  id: string;
  source: any;
  width: number;
  onPress?: (id: string) => void;
}

export function Banner({ id, width, source, onPress }: IBanner) {
  return (
    <View key={id}>
      <TouchableOpacity onPress={onPress ? () => onPress(id) : undefined}>
        <Image
          source={source}
          style={{
            width,
            maxWidth: '100%',
            height: 156,
            backgroundColor: '#bbb',
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
