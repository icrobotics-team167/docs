## Project: Temperature Converter

This project will test your skills creating variables, using arithmetic operators, and casting.

### Assignment

The goal of this project is to write a Java program that converts Celsius temperatures to Fahrenheit and Kelvin temperatures.

> Recall that the Fahrenheit temperature \\( F(c) \\) given a Celsius temperature \\( c \\) is defined as:
> \\[ F(c) = \frac{9}{5}c + 32 \\]
> Additionally, the Kelvin temperature \\( K(c) \\) given a Celsius temperature \\( c \\) is defined as:
> \\[ K(c) = c + 273.15 \\]

To begin, create a Repl called `TemperatureConverter`. Copy the following line into the `main` method:

```java
int celsiusTemp = Integer.parseInt(System.console().readLine("Enter an integral Celsius temperature: "));
```

This line asks the user for a Celsius temperature as an integer. When the user is done typing the value, they can press the enter key. The integer value is stored inside the variable `celsiusTemp`.

After that line, create a variable to store the Fahrenheit temperature and another variable to store the Kelvin temperature. Make sure to use the correct data types for these variables, keeping in mind that an integral input in Celsius might lead to a decimal output in Fahrenheit or Kelvin. Use the arithmetic operators you learned and the above formulas to give these variables their values.

Next, print the Fahrenheit and Kelvin temperatures to the console.

If the user enters anything other than an integer as the Celsius temperature, the program will crash. You do not have to worry about this. You can assume that the user input is valid.

### Output

This embedded Repl illustrates how your program should work. It also shows the exact format that the output should be in.

<iframe height="400px" width="100%" src="https://repl.it/@dominicrutk/TemperatureConverter?lite=true&outputonly=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Reference Implementation

If you are stuck, you can look at the reference implementation below to see how to write this program.

<details>

<summary>Click to reveal the reference implementation</summary>

```java
class Main {
  public static void main(String[] args) {
    int celsiusTemp = Integer.parseInt(System.console().readLine("Enter an integral Celsius temperature: "));

    // Calculate the temperatures in Fahrenheit and Kelvin
    double fahrenheitTemp = ((double) 9 / 5) * celsiusTemp + 32;
    double kelvinTemp = celsiusTemp + 273.15;

    // Print the output to the console
    System.out.println("The temperature in Fahrenheit is: " + fahrenheitTemp);
    System.out.println("The temperature in Kelvin is: " + kelvinTemp);
  }
}
```

</details>
