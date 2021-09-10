/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Indicator } from '../components/Indicator';

describe('Indicator', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <Indicator
        data={[
          {
            name: 'tanaka',
          },
          {
            name: 'suzuki',
          },
        ]}
        currentIndex={0}
        lastIndex={2}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
