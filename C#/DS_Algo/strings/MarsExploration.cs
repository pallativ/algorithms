using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace ds_algo.strings
{
    public partial class StringExtensions
    {
        public static int MarsExploration(string str)
        {
            var count = 0;
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] != "SOS"[i % 3])
                    count++;
            }

            return count;
        }

        [Fact]
        public void Test_MarsExploration()
        {
            Assert.Equal(3, MarsExploration("SOSSPSSQSSOR"));
        }
    }
}
