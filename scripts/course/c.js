import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
    {
        title: "Chapter 1: Introduction to C",
        content: `<p><strong>Overview of C Language</strong>:<br>C is a high-level programming language used for system and application software. It is powerful, fast, and has a simple syntax, making it popular for writing operating systems, embedded systems, and more.</p>
<p><strong>History of C</strong>:<br>C was developed by Dennis Ritchie in the 1970s at Bell Labs. It evolved from an earlier language called B and became one of the most influential programming languages.</p>
<p><strong>Structure of a C Program</strong>:<br>A C program consists of several key parts:</p>
<ul>
    <li><strong>Header files</strong>: Contain pre-defined functions, like <code>#include &lt;stdio.h&gt;</code> for input/output functions.</li>
    <li><strong>Main function</strong>: This is the entry point of the program, where execution starts. It&rsquo;s written as <code>int main() { }</code>.</li>
    <li><strong>Body</strong>: Inside the main function, you&apos;ll write your code to perform specific tasks.</li>
</ul>
<p><strong>Writing and Executing a Basic C Program</strong>:</p>
<ol>
    <li>Write the C code in a text editor.</li>
    <li>Save it with a <code>.c</code> extension.</li>
    <li>Compile it using a C compiler (e.g., <code>gcc</code>).</li>
    <li>Execute the compiled file to see the output.</li>
</ol>
<p><strong>Compiling and Debugging C Programs</strong>:</p>
<ul>
    <li><strong>Compiling</strong>: Converts the C code into machine-readable code. Use <code>gcc</code> (GNU Compiler Collection) or similar tools.</li>
    <li><strong>Debugging</strong>: Helps find and fix errors in the code. Use debugging tools like <code>gdb</code> or IDE features to step through the code and track down issues.</li>
</ul>
<hr>
<h3>Example Code:</h3>
<p>To compile and run:</p>
<ol>
    <li>Save the code as <code>program.c</code>.</li>
    <li>Compile with: <code>gcc program.c -o program</code>.</li>
    <li>Run with: <code>./program</code>.</li>
</ol>`,
        code: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`,
    },
    {
        title: "Chapter 2: Data Types and Variables",
        content: "This chapter covers the basic data types in C, including integers, floats, and characters. You will also learn how to declare and use variables.",
        code: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  float y = 3.14;\n  char z = 'A';\n  printf("%d %f %c", x, y, z);\n  return 0;\n}`,
    },
    {
        title: "Chapter 3: Control Flow",
        content: "Learn how to control the flow of a C program using if-else conditions, loops, and switch statements. These are essential concepts for building dynamic programs.",
        code: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  if(x > 5) {\n    printf("x is greater than 5");\n  } else {\n    printf("x is less than or equal to 5");\n  }\n  return 0;\n}`,
    },
    {
        title: "Chapter 4: Functions",
        content: "This chapter introduces functions in C, explaining how to define and call them. Functions help to modularize code and make it reusable.",
        code: `#include <stdio.h>\n\nvoid greet() {\n  printf("Hello from a function!\\n");\n}\n\nint main() {\n  greet();\n  return 0;\n}`
    },
    {
        title: "Chapter 5: Arrays and Strings",
        content: "Learn about arrays and strings in C, which allow you to store multiple values in a single variable. This chapter covers array declaration, initialization, and basic operations.",
        code: `#include <stdio.h>\n\nint main() {\n  int arr[5] = {1, 2, 3, 4, 5};\n  for(int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n  }\n  char str[] = "Hello, World!";\n  printf("\\n%s", str);\n  return 0;\n}`
    },
    {
        title: "chapter 6:geg",
        content: "erfe",
        code: "ff"
    },
    {
        title: "chapter 7",
        content: "sdst",
        code: "asda"
    }
];



const practiceQuestions = [
    {
        chapterIndex: 0,
        questions: [
            {
                question: "Write a program that prints 'Hello, World!'",
                solution: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`
            },
            {
                question: "Create a program to add two numbers provided by the user.",
                solution: `#include <stdio.h>\n\nint main() {\n  int a, b;\n  printf("Enter two numbers: ");\n  scanf("%d %d", &a, &b);\n  printf("Sum: %d", a + b);\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 1,
        questions: [
            {
                question: "Write a program that declares an integer, a float, and a char, and prints them.",
                solution: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  float y = 3.14;\n  char z = 'A';\n  printf("%d %f %c", x, y, z);\n  return 0;\n}`
            },
            {
                question: "Write a program to calculate the area of a rectangle given its length and width.",
                solution: `#include <stdio.h>\n\nint main() {\n  float length, width;\n  printf("Enter length and width: ");\n  scanf("%f %f", &length, &width);\n  printf("Area: %f", length * width);\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 2,
        questions: [
            {
                question: "Write a program to check if a number is even or odd using if-else.",
                solution: `#include <stdio.h>\n\nint main() {\n  int num;\n  printf("Enter a number: ");\n  scanf("%d", &num);\n  if(num % 2 == 0) {\n    printf("Even");\n  } else {\n    printf("Odd");\n  }\n  return 0;\n}`
            },
            {
                question: "Create a program that uses a for loop to print numbers from 1 to 10.",
                solution: `#include <stdio.h>\n\nint main() {\n  for(int i = 1; i <= 10; i++) {\n    printf("%d\\n", i);\n  }\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 3, // Chapter 4: Functions
        questions: [
            {
                question: "Write a program with a function that takes two integers and returns their sum.",
                solution: `#include <stdio.h>\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  int x = 5, y = 10;\n  printf("Sum: %d", add(x, y));\n  return 0;\n}`
            },
            {
                question: "Create a program with a function that calculates the factorial of a number provided by the user.",
                solution: `#include <stdio.h>\n\nint factorial(int n) {\n  if(n == 0) return 1;\n  return n * factorial(n - 1);\n}\n\nint main() {\n  int num;\n  printf("Enter a number: ");\n  scanf("%d", &num);\n  printf("Factorial: %d", factorial(num));\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 4, // Chapter 5: Arrays and Strings
        questions: [
            {
                question: "Write a program to store 5 integers in an array and print them using a loop.",
                solution: `#include <stdio.h>\n\nint main() {\n  int arr[5] = {1, 2, 3, 4, 5};\n  for(int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n  }\n  return 0;\n}`
            },
            {
                question: "Create a program that takes a string from the user and prints it in reverse.",
                solution: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n  char str[100];\n  printf("Enter a string: ");\n  scanf("%s", str);\n  for(int i = strlen(str) - 1; i >= 0; i--) {\n    printf("%c", str[i]);\n  }\n  return 0;\n}`
            }
        ]
    }

];

const notes = [
    {
        chapterIndex: 0,
        notes: [
            "C is a general-purpose programming language.",
            "It was created by Dennis Ritchie at Bell Labs.",
            "C is used for system and application software."
        ]
    },
    {
        chapterIndex: 1,
        notes: [
            "In C, there are different types of variables such as int, float, char, etc.",
            "Variables store data in memory, and their type determines how much space is allocated.",
            "C allows you to use operators to manipulate variables (e.g., addition, subtraction, etc.)."
        ]
    },
    {
        chapterIndex: 2,
        notes: [
            "Control flow is an essential concept in programming, determining the order in which statements are executed.",
            "C provides different control flow statements like if-else, switch, for, while, and do-while.",
            "Mastering control flow is crucial for building decision-based and repetitive programs."
        ]
    }
];

const articles = [
    {
        chapterIndex: 0,
        articles: [
            "The History of C Programming",
            "Understanding Memory Management in C",
            "Best Practices for Writing Clean C Code"
        ]
    },
    {
        chapterIndex: 1,
        articles: [
            "Understanding Data Types in C",
            "How Variables Work in C",
            "Introduction to C Operators"
        ]
    },
    {
        chapterIndex: 2,
        articles: [
            "Mastering Control Flow in C",
            "How to Use Loops in C Efficiently",
            "Advanced If-Else and Switch Statements"
        ]
    }
];

window.addEventListener("DOMContentLoaded", () => {
    // Initialize tab switching functionality
    handleTabSwitching();

    // Render chapters in the sidebar
    renderChapters(chapters);

    // Set chapter link listeners
    setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
})
