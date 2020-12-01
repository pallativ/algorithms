using System;
using System.Collections;

namespace Datastructures.mathematics
{
    public class FindDeadBulbs
    {
        public static string Sequence = "RYBGR";
        public static String ReadString()
        {
            var readString = Console.ReadLine();
            return readString;
        }

        public static void FindDead(string str1, int sequenceLength)
        {
            Hashtable ht = new Hashtable { { "R", 0 }, { "B", 0 }, { "Y", 0 }, { "G", 0 } };
            int i = 0;
            var str = str1.ToCharArray();
            int[] deadBulbs = new int[sequenceLength];
            char[] bulbsSequence = new char[sequenceLength];
            for (i = 0; i < str.Length; i++)
            {
                var index = i % sequenceLength;
                if (str[i] == '!')
                    deadBulbs[index] += 1;
                else
                    bulbsSequence[index] = str[i];
            }

            for (i = 0; i < 4; i++)
            {
                ht[bulbsSequence[i].ToString()] = deadBulbs[i];
            }

            Console.Write("{0} ", ht["R"]);
            Console.Write("{0} ", ht["B"]);
            Console.Write("{0} ", ht["Y"]);
            Console.Write(ht["G"]);
        }
    }
}
