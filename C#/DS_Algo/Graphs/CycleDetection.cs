using System.Collections.Generic;

namespace Datastructures.Graphs
{
    public class CycleDetection
    {

        private Dictionary<int, HashSet<int>> graph; // This Adjacency List.
        private readonly int _nodesCount;

        public CycleDetection(int nodesCount, Dictionary<int, HashSet<int>> adjacencyList)
        {
            _nodesCount = nodesCount;
            graph = adjacencyList;
        }

        public bool IsCyclicGraph()
        {
            bool[] stack = new bool[_nodesCount + 1];
            foreach (var vertex in graph.Keys)
            {
                if (IsCyclic(vertex, stack))
                    return true;
            }
            return false;
        }

        public bool IsCyclic(int vertex, bool[] stack)
        {
            // Any outward Edge.
            if (!graph.ContainsKey(vertex))
                return false;

            // Are we already in the stack.
            if (stack[vertex])
                return true;

            stack[vertex] = true;

            // DFS Traversal.
            foreach (int neibhour in graph[vertex])
            {
                // Adding vertex to the stack.
                if (IsCyclic(neibhour, stack))
                    return true;
            }
            // Removing the vertex from the stack.
            stack[vertex] = false;
            return false;
        }
    }
}
