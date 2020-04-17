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
  findPre(element) {
    let cur = this.head;

    while (cur) {
      if (cur.next === element) return cur;

      cur = cur.next;
    }

    return -1;
  }

  //向链表末尾追加节点
  append(newElement) {
    let cur = this.head;

    while (cur) {
      if (cur.next === null) {
        cur.next = newElement;
      }

      cur = cur.next;
    }
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
    const pre = this.findPre(item);

    if (pre === "-1") console.error(item + "不存在");

    pre.next = pre.next.next;
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
