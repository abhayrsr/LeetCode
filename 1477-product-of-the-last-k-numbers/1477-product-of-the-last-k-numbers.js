class ProductOfNumbers {
    constructor(){
        this.products = []
    }

    add(num){
        if(num === 0){
            this.products = [];
        } else {
            this.products.push(num * (this.products.length > 0 ? this.products[this.products.length - 1] : 1))
        }
    }

    getProduct(k){
        let len = this.products.length;
        if(k === len) return this.products[len - 1];
        if(len === 0 || k > len) return 0;
        return Math.floor(this.products[len - 1]/ this.products[len-k-1])
    }
}