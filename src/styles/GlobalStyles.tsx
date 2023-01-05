import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  :root {
    --dark-grey: #36454F;
    --white: #FFFFFF;
    --primary: #F9A826;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-size: 100%;
    font: inherit;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    padding: 0;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  p, a {
    font-size: 1.6rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  button {
    cursor: pointer;
  }

  #root {
    min-height: 100%;
    background: linear-gradient(45deg, #EEEEEE, #FAF8F9, #FFFFFF);
    color: var(--dark-grey);
  }
`;