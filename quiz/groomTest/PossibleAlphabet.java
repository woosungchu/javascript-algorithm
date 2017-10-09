import java.util.*;
import java.io.*;

public class Main{


    public static int n; //글자수
    public static char[] save; //save[d] := d번째 depth에서 선택한 문자를

    //dfs(d) := d번째 글자를 결정하고 넘어가는 함수
    public static void dfs(int depth)
    {
        //[1] 예외처리

        //[2] 종료조건
        if(depth==4){
            //세 글자를 다 골랐구나
            //뎁스별로 선택한 문자 정보가 필요
            System.out.println(""+save[1] + save[2] + save[3]);
            return;
        }


        for(int i = 0 ;i  <26;i++){
            //[3] 상태 하나 결정
            //  - 가지치기
            char c = (char)('A' + i) ;
            //c를 선택했고
            save[depth] = c;

            //[4] 다음 번 재귀 호출

            //다음 번 문자들도 선택하기 위해 재귀호출
            dfs(depth+1);

            //[5] 사후처리


        }
    }

    public static void main(String[] args){
        n = 3;
        save = new char[n+1];
        dfs(1);
    }
}
