using System.Collections;
using System.Collections.Generic;

namespace Datastructures.Graphs
{
    public class TopologicalSort
    {
        private readonly Dictionary<int, HashSet<int>> _graph;

        private readonly bool[] _visited;

        private readonly ArrayList _list;

        public TopologicalSort(Dictionary<int, HashSet<int>> graph)
        {
            _graph = graph;
            _visited = new bool[graph.Keys.Count + 1];
            for (int i = 0; i < _visited.Length; i++)
                _visited[i] = false;
            _list = new ArrayList();
        }

        public int[] Sort()
        {
            foreach (var vertex in _graph.Keys)
            {
                if (_visited[vertex])
                    continue;
                DfsVisit(vertex);
            }
            return (int[])_list.ToArray(typeof(int));
        }

        private void DfsVisit(int vertex)
        {
            _visited[vertex] = true;
            foreach (int nextVertex in _graph[vertex])
            {
                if (_visited[vertex])
                    continue;
                DfsVisit(nextVertex);
            }
            _list.Insert(0, vertex);
        }
    }
}
