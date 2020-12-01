using System.Collections.Generic;

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
    }
}
