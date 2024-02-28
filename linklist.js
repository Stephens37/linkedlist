/*
linkedList factory function for the list itself
node factory function for the nodes

node factory needs value property
nextNode is the property that links to the next node
both set as null by default
this acts as a factory that will be used by the linkedList factory as the framework of a node to be acted upon


*/

function nodeFactory () {
  let node = {
    value: null,
    nextNode: null
  }
  return node
}

function linkedList (list, head) {
  let node = nodeFactory()

  head = null

  let append = {
    appendFunction: function () {
      list.append(node)
    }
  }

  let prepend = {
    prependFunction: function () {
      list.insertBefore(node)
    }
  }

  let size = {
    sizeFunction: function () {
      let sizeNum = 0
      while (head) {
        sizeNum++
        head = head.next
      }
      return sizeNum
    }
  }

  let headFunc = {
    headFuncProp: function () {
      return head
    }
  }

  let tailFunc = {
    tailFuncProp: function () {
      let tail = head
      while (tail) {
        tail = head.next
      }
      return tail
    }
  }

  const indexFunc = (index) => {
    if (index === 1) {
      return head
    }
    for (let i = 0; i <= index; i++) {
      index = head.next
    }
    return index
  }

  const removeTailFunc = () => {
    let tail = head
    while (tail) {
      tail = head.next
    }
    tail = null
  }

  const contains = (node) => {
    while (head !== node) {
      head = head.next
    }
    return head
  }

  const findIndexFunc = (node) => {
    let index = 0
    while (head !== node) {
      head = head.next
      index++
    }
    return index
  }

  const makeString = (list) => {
    list.toString()
    return list
  }

  return { append, prepend, size, headFunc, tailFunc, indexFunc, removeTailFunc, contains, findIndexFunc, makeString }

}
