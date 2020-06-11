## What is Java?

Before writing any code, it is good to have a general idea of what computer programming is in the first place. This lesson will go over what programming languages do and how they interact with computers. In addition, it will explain what sets Java apart from other languages and why it is useful. Finally, this lesson will discuss how Java is used in the real world and in FRC.

### What are Programming Languages?

Even though modern computers may seem to be incredibly powerful and intelligent machines, they are really quite stupid. Computers take instructions from a computer program and interpret them literally. To illustrate this, think about the following sentence:

> I saw a person on a hill with a telescope.

What does this sentence mean? Assuming you have a working knowledge of the English language, the sentence probably makes sense to you. However, different people may come to different conclusions about its meaning because it is totally ambiguous. A few possible meanings of the sentence include:

- I saw the person. The person was on the hill. I was using a telescope.
- I saw the person. I was on the hill. I was using a telescope.
- I saw the person. The person was on the hill. The hill had a telescope.
- I saw the person. I was on the hill. The hill had a telescope.
- I saw the person. The person was on the hill. The person was using a telescope.

Indeed, the message conveyed by the sentence depends on the person reading it and the context of the sentence. We take advantage of this when speaking English, but computers don't have such a luxury: they cannot use context when interpreting programs, so programs must be unambiguous. Computers have to interpret programs exactly the same way every single time. One could only imagine the consequences if the computers controlling air traffic or nuclear weapons behaved unpredictably due to differences in context.

The result of this is that computer programs are very specific sets of instructions. Computers interpret programs literally so that they execute precisely the same way every single time. The part of the computer responsible for interpreting and executing computer programs is known as the central processing unit (CPU).

A CPU takes takes computer programs in the form of machine code and sends electrical signals to execute the programs. Machine code is written in binary (0s and 1s), so it is totally incomprehensible to humans. As a result, we have developed what are known as higher-level programming languages. The higher-level a programming language is, the easier it is for humans to read and write.

Systems programming languages like C and C++ tend to be the lowest-level languages that humans work with frequently. They are readable by humans, but they are still fairly complicated. They tend to be used in situations where performance (execution speed) is important such graphic-intensive games or database software.

Above low-level languages like C and C++ are high-level languages like Java, Python, and Ruby. These languages are easier to read and write than low-level languages, but they are normally slower. In addition, they give the programmer far less direct control over the computer. There are some things that you simply cannot do in a high-level language like Java that you can in C++.

### Why use Java?

If C and C++ are readable by humans and faster than Java, why would anyone use Java? There are a couple of reasons why people frequently use high-level languages like Java. Firstly, as mentioned already, even though humans can read and write C and C++, it is easier to read and write Java since Java is higher-level. Besides this, in many cases, the difference in speed between C or C++ and Java is unimportant. The final reason that Java is so popular is its philosophy of "write once, run anywhere".

To understand this principle, you first must understand how programs written in low-level languages are executed. To run a C program, one must compile it. A compiler translates code in a language like C to machine code that the CPU can execute directly.

Now, think about all the different computers you have. If you have a laptop and a smartphone, they almost certainly have different CPUs inside. Your laptop almost certainly has a CPU made by Intel or AMD, and your phone probably has a CPU made by Apple, Qualcomm, or Samsung. Although it may seem like it, none of these CPUs functions in exactly the same way. Different CPUs have different types of machine code because they have different sets of instructions they can execute. Desktop/laptop CPUs normally have large instruction sets (x86) to maximize performance while mobile CPUs often have small instruction sets (ARM) to improve battery life.

Since different CPUs have different types of machine code, a program compiled from C on one computer might not run correctly on another computer (if it runs at all). Even though the C code is the same, the compiled machine code is different. This means that a program compiled from C cannot easily be shared with other people; their computers might not execute it the same way.

The Java philosophy of "write once, run anywhere" means that after writing and compiling Java code, the same compiled program can run on any computer. The way Java does this is with an intermediate language called Java bytecode. When you compile a Java program, it gets translated into Java bytecode—not machine code. Then, the Java bytecode can be distributed to any computer with a Java Virtual Machine (JVM) installed. The JVM executes Java bytecode by converting it into machine code for the specific CPU. This means that the only people who have to worry about the differences between different CPUs are the people who create the JVM.

One limitation you might think of to this process is that to run a Java bytecode program, a computer must have a JVM installed. However, Java is so ubiquitous that most computers have it. Indeed, lots of computers come with it preinstalled.

There are two main software packages that contain a JVM. The Java Runtime Environment (JRE) is intended for consumers. It contains a JVM and several other libraries required to run Java bytecode. The other package is the Java Development Kit (JDK), which is intended for programmers. The JDK includes the JRE and a compiler to translate Java into Java bytecode.

### Java Today

Java is not the only language to abide by the "write once, run anywhere" principle. There are other programming languages that are compiled into Java bytecode and executed on the JVM. This includes languages like Scala, Kotlin, and Clojure. Each of these languages is newer than Java and improves on some of its flaws.

Despite the existence of these newer languages, Java still haas a large presence in technology throughout the world. In fact, according to the TIOBE index (a measure of programming language popularity), Java is the second most-used programming language in the world (as of May 2020). The only language more popular is C. Lots of older code is written in Java and needs to be maintained; it would be too expensive to completely rewrite it in another language. In addition, new applications are written in Java all the time. Fields in which Java is common include web development, Android apps, and business applications.

For the FIRST Robotics Competition, teams can use Java, C++, or LabVIEW. Our team uses Java for a plethora of reasons. LabVIEW is a graphical programming language developed by National Instruments (the company that makes the roboRIO), and it is meant to be easy for rookie teams to use, but its graphical syntax makes it cumbersome for experienced teams like us. C++ is a very powerful and popular language, but it is needlessly complicated for our team. In addition, its extra speed compared to Java is unnecessary for FRC. Most importantly, the AP Computer Science classes in our school district teach Java, so we have far more people with experience in it than in C++.
