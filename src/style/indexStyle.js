import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

// eslint-disable-next-line no-unused-vars
const joinArrayOfString = (arrayStrings = []) => Array.isArray(arrayStrings) ? arrayStrings.join() : '';

const GlobalStyles = createGlobalStyle`
${normalize}
@font-face {
  font-family: 'Roboto';
  src: url('../fonts/Roboto-Bold.ttf');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url('../fonts/Roboto-Medium.ttf');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url('../fonts/Roboto-Regular.ttf');
  font-weight: 400;
  font-display: swap;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl'][0]};
    line-height: ${({ theme }) => theme.fontSize['4xl'][1].lineHeight};
  } 
  h2 {
    font-size: ${({ theme }) => theme.fontSize['3xl'][0]};
    line-height: ${({ theme }) => theme.fontSize['3xl'][1].lineHeight};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize['2xl'][0]};
    line-height: ${({ theme }) => theme.fontSize['2xl'][1].lineHeight};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.xl[0]};
    line-height: ${({ theme }) => theme.fontSize.xl[1].lineHeight};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSize.lg[0]};
    line-height: ${({ theme }) => theme.fontSize.lg[1].lineHeight};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.base[0]};
    line-height: ${({ theme }) => theme.fontSize.base[1].lineHeight};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.base[0]};
    line-height: ${({ theme }) => theme.fontSize.base[1].lineHeight};
  }
`
export default GlobalStyles;