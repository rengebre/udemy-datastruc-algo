class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    let tempV1 = this.adjacencyList[v1].filter(elem => elem !== v2);
    let tempV2 = this.adjacencyList[v2].filter(elem => elem !== v1);

    this.adjacencyList[v1] = tempV1;
    this.adjacencyList[v2] = tempV2;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (const edge of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, edge);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Dallas");

g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Aspen");
g.addEdge("Aspen", "Tokyo");

console.log(g.adjacencyList);

g.removeVertex("Dallas");
console.log(g.adjacencyList)