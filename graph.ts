export class Graph<T> {
    adjacencyList: Map<T, T[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: T) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: T, vertex2: T) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }
}

// Example usage:
const graph = new Graph<number>();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2);
