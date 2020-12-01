using System.Collections;
using System.Collections.Generic;

namespace Datastructures.Graphs
{
    public class TopologicalSort
    {
        private readonly Dictionary<int, HashSet<int>> _graph;

        private readonly bool[] _visited;

        private readonly ArrayList _list;
        private int _totalVertices = 0;

        public TopologicalSort(int totalVertices, Dictionary<int, HashSet<int>> graph)
        {
            _totalVertices = totalVertices;
            _graph = graph;
            _visited = new bool[totalVertices + 1];
            for (int i = 0; i <= totalVertices; i++)
                _visited[i] = false;
            _list = new ArrayList();
        }

        public bool IsSortable()
        {
            CycleDetection cycleDetection = new CycleDetection(_graph);
            return !cycleDetection.IsCyclicGraph();
        }

        public int[] Sort()
        {
            foreach (var vertex in _graph.Keys)
            {
                if (_visited[vertex])
                    continue;
                DfsVisit(vertex);
            }

            _list.Reverse();
            return (int[])_list.ToArray(typeof(int));
        }

        private void DfsVisit(int vertex)
        {
            _visited[vertex] = true;
            if (_graph.ContainsKey(vertex))
            {
                foreach (int nextVertex in _graph[vertex])
                {
                    if (_visited[nextVertex])
                        continue;
                    DfsVisit(nextVertex);
                }
            }
            _list.Insert(0, vertex);
        }
    }
}
