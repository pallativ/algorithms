using System;
using Xunit;

namespace ds_algo.strings
{
    public partial class StringExtensions
    {
        public static string HackerRankInAString(String str)
        {
            var hackerRankString = "hackerrank";
            var start = 0;
            foreach (var character in hackerRankString)
            {
                start = str.IndexOf(character, start);
                if (start == -1)
                    return "NO";
                start++;
            }
            return "YES";
        }

        [Fact]
        public void Test_HackerRankInAString()
        {
            Assert.Equal("NO", HackerRankInAString("knarrekcah"));
            Assert.Equal("YES", HackerRankInAString("hackerrank"));
            Assert.Equal("NO", HackerRankInAString("hackeronek"));
            Assert.Equal("NO", HackerRankInAString("abcdefghijklmnopqrstuvwxyz"));
            Assert.Equal("NO", HackerRankInAString("rhackerank"));
        }
    }
}
