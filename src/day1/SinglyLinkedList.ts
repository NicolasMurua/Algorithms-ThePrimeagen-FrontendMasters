export default class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;
        if (!this.head) {
            this.tail = this.head = node;
            return;
        }
        const prevHead = this.head;
        node.next = prevHead;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx < this.length && idx >= 0) {
            const node = { value: item } as ListNode<T>;
            if (!this.head) {
                this.head = this.tail = node;
                this.length++;
                return;
            }
            let currentNode = this.head as ListNode<T>;
            let pastNode = this.head as ListNode<T>;
            for (let i = 0; i < this.length; i++) {
                if (i === idx) {
                    pastNode.next = node;
                    node.next = currentNode;
                    this.length++;
                    return;
                }
                pastNode = currentNode;
                if (!currentNode.next) {
                    return;
                }
                currentNode = currentNode.next;
            }
        }
        return;
    }
    append(item: T): void {
        this.length++;
        const newTail = { value: item } as ListNode<T>;
        if (!this.tail) {
            this.tail = this.head = newTail;
            return;
        }
        this.tail.next = newTail;
        this.tail = newTail;
    }
    //remove 1 especific node, pass in the value
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let actualNode = this.head as ListNode<T>;
        let pastNode = this.head as ListNode<T>;
        for (let i = 0; i < this.length; i++) {
            if (actualNode.value === item) {
                if (pastNode === actualNode) {
                    this.head = this.head.next;
                    this.length--;
                    return actualNode.value;
                } else {
                    if (this.tail === actualNode) {
                        this.tail = pastNode;
                    }
                    pastNode.next = actualNode.next;
                    this.length--;
                    return actualNode.value;
                }
            }
            pastNode = actualNode;
            actualNode = actualNode.next as ListNode<T>;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < this.length && idx >= 0) {
            if (!this.head) {
                return undefined;
            }
            let tmp = this.head as ListNode<T>;
            for (let i = 0; i < this.length; i++) {
                if (i === idx) {
                    return tmp.value;
                }
                if (!tmp.next) {
                    return undefined;
                }
                tmp = tmp.next;
            }
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (idx < this.length && idx >= 0) {
            let actualNode = this.head;
            let pastNode = this.head;
            for (let i = 0; i < this.length; i++) {
                if (idx === i) {
                    if (pastNode === actualNode) {
                        this.head = this.head.next;
                        this.length--;
                        return actualNode.value;
                    } else {
                        if (this.tail === actualNode) {
                            this.tail = pastNode;
                        }
                        pastNode.next = actualNode.next;
                        this.length--;
                        return actualNode.value;
                    }
                }
                pastNode = actualNode;
                actualNode = actualNode.next as ListNode<T>;
            }
        }
        return undefined;
    }
}
