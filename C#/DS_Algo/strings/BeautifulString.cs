using System;
using Xunit;

namespace ds_algo.strings
{
    public partial class StringExtensions
    {
        public static int BeautifulBinaryString(String str)
        {
             return (str.Length - str.Replace("010","").Length) / 3;
        }

        [Fact]
        public void Test_BeautifulBinaryString()
        {
            Assert.Equal(0, BeautifulBinaryString("01100"));
            Assert.Equal(3, BeautifulBinaryString("0100101010"));
        }
    }

}
