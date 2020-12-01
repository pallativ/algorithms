using Xunit;

namespace Datastructures.Graphs.Tests
{
    public class TopologicalSortingTests
    {
        [Fact]
        public void Test_Topological_Sorting()
        {
            var edgeList = new int[3][];
            edgeList[0] = new int[] { 1, 2 };
            edgeList[1] = new int[] { 2, 3 };
            edgeList[2] = new int[] { 3, 4 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            var topologicalSort = new TopologicalSort(4, graph);
            Assert.Equal(new int[] { 4, 3, 2, 1 }, topologicalSort.Sort());
        }

        [Fact]
        public void Test_Topological_Sorting_multiple_prerequisites()
        {
            var edgeList = new int[5][];
            edgeList[0] = new[] { 1, 2 };
            edgeList[1] = new[] { 2, 3 };
            edgeList[2] = new[] { 2, 5 };
            edgeList[3] = new[] { 3, 4 };
            edgeList[4] = new[] { 5, 6 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            var topologicalSort = new TopologicalSort(6, graph);
            Assert.Equal(new int[] { 4, 3, 6, 5, 2, 1 }, topologicalSort.Sort());
        }

        [Fact]
        public void Test_is_graph_topological_sortable_for_cycle_case()
        {
            var edgeList = new int[3][];
            edgeList[0] = new[] { 1, 2 };
            edgeList[1] = new[] { 2, 3 };
            edgeList[2] = new[] { 3, 1 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            var topologicalSort = new TopologicalSort(3, graph);
            Assert.False(topologicalSort.IsSortable());
        }

        [Fact]
        public void Test_is_graph_topological_sortable_for_non_cycle_case()
        {
            var edgeList = new int[3][];
            edgeList[0] = new[] { 1, 2 };
            edgeList[1] = new[] { 2, 3 };
            edgeList[2] = new[] { 3, 4 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            var topologicalSort = new TopologicalSort(3, graph);
            Assert.True(topologicalSort.IsSortable());
        }
    }
}
