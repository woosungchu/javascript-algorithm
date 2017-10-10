import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {

	private static Scanner scanner = new Scanner(System.in);

	private static int[][]m = null;
	private static List<Integer> result = new ArrayList<Integer>();

	private static int n = 0;

	public static void main(String[] args) {
		n= scanner.nextInt();
		scanner.nextLine();
		m = new int[n+2][n+2];

		for (int i = 1; i < n+1; i++) {
			String[] arr = scanner.nextLine().split("");
			for (int j = 1; j < n+1; j++) {
				m[i][j] = Integer.parseInt(arr[j-1]);
			}
		}

		for (int r = 1; r < n+1; r++) {
			for (int c = 1; c < n+1; c++) {
				if(m[r][c] > 0) {
					int size = dfs(r,c);
					if(size>0)result.add(size);
				}
			}
		}

		Collections.sort(result);
		System.out.println(result.size());
		for(int a : result) {
			System.out.println(a);
		}

	}

	private static int dfs(int r, int c) {

		if(m[r][c] == 0 ) {
			return 0;
		}else {
			int cnt = 1;
			m[r][c] = 0;

			cnt += dfs(r-1,c);
			cnt += dfs(r,c+1);
			cnt += dfs(r+1,c);
			cnt += dfs(r,c-1);

			return cnt;
		}

	}

}
