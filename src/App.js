import "./App.css";
import styled from "styled-components/macro";

const MyComponent = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
})`
  border: 1px solid green;
  padding: 10px;
  background: lightgreen;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div>
      <MyComponent>MyComponent</MyComponent>
      Inspect the component above and see that the display name correctly
      matches "MyComponent"
    </div>
  );
}

export default App;
