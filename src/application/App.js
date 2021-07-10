import GlobalStyles from '@Application/styles/GlobalStyles';
import Slider from '@Application/components/slider';
import Card from '@Application/components/card';

const config = {
  itemsToShow: 3,
  gutter: 10,
  nextVisibleItemWidth: 100,
  itemsToSlide: 3,
  showDots: false,
  animationVelocity: 300,
};

const totalItems = [...Array(20).keys()];
const data = totalItems.map((item, idx) => ({ title: `Title ${idx}`, description: `Description ${idx}` }));

const App = () => (
  <>
    <GlobalStyles />
    <Slider config={config} data={data} component={Card} />
  </>
);

export default App;
