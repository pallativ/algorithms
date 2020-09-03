using System;

namespace Algorithms.Mathematics
{
    public class CountOfOnes
    {
        public static int ReadInt()
        {
            var value = Convert.ToInt32(Console.ReadLine());
            return value;
        }

        public static void Count(int n)
        {
            var count = 0;
            for (int i = 0; i < n; i++)
            {
                if (ReadInt() == 1)
                    count++;
            }

            Console.Write(count);
        }
    }
}
