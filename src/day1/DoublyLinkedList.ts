export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    //DONE
    prepend(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;
        if (!this.head) {
            this.tail = this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    //I dont know what prime wants with this method. I will leave it here, review later
    insertAt(item: T, idx: number): void {
        if (!this.head) {
            if (idx === 0) {
                this.head = this.tail = { value: item } as ListNode<T>;
                this.length++;
                return;
            } else {
                return;
            }
        }
        if (idx < this.length) {
            let currentNode = this.head;
            let pastNode = this.head;
            for (let i = 0; i < this.length; i++) {
                if (i === idx) {
                    pastNode.next = {
                        value: item,
                        next: currentNode,
                        prev: pastNode,
                    } as ListNode<T>;
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
    //DONE
    append(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    //DONE
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let actualNode = this.head as ListNode<T>;
        let pastNode = this.head as ListNode<T>;
        if (this.head.value === item) {
            this.head = this.head.next;
            this.length--;
            return actualNode.value;
        }
        for (let i = 0; i < this.length; i++) {
            if (actualNode.value === item) {
                if (!actualNode.next) {
                    this.tail = pastNode;
                    pastNode.next = undefined;
                    this.length--;
                    return actualNode.value;
                } else {
                    pastNode.next = actualNode.next;
                    actualNode.next.prev = pastNode;
                    this.length--;
                    return actualNode.value;
                }
            }
            pastNode = actualNode;
            actualNode = actualNode.next as ListNode<T>;
        }
        return undefined;
    }
    //DONE
    get(idx: number): T | undefined {
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
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (idx < this.length && idx >= 0) {
            let actualNode = this.head as ListNode<T>;
            let pastNode = this.head as ListNode<T>;
            let postnode = actualNode.next as ListNode<T>;
            if (idx === 0) {
                this.head = postnode;
                postnode.prev = undefined;
                this.length--;
                return actualNode.value;
            }
            if (idx === this.length - 1 && this.tail) {
                this.tail = this.tail.prev as ListNode<T>;
                this.tail.next = undefined;
                this.length--;
                return actualNode.value;
            }
            for (let i = 0; i < this.length; i++) {
                if (idx === i) {
                    pastNode.next = postnode;
                    postnode.prev = pastNode;
                    this.length--;
                    return actualNode.value;
                }
                pastNode = actualNode;
                actualNode = actualNode.next as ListNode<T>;
            }
        }
        return undefined;
    }
}
