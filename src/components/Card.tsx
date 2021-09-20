import React from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';

export interface ICard {
  id: string;
  title: string;
  width: number;
  source: any;
  description: string;
  score: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Card({ id, source, width, title, description, score, style }: ICard) {
  return (
    <View
      key={id}
      style={[
        {
          width: width,
          maxWidth: '100%',
          backgroundColor: '#fffffff',
          paddingTop: 12,
          paddingBottom: 16,
        },
        style,
      ]}
    >
      <Image
        source={source}
        style={{
          width: width,
          maxWidth: '100%',
          height: 156,
          backgroundColor: '#bbb',
          marginBottom: 8,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            flex: 11,
            fontSize: 14,
          }}
        >
          {title.length > 25 ? `${title.slice(0, 25)}...` : title}
        </Text>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            paddingVertical: 6,
            paddingHorizontal: 4,
            backgroundColor: '#f0f0f0',
          }}
        >
          <Text
            style={{
              fontSize: 12,
            }}
          >
            {score}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
