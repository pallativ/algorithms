using System;

namespace Datastructures.mathematics
{
    public class NoOfColumnsInGivenMonth
    {
        public static int ReadInt()
        {
            var value = Convert.ToInt32(Console.ReadLine());
            return value;
        }

        public static void FindColumn(int month, int startDayOfMonth)
        {
            var totalDays = DateTime.DaysInMonth(2017, month);
            var weeks = ((startDayOfMonth -1) + totalDays) / 7.0;
            if (weeks % 1 == 0)
                Console.Write("{0}", (int)weeks);
            else
                Console.Write("{0}", (int)(weeks + 1));
        }
    }

}
