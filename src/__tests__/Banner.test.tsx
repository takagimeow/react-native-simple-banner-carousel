/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Banner } from '..';

describe('Banner', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <Banner
        id={`banner_id`}
        source={{
          uri: 'https://github.com/takagimeow/react-native-simple-banner-carousel',
        }}
        width={128}
        onPress={() => console.log('hello world')}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
