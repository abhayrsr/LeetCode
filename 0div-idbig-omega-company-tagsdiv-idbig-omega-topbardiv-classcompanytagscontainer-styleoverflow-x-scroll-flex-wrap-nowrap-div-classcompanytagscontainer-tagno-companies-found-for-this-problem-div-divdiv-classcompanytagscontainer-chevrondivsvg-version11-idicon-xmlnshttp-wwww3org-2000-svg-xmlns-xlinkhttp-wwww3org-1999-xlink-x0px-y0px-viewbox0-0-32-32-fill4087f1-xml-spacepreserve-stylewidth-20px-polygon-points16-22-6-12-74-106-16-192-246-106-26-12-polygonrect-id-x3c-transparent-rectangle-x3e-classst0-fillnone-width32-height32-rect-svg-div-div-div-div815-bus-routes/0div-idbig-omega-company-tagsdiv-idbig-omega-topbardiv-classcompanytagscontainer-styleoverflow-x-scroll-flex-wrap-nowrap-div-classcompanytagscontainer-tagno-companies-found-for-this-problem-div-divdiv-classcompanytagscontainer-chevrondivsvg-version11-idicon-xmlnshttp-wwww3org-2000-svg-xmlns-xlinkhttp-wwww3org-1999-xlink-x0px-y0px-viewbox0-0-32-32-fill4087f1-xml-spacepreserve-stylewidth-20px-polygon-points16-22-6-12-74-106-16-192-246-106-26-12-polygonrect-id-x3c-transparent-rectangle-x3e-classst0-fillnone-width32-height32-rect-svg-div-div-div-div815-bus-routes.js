/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  
    const stopToBuses = new Map();

    for (let busId = 0; busId < routes.length; busId++) {
        const route = routes[busId];
        for (const stop of route) {
            if (!stopToBuses.has(stop)) {
                stopToBuses.set(stop, []);
            }
            stopToBuses.get(stop).push(busId);
        }
    }

    if (!stopToBuses.has(source) || !stopToBuses.has(target)) {
        return -1;
    }

    if (source === target) {
        return 0;
    }

    const queue = [source];
    const busesTaken = new Set();
    const stopsVisited = new Set();
    let res = 0;

    while (queue.length > 0) {
        res++;
        const stopsToProcess = queue.length;

        for (let i = 0; i < stopsToProcess; i++) {
            const currentStop = queue.shift();

            for (const busId of stopToBuses.get(currentStop) || []) {
                if (busesTaken.has(busId)) {
                    continue;
                }

                busesTaken.add(busId);

                for (const nextStop of routes[busId]) {
                    if (stopsVisited.has(nextStop)) {
                        continue;
                    }

                    if (nextStop === target) {
                        return res;
                    }

                    queue.push(nextStop);
                    stopsVisited.add(nextStop);
                }
            }
        }
    }

    return -1;    

};