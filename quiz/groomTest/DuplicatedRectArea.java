import java.util.*;


public class DuplicatedRectArea {
	public static final Scanner scanner = new Scanner(System.in);
	
	/** 
  @description
    �� �簢���� �̷�� �� ���� �Ķ���ͷ� �޾� �����ϴ� ������ ���̸� ��ȯ�ϴ� �Լ�

  @param p	ù ��° �簢���� �� ��, q�� �밢���� �����Ѵ�.
  @param q	ù ��° �簢���� �� ��, p�� �밢���� �����Ѵ�.
  @param r	�� ��° �簢���� �� ��, s�� �밢���� �����Ѵ�.
  @param s	�� ��° �簢���� �� ��, r�� �밢���� �����Ѵ�.
  @return   �� ���簢���� �����ϴ� ������ ����
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
	** ���� �Լ����� �׽�Ʈ���̽��� ����¿� ���� �⺻���� ���� �ڵ尡 �ۼ��Ǿ� �ֽ��ϴ�. 
	** ����� �Լ��� �ϼ��Ͽ��� ������ �ذ��� �� ������, 
	** ���� �Լ��� ������ �� ������ �ڵ带 ��� �ۼ��Ͽ��� �����մϴ�.
	** ��, ������ �ۼ��� �ڵ�� ���� �߻��� ���� ���� ��� �����ڿ��� å���� �ֽ��ϴ�.
	*/
  public static void main(String[] args) {
		//�� �� p, q, r, s�� ���ʷ� �Է¹޴´�.
		Point p = new Point(-7,5);
		Point q = new Point(0,0);
		Point r = new Point(-3,-3);
		Point s = new Point(4,2);
		
		//�־��� �Լ��� ���� �����ϴ� ������ ���̸� ����Ѵ� 
		int answer = getDuplicatedArea(p, q, r, s);
		
		//������ ���Ŀ� �°� ����Ѵ� 
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
    �ϳ��� ��(��ǥ)�� ��Ÿ���� Ŭ����
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
