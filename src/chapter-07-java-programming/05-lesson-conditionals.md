# Conditionals

This lesson will focus on conditionals. We will begin by looking at what conditionals are and the different types of conditional logic and statements.

## What are conditionals?

Conditionals are code statements that allow a program to choose what code to run when encountering different situations. For example, a videogame may need to choose between opening a door when the player has a key and telling the player that they don’t have a key.

## Conditional logic

In Java, all conditional logic outputs booleans, and most conditional statements take booleans as inputs.
Java has a variety of built-in conditional logic, mainly derived from mathematics:
| Conditional Logic | Name | Description |
| :--- | :---: | ---: |
|`A < B`| Less than | Outputs `true` if the value of `A` is less than `B`. |
|`A > B`| Greater than | Outputs `true` if the value of `A` is greater than `B`. |
|`A <= B`| Less than or equal to | Outputs `true` if the value of `A` is less than or equal to `B`. |
|`A >= B`| Greater than or equal to | Outputs `true` if the value of `A` is greater than or equal to `B`. |
|`A == B`| Equal to | Outputs `true` if `A` is EXACTLY equal to `B`. |
|`A != B`| Not equal to | Outputs `true` if `A` ISN’T exactly equal to `B`. |
|`A \|\| B`| Or | Outputs `true` if EITHER the value of `A` or `B` is `true`. |
|`A && B`| And | outputs `true` if BOTH the value of `A` and `B` is `true`. |
|`A ^ B`| Xor/Exclusive or | Outputs `true` if either the value of `A` or `B` is `true` but outputs `false` if BOTH are `true`. |
|  `!A` | Not | Outputs whatever is the inverse of `A`, such as `false` if `A` is `true`, or `true` if `A` is `false`. |

Conditional logic can also be methods that return boolean values.

>`<`, `>`, `<=`, `>=`, `==`, and `!=` can only be used on number data types such as ints and doubles. They cannot be used to compare Strings. For comparing Strings, use `.equals()`. See [Object Oriented Basics](https://docs.iowacityrobotics.org/chapter-07-java-programming/07-lesson-object-oriented-basics.html) for more info.
>
>Likewise, `||`, `&&`, `^`, and `!` can only be used on boolean values.

## Conditional statements

Java has a number of conditional statements that will choose between different code based on the input.

### If/Else

Syntax:
```java
if (conditional_logic) {
   //Code to run if the conditional is true.
} else { //Else statements are optional
   //Code to run if the conditional is false.
}
```
If statements, as their name implies, run code if the conditional is `true`. Optionally, it can run `else` statements if the conditional is `false`.

You can chain if/else statements together by using else if statements, however, it is not recommended as it’s harder to read and usually worse-performing than switch statements.

```java
if (conditional_logic_a) {
    //Code to run if conditional a is true
} else if (conditional_logic_b) {
    //Code to run if conditional a is false AND conditional b is true
}
```

> Java does not have a statement that combines `else` and `if`, such as Python’s `elif`.

### While

Syntax:
```java
while (conditional_logic) {
    //Code to loop while the conditional is true
}
```
A while loop continuously repeats code inside of it while the statement is true, checking once before running the code.

Another method of using while loops, although not recommended, is using a while true loop with a break statement. While true loops will keep running code inside it forever until the code inside calls a break statement, so if the break statement fails to run properly for whatever reason, it will stall the program.
```java
while (true) {
    //Code to run until the conditional is true
    if (conditional_logic) {
        break; //Forces the loop to end
    }
}
```

#### Do while

```java
Do {
    //Code to loop while the conditional is true
} while (conditional_logic)
```
Do while loops are, effectively, just normal while loops with different syntax.

## Switch
Syntax:
```java
switch (input) {
    case a:
        //Code to run if the input is equal to a
        break; //As switch statements don’t use brackets for their syntax, break statements are needed to close a case.
    case b:
        //Code to run if the input is equal to b
        break;
    case c:
        //Code to run if the input is equal to c
        break;
    default: //Optional but recommended
        //Code to run if the input matches none of the above. Doesn’t need a break statement as it’s the last case.
}
```
Switch statements are a special type of conditional statement, not requiring a boolean input. Instead, it can take any data type as its input. It will look from the top to the bottom, checking to see if the input matches any of the cases, and if not, it will look for a default case, running the code inside the case that matched first.

The following if/else chain is functionally equivalent to a switch statement:

```java
if (input == a) {
    //Case a
} else if (input == b) {
    //Case b
} else if (input == c) {
    //Case c
} else {
    //Default case
}
```

## De Morgan's laws

[De Morgan's laws](https://en.wikipedia.org/wiki/De_Morgan's_laws) state that boolean statements can be written in multiple ways and still have the same effect. To make a long story short, it's similar to multiplicative distribution in math.

For example, `x*y + z*y` is the exact same as `y*(x+z)`. Likewise, `!a && !b` and `!(a && b)` both have the exact same output.

Some other examples would be:

| Statement | Functional equivalent |
| :--- | ---: |
| `a && b` | `!(a \|\| b)` |
| `(a && b) && (a && c)` | `a && (b && c)` |

## Short-circuting

One of Java's little quirks is that it will skip evaluating the rest of a condition if it can assume the output. For example, it will not fully evaluate ``false && true`` as Java sees ``false &&`` and automatically assumes the statement to be false.

This can be avoided if you use `&` or `|` instead of `&&` or `||` as they force Java to not short-circut.

Example code:
```java
public static boolean shorterThan(String input, int length) {
    // This method checks if input is shorter than the specified length, IE returns false if input == "apple" and length == 4.
    return input != null && input.length() < length; //If input is null, it will short-circut and return false, preventing input.length() from trying to find the length of a null value and throwing an error.
}
```
Example code: (No short-circut)
```java
public static boolean shorterThan(String input, int length) {
    return input != null & input.length() < length; //If input is null, a NullPointerException will be thrown as it was not short-circuted and input.length() ran on a null value. 
}
```