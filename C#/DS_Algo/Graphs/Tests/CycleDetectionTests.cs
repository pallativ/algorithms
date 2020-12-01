using Xunit;

namespace Datastructures.Graphs.Tests
{
    public class CycleDetectionTests
    {
        [Fact]
        public void Verify_cycle_exists_case_in_a_directed_graph()
        {
            var edgeList = new int[3][];
            edgeList[0] = new int[] { 1, 2 };
            edgeList[1] = new int[] { 2, 3 };
            edgeList[2] = new int[] { 3, 1 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            CycleDetection cycleDetector = new CycleDetection(graph);
            Assert.True(cycleDetector.IsCyclicGraph());
        }

        [Fact]
        public void Verify_cycle_not_exists_case_in_a_directed_graph()
        {
            var edgeList = new int[3][];
            edgeList[0] = new int[] { 1, 2 };
            edgeList[1] = new int[] { 2, 3 };
            edgeList[2] = new int[] { 3, 4 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            CycleDetection cycleDetector = new CycleDetection(graph);
            Assert.False(cycleDetector.IsCyclicGraph());
        }

        [Fact]
        public void Verify_cycle_not_exists_case_in_a_directed_graph_case_2()
        {
            var edgeList = new int[4][];
            edgeList[0] = new int[] { 1, 2 };
            edgeList[1] = new int[] { 2, 3 };
            edgeList[2] = new int[] { 3, 4 };
            edgeList[3] = new int[] { 2, 4 };
            var graph = Graph.BuildDirectedGraph(edgeList);
            CycleDetection cycleDetector = new CycleDetection(graph);
            Assert.False(cycleDetector.IsCyclicGraph());
        }
    }
}
