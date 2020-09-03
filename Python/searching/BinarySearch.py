def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]
        if item == guess:
            return mid
        elif item > guess:
            low = mid + 1
        else:
            high = mid - 1
    from types import NoneType
    return NoneType


myList = [1, 2, 3, 6, 8]
myList1 = [1, 2, 3, 6, 8, 3423874, 234234, 234, 234234, 234, 234234, 234234234]
print(binary_search(myList, 2))
print(binary_search(myList1, 3423874))
print(binary_search(myList1, -1))
