import { createGlobalStyle } from 'styled-components';
import reset from '@Application/styles/reset';

export default createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

main {
  display: block;
}
`;
