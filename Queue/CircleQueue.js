/**
 * 
 * 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
 * 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
 * 你的实现应该支持如下操作：

 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。 
 */
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.data = new Array(k);

  this.head = -1;
  this.tail = -1;
  this.count = 0;
  this.n = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;

  if (this.isEmpty()) {
    this.head = 0;
  }

  this.tail = ++this.tail % this.n;
  this.count++;
  this.data[this.tail] = value;

  console.log("enQueue", this.data, "head", this.head, "tail", this.tail);

  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;

  //判断队列是否只有一个元素，也可以使用 this.head === this.tail 判断
  if (this.count === 1) {
    this.head = -1;
    this.tail = -1;
  } else if (this.head === this.n - 1) {
    this.head = 0;
  } else {
    this.head++;
  }

  this.count--;

  console.log("deQueue", this.data, "head", this.head, "tail", this.tail);

  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  console.log("Front", this.data, "head", this.head, "tail", this.tail);

  return this.data[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  console.log("Rear", this.data, "head", this.head, "tail", this.tail);

  return this.data[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.data.length;
};

var o = new MyCircularQueue(3);
console.log(
  o.enQueue(7),
  o.deQueue(),
  o.Front(),
  o.deQueue(),
  o.Front(),
  o.Rear(),
  o.enQueue(0),
  o.isFull(),
  o.deQueue(),
  o.Rear(),
  o.enQueue(3)
);
