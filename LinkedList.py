class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    head: Node

    def __init__(self):
        self.head = None

    def insert_at_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        return self.head

    def insert_at_search_item(self, search_item, data):
        new_node = Node(data)
        temp = self.head
        prev = None
        while temp and temp.data != search_item:
            prev = temp
            temp = temp.next
        new_node.next = prev.next
        prev.next = new_node
        return self.head


    def insert_at(self, position, data):
        new_node = Node(data)
        if self.head is None or position == 1:
            new_node.next = self.head
            self.head = new_node
            return self.head
        temp = self.head
        for index in range(0,position-2):
            temp = temp.next
        new_node.next = temp.next
        temp.next = new_node
        return self.head

    def insert_at_last(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return self.head

        temp = self.head
        while temp.next:
            temp= temp.next
        temp.next = new_node
        return self.head

    def print(self):
        temp = self.head
        while temp:
            print(str.format("{0} ",temp.data))
            temp = temp.next


if __name__ == "__main__":
    list = LinkedList()
    list.insert_at_front(1)
    list.insert_at_front(2)
    list.insert_at_front(3)
    list.insert_at_front(4)
    list.insert_at_front(5)
    list.insert_at_last(100)
    list.print()
    list.insert_at(1,9)
    list.print()
    list.insert_at(2,10)
    list.print()
    list.insert_at_search_item(1, 99)
    list.print()

