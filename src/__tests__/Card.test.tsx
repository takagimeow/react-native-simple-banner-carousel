/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Card } from '..';

describe('Card', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <Card
        id={`banner_id`}
        title="マクドナルド札幌すすきの店"
        description="配送手数料: ￥150・5-15分"
        score={4.7}
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
