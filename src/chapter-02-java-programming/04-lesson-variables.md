## Variables

This lesson will focus on variables. We will begin by looking at what variables are and how to create them. We will then talk about important data types and how to perform arithmetic operations on numerical data types. We will also look at constants and where they should be used.

### Variables and Data Types

Fundamentally, every computer program manipulates some sort of input to produce some sort of output. For instance, a video game takes signals from the keyboard and mouse and uses them to determine movement and other actions to be performed. Likewise, a robot program takes signals from a controller and readings from various sensors. It converts these to many outputs such as motor speeds. To manipulate inputs and determine outputs, programs need to store data.

In Java, we can store data using variables. Every variable has a type, a name, and a value. To visualize this, imagine a program wanted to store a user's age. The data type of the variable would be an integer (a number without a decimal) because ages are represented as integers. The name of the variable might be something like `userAge`. The value of the variable would be 42 (or however old the user is).

As a warning, for the sake of brevity, from here on out, you can assume that all code samples are inside the `main` method unless otherwise specified. Anyway, you can express the scenario about a user's age in Java with the following code:

```java
int userAge = 42;
```

Let's consider another scenario: a program wants to store a user's bank account balance in a variable. The variable's data type would be a double (a number with a decimal). The name would be something like `balance` or `accountBalance`. Finally, the value would be any amount of money such as $14.99.

We can express this situation in Java like this:

```java
double accountBalance = 1.67;
```

In general, to create a variable in Java, you write:

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

One important thing to take note of is that `int`, `double`, `boolean`, and `char` all start with a lowercase letter. This is because they are primitive types. In contrast, `String` starts with an uppercase letter because it is an Object type. We will discuss what that means in a later lesson, but for now, know that a bit of text is a `String`—not a `string`.

### Reading and Updating Variables

### Arithmetic Operations and Casting

### Constants
