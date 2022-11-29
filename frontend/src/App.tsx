import TestCard from "./TestCard";

const App = () => (
  <>
    <TestCard serverAddress="http://localhost:3011" version="1.1" />
    <TestCard serverAddress="https://localhost:3020" version="2.0" />
  </>
);

export default App;
