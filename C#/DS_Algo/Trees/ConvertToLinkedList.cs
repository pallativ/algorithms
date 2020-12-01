using System.Collections.Generic;

namespace Datastructures.Trees
{
    public class Solution
    {
        public enum TraversalType
        {
            DFS,
            BFS,
        }

        private TraversalType traversalType;
        private List<LinkedList<Node>> results;
        public Solution(TraversalType traversalType)
        {
            this.traversalType = traversalType;
            results = new List<LinkedList<Node>>();
        }


        public List<LinkedList<Node>> Solve(Node root)
        {
            if (this.traversalType == TraversalType.DFS)
                ConvertToLinkedListUsingDFS(root, 0);
            else
                ConvertToLinkedListUsingBFS(root);
            return results;
        }

        public void ConvertToLinkedListUsingBFS(Node root)
        {
            if (root == null) return;
            
            // Root Linked list.
            var current = new LinkedList<Node>();
            current.AddLast(root);

            while (current.Count > 0)
            {
            
                // add it to the results list.
                results.Add(current);
                
                // set Parents with current level.
                var parents = current;

                /// Create new Linked list.
                current = new LinkedList<Node>();

                /// Here we are building the linked list.
                foreach (var item in parents)
                {
                    if (item.left != null)
                        current.AddLast(item.left);
                    if (item.right != null)
                        current.AddLast(item.right);
                }
            }
        }

        public void ConvertToLinkedListUsingDFS(Node root, int level)
        {
            /// If it is leaf node
            if (root == null) return;

            /// create the linked list  
            if (results.Count == level)
                results.Add(new LinkedList<Node>());

            var linkedList = results[level];

            /// Add the node to the end of the linked list.
            linkedList.AddLast(root);

            /// Tranverse Left node.
            ConvertToLinkedListUsingDFS(root.left, level + 1);

            /// Traverse Right Node.
            ConvertToLinkedListUsingDFS(root.right, level + 1);
        }
    }
}
