using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;
using System.Text;

namespace ds_algo.Trees
{
    public class TreeBuilder
    {
        public static Node BuildTree(ArrayList nodes)
        {
            Node root = null;
            var bfsQueue = new Queue<Node>();
            var queue = new Queue<object>(nodes.Cast<object>());
            while(queue.Count > 0)
            {
                Node curr;
                if (root == null)
                {
                    root = new Node((int)queue.Dequeue());
                    curr = root;
                    bfsQueue.Enqueue(curr);
                }
                else
                {
                    curr = bfsQueue.Dequeue();
                    if (curr != null)
                    {
                        var left = queue.Dequeue();
                        var right = queue.Dequeue();
                        if (left != null)
                        {
                            curr.left = new Node((int)left);
                            bfsQueue.Enqueue(curr.left);
                        }
                        if (right != null)
                        {
                            curr.right = new Node((int)right);
                            bfsQueue.Enqueue(curr.right);
                        }
                    }
                }
            }
            return root;
        }
    }
}
