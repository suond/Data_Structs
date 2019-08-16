 // Input: Array
// Example: [1, 3, 5, 8, 19, 23, 24, 31]
// Expected Output:
//         19
//        /   \
//      5      24
//    /  \    /  \
//   3    8  23   31
//  /
// 1

class TreeNode {
    constructor(val){
      this.value = val
      this.left = this.right = null
    }
  }
  
  function buildBST(array) {
    if (!array.length) return null
    let midIdx = Math.floor(array.length / 2)
    let root = new TreeNode(array[midIdx])
    root.left = buildBST(array.slice(0, midIdx))
    root.right = buildBST(array.slice(midIdx + 1))
    
    return root
  }
  
  let tree = buildBST([1, 3, 5, 8, 19, 23, 24, 31])

  exports.tree = tree;