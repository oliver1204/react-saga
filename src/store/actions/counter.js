import * as Types from '../action.type';
function add() {
  return { type: Types.ADD };
}

function minus() {
  return { type: Types.MINUS };
}

function go() {
  return { type: Types.GO };
}

export default { add, minus, go };
