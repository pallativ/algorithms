using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;

namespace ds_algo.Trees
{
    public class CheckBalancedTree
    {
        public int checkHeight(Node root)
        {
            if (root == null)
                return -1;

            var left = checkHeight(root.left);
            if (left == int.MinValue) // Here we can throw exception for if it is not balanced.
                return left;

            var right = checkHeight(root.right);
            if (right == int.MinValue)
                return left;

            if (Math.Abs(left - right) > 1)
                return int.MinValue;
            return Math.Max(left, right) + 1;
        }
        public bool isBalanced(Node root)
        {
            return checkHeight(root) != int.MinValue;
        }
    }
}
