import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: pink;
    --color-background: white;
    --color-primary: rebeccapurple;
  }
`;
const TestText = styled.div`
  color: var(--color-text);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <TestText>Welcome to yeri's polio</TestText>
    </>
  );
}

export default App;
