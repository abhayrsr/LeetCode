/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findPeakGrid(mat) {
    function maxIndex(arr, start, end) {
        let maxEle = -Infinity;
        let maxIndex = -1;

        for (let i = start; i <= end; i++) {
            if (arr[i] > maxEle) {
                maxEle = arr[i];
                maxIndex = i;
            }
        }

        return maxIndex;
    }

    const n = mat.length;
    const m = mat[0].length;

    let low = 0;
    let high = m - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let maxRowIndex = 0;
        for (let i = 1; i < n; i++) {
            if (mat[i][mid] > mat[maxRowIndex][mid]) {
                maxRowIndex = i;
            }
        }

        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -Infinity;
        let right = mid + 1 < m ? mat[maxRowIndex][mid + 1] : -Infinity;

        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right) {
            return [maxRowIndex, mid];
        } else if (left > right) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return [-1, -1];
};