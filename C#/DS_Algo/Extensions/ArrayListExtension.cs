using System.Collections;

namespace Datastructures.Extensions
{
    public static class ArrayListExtension
    {
        public static void Unshift(this ArrayList list, int value)
        {
            list.Insert(0, value);
        }
        public static void Push(this ArrayList list, int value)
        {
            list.Add(value);
        }
        public static int Pop(this ArrayList list)
        {
            var item = list[list.Count - 1];
            list.RemoveAt(list.Count - 1);
            return (int)item;
        }

    }
}
