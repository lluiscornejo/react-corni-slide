import GlobalStyles from '@Application/styles/GlobalStyles';
import Slider from '@Application/components/slider';
import Card from '@Application/components/card';

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
  showArrow: true,
  arrows: {
    left: <div>L</div>,
    right: <div>R</div>,
  },
  ssr: 1024,
};

const totalItems = [...Array(20).keys()];
const data = totalItems.map((item, idx) => ({ title: `Title ${idx + 1}`, description: `Description ${idx + 1}` }));

const App = () => (
  <>
    <GlobalStyles />
    <Slider config={config} data={data} component={Card} />
  </>
);

export default App;
