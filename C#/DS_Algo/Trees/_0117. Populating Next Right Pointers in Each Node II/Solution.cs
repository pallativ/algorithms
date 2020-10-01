using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Xunit;
using static ds_algo.Trees.TreeBuilder;

namespace ds_algo.Trees._0117._Populating_Next_Right_Pointers_in_Each_Node_II
{
    public class Solution
    {
        // Implementation using Queue - TimeComplexity would be o(N), but space complexity would be O(logn)
        public Node Connect(Node root)
        {
            if (root == null) return root;
            var queue = new Queue<Node>();
            queue.Enqueue(root);
            queue.Enqueue(null);
            while (queue.Count > 1)
            {
                var item = queue.Dequeue();
                if (item == null)
                {
                    queue.Enqueue(item);
                    continue;
                }
                item.next = queue.Peek();
                if (item.left != null)
                    queue.Enqueue(item.left);
                if (item.right != null)
                    queue.Enqueue(item.right);
            }
            return root;
        }

        [Fact(DisplayName = "Build Binary Tree from ArrayList")]
        public void BuildTreeFromArrayList()
        {
            var list = new ArrayList() { 1, 2, 3, null, 5, 6, 7 };
            var root = TreeBuilder.BuildTree(list);
        }
    }
}
