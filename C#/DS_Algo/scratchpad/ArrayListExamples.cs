using System.Collections;
using System.Collections.Generic;
using Xunit;
using Xunit.Abstractions;

namespace Datastructures.scratchpad
{
    public class ArrayListExamples
    {
        private readonly ITestOutputHelper output;
        public ArrayListExamples(ITestOutputHelper output)
        {
            this.output = output;
        }
        [Fact(DisplayName = "Testing ArrayList Example")]
        public void ArrayListExample()
        {
            var arrayList = new ArrayList { 1, 2, 3 };
            output.WriteLine(string.Join(",", arrayList.ToArray()));
            var stack = new Stack<int>();
            stack.Push(10);
            stack.Push(11);
            stack.Push(12);
            output.WriteLine(string.Join(",", stack.ToArray()));
            Assert.Equal(new int[] { 12, 11, 10 }, stack.ToArray());
        }

        [Fact(DisplayName ="LinkedList Example")]
        public void LinkedListExample()
        {
            var list = new LinkedList<int>();
        }
    }
}
