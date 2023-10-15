//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            String input_line[] = read.readLine().trim().split("\\s+");
            int Arr[]= new int[N];
            for(int i = 0; i < N; i++)
                Arr[i] = Integer.parseInt(input_line[i]);
            
            Solution ob = new Solution();
            int[] ans = ob.twoOddNum(Arr,N);
            for(int i = 0; i < ans.length; i++)
            {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends


//User function Template for Java

//User function Template for Java
class Solution
{
    public int[] twoOddNum(int Arr[], int N)
    {
        int x = 0;
        for(int i = 0; i < N; i++){
            x =x^Arr[i];
        }
        
        int k = x & -x;
        int res1 = 0, res2 = 0;
        for(int i = 0; i < N; i++){
            if((Arr[i]&k) !=  0){
                res1 = res1 ^ Arr[i];
            } else {
                res2 = res2 ^ Arr[i];
            }
        }
        
        if(res1 > res2 ){
            int[] res = {res1, res2};
            return res;
        } else {
            int[] res = {res2, res1};
            return res;
        }
    }
}