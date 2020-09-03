def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0;
    for i in range(len(arr)):
        if smallest > arr[i]:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selection_sort(arr):
    sorted_arr = []
    for i in range(len(arr)):
        smallest_index = find_smallest(arr)
        sorted_arr.append(arr.pop(smallest_index))
    return sorted_arr


unsorted_array = [1, 24, 546, 123, 25345, 123123, 22354234, 234234, 234234]

# less = [i for i in unsorted_array[0:] if i <= 1000]
# greater = [i for i in unsorted_array[0:] if i > 1000]
# print less
# print greater

sorted_array = selection_sort(unsorted_array)
print(sorted_array)
