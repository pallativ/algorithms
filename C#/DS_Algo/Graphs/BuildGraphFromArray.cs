using System.Collections.Generic;
using System.Linq;

namespace Datastructures.Graphs
{
    public class Graph
    {
        /// <summary>
        ///  Use the Hashset for storing the to list, because that eliminates duplicates.
        /// </summary>
        /// <param name="edgeList"></param>
        /// <returns></returns>
        public static Dictionary<int, HashSet<int>> BuildDirectedGraph(int[][] edgeList)
        {
            var graph = new Dictionary<int, HashSet<int>>();
            foreach (int[] edge in edgeList)
            {
                if (edge == null)
                    continue;
                int from = edge[0];
                int to = edge[1];
                if (!graph.ContainsKey(from))
                    graph.Add(from, new HashSet<int> { to });
                else
                    graph[from].Add(to);
            }
            return graph;
        }

        /// <summary>
        /// The reason for using HashSet is to remove the duplicate edge set.
        /// </summary>
        /// <param name="edgeList"></param>
        /// <returns></returns>
        public static Dictionary<int, HashSet<int>> BuildUnDirectedGraph(int[][] edgeList)
        {
            var graph = new Dictionary<int, HashSet<int>>();
            foreach (int[] edge in edgeList)
            {
                if (edge == null)
                    continue;
                int from = edge[0];
                int to = edge[1];
                if (!graph.ContainsKey(from))
                    graph.Add(from, new HashSet<int> { to });
                else
                    graph[from].Add(to);

                if (!graph.ContainsKey(to))
                    graph.Add(to, new HashSet<int> { from });
                else
                    graph[to].Add(from);
            }
            return graph;
        }

        // TODO : Implement a function to get the vertices with no incoming edge
        // TODO : Vertices with 0 in-degree.
        public static HashSet<int> GetVerticesWithInDegree(Dictionary<int, HashSet<int>> graph, int degree)
        {
            var hashSet = new HashSet<int>();
            foreach (var vertex in graph.Keys)
                hashSet.Add(vertex);
            foreach (var vertex in hashSet)
            {
                if (graph.Values.Any(t => t.Contains(vertex)))
                    hashSet.Remove(vertex);
            }
            return hashSet;
        }
    }
}
