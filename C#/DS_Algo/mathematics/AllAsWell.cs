using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms
{
    //https://www.techgig.com/practice/result/all-a-alphabets-well/Um1MNS93M2ZTelVCc3NkSytDdVRidz09
    public class AllAsWell
    {
        public static String ReadString()
        {
            var readString = Console.ReadLine();
            return readString;
        }

        public static void Print(String value)
        {
            var arr = new int[24];
            var aDecimal = 97;
            for (int i = 0; i < value.Length; i++)
            {
                arr[value[i] % aDecimal] += 1;
            }

            for (int i = 0; i < 24; i++)
            {
                var ch = Convert.ToChar(i + aDecimal);
                if (arr[i] > 0)
                {
                    var chRepeat = new String(ch, arr[i]);
                    Console.Write(chRepeat);
                }
            }
        }
    }
}
