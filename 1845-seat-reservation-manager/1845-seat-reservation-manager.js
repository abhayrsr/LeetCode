/**
 * @param {number} n
 */
class SeatManager {
    constructor(n) {
        this.last = 0;
        this.pq = [];
    }

    reserve() {
        if (this.pq.length === 0) {
            return ++this.last;
        } else {
            this.pq.sort((a, b) => a - b);
            return this.pq.shift();
        }
    }

    unreserve(seatNumber) {
        if (seatNumber === this.last) {
            this.last--;
        } else {
            this.pq.push(seatNumber);
        }
    }
}

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */