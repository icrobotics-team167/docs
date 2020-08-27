## Variables

This lesson will focus on variables. We will begin by looking at what variables are and how to create them. We will then talk about important data types and how to perform arithmetic operations on numerical data types. We will also look at constants and where they should be used.

### Variables and Data Types

Fundamentally, every computer program manipulates some sort of input to produce some sort of output. For instance, a video game takes signals from the keyboard and mouse and uses them to determine movement and other actions to be performed. Likewise, a robot program takes signals from a controller and readings from various sensors. It converts these to many outputs such as motor speeds. To manipulate inputs and determine outputs, programs need to store data.

In Java, we can store data using variables. Every variable has a type, a name, and a value. For example, imagine a program wanted to store a user's age. The data type of the variable would be an integer (a number without a decimal) because ages are represented as integers. The name of the variable might be something like `userAge`. The value of the variable would be 42 (or however old the user is).

> For the sake of brevity, from here on out, you can assume that all code samples are inside the `main` method unless otherwise specified.

You can express the scenario about a user's age in Java with the following code:

```java
int userAge = 42;
```

Let's consider another scenario: a program wants to store a user's bank account balance in a variable. The variable's data type would be a double (a number with a decimal). The name would be something like `balance` or `accountBalance`. Finally, the value would be any amount of money such as $1.67.

We can express this situation in Java like this:

```java
double accountBalance = 1.67;
```

When we create a variable and give it an initial value, we are said to have initialized the variable. In general, to initialize a variable in Java, you write:

```java
type name = value;
```

Before we go into more detail about what we can do with variables, we should discuss variable types and names. The data types in the following table are the most important ones to know. They will appear in almost every program. If you're curious about other Java data types, you can read about them [here](https://www.tutorialspoint.com/java/java_basic_datatypes).

| Type | Definition | Example Values |
|:-----|:-----------|:---------------|
| `int` | A number without a decimal | `0`, `42`, `-3` |
| `double` | A number with a decimal | `3.14`, `-2.718`, `1.0` |
| `boolean` | True or false | `true`, `false` |
| `char` | One character in single quotes | `'a'`, `'B'`, `'_'`, `'7'` |
| `String` | A sequence of text in double quotes | `"This is a string"`, `""` |

One important thing to take note of is that `int`, `double`, `boolean`, and `char` all start with a lowercase letter. This is because they are primitive types. In contrast, `String` starts with an uppercase letter because it is an object type. We will discuss what that means in a later lesson, but for now, just know that a bit of text is a `String`—not a `string`.

Variable names can contain letters, numbers, and the underscore character (`_`). They cannot start with a number, and they are case sensitive, so `accountBalance` and `aCcOuNtBaLaNcE` are different. Variable names should describe the data stored in the variable. For instance, a variable containing an account balance should be called `accountBalance` instead of `x`.

In Java, variable names are normally written in `camelCase`. This means that the first word is lower case, and each word thereafter begins with a capital letter. There are no spaces since spaces are not allowed in variable names. `userPassword`, `studentGrade`, and `name` are examples of `camelCase` names. 

You might occasionally see variable names in `snake_case`, where every letter is lower case and words are separated by underscores. However, `camelCase` is more common in Java. Most people who use `snake_case` used it in another programming language and kept using it when they learned Java.

### Reading Variables

After creating a variable, its value can be accessed by simply writing the variable name. For instance, the following program prints the value of the variable `answer`, which is `42`:

```java
int answer = 42;
System.out.println(answer);
```

Notice that `answer` is not in double quotes. If you write `System.out.println("answer");`, it literally prints the word `answer` to the console instead of the value of the variable `answer`.

If you want to combine text (using the `String` type) and variable values, you can use the `+` operator. Consider the following program:

```java
int answer = 42;
System.out.println("The answer is " + answer + ".");
```

This program prints `The answer is 42.` to the console. We will discuss other uses of the `+` operator and other operators [later](#basic-arithmetic-operators-and-casting) in the section.

### Updating Variables

After initializing a variable, you can change its value using a similar syntax but without the data type. For instance, the following program initializes an integer variable called `grade` to the value `87`. Then, it updates the variable's value to `93` and prints `93` to the console.

```java
int grade = 87;
grade = 93;
System.out.println(grade);
```

The reason that you don't need to use the data type when updating a variable value is that the data type cannot change. Therefore, the compiler already knows the data type. Consider the following program:

```java
int gradeLevel = 10;
gradeLevel = "sophomore";
```

If we try to compile this program, we get the following error:

```text
Main.java:4: error: incompatible types: String cannot be converted to int
    gradeLevel = "sophomore";
                 ^
```

Java knows that the variable `gradeLevel` is an integer, so it requires that the new value of `gradeLevel` also be an integer. Since it cannot find a way to convert the string `"sophomore"` to an integer, it fails to compile and gives an error.

### Uninitialized Variables

You just learned that variables can be initialized with the `type name = value;` syntax. However, it is also possible to create variables without a value. This is called declaring a variable:

```java
String favoriteColor;
```

This code sample creates a variable named `favoriteColor` with a type of `String`. It does not have an initial value. We can give it a value with the same `name = value;` syntax we used to update variables. Giving a variable a value or updating its value is called assigning a value to a variable. In fact, initializing a variable is simply a way to declare the variable and assign it a value in one line.

Trying to access the value of an uninitialized variable is an error. Consider the following program:

```java
double price;
System.out.println("The price is " + price);
```

This code results in the following compilation error:

```text
Main.java:4: error: variable price might not have been initialized
    System.out.println("The price is " + price);
                                         ^
```

This error makes sense because if there isn't a `price` for an item, we can't print what the price is. The Java compiler catches this mistake for us so we can fix our code instead of showing users a missing price.

### Basic Arithmetic Operators and Casting

You already [learned](#reading-variables) that the `+` operator can be used to combine text with variable values. However, it can also be used to add two numbers together. Consider the following code sample:

```java
int apples = 4;
int oranges = 9;
int fruits = apples + oranges;
System.out.println("There are " + fruits + " fruits.");
```

This program prints `There are 13 fruits.`. Similarly, the `-` and `*` operators can be used for subtraction and multiplication, respectively.

The `/` operator is used for division. However, it doesn't behave exactly as you might expect. Consider the following program which divides a $70 bill among 4 friends:

```java
int bill = 70;
int friends = 4;
double cost = bill / friends;
System.out.println("Each person has to pay $" + cost);
```

You would expect the program to print `Each person has to pay $17.5` since 70 divided by 4 is 17.5. Instead, it prints `Each person has to pay $17.0`. Why might this be?

When dividing two integers, Java makes the quotient an integer by truncating everything after the decimal point. In effect, this means that Java rounds positive quotients down and negative quotients up. Since `bill` and `friends` are both integers, Java rounds the result (17.5) down to 17. Then, 17 is automatically converted to the double 17.0 since `cost` is of type `double`.

To avoid this behavior, we can make either `bill` or `friends` a double instead of an integer:

```java
double bill = 70.0;
int friends = 4;
double cost = bill / friends;
System.out.println("Each person has to pay $" + cost);
```

Alternatively, we can cast either `bill` or `friends` as a double. Casting is the process by which Java converts one data type to another. To cast a variable `variable` as a new type `type`, you write:

```java
(type) variable
```

For instance, to cast `bill` as a double inside the division, you can write:

```java
int bill = 70;
int friends = 4;
double cost = (double) bill / friends;
System.out.println("Each person has to pay $" + cost);
```

Since `bill` is cast as a double, Java is diving a double by an integer. When division involves a double, the result is a double. Therefore, the result of the division is 17.5 as expected. So, the program correctly prints `Each person has to pay $17.5`.

### More Operators

There are a few more things about operators and arithmetic you should know before moving on.

Firstly, the modulo operator (`%`) calculates the remainder in integer division. For example, the following code sample prints `The remainder is 1`:

```java
int remainder = 5 % 2;
System.out.println("The remainder is " + remainder);
```

Secondly, arithmetic assignment operators make certain operations easier. To add 2 to the value of a variable `sum`, you might write:

```java
int sum = 4;
sum = sum + 2;
System.out.println(sum);
```

The above code sample prints `6` as desired. Arithmetic assignment operators simplify lines like this. Using an arithmetic assignment operator, you can write:

```java
int sum = 4;
sum += 2;
System.out.println(sum);
```

The `+=` operator, which is called the addition assignment operator, tells Java to add 2 to the value of `sum` and make that the new value of `sum`.

Other arithmetic operators have assignment versions as well. The following code samples both print `The answer is 1`:

```java
int answer = 0;
answer = answer + 10; // 10
answer = answer * 2; // 20
answer = answer - 5; // 15
answer = answer / 3; // 5
answer = answer % 2; // 1
System.out.println("The answer is " + answer);
```

```java
int answer = 0;
answer += 10; // 10
answer *= 2; // 20
answer -= 5; // 15
answer /= 3; // 5
answer %= 2; // 1
System.out.println("The answer is " + answer);
```

Since the `+` operator can combine strings, `+=` appends content to the end of a string. Consider the following program:

```java
String message = "Hello ";
String name = "Tom";
message += name;
message += "! How are you?"
System.out.println(message);
```

This program prints `Hello Tom! How are you?` to the console.

Thirdly, the increment and decrement operators (`++` and `--`) provide an even shorter way to add or subtract 1 from a variable. The following program initializes `value` to 0. Then, it adds 1 to `value` twice and subtracts 1 from `value` once. Therefore, it prints `1` to the console:

```java
int value = 0;
value++; // 1
value++; //  2
value--; // 1
System.out.println(value);
```

Although the increment and decrement operators work on doubles, they are generally only used on integers.

Finally, you should be aware that Java follows PEMDAS for order of operations (we haven't discussed exponents yet). This means that you can use parentheses to specify the order of operations. In fact, it is often a good idea to do this even if it isn't strictly necessary. It makes your code easier to follow and protects it from changes which might inadvertently impact the order of operations.

### Constants

As discussed [earlier](#updating-variables), variable values can be reassigned. Most of the time, this is the desired behavior, but sometimes, we want to store values that cannot change. To illustrate the reasoning behind this, think about designing a program that calculates the areas of several circles given their radii:

> Recall that the formula for the area \\( A \\) of a circle with radius \\( r \\) is given by:
> \\[ A = \pi r^2 \\]

```java
System.out.println("A circle with a radius of 3 has an area of " + (3.14 * 3 * 3));
System.out.println("A circle with a radius of 4 has an area of " + (3.14 * 4 * 4));
System.out.println("A circle with a radius of 5 has an area of " + (3.14 * 5 * 5));
```

In this example, if we wanted to increase the precision of \\( \pi \\) from 3.14 to 3.14159, we'd have to update it in three different places. To solve this, we can create a variable called `pi` that stores the value of \\( \pi \\). Then, we only have to update the value in one place whenever we adjust the precision:

```java
double pi = 3.14159;
System.out.println("A circle with a radius of 3 has an area of " + (pi * 3 * 3));
System.out.println("A circle with a radius of 4 has an area of " + (pi * 4 * 4));
System.out.println("A circle with a radius of 5 has an area of " + (pi * 5 * 5));
```

Now, our code looks much better. We can change the precision of \\( \pi \\) in just one place, and it will update everywhere. There is one problem, however. The value of `pi` can be changed at any time. For instance, the following program uses two different values of `pi`, so the areas of the circles are calculated inconsistently:

```java
double pi = 3.14159;
System.out.println("A circle with a radius of 3 has an area of " + (pi * 3 * 3));
pi = 3.14;
System.out.println("A circle with a radius of 4 has an area of " + (pi * 4 * 4));
System.out.println("A circle with a radius of 5 has an area of " + (pi * 5 * 5));
```

The first circle's area is calculated with the more precise value of \\( \pi \\), and the second and third circles' areas are calculated with the less precise value of \\( \pi \\). To prevent a variable from being reassigned, you can use the `final` keyword. The `final` keyword creates a constant, which is a variable whose value cannot change. The following code sample illustrates how constants work:

```java
final double PI = 3.14159;
System.out.println("A circle with a radius of 3 has an area of " + (PI * 3 * 3));
PI = 3.14;
System.out.println("A circle with a radius of 4 has an area of " + (PI * 4 * 4));
System.out.println("A circle with a radius of 5 has an area of " + (PI * 5 * 5));
```

In this example, the compiler gives us an error because we try to change the value of a `final` variable. To make this code compile, we must remove the line that reassigns the value of `PI`. Therefore, the following program will compile and run correctly:

```java
final double PI = 3.14159;
System.out.println("A circle with a radius of 3 has an area of " + (PI * 3 * 3));
System.out.println("A circle with a radius of 4 has an area of " + (PI * 4 * 4));
System.out.println("A circle with a radius of 5 has an area of " + (PI * 5 * 5));
```

This code sample solves our problem by preventing the value of `PI` from changing in the middle of the program.

Note that constants have different naming conventions than mutable variables (variables whose values can change). Constants are often written in `SCREAMING_SNAKE_CASE`. This means that every letter is capitalized, and underscores separate words. Another acceptable way to name constants is with regular `camelCase` prefixed with a `k`. For instance, the name of a constant that stores the maximum speed might be `MAX_SPEED` or `kMaxSpeed`. It is important to choose one convention and stick with it within a project.

This example is somewhat contrived, so it doesn't fully illustrate the importance of constants. When you begin to work on larger projects, it will become clearer how helpful it is to mark variables whose values shouldn't change as `final`.
