/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Card, SimpleHorizontalList } from '..';

describe('SimpleHorizontalList', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <SimpleHorizontalList
        data={[
          {
            title: 'マクドナルド札幌すすきの店',
            description: '配送手数料: ￥150・5-15分',
            score: 4.7,
            source: {
              uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
            },
          },
          {
            title: 'ケンタッキーフライドチキン すすきのノルベサ店',
            description: '配送手数料: ￥100・20-30分',
            score: 4.7,
            source: {
              uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
            },
          },
          {
            title: 'すき家 札幌駅前通北一条店',
            description: '配送手数料: ￥100・5-15分',
            score: 4.7,
            source: {
              uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
            },
          },
          {
            title: '大戸屋ごはん処 ニッセイ札幌ビル店',
            description: '配送手数料: ￥100・30-40分',
            score: 4.7,
            source: {
              uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
            },
          },
          {
            title: 'スターバックス コーヒー 札幌パルコ',
            description: '配送手数料: ￥100・5-15分',
            score: 4.8,
            source: {
              uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
            },
          },
        ]}
        renderItem={(props, i, width) => {
          return (
            <Card
              id={`${props.title}_${i}`}
              width={width}
              {...props}
              onPress={() => console.log('hello world')}
            />
          );
        }}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
