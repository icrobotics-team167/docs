## Project: Face Printing

This project will test your skills using Repl, printing text to the console, and commenting your code. Since it is the first project of the chapter, it will be fairly brief.

### Assignment

The goal of this project is to print the following image and caption to the console:

```text
  /////
 |     |
 | " " |
 | o o |
(|  ^  |)
 | \_/ |
  -----

A "drawing" of a face
```

To begin, create a Repl called `FacePrinting`. Find a way to print the text to the console. Even though it is not actually necessary, make use of a mix of `println` and `print` statements to get practice with both. You will have to use a few escape sequences in this project. Also, be mindful of the whitespace in the text. For example, there is a blank line between the image and the caption. 

Add a multi-line comment at the beginning of your code that contains your name and grade in school. Then, use single-line comments to explain what part of the body is printed by each `println` and `print` statement.

### Output

This embedded Repl illustrates what your program should print to the console once it works correctly. However, keep in mind that comments are part of this assignment too, so you might not be quite done just because your output looks like this.

<iframe height="400px" width="100%" src="https://repl.it/@dominicrutk/FacePrinting?lite=true&outputonly=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Reference Implementation

There are an infinite number of ways to implement this program. However, if you are stuck, you can look at the reference implementation below to see one way of doing it.

<details>

<summary>Click to reveal the reference implementation</summary>

```java
class Main {
  public static void main(String[] args) {
    /*
    Dominic Rutkowski
    12th Grade
    */

    // This statement prints the hair
    System.out.println("  /////");

    // This statement prints the forehead
    System.out.println(" |     |");

    // This statement prints the eyebrows and eyes
    System.out.print(" | \" \" |\n | o o |\n");

    // This statement prints the nose
    System.out.print("(|  ^  |)");

    // This statement prints the mouth
    System.out.println("\n | \\_/ |");

    // This statement prints the chin and a blank line
    System.out.println("  -----\n");

    // This statement prints the caption
    System.out.println("A \"drawing\" of a face");
  }
}
```

</details>
