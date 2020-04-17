/**
 * 设计单链表
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(head) {
    this.head = new Node("head");
  }

  //根据 value 查找节点
  findByValue(element) {
    let cur = this.head.next;

    while (cur) {
      if (cur.element === element) return cur;
      cur = cur.next;
    }

    return -1;
  }

  //根据下标查找节点
  findByIndex(index) {
    let cur = this.head.next;
    let pos = 0;

    while (cur) {
      if (pos === index) return cur;

      cur = cur.next;
      pos++;
    }

    return -1;
  }

  //查找前一个
  findPrev(element) {
    let cur = this.head;

    while (cur.next) {
      if (cur.next.element === element) return cur;
      cur = cur.next;
    }

    return -1;
  }

  //向链表末尾追加节点
  append(newElement) {
    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
    }

    cur.next = new Node(newElement);
  }

  //指定元素向后插入
  insert(newElement, element) {
    const cur = this.findByValue(element);

    if (cur !== "-1") {
      const newNode = new Node(newElement);

      newNode.next = cur.next;
      cur.next = newNode;
    } else {
      console.log("未找到插入元素");
    }
  }

  //根据值删除
  remove(item) {
    const pre = this.findPrev(item);

    if (pre === "-1") {
      console.error(item + "不存在");
      return;
    }

    if (pre.next) pre.next = pre.next.next;
  }

  //遍历所有节点
  display() {
    let cur = this.head.next;

    while (cur) {
      console.log(cur.element);
      cur = cur.next;
    }
  }
}

const LList = new SingleLinkedList();
LList.append("chen");
LList.append("curry");
LList.append("sang");
LList.append("zhao");
LList.display();

// // chen -> curry -> sang -> zhao
console.log("-------------insert item------------");
LList.insert("qian", "chen"); // 首元素后插入
LList.insert("zhou", "zhao"); // 尾元素后插入
LList.display(); // chen -> qian -> curry -> sang -> zhao -> zhou
console.log("-------------remove item------------");
LList.remove("curry");
LList.display(); // chen -> qian -> sang -> zhao -> zhou
console.log("-------------find by item------------");
console.log(LList.findByValue("chen"));
console.log("-------------find by index------------");
console.log(LList.findByIndex(2));
console.log("-------------与头结点同值元素测试------------");
LList.insert("head", "sang");
LList.display(); // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPrev("head"); // sang
LList.remove("head");
LList.display(); // chen -> qian -> sang -> zhao -> zhou
