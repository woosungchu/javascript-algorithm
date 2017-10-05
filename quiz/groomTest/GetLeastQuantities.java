import java.util.*;
import java.io.*;

/**
 구름 화학은 다양한 화학 물질에 대한 연구개발을 하는 회사다. 구름 화학에서는 하나의 특수 광물 X 로부터 약품 개발에 필요한 N가지의 기본 물질을 각각 50g씩 추출할 수 있다는 사실을 발견했다. 

 약품 개발에는 일정 양의 기본 물질들과 합성 물질이 필요하다. 이 중에서 합성 물질은 인공적으로 합성하였기 때문에 특수 광물 X에서도 추출할 수 없다는 문제가 있다. 합성 물질은 서로 다른 세 종류의 기본 물질을 1:1:1로 혼합하면 만들어 낼 수 있다. 단, 합성 물질을 합성하는 과정에서 재료로 사용되는 기본 물질의 질량이 2/3가 손실되기 때문에 세 기본 물질을 각 1g씩 (총 3g)을 합성하면 총 1g의 합성 물질을 만들어 낼 수 있다.

 예를 들어서 한 약품 개발에 1, 2, 3번 기본 물질이 50g씩 필요하고 합성 물질이 7g이 필요하다면 하나의 특수 광물 X로는 필요한 물질들을 준비할 수 없다. 그러므로 두 개의 특수 광물 X를 통해 1, 2, 3번 물질을 100g씩 준비하고 각 물질을 7g씩 사용하여 합성 물질 7g을 합성해야만 한다. 결과적으로 1, 2, 3번 물질 93g씩과 합성 물질 7g을 만들 수 있다.

 약품 개발에 필요한 각 기본 물질의 양과 합성 물질의 양이 주어질 때, 모든 필요 물질을 준비하기 위해 필요한 특수 광물 X의 최소 갯수를 계산하는 프로그램을 작성하시오.

*/

public class Main{

  /** 
  @description
    약품 개발에 필요한 정보를 파라미터로 받아 약품 개발에 필요한 최소의 특수 광물의 수를 계산하여 반환해주는 함수  

  @param n      광물 X에서 얻을 수 있는 기본 물질의 가짓수 
  @param g      약품 개발에 필요한 특수 합성 물질의 양
  @param needs  약품 개발에 필요한 N가지 기본 물질의 양  
  @return       약품 개발에 필요한 최소의 특수 광물 X의 갯수
 */
  public static int getLeastQuantities(int n, int g, int[] needs)
  {
		int answer = 0;
		int count = 0;
		
		while(count < g){
			Arrays.sort(needs);
			needs[0] +=1;
			needs[1] +=1;
			needs[2] +=1;
			count +=1;
		}
		
		Arrays.sort(needs);
		answer=needs[n-1]/50; // the highest-value index of array
		
		if(needs[n-1]%50 > 0){
			answer++;
		}
		
		return answer;
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

    //테스트케이스의 수를 입력받는다 
    int caseNum = scanner.nextInt();

    //각 테스트케이스에 대하여 순서대로 데이터를 입력받고 정답을 출력한다
    for(int caseIndex = 1; caseIndex <= caseNum; caseIndex++)
    {
      //기본 물질의 종류의 수 N과 필요한 합성 물질의 양 G를 입력받는다
      int n = scanner.nextInt();
      int g = scanner.nextInt();

      //N개의 기본 물질이 필요한 양을 각각 입력받는다 
      int[] needs = new int[n];
      for(int i = 0 ; i < n ; i ++){
        needs[i] = scanner.nextInt();
      }

      //주어진 함수를 이용해 정답을 계산한다 
      int answer = getLeastQuantities(n, g, needs);

      //출력 형식에 맞게 정답을 출력한다
      System.out.printf("Case #%d\n", caseIndex);
      System.out.println(answer);
    }
  }
}