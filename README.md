# react-native-simple-banner-carousel

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Github Actions](https://github.com/takagimeow/react-native-simple-banner-carousel/workflows/Test%20for%20PR/badge.svg)](https://github.com/takagimeow/react-native-simple-banner-carousel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/react-native-simple-banner-carousel.svg?style=flat-square)](https://npmjs.com/package/react-native-simple-banner-carousel)
[![NPM downloads](https://img.shields.io/npm/dm/react-native-simple-banner-carousel.svg?style=flat-square)](https://npmjs.com/package/react-native-simple-banner-carousel)


<p align="center">
  <img src="https://user-images.githubusercontent.com/66447334/132850341-307f6ce6-ea1a-4744-8131-5e9ae55ec19e.gif" height="542" alt="Simple" />
</p>

## Installation

```bash
# npm
npm instal react-native-simple-banner-carousel

# yarn
yarn add react-native-simple-banner-carousel
```

## Usage

Here is a quick example.

```tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        paddingVertical: 12,
        width: '100%',
        backgroundColor: '#fff',
      }}>
        <SimpleCarousel 
          data={[{
              title: 'Hokkaido',
              source: require('./assets/images/sapporo.jpg'),
            },
            {
              title: 'Tokyo',
              source: require('./assets/images/tokyo.jpg'),
            },
            {
              title: 'Osaka',
              source: require('./assets/images/osaka.jpg'),
            },
            {
              title: 'Kyoto',
              source: require('./assets/images/kyoto.jpg'),
            },
            {
              title: 'Shimane',
              source: require('./assets/images/shimane.jpg'),
            }
          ]}
          renderItem={(props, i, width) => {
            return (
              <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
            )
          }} 
        />
      </View>
      <StatusBar translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## SimpleCarousel

### Props

#### data (required)

Type: Array<Object>

This property is an array of the data you want to display in the carousel.
The data element is passed as the first argument of renderItem method.

#### renderItem (required)

Type: (props: Object, index: number, itemWidth: number) => React.ReactElement;

A method that returns the component you want to display in the carousel.
I recommend that you use the Banner component.

## Banner

### Props

#### id (required)

Type: string

This ID is a property that identifies this banner, and is passed to the onPress method.

#### source (required)

Type: Object

The source of the image you want to display in the banner.

#### width (required)

Type: number;

The width of the banner.

#### onPress

Type: (id: string) => void;

The method to be called when tapped.