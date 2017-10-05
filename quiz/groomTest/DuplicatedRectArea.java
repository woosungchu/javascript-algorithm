import java.util.*;


public class DuplicatedRectArea {
	public static final Scanner scanner = new Scanner(System.in);
	
	/** 
  @description
    두 사각형을 이루는 네 점을 파라미터로 받아 교차하는 영역의 넓이를 반환하는 함수

  @param p	첫 번째 사각형의 한 점, q와 대각선상에 존재한다.
  @param q	첫 번째 사각형의 한 점, p와 대각선상에 존재한다.
  @param r	두 번째 사각형의 한 점, s와 대각선상에 존재한다.
  @param s	두 번째 사각형의 한 점, r과 대각선상에 존재한다.
  @return   두 직사각형이 교차하는 영역의 넓이
	**/
	public static int getDuplicatedArea(Point p, Point q, Point r, Point s)
	{
		Rect aRect = new Rect(p,q);
		Rect bRect = new Rect(r,s);
		
		int topC = Math.min(aRect.top, bRect.top);
		int rightC = Math.min(aRect.right, bRect.right);
		int botC = Math.max(aRect.bot, bRect.bot);
		int leftC = Math.max(aRect.left, bRect.left);
		
		if(topC > botC && rightC > leftC) {
			return (topC - botC) * (rightC - leftC);
		}else {
			return 0;
		}
		
	}
	
	/* 
	** 메인 함수에는 테스트케이스와 입출력에 대한 기본적인 뼈대 코드가 작성되어 있습니다. 
	** 상단의 함수만 완성하여도 문제를 해결할 수 있으며, 
	** 메인 함수를 제거한 후 스스로 코드를 모두 작성하여도 무방합니다.
	** 단, 스스로 작성한 코드로 인해 발생한 에러 등은 모두 참가자에게 책임이 있습니다.
	*/
  public static void main(String[] args) {
		//네 점 p, q, r, s를 차례로 입력받는다.
		Point p = new Point(-7,5);
		Point q = new Point(0,0);
		Point r = new Point(-3,-3);
		Point s = new Point(4,2);
		
		//주어진 함수를 통해 교차하는 영역의 넓이를 계산한다 
		int answer = getDuplicatedArea(p, q, r, s);
		
		//정답을 형식에 맞게 출력한다 
		System.out.println(answer);
  }
}



class Rect{
	int top, bot, left, right;
	
	Rect(Point a, Point b){
		this.top = Math.max(a.y,b.y);
		this.right = Math.max(a.x,b.x);
		this.bot = Math.min(a.y,b.y);
		this.left = Math.min(a.x,b.x);
	}
	
	@Override
	public String toString() {
		return this.top + " " + this.right + " " +this.bot + " " +this.left + " ";
	}
	
}

/** 
  @description
    하나의 점(좌표)를 나타내는 클래스
**/
class Point{
	public int x;
	public int y;
	public Point(int x, int y)
	{
		this.x = x;
		this.y = y;
	}
	
	public int getX()
	{
		return this.x;
	}
	
	public int getY()
	{
		return this.y;
	}
	
	public void setX(int x)
	{
		this.x = x;
	}
	public void setY(int y)
	{
		this.y = y;
	}
}
