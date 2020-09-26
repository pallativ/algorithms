using System;
using System.Collections;
using Xunit;
using Microsoft.Extensions.Logging;
using Xunit.Abstractions;
using Xunit.Sdk;
using System.Collections.Generic;

namespace ds_algo.scratchpad
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
    }
}
