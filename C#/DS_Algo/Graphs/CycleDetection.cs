using System;
using System.Collections.Generic;
using System.Text;

namespace ds_algo
{
    public class CycleDetection
    {
        private Dictionary<int, HashSet<int>> graph; // This Adjacency List.
        public CycleDetection(Dictionary<int, HashSet<int>> adjacencyList)
        {
            this.graph = adjacencyList;
        }

        public bool IsCyclicGraph()
        {
            bool[] stack = new bool[graph.Count + 1];
            foreach(int vertex in this.graph.Keys)
            {
                if (IsCyclic(vertex, stack))
                    return true;
            }
            return false;
        }

        public bool IsCyclic(int vertex, bool[] stack)
        {
            /// Any outward Edge.
            if (!graph.ContainsKey(vertex))
                return false;

            // Are we already in the stack.
            if (stack[vertex])
                return true;

            stack[vertex] = true;

            /// DFS Traversal.
            foreach (int neibhour in graph[vertex])
            {
                // Adding vertex to the stack.
                if (IsCyclic(neibhour, stack))
                    return true;
            }
            /// Removing the vertex from the stack.
            stack[vertex] = false;
            return false;
        }
    }
}
