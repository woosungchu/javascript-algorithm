import java.util.*;
import java.io.*;

public class RoboCleaner{

	/** 
		@description
			�κ� �湮 ������ ���� �迭 m�� ä���ִ� �Լ�

		@param m	�κ� �湮 ������ ������ r�� c���� �迭, m[i][j] := (i�� j��)ĭ�� �κ��� �湮 ���� ��ȣ
		@param r	���� �� 
		@param c	���� �� 
	*/
	public static void simulate(int[][] m, int r, int c)
	{
		int nowR = 0;
		int nowC = 0;
		int flag = 0;
		int rMove[] = {0, 1,0,-1};
		int cMove[] = {1,0,-1,0};
		int count = 1;//���° �ڸ��ΰ�
		
		while(count <= r*c) {
			m[nowR][nowC] = count;
			count++;
			
			//�������� �̵��Ϸ��� ĭ�� �湮 �������� Ȯ��
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
		** ���� �Լ����� �׽�Ʈ���̽��� ����¿� ���� �⺻���� ���� �ڵ尡 �ۼ��Ǿ� �ֽ��ϴ�. 
		** ����� �Լ��� �ϼ��Ͽ��� ������ �ذ��� �� ������, 
		** ���� �Լ��� ������ �� ������ �ڵ带 ��� �ۼ��Ͽ��� �����մϴ�.
		** ��, ������ �ۼ��� �ڵ�� ���� �߻��� ���� ���� ��� �����ڿ��� å���� �ֽ��ϴ�.
		*/
	public static void main(String[] args) throws Exception
	{
		Scanner scanner = new Scanner(System.in);
		BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

		//�׽�Ʈ���̽��� ���� �Է¹޴´� 
		int caseNum = scanner.nextInt();

		//�� �׽�Ʈ���̽��� ���Ͽ� ������� �����͸� �Է¹ް� ������ ����Ѵ�
		for(int caseIndex = 1; caseIndex <= caseNum; caseIndex++)
		{
			//��� ���� ���� �Է¹޴´� 
			int r = scanner.nextInt();
			int c = scanner.nextInt();

			//0���� �ʱ�ȭ �� r�� c���� ���͸� �����Ѵ�
			int[][] m = new int[r][c];

			//�־��� �Լ��� �����Ͽ� �� ĭ�� �κ� û�ұⰡ �湮�ϴ� ������ ���Ϳ� ����Ѵ�
			simulate(m, r, c);

			//���̽� ��ȣ�� ����Ѵ�
			writer.write(String.format("Case #%d\n", caseIndex));

			//�� ĭ�� �湮 ������ ��� ���Ŀ� �°� ����Ѵ�
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