import java.util.*;
import java.io.*;

public class Main{

    public static int[][] m = new int[9][9];

    public static int[][] row = new int[10][10]; // row[r][x] := r번째 행에 x라는 숫자가 사용된 횟수
    public static int[][] col = new int[10][10]; // col[c][x] := c번째 열에 x라는 숫자가 사용된 횟수
    public static int[][] group = new int[10][10]; // group[g][x] := g번째 그룹에 x라는 숫자가 사용된 횟수



    public static boolean solved = false; //정답을 구한 적 있는지?


    public static void dfs(int depth)
    {
        /** 예외처리 및 종료조건 설정 **/
        //만약 정답을 출력한 적이 있었으면? 더 탐색하지 말고 끝내자
        if(solved == true){
            return;
        }

        //depth == 82 라는 건 81개의 숫자가 모두 정해졌다 (규칙을 지키면서)
        if(depth == 82)
        {
            //출력


            //정답을 찾았다고 체크해두어야 나중에 중복으로 안찾는다
            solved = true;
            return;
        }

        /** 더 탐색을 해보아야 하는 경우  **/

        int r = (depth-1)/ 9 ; //depth번째 칸의 행번호
        int c = (depth-1) % 9 ; //열번호
        int g = ( r / 3 ) * 3 + (c/3); //그룹 번호


        /** 이미 숫자가 정해져있는 경우 - 선택지가 없다  **/
        //이미 숫자가 정해져 있는 칸은 선택하지말고 다음 칸으로
        if(m[r][c] > 0)
        {
            dfs(depth+1);

            return;
        }

        /** 그렇지 않으면 모든 숫자를 규칙을 지키면서 놓아보아야 한다  **/
        //숫자가 정해지지 않은 빈 칸은 숫자를 하나씩 넣어보기
        for(int x = 1 ; x <= 9 ; x++)
        {

            boolean flag = true; // m[r][c]에 x를 놓아도 규칙을 위반하지않으면 true

            //some checking code
            // - r행에 x가 사용된 적 있는지?
            // - c열에 x가 사용된 적 있는지?
            // - g그룹에 x가 사용된 적 있는지?
            int cnt = 0 ;
            cnt += row[r][x];
            cnt += col[c][x];
            cnt += group[g][x];

            if(cnt > 0){
                flag = false;
            }

            if(flag)
            {   //r행 c열에 x를 놓을 수 있다
                //사전 체크
                //놓아 보자

                m[r][c] = x;
                row[r][x] ++;
                col[c][x] ++;
                group[g][x] ++;

                //다음 번 검사
                dfs(depth+1);


                //사후 처리
                m[r][c] = 0;
                row[r][x] --;
                col[c][x] --;
                group[g][x] --;



            }

        }



    }


    public static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args){
        //입력받고
        for(int r = 0 ; r < 9 ; r ++){
            for(int c = 0 ;c < 9 ; c++){

                //각 칸
                m[r][c] = scanner.nextInt();


                //이미 숫자가 정해진 칸은 각 숫자 정보를 미리 갱신해둔다
                int g = ( r / 3 ) * 3 + (c/3); //그룹 번호
                int x = m[r][c];

                row[r][x] ++;
                col[c][x] ++;
                group[g][x] ++;
            }
        }

        //탐색 시작
        dfs(1);
    }
}
