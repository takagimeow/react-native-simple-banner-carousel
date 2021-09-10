/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Banner, SimpleCarousel } from '..';

describe('SimpleCarousel', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <SimpleCarousel
        data={[
          {
            title: 'THE STAY SAPPORO',
            source: {
              uri: 'https://reactnative.dev/img/homepage/phones.png',
            },
          },
          {
            title: 'THE STAY SAPPORO',
            source: {
              uri: 'https://reactnative.dev/img/homepage/phones.png',
            },
          },
          {
            title: 'THE STAY SAPPORO',
            source: {
              uri: 'https://reactnative.dev/img/homepage/phones.png',
            },
          },
          {
            title: 'THE STAY SAPPORO',
            source: {
              uri: 'https://reactnative.dev/img/homepage/phones.png',
            },
          },
          {
            title: 'THE STAY SAPPORO',
            source: {
              uri: 'https://reactnative.dev/img/homepage/phones.png',
            },
          },
        ]}
        renderItem={(props, i, width) => {
          return (
            <Banner
              id={`${props.title}_${i}`}
              source={props.source}
              width={width}
              onPress={() => console.log('hello world')}
            />
          );
        }}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
