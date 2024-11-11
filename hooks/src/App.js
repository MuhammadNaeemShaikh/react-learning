import React, { useCallback, useReducer, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import DataFetching from './components/DataFetching';
// import ComponentC from './components/use context/ComponentC';
import CounterOne from './components/use Reducer/CounterOne';
import CounterTwo from './components/use Reducer/CounterTwo';
import ComponentA from './components/use reducer with context/ComponentA';
import ComponentB from './components/use reducer with context/ComponentB';
import ComponentC from './components/use reducer with context/ComponentC';
import FetchData from './components/fetch data use Reducer/FetchData';
import DataFetchingTwo from './components/fetch data use Reducer/DataFetchingTwo';
import Title from './components/useCallBack/Title';
import Count from './components/useCallBack/Count';
import Button from './components/useCallBack/Button';
import FocusInput from './components/Use Ref/FocusInput';
// import UseEffectClass from './components/useEffectClass';

// export const userContext = React.createContext();
export const countContext = React.createContext();

// const initialState = { firstCounter: 0 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { firstCounter: state.firstCounter + action?.value };
//       break;

//     case 'decrement':
//       return state.firstCounter <= 0
//         ? initialState
//         : { firstCounter: state.firstCounter - action?.value };
//       break;
//     case 'reset':
//       return initialState;
//       break;

//     default:
//       return state;
//       break;
//   }
// };

const App = () => {
  // const [counter, dispatch] = useReducer(reducer, initialState);

  // use call back
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge((prevStat) => prevStat + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prevStat) => prevStat + 10000);
  }, [salary]);
  // use call back

  return (
    <div>
      {/* <ClassCounter />
      <FunctionCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour/> */}
      {/* <UseEffectClass /> */}
      {/* <UseEffectOne /> */}
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={['vishwas','vishwas@gmail.com']}> */}
      {/* <userContext.Provider value={'vishwas'}>
        <ComponentC />
      </userContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo /> */}
      {/* <countContext.Provider
        value={{ countState: counter.firstCounter, countDispatch: dispatch }}
      >
        <h1>Counter: {counter.firstCounter}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </countContext.Provider> */}
      {/* <FetchData /> */}
      {/* <DataFetchingTwo/> */}

      {/* //Use call back hook */}
      {/* <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button> */}
      {/* //Use call back hook */}

      {/* Use Ref */}
      <FocusInput />
      {/* Use Ref */}
    </div>
  );
};

export default App;
