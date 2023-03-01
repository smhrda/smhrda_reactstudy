import React from "react";
//import Greetings from './Greetings';
//import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

const App: React.FC = () => {
  /* const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }
  return (
    <Greetings name='React' onClick={onClick}/>
  ); */

  /* return(
    <Counter/>
  ) */

  /* const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />; */

  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;
