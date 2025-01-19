/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const queue = new MinPriorityQueue({priority: e => e.height});
    const n = heightMap.length;
    const m = heightMap[0].length;
    const visited = new Array(n);

    for (let i = 0; i < n; i++) {
        visited[i] = Array(m).fill(false);

        queue.enqueue({ height: heightMap[i][0], i, j: 0 });
        queue.enqueue({ height: heightMap[i][m - 1], i, j: m - 1 });

        visited[i][0] = true;
        visited[i][m - 1] = true;
    }

    for (let j = 1; j < m - 1; j++) {
        queue.enqueue({ height: heightMap[0][j], i: 0, j });
        queue.enqueue({ height: heightMap[n - 1][j], i: n - 1, j });

        visited[0][j] = true;
        visited[n - 1][j] = true;
    }
    
    let totalCollectedWater = 0;

    while (queue.size() > 0) {
        const { height, i: y, j: x } = queue.dequeue().element;

        const directions = [
            [x - 1, y],
            [x + 1, y],
            [x, y - 1],
            [x, y + 1],
        ];

        for (const [j, i] of directions) {
            if (i >= n || j >= m || i < 0 || j < 0 || visited[i][j]) {
                continue;
            }

            if (heightMap[i][j] < height) {
                totalCollectedWater += height - heightMap[i][j];
            }

            queue.enqueue({
                height: Math.max(heightMap[i][j], height),
                i,
                j,
            })
            visited[i][j] = true;
        }
    }

    return totalCollectedWater;
};