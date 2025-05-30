class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recursiveDeptFirdtTraversal() {
  const result = [];

  function traverse(node) {
    if (node !== null) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);

  return result;
}
