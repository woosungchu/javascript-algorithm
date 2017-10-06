import java.util.*;
import java.io.*;

public class RoboCleaner{

	/** 
		@description
			로봇 방문 순서에 따라 배열 m을 채워주는 함수

		@param m	로봇 방문 순서를 저장할 r행 c열의 배열, m[i][j] := (i행 j열)칸의 로봇의 방문 순서 번호
		@param r	행의 수 
		@param c	열의 수 
	*/
	public static void simulate(int[][] m, int r, int c)
	{
		int nowR = 0;
		int nowC = 0;
		int flag = 0;
		int rMove[] = {0, 1,0,-1};
		int cMove[] = {1,0,-1,0};
		int count = 1;//몇번째 자리인가
		
		while(count <= r*c) {
			m[nowR][nowC] = count;
			count++;
			
			//다음번에 이동하려는 칸이 방문 가능한지 확인
			if(nowR + rMove[flag] >= r || nowR + rMove[flag] < 0  // r Validation
					|| nowC + cMove[flag] < 0 || nowC + cMove[flag] >= c //c Validation
					|| m[nowR + rMove[flag]][nowC + cMove[flag]] != 0) { // duplicate check
				flag += 1;
				flag %= 4;
			}
			
			nowR += rMove[flag];
			nowC += cMove[flag];
		}
		
	}
	
	/* 
		** 메인 함수에는 테스트케이스와 입출력에 대한 기본적인 뼈대 코드가 작성되어 있습니다. 
		** 상단의 함수만 완성하여도 문제를 해결할 수 있으며, 
		** 메인 함수를 제거한 후 스스로 코드를 모두 작성하여도 무방합니다.
		** 단, 스스로 작성한 코드로 인해 발생한 에러 등은 모두 참가자에게 책임이 있습니다.
		*/
	public static void main(String[] args) throws Exception
	{
		Scanner scanner = new Scanner(System.in);
		BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

		//테스트케이스의 수를 입력받는다 
		int caseNum = scanner.nextInt();

		//각 테스트케이스에 대하여 순서대로 데이터를 입력받고 정답을 출력한다
		for(int caseIndex = 1; caseIndex <= caseNum; caseIndex++)
		{
			//행과 열의 수를 입력받는다 
			int r = scanner.nextInt();
			int c = scanner.nextInt();

			//0으로 초기화 된 r행 c열의 벡터를 생성한다
			int[][] m = new int[r][c];

			//주어진 함수를 실행하여 각 칸을 로봇 청소기가 방문하는 순서를 벡터에 계산한다
			simulate(m, r, c);

			//케이스 번호를 출력한다
			writer.write(String.format("Case #%d\n", caseIndex));

			//각 칸의 방문 순서를 출력 형식에 맞게 출력한다
			for(int i = 0 ; i < r ; i ++)
			{
				for(int j = 0 ; j < c ; j++)
				{
					if(j > 0)
						writer.write(" ");
					writer.write(String.format("%d", m[i][j]));
				}
				writer.write("\n");
				writer.flush();
			}
		}
		writer.close();
	}
}