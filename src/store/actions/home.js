import { push } from 'connected-react-router';

function go(path) {
  return push(path);
}

export default { go };
