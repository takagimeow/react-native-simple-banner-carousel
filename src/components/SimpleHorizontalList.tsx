import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Platform, View } from 'react-native';

const MARGIN = 8;
const INSET = -15;

export interface ISimpleHorizontalList<T> {
  data: T[];
  renderItem: (props: T, index: number, itemWidth: number) => React.ReactElement;
}

export function SimpleHorizontalList<T>({ data, renderItem }: ISimpleHorizontalList<T>) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [itemWidth] = useState(Dimensions.get('screen').width * 0.75);
  const [, setDataIndex] = useState(0);

  useEffect(() => {
    scrollX.addListener(event => {
      const newIndex = Math.round(Math.abs(event.value / itemWidth));
      setDataIndex(newIndex);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <Animated.ScrollView
        horizontal
        style={{
          backgroundColor: 'transparent',
          padding: 0,
          margin: 0,
        }}
        contentContainerStyle={[
          {
            paddingHorizontal: Platform.OS === 'android' ? MARGIN + INSET : 0,
          },
        ]}
        contentInset={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        contentOffset={{
          x: 0,
          y: 0,
        }}
        snapToInterval={itemWidth + MARGIN * 2}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
      >
        {data.map((item, i) => (
          <View
            key={`simple_carousel_item_key_${i}`}
            style={{
              margin: MARGIN,
            }}
          >
            {renderItem(item, i, itemWidth)}
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}
