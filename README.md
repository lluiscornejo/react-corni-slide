# React Corni Slider

## Introduction

Native horizontal scrolling carousel. Allows scrolling without added animations.
The configuration enables a number of configuration options.

## Demo

[Demo](https://lluiscornejo.github.io/react-corni-slide)

## The component

```jsx
  <Slider config={config} data={data} component={Card} />
```

### Configuration

| Property | Description   | Type  | Default value  |
|---|---|---|---|
| itemsToShow  | Visible items  | Number  | 1  |
| itemsToSlide  | Items that will slide  | Number  | 1  |
| gutter  | Horizontal padding for each item  | Number  | 0  |
| showDots  | Show dots for block navigation  | Boolean  | false  |
| dotsStyles  | Style for dots  | Object  |   |
| nextVisibleItemWidth  | Show the a part of the next item after the number of items selected as itemsToShow. The value will be in px  | Number  | 0  |
| animationVelocity  | Animation in ms  | Number  | 300  |
| responsive  | It's possible to define a configuration by breakpoint. This configuration will have the previous properties  | Object  |   |
| showArrow  | Show the arrows button. You can style  | Boolean  | true  |
| arrows  | Pass the component to customize each arrow: left and right  | Object  | < and >  |

#### Example

```js
const config = {
  itemsToShow: 3,
  itemsToSlide: 3,
  gutter: 10,
  showDots: true,
  dotsStyles: {},
  nextVisibleItemWidth: 100,
  animationVelocity: 300,
  responsive: {
    0: {
      itemsToShow: 1,
      itemsToSlide: 1,
      gutter: 5,
      showDots: true,
      nextVisibleItemWidth: 50,
      animationVelocity: 300,
    },
    414: {
      itemsToShow: 2,
      itemsToSlide: 1,
      gutter: 5,
      showDots: true,
      nextVisibleItemWidth: 50,
      animationVelocity: 300,
    },
    767: {
      itemsToShow: 3,
      itemsToSlide: 1,
      gutter: 10,
      showDots: true,
      nextVisibleItemWidth: 75,
      animationVelocity: 500,
    },
    1024: {
      itemsToShow: 5,
      itemsToSlide: 5,
      gutter: 10,
      showDots: true,
      nextVisibleItemWidth: 100,
      animationVelocity: 500,
    },
  },
  showArrows: true,
  arrows: {
    left: <div>L</div>,
    right: <div>R</div>,
  },
  ssr: 1024,
};
```

### Data

It is the array you need to pass to create the list of items. Each item will be an object with the properties you need to pass to your component.

### Component

The component o card to show inside de carousel.

-------

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app before publish to npm js.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run storybook`

Run storybook in 6006 port.

### `npm run build-storybook`

Build the storybook.

### `npm run deploy-storybook`

Deploy to Git hub pages the storybook. Previously you need to build storybook.


