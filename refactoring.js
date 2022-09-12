const math = require('mathjs');
const assert = require('assert');

const Node = (operator, value, left, right) => {
  return {
    operator,
    value,
    left,
    right,
  };
};

const toString = (tree) => {
  if (tree === null || tree?.operator === null) {
    throw Error('Invalid input');
  }

  if (tree.operator === '') {
    return tree.value.toString();
  }

  return `(${
    toString(tree.left) + ' ' + tree.operator + ' ' + toString(tree.right)
  })`;
};

const result = (tree) => {
  if (tree === null || tree?.operator === null) {
    throw Error('Invalid input');
  }

  return math.evaluate(toString(tree)?.replace('x', '*')?.replace('÷', '/'));
};

const tree = Node(
  '÷',
  null,
  Node(
    '+',
    null,
    Node('', 7, null, null),
    Node(
      'x',
      null,
      Node('-', null, Node('', 3, null, null), Node('', 2, null, null)),
      Node('', 5, null, null)
    )
  ),
  Node('', 6, null, null)
);

assert.strictEqual('((7 + ((3 - 2) x 5)) ÷ 6)', toString(tree));
assert.strictEqual(2, result(tree));
