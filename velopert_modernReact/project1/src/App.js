import Hello from './compo/Hello';
import Wrapper from './compo/Wrapper';

function App() {
  const name = "test";
  const style = {
    backgroundColor:'salmon',
    color:'aqua',
    fontSize: 24,
    padding:'1rem'
  }
  return (
    <Wrapper>
    <Hello name="test" color="blue" isSpecial/>
    <Hello/>
    </Wrapper>
  );
}

export default App;
