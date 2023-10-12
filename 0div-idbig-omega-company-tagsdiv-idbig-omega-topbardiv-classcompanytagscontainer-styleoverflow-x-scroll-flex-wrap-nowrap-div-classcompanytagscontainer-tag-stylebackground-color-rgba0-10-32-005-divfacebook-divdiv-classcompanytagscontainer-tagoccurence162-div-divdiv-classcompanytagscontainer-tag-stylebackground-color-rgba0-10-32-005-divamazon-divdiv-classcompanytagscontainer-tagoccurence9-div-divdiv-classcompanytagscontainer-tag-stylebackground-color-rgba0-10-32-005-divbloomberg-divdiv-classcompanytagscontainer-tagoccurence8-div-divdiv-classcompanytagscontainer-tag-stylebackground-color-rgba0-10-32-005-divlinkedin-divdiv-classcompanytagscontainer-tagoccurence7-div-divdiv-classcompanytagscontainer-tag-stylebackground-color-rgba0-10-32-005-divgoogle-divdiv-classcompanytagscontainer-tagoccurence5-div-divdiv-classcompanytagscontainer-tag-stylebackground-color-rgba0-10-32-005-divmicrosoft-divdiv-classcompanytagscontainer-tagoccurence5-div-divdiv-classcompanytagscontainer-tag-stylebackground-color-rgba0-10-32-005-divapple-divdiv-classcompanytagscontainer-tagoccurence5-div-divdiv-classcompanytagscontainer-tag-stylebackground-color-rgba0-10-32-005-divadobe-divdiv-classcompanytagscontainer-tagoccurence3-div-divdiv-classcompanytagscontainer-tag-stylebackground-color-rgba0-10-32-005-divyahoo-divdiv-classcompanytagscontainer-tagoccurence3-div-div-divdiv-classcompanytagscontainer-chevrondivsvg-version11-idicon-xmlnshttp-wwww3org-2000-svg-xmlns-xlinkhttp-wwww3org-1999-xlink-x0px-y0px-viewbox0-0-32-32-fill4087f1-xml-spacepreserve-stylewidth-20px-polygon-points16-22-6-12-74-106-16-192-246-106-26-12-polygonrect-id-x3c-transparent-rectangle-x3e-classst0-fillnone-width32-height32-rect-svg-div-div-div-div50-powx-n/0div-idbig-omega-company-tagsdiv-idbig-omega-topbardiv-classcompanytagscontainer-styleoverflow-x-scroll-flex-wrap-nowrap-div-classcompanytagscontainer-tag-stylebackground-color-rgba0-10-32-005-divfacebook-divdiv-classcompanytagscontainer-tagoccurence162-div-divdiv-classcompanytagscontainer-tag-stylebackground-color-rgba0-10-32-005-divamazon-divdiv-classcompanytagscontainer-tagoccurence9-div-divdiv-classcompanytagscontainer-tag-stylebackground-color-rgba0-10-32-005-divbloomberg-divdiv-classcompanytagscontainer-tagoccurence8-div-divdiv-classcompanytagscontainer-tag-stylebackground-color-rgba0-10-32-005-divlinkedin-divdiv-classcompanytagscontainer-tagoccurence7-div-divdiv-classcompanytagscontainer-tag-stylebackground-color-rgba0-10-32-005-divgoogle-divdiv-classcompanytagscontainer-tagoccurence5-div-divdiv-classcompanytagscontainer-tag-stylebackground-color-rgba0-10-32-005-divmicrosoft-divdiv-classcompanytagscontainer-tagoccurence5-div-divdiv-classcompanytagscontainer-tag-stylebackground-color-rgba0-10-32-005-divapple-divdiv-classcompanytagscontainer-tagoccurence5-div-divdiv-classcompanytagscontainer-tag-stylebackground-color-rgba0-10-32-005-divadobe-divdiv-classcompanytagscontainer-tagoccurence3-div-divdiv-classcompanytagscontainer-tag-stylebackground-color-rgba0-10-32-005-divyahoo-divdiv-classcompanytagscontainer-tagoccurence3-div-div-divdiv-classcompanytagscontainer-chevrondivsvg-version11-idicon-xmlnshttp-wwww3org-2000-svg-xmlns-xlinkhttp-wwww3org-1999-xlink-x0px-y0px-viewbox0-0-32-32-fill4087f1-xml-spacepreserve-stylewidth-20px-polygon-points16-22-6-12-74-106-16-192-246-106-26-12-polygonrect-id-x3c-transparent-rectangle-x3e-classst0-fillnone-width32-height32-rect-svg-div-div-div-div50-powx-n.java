class Solution {
    public double myPow(double x, int n) {
        double res = 1;
        if(n < 0){
            while(n < 0){
            if(n%2 != 0){
                res = res * (1/x);
            }
            x = (x)*(x);
            n = n/2;
        }
        } else
        {
            while(n > 0){
            if(n%2 != 0){
                res = res * x;
            }
            x = x*x;
            n = n/2;
        }
        }
        return res;
    }
}