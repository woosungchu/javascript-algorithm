import java.util.*;
import java.io.*;

public class Main{

    public static int n;
    public static int[][] m;

    //search(d, r, c) :=
    //  r행 c열 기준으로 상하좌우를 중복없이 탐색해서 연결 된 마을의 수를 반환하는 함수

    public static int search(int depth, int r, int c)
    {
        //[1] 예외처리
        if(m[r][c] == 0){
            return 0;
        }

        //[2] 탐색
        int area = 1; //이번 칸 기준으로 상하좌우 모두 뒤졌을 때 도달할 수 있는 마을의 수

        //나는 카운팅되었으니까 제거
        m[r][c] = 0;

        //some recursion
        area += search(depth+1, r-1, c);
        area += search(depth+1, r+1, c);
        area += search(depth+1, r, c-1);
        area += search(depth+1, r, c+1);

        return area;
    }


    public static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args){
        n = scanner.nextInt();
        m = new int[n+2][n+2];
        for(int r = 1; r<= n; r++){
            for(int c = 1; c<= n; c ++){
                m[r][c] = scanner.nextInt();
            }
        }

        ArrayList<Integer> arr = new ArrayList<>();


        for(int r = 1; r <= n; r ++){
            for(int c =1; c<=n; c++){
                //모든 칸 중에
                if(m[r][c] >= 1)
                {   //m[r][c]가 포함된 단지에 대해서 최초의 탐색
                    int size = search(1, r, c);
                    arr.add(size);

                }

            }
        }

        Collections.sort(arr);

        System.out.println(arr.size());
        for(int a : arr)
        {
            System.out.println(a);
        }



    }
}
