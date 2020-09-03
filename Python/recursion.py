# Every recursion function will  need to implement base case, recursion case.
# BASE CASE - It the case when to stop calling it self.
# Recursion Case - It's called if it is not base case.


def count_down(i):
    if i <= 0:  # base case
        return
    print(i)
    count_down(i - 1)  # Recursion Case


def factorial(num):
    # Base Case
    if num <= 0:
        return 1
    # Recursion Case
    return num * factorial(num - 1)


def sum(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        return arr.pop(0) + sum(arr)


# count_down(5)

print sum([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])
