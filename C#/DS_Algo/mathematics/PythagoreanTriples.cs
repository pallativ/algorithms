//https://www.hitbullseye.com/Quant/Pythagorean-Triplets.php

using System;

namespace Datastructures.mathematics
{
    public class PythagoreanTriples
    {
        public static int ReadInt()
        {
            var value = Convert.ToInt32(Console.ReadLine());
            return value;
        }

        public static void FindTriplets(int value)
        {
            var value1 = -1;
            var value2 = -1;
            if (value % 2 == 0)
            {
                value1 = (int) (Math.Pow(value / 2.0, 2) - 1);
                value2 = (int) (Math.Pow(value / 2.0, 2) + 1);
            }
            else
            {
                value1 = (int) (Math.Pow(value, 2) / 2 - 0.5);
                value2 = (int) (Math.Pow(value, 2) / 2 + 0.5);
            }

            if (value != -1)
                Console.Write("{0} {1}", value1, value2);
            else
                Console.Write("-1");
        }
    }
}