import org.omg.Messaging.SyncScopeHelper;


public class TheGame {

public static void Start(String args[]){

    //Scanner
    @SuppressWarnings("resource")
    Scanner input = new Scanner(System.in);

    //Money and things
    int money = 20;
    @SuppressWarnings("unused")
    boolean Sword = false;
    @SuppressWarnings("unused")
    boolean Axe = false;
    int damage = 0;
    double health = 1;



    //first question

    System.out.println("Hello what would you like to buy");
    System.out.println("--------------------------------");
    System.out.println("we sell a sword and an axe");
    System.out.println("if you would like to buy axe press 1 and it will cost 10(+2 damge) and if you want to buy a sword(+3 damage) press 2 and it will cost 12");
    System.out.println("--------------------------------");
    System.out.println("--------------------------------");
    int ATB1 = input.nextInt();
    if(ATB1==1){
        money = money - 10;
        System.out.println("You have " + money + " pound left");
        Axe = true;
        damage = damage + 2;
        System.out.println("You have an axe now");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");
    }




    if(ATB1==2){
        money = money - 12;
        System.out.println("You have " + money + " pound left");
        Sword = true;
        damage = damage + 3;
        System.out.println("You have a sword now");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");

        }
    //first boss
    System.out.println("You came agasint the first boss if you have more then 1 damage you will surely win!!!!!");
    System.out.println("Hope you got that wepon");
    System.out.println("--------------------------------");
    System.out.println("--------------------------------");
    if(damage>1){
        System.out.println("Well done you beat the first boss!!");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");
    }
    else if(damage<=0){
        System.out.println("Unlucky you lost");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");
        System.exit(0);


    }

    //first random event
    System.out.println("You see a homeless man on the streets will you spare 5 pound press 1 for yes or 2 for no: ");
    System.out.println("--------------------------------");
    System.out.println("--------------------------------");
    int FRE1= input.nextInt();

    if(FRE1==1){
        System.out.println("He thanks you and gives you a new sword upgrade (+1 damge) but you have 5 less pound");
        money = money -5;
        damage = damage + 1;
        System.out.println("You now have " + money + " pound left");
        System.out.println("You now have " + damage + " damage");

    }
    if(FRE1==2){
        System.out.println("You walk by him without paying him he tells you you will regreat it later");
        System.out.println("You now have " + money + " pound left");
        System.out.println("You now have " + damage + " damage");

    }
    //first job

    System.out.println("--------------------------------");
    System.out.println("--------------------------------");
    System.out.println("You are worried you are running low on money, you get offered a job,(+ 5 money) but itwill lower you health by half as you will be tired");
    System.out.println("Health is very important as when you come to fight bosses health is a mutilpler to add to damge if you have half health you will do half damage.");
    System.out.println("Would you like to take the job (+5 money -half health) press 1 if yes 2 if no: ");
    int Job1 = input.nextInt();

    if(Job1==1){
        System.out.println("You took the job so you have +5 money but half health");
        money = money + 5;
        health = health - 0.5;
        System.out.println("You now have " + money + " pound left");
        System.out.println("You now have " + damage + " damage");
        System.out.println("You now have " + health + " health");


    }


    if(Job1==2){
        System.out.println("You didnt take the job so you gained or loss nothing.");
        System.out.println("You now have " + money + " pound left");
        System.out.println("You now have " + damage + " damage");
        System.out.println("You now have " + health + " health");


    }
    //second boss
    System.out.println("--------------------------------");
    System.out.println("--------------------------------");
    System.out.println("Second boss if you have 2 damage or more you will win. unless your health is too low.");
    if(damage*health>=2){
        System.out.println("You cleared the second boss");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");

    }

    if(damage*health<2){
        System.out.println("you loss due to not enough damage or your health was too low.");
        System.out.println("--------------------------------");
        System.out.println("--------------------------------");
        System.exit(0);
    }

    }



}  