type QNode<T> = {
    value: T, 
    next?: QNode<T>
}
export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;
    
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as QNode<T>;
        this.length++;
        if (!this.tail){
            this.head = this.tail = node;
            return
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const value = this.head.value
        this.head = this.head.next
        //It dosen't matter to us if this.head.next is undefined.
        // This is the moment when memory is freed
        if (this.length === 0) {
            this.tail = undefined
        } 
        this.length = Math.max(0, this.length -1 );
        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}