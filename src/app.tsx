import {useState} from './useState';

export function App() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  return (
    <div>
      <h1>My use state.</h1>
      <section>
        <h2>Count A: {counterA}</h2>
        <button onClick={() => setCounterA(counterA - 1)}>Subtract</button>
        <button onClick={() => setCounterA(counterA + 1)}>Add</button>
      </section>
      <section>
        <h2>Count B: {counterB}</h2>
        <button onClick={() => setCounterB(counterB - 1)}>Subtract</button>
        <button onClick={() => setCounterB(counterB + 1)}>Add</button>
      </section>
    </div>
  );
}
