import {renderRoot} from './main';

let callIndex = -1;
const stateValues: unknown[] = [];

export const useState = <Value>(initialValue: Value) => {
  callIndex++;

  const currentCallIndex = callIndex;

  if (!stateValues.at(callIndex)) {
    stateValues[callIndex] = initialValue;
  }

  const state = stateValues.at(callIndex) as Value;

  const setState = (newValue: Value) => {
    stateValues[currentCallIndex] = newValue;

    callIndex = -1;

    renderRoot();
  };

  return [state, setState] as const;
};
