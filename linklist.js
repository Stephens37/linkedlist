/*
linkedList factory function for the list itself
node factory function for the nodes

node factory needs value property
nextNode is the property that links to the next node
both set as null by default
this acts as a factory that will be used by the linkedList factory as the framework of a node to be acted upon


*/

function nodeFactory (value, nextNode) {
  value = null
  nextNode = null
  return { value, nextNode }
}

const nodeValue = nodeFactory.value
const nextNodeValue = nodeFactory.nextNode

function linkedList (list, head) {

  head = null

  let append = {
    appendFunction: function () {
      list.append(nodeValue, nextNodeValue)
    }
  }

  let prepend = {
    prependFunction: function () {
      list.insertBefore(nextNodeValue, nodeValue)
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
  
  function indexFunc (index) {
    if(index === 1) {
      return head
    }
    for(let i = 0; i <= index; i++) {
      index = head.next
    }
    return index
    }
  }

}
