package java;

import java.util.Scanner;

public class Adventure extends TheGame{

public static void main(String[] args) {

    @SuppressWarnings("resource")
    Scanner input = new Scanner(System.in);


    System.out.println("Welcome to my adventure game, in this game you have certain quests and you can pick options each time. There is shops where you can buy wepons and where you can upgrade damage."
            + "In the shops it will ask you to pick numbers that go with each wepon and the wepons cost money. If you press a number that isnt on the shop then you will skip that part with no wepon or "
            + "upgrades so you will probably lose. ");
    System.out.println("--------------------------------");

    System.out.println("What is your name: ");
    String name = input.next();
    System.out.println("--------------------------------");

    System.out.println("Hello " + name + " Would you like to start type 1 if you would");
    int Wantstostart = input.nextInt();
    if(Wantstostart==1){
        System.out.println("Ok lets start then");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");
        Start(null);
    }




}

}