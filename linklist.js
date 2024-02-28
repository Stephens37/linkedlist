/*
linkedList factory function for the list itself
node factory function for the nodes

node factory needs value property
nextNode is the property that links to the next node
both set as null by default
this acts as a factory that will be used by the linkedList factory as the framework of a node to be acted upon


*/

function nodeFactory(value, nextNode) {
  return {
    value: null,
    nextNode: null
  }
}

function linkedList() {

}
