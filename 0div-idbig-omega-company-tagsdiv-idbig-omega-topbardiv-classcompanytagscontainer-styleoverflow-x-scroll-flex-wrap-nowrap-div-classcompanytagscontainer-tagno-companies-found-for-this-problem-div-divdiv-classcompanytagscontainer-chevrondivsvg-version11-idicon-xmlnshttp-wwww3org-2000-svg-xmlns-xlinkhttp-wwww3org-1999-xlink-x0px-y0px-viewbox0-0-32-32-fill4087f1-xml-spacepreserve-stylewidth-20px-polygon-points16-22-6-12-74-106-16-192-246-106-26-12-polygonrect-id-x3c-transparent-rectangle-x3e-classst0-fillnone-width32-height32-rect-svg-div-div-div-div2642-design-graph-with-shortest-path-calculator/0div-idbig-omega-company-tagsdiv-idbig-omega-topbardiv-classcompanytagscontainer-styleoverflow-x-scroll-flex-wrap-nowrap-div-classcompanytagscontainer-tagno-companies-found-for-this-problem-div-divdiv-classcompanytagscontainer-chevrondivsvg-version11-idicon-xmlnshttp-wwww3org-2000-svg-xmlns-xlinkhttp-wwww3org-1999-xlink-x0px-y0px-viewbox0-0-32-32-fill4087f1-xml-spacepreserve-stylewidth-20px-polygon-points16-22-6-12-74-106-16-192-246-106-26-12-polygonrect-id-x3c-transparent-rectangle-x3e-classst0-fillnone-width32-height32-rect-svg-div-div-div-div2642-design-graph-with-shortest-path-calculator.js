class Graph {
    constructor(n, edges) {
        this.graph = new Map();
        edges.forEach(([fromNode, toNode, edgeCost]) => {
            if (!this.graph.has(fromNode)) {
                this.graph.set(fromNode, []);
            }
            this.graph.get(fromNode).push([toNode, edgeCost]);
        });
    }

    addEdge(edge) {
        const [fromNode, toNode, cost] = edge;
        if (!this.graph.has(fromNode)) {
            this.graph.set(fromNode, []);
        }
        this.graph.get(fromNode).push([toNode, cost]);
    }

    shortestPath(startNode, endNode) {
        const minCosts = new Map();
        minCosts.set(startNode, 0);
        const heap = [[0, startNode]];

        while (heap.length > 0) {
            const [curCost, curNode] = heap.shift();

            if (curNode === endNode) {
                return minCosts.get(endNode);
            }

            for (const [neighbor, edgeCost] of this.graph.get(curNode) || []) {
                const newCost = curCost + edgeCost;
                if (newCost < (minCosts.get(neighbor) || Infinity)) {
                    minCosts.set(neighbor, newCost);
                    heap.push([newCost, neighbor]);
                    heap.sort((a, b) => a[0] - b[0]);  // Sorting for simplicity; use a proper priority queue for efficiency
                }
            }
        }

        // If there is no path from startNode to endNode
        return -1;
    }
}