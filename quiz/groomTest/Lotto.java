import java.util.*;
import java.io.*;

public class Main{

    public static Scanner scanner = new Scanner(System.in);
    public static int n;
    public static int[] num;
    public static int[] save = new int[7]; //save[d] := d번째 depth에서 선택한 숫자의 인덱스


    //dfs(d) := d번째 숫자를 결정하는 함수
    public static void dfs(int depth)
    {
        //[1] 예외 처리

        //[2] 종료조건
        if(depth > 6)
        {   //6개 숫자를 모두 선택
            for(int i = 1 ; i <= 6 ; i++){
                System.out.print(num[save[i]] + " ");
            }
            System.out.println("");
            return;
        }

        //[3] 선택
        for(int i = save[depth-1]+1; i < num.length; i++){

            //하나 결정
            save[depth] = i;

            //이후에 탐색
            dfs(depth+1);

            //사후 처리
        }

    }

    public static void main(String[] args){
        while(true){
            n = scanner.nextInt();
            if( n== 0) {
                break;
            }
            num = new int[n];
            for(int i = 0 ;i < n ; i++){
                num[i] = scanner.nextInt();
            }

            dfs(1);

            System.out.println();
        }
    }
}
