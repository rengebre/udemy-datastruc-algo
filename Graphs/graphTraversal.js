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

  dfs(start) {
    if (!this.adjacencyList[start]) return;
    let visited = {};
    let retArr = [];
    
    const traverse = (vertex) => {
      retArr.push(vertex);
      visited[vertex] = true;
      
      for (const v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          traverse(v);
        }
      }
    }

    traverse(start);

    return retArr;
  }

  dfsIterative(start) {
    if (!this.adjacencyList[start]) return;
    let result = [];
    let s = [];
    let visited = {};
    s.push(start)
    visited[start] = true;

    while (s.length > 0) {
      let vertex = s.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          s.push(neighbor)
          visited[neighbor] = true;
        };
      })
    }

    return result;
  }
}


let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


console.log(g.adjacencyList);
console.log(g.dfsIterative("A"));
