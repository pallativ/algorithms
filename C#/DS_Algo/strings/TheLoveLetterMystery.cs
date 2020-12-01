using System;
using Xunit;

namespace Datastructures.strings
{
    public partial class  StringExtensions
    {
        public static int TheLoveLetterMystery(string str)
        {
            var arr = str.ToCharArray();
            var result = 0;
            for (var i = 0; i < arr.Length / 2; i++)
            {
                var diff = arr[i] - arr[arr.Length - 1 - i];
                result += Math.Abs(diff);
            }

            return result;
        }

        [Fact]
        public void Test_TheLoveLetterMystery()
        {
            
            Assert.Equal(2, TheLoveLetterMystery("abc"));
            Assert.Equal(0, TheLoveLetterMystery("abcba"));
            Assert.Equal(4, TheLoveLetterMystery("abcd"));
            Assert.Equal(2, TheLoveLetterMystery("cba"));
        }
    }
}
