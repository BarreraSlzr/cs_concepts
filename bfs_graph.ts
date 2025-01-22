import { Graph } from './graph';

function bfs<T>(graph: Graph<T>, startVertex: T): T[] {
    const visited: Set<T> = new Set();
    const queue: T[] = [startVertex];
    const result: T[] = [];

    while (queue.length > 0) {
        const vertex = queue.shift()!;
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            const neighbors = graph.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

// Test case
const graph = new Graph<number>();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const bfsResult = bfs(graph, 1);
console.log(bfsResult); // Output: [1, 2, 3, 4]
