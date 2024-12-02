import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content typee
const chapters = [
    {
        title: "Chapter 1: Introduction to Javascript",
        content: `<strong>JavaScript: A Beginner's Guide to Programming Magic</strong>
<p>JavaScript is a versatile programming language commonly used in web development to enhance the user experiences on
    the internet. It is primarily utilised for implementing functionalities within our web applications. JavaScript is
    often hailed as a the "language of the web", is the most important part of modern web development.</p>

<h2>Tracing the Evolution: A Concise History of JavaScript</h2>
<p>Did you know that initially, JavaScript was developed in just 10 days? Yes, you heard it right. JavaScript was
    created by Brendan Eich, a programmer at a company called Netscape Communications. Originally, JavaScript was named
    'Mocha', but it quickly gained popularity as 'LiveScript' and later evolved into 'JavaScript'.</p>
<p>Initially, JavaScript was designed solely to provide scripting capabilities aimed at enhancing web pages with dynamic
    content and interactivity. With the growth of HTML5 and CSS3, JavaScript's capabilities expanded further, enabling
    developers to construct sophisticated web applications and interactive user interfaces.</p>
<p>Many JavaScript frameworks and libraries, such as AngularJS, ReactJS, and Vue.js, have revolutionized frontend
    development. Additionally, Node.js, a powerful JavaScript runtime environment, has empowered developers to build
    server-side applications using JavaScript.</p>
<h2>JavaScript : A Programming Language or a Scripting Language?
</h2>
<p>While studying JavaScript a common question arises : Is JavaScript a scripting language or it is a programming
    language?.</p>
<p>The tech community often debates whether JavaScript should be classified as scripting language or programming
    language. To grasp this debate lets understand the distinction between scripting languages and a programming
    languages.
</p>
<h3>Scripting Languages</h3>
<p>Scripting languages are those languages which are interpreted rather than compiled, meaning they are executed
    line-by-line by the interpreter at the runtime thus allowing for quicker development cycles and easier debugging.
</p>
<p> Scripting languages are commonly used for tasks such as system administration, web development, text processing and
    automation.</p>
<p> JavaScript is widely used for client-side scripting in web browsers, it has became a versatile language for web
    development including front-end and server side scripting with platforms like Node.js. Scripting languages are
    interpreted within a host environment; for instance, JavaScript needs to be integrated into HTML and then
    interpreted by the web browser.</p>
<h3>Programming Languages</h3>
<p>Programming languages are compiled languages, which means the source code is compiled to convert it to machine code.
</p>

<p>A programming language is a computer language which is used to communicate with computers using a set of
    instructions. Programming languages utilize compilers and do not rely on interpretation by another language or
    application.</p>

<h3>Conclusion

</h3>
<p> All the scripting languages are programming languages. Technically, JavaScript falls under both categories. It
    shares traits of scripting languages but also possesses the capabilities of many general-purpose programming
    languages. At the end we can say that JavaScript is both a scripting language and a light-weight programming
    language, that can be used for a wide range of tasks, from simple automation to complex application development.</p>
<h3>JavaScript : Is it a Client-Side or Server-Side Language?

</h3>
<p>For years, JavaScript has been predominantly associated with client-side scripting, breathing life into web pages
    and making them interactive.
</p>
<p>JavaScript's roots lie firmly in the client-side realm. It's the language that adds the sparkle to your web
    experience, making elements appear and disappear, reacting to your clicks and scrolls, and seamlessly handling forms
    and animations.</p>

<p>But in recent times, its dominion has expanded, blurring the lines between front-end and back-end.</p>
<p>In recent years, JavaScript has also gained prominence as a server-side language, thanks to the introduction of
    Node.js. Node.js is an open-source, JavaScript runtime environment that allows developers to run JavaScript code
    server-side. With Node.js, JavaScript can be used to build scalable, high-performance web applications, APIs, and
    backend services.</p>
<p>Hence, as the technology evolved and the new trends emerged, JavaScript excelled in both client-side interactivity
    and server-side logic. To call it simply "client-side" or "server-side" would be like calling water simply "wet" –
    it misses the clarity and versatility that truly define it.</p>

<h3>JavaScript Engines for Executing JavaScript Code
</h3>
<p>A JavaScript engine is the software that takes our JavaScript code and translates it into instructions that your
    computer can understand. It is like a powerful interpreter.
</p>
<p>Some of the most popular JS engines today are :</p>
<p>1 : V8 - Developed by Google, V8 is one of the most widely used JavaScript engines. It powers the JavaScript
    execution in Google Chrome and Node.js.
</p>
<p>2 : SpiderMonkey - Developed by Mozilla Firefox, SpiderMonkey is the JavaScript engine used in the Firefox web
    browser. It was one of the first JavaScript engines ever created and is known for its performance and compliance
    with JavaScript standards.
</p>
<p>
    3 : JavaScriptCore - Used in Safari, known for its tight integration with Apple devices.

</p>
<p>4 : Chakra - Developed by Microsoft, Chakra was the JavaScript engine used in the Edge web browser. It has now been
    replaced by the Chromium-based Edge browser, which uses V8 as its JavaScript engine.</p>`,
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple JavaScript Example</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <button onclick="greetUser()">Click me for a greeting</button>

  <script>
    function greetUser() {
      alert("Hello, welcome to the JavaScript world!");
    }
  </script>
</body>
</html>
`,
    },
    {
        title: "Chapter 2: Basics of JavaScript ",
        content: `<h1>Let, Var & Const</h1>
    <p>Variable declaration is one of the easiest tasks in every programming language. However, when it comes to
        JavaScript, it can become a bit tricky due to the special features of the language. But don't worry, we've got
        you
        covered. Let's dive into the world of variable declaration and catch all the fishes in the ocean.</p>

    <h2>What is ECMAScript?</h2>
    <p>Have you ever heard someone referring to JavaScript as ES6 or ES7 and felt confused about it?</p>
    <p>Let me introduce you to another name for JavaScript, i.e., ECMAScript. Yes, you heard it right, the official name
        of
        JavaScript is ECMAScript. So, what do those numbers (ES6, ES7, etc.) signify? JavaScript was created more than
        25
        years ago, and since then, it has undergone significant evolution. Numerous new features and syntax have been
        added
        to JavaScript over the years. Initially, it took years to introduce new features to the existing language.
        However,
        modern JavaScript is updated annually with the addition of new features. JavaScript ES6 is the version of
        JavaScript
        that was released in 2015, and many major changes to the Javascript standard came with Javascript ES6.</p>

    <p>The impact of ES6 implementation on the JavaScript standard was significant. Thus, in modern times, JavaScript is
        also commonly referred to as ES6. While there have been more versions of JavaScript released since ES6 — which
        we'll
        discuss later — none have gained as much prominence within the developer community as ES6.
    </p>
    <p>After JavaScript ES5, JavaScript ES6 was introduced nearly 6 years later. ES6 arrival modernized the capabilities
        for web development in the 2010s, making programming in JavaScript more efficient and easier.</p>
    <p>There is no "ES7" or "ES8" officially even though multiple annual naming conventions were conducted after 'ES6'
        because, 'ES6' is considered as a legacy name and thus modern JavaScript is also known as 'ES6' or sometimes
        'ES2015'.</p>

    <h2>var
    </h2>
    <p>The var keyword was the traditional way of declaring variables in JavaScript. Variables declared with var are
        function-scoped or globally-scoped, but not block-scoped. This means that variables declared with var are
        hoisted to
        the top of their function or global scope. This hoisting behavior can sometimes lead to unexpected results and
        make
        debugging challenging.</p>
    <h2>var is function scoped
    </h2>
    <p>When we declare a variable using var inside a function, we canot access the variable outside the function.</p>
    <p>Let's understand through an example :</p>

    <pre>
    <code>
        function example() {
            var x = 10;
            console.log(x);
        }
        
        example();       // 10
        console.log(x);       // Throws ReferenceError: x is not defined
    </code>
</pre>

    <h3>Reassignment and Redefinition using var
    </h3>
    <p>In JavaScript, the var keyword allows variables to be both reassigned and redefined within the same scope, unlike
        let which only allows reassignment. This behavior of var can sometimes lead to unexpected results and bugs in
        code
        if not used carefully.</p>
    <pre>
    <code>
        // Re assignment using var
        var x = 10;
        console.log(x);    // Output : 10

        x = "Mayank";
        console.log(x);    // Output : Mayank
    </code>
</pre>
    <pre>
    <code>
        // Re definition using var
        var x = 10;
        console.log(x);    // Output : 10

          var x = "Mayank";
          console.log(x);    // Output : Mayank
    </code>
</pre>

    <h2>let
    </h2>
    <p>In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only
        accessible
        within the block in which they are defined. Block scope refers to any code block delimited by curly braces {}
        such
        as loops, conditionals, or function bodies.</p>
    <h4>Let's consider an example :</h4>

    <pre>
    <code>
        let x = 10;
        if (true) {
            let y = 20;
            console.log(x); // Output: 10
            console.log(y); // Output: 20
        }
        console.log(x); // Output: 10
        console.log(y); // Throws ReferenceError: y is not defined        
    </code>
</pre>

    <h2>Reassignment and Redefinition using let
    </h2>
    <p>
        Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared
        within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing
        more
        predictable and maintainable code.
    </p>
    <h4>Let's consider an example :</h4>

    <pre>
    <code>
        // Re assignment using 'let'

        let x = 10;
        console.log(x);    // Output : 10
        
        x = "Mayank";
        console.log(x);    // Output : Mayank
    </code>
</pre>

    <pre>
    <code>
        // Re definition using 'let'

        let x = 10;
        
        let x = "Mayank";
        console.log(x);    // Output : Error!
    </code>
</pre>

    <h2>const
    </h2>
    <p>In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be
        reassigned once they are initialized. This means that once a value is assigned to a constant using const, it
        cannot
        be changed or reassigned throughout the execution of the script.
    </p>
    <h4>Here's a basic example of using const:</h4>

    <p>Constants declared with const must be initialized with a value. Unlike variables declared with var or let, which
        can
        be declared without immediately assigning a value, const requires initialization at the time of declaration.
    </p>

    <h4>Example :</h4>
    <pre>
        <code>
            let x;      // No Error

            var y;      // No Error
            
            const z;    // Error! "Missing initializer in const declaration"
        </code>
    </pre>

    <p>It's important to note that while the value assigned to a constant cannot be changed, if the value is an object
        or an
        array, its properties or elements can still be modified. This is because const only prevents reassignment of the
        variable itself, not its properties or elements.</p>

    <h4>Example :</h4>

    <pre>
        <code>
            const person = {
                name: 'Mayank',
                age: 21
            };
            
            console.log(person.name);    // Output: Mayank
            
            // Modifying object properties is allowed
            person.name = 'Love';
            console.log(person.name);    // Output: Love
            
            // Attempting to reassign the variable will throw an error
            person = {};    // Throws TypeError: Assignment to constant variable.
        </code>
    </pre>

    <h4>Similarly with arrays...</h4>

    <pre>
        <code>
            const numbers = [1, 2, 3];
            console.log(numbers);    // Output: [1, 2, 3]
            
            // Modifying array elements is allowed
            numbers.push(4);
            console.log(numbers);    // Output: [1, 2, 3, 4]
            
            // Attempting to reassign the variable will throw an error
            numbers = []; // Throws TypeError: Assignment to constant variable.
            
        </code>
    </pre>
    <!-- Naming conventions  -->
    <h1>
        Variable/Function naming conventions
    </h1>
    <p>Variable naming is one of the most important parts of coding, yet it's often overlooked by many. While it doesn't
        directly impact a code's efficiency, it significantly enhances readability and code quality. Clear and
        meaningful
        variable names facilitate easier debugging and ultimately contribute to the overall improvement of code quality.
    </p>

    <h2>Types of naming conventions
    </h2>
    <p>There are numerous variable naming conventions in the coding world, but among the most important are :</p>
    <ul>
        <li>Camel Case </li>
        <li> Pascal Case</li>
        <li>Snake Case</li>
        <li>Kebab Case</li>
    </ul>

    <h2>Camel Case
    </h2>
    <p>Camel case is a variable naming convention used almost everywhere during variable naming where words in a phrase
        are
        combined without spaces.
    </p>
    <p>In camel case, the first letter of each word in a phrase is capitalized except for the first word, which starts
        with
        lowercase. There are no spaces between the words.
    </p>
    <h4>Examples of Camel Case:</h4>
    <ul>
        <li>OneDrive</li>
        <li>PlayStation</li>
        <li>YouTube</li>
    </ul>

    <h2>Pascal Case
    </h2>
    <p>Pascal case is another naming convention we use frequently to combine the words in a phrase without using spaces.
        It
        is similar to the 'Camel Case' convention just with a slight difference.
    </p>
    <p>
        In this naming convention each word in a phrase is capitalized including the first word.

    </p>
    <h4>Examples of Pascal Case:</h4>
    <ul>
        <li>WigsWorn</li>
        <li>CustomerService</li>
        <li>UserProfile</li>
    </ul>
    <p>'Pascal Case' naming convention is also known as 'Upper Camel Case'.</p>

    <h2>Snake Case
    </h2>
    <p>Another very famous variable naming convention is 'Snake Case' convention. This naming convention is most
        preferred
        in programming languages like Python.</p>
    <p>
        In snake case, all the words of a phrase are written in lowercase and separated by underscores("_") instead of
        spaces.

    </p>
    <h4>Examples of Snake Case:</h4>
    <ul>
        <li>oo_bar</li>
        <li>hello_world</li>
        <li>last_name</li>
    </ul>
    <h2>Kebab Case
    </h2>
    <p>The kebab case is almost similar to the snake case where all the words in a phrase are written in lowercase.

    </p>
    <p>The only difference between snake case and kebab case naming convention is, In kebab case the words in a phrase
        are
        separated by hyphens("-").

    </p>
    <h4>Examples of Kebab Case:</h4>
    <ul>
        <li>Descriptive-variable-name
        </li>
        <li>INTERESTING-TEXT-FILE
        </li>
        <li>naming-conventions-webpage</li>
    </ul>

    <!-- Operators in JavaScript -->
    <h1>Operators in JavaScript
    </h1>
    <p>JavaScript is a dynamic programming language, has various operators to perform operations on data and manipulate
        values. In this article, we'll learn the diverse types of operators in JavaScript, exploring their
        functionalities
        and providing practical examples to enhance your understanding.
    </p>
    <h2>Types of operators
    </h2>
    <p>Understanding JavaScript operators is the most basic thing for writing efficient and expressive code. By
        mastering
        these operators, we'll gain the tools needed to manipulate data, make decisions, and create more dynamic and
        interactive applications.</p>

    <ul>
        <li></li>Arithmetic Operators
        </li>
        <li>Assignment Operators
        </li>
        <li>Comparison Operators
        </li>
        <li>Logical Operators
        </li>
        <li>Bitwise Operators
        </li>
        <li>Ternary Operators</li>
    </ul>

    <h2>Arithmetic Operators
    </h2>
    <p> Arithmetic operators in JavaScript allow us to perform mathematical calculations such as addition, subtraction,
        multiplication, division, and modulus. These operators are important for performing basic mathematical
        calculations
        within our code.
    </p>
    <h3> Addition</h3>
    <p> The addition operator is denoted by '+'. It is used to add two or more numbers and returns their sum as the
        output.
    </p>
    <pre>
    <code>
        let number1 = 25;
        let number2 = 36;
        let number3 = 56;
        
        let sum = number1 + number2 + number3;
        console.log(sum);    // 117
    </code>
</pre>

    <h3>Subtraction
    </h3>
    <p>The subtraction operator is denoted by '-'. It is used to subtract one number from another and returns their
        difference as the output.</p>

    <pre>
    <code>
        let number1 = 25;
        let number2 = 36;
        
        let diff = number1 - number2;
        console.log(diff);    // -11
    </code>
</pre>
    <h3>Multiplication</h3>
    <p>The multiplication operator is denoted by '*'. It is used to multiply one number from another and returns their
        product as the output.</p>

    <pre>
    <code>
        let number1 = 25;
        let number2 = 36;
        
        let prod = number1 * number2;
        console.log(prod);    // 900
    </code>
</pre>

    <h3>Exponentiation
    </h3>
    <p>Exponentiation in JavaScript was introduced in ECMAScript 2016 (ES7).
    </p>
    <p>The exponentiation operator is denoted by '**'. This operator raises the first operand to the power of second
        operand.</p>

    <pre>
    <code>
        let x = 5;
        let y = 5;
        
        let ans = x ** 3;
        console.log(ans);      // 125
        
        ans = x ** y;
        console.log(ans);      // 3125
    </code>
</pre>

    <h3>Division
    </h3>
    <p>The division operator is denoted by '/'. It is used to divide one number by another and returns their quotient as
        the
        output.</p>

    <pre>
    <code> 
        let x = 10;
        let y = 4;
        
        let ans = x/y;
        console.log(ans);    // 2.5
    </code>
</pre>

    <h3>Modulus
    </h3>
    <p>The modulus operator is denoted by '%'. It returns the division remainder i.e. the remainder of two numbers that
        have
        been divided.</p>

    <pre>
    <code>
        let x = 10;
        let y = 4;
        
        let ans = x % y;
        console.log(ans);    // 2
    </code>
</pre>

    <h3>
        Increment & decrement

    </h3>
    <p>Increment & decrement operators operators are used to increment or decrement a numeric value by 1.
    </p>
    <p>Increment operator is denoted by '++', and the decrement operator is denoted by '--'.</p>
    <pre>
    <code>
        let x = 10;
        let y = 4;
        
        x++;
        console.log(x);      // 11
        
        y--;
        console.log(y);      // 3
    </code>
</pre>
    <p>According to their usage, the increment and decrement operators can be classified as 'pre-increment/decrement'
        and
        'post-increment/decrement'.
    </p>
    <p>
        Pre-increment/decrement : Increment/decrement the value before using.</p>

    <p>
        Post-increment/decrement : Use the current value and then increment/decrement.</p>

    <h2>Assignment Operators
    </h2>
    <p>The assignment operator assigns value to the variables. The most common assignment operator we use is '='.</p>
    <pre>
    <code>
        let firstName = "Mayank";
        let y = 4;
        
        console.log(firstName);      // Mayank
        console.log(y);              // 4
    </code>
</pre>
    <h2>Comparison Operators</h2>
    <p>Comparison operators, such as greater then (>), less than (&lt;), greater than or equal (&gt;=), less than or
        equal (
        &lt;=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them.
        These return a boolean value in the output. </p>
    <h2>Strict Equality v/s Loose Equality </h2>
    <p>Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the
        value are checked to determine equality, and it returns a boolean answer.
    </p>
    <p>Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to
        determine equality, and it returns a boolean answer.</p>
    <pre>
    <code>
        let x = "10";
        console.log(typeof(x));        // string
        
        let y = 10;
        console.log(typeof(y));         // number
        
        console.log(x == y);            // true
        
        console.log(x === y);           // false
    </code>
</pre>

    <h2>Logical Operators
    </h2>
    <p>Logical operators are used to connect two or more expressions/conditions to make decisions based on
        the
        criteria employed.
    </p>
    <p>There are typically three types of logical operators :</p>

    <ul>
        <li>AND (&&)

        </li>
        <li>OR (||)

        </li>
        <li>NOT (!)</li>
    </ul>

    <h3>AND (&&)</h3>
    <p>The logical AND operator is denoted by '&&'. It is used to evaluate whether both of the given
        expressions or operands are true. It returns true only if both expressions or operands are true. If
        any
        one of the expressions or operands is false or evaluates to 0, the logical AND operator returns
        false.
    </p>

    <pre>
    <code>
        let alert1 = true;
        let alert2 = false;
        let alert3 = true;
        
        console.log(alert1 && alert2);    // false
        console.log(alert2 && alert3);    // false
        console.log(alert1 && alert3);    // true
        
        let num1 = 0;
        let num2 = 1;
        let num3 = 1;
        
        console.log(num1 && num2);    // 0
        console.log(num2 && num3);    // 1
        console.log(num1 && num3);    // 0
    </code>
</pre>
    <h3>OR (||)</h3>
    <p>
        The logical OR operator is denoted by '||'. It is used to evaluate whether any one of the given
        expressions or operands is true. It returns false only if both expressions or operands are false. If
        any
        one of the expressions or operands is true or evaluates to 1, the logical OR operator returns true.
    </p>
    <pre>
    <code>
        let alert1 = false;
        let alert2 = false;
        let alert3 = true;
        
        console.log(alert1 || alert2);    // false
        console.log(alert2 || alert3);    // true
        console.log(alert1 || alert3);    // true
        
        let num1 = 0;
        let num2 = 1;
        let num3 = 0;
        
        console.log(num1 || num2);    // 1
        console.log(num2 || num3);    // 1
        console.log(num1 || num3);    // 0
    </code>
</pre>
    <h3>NOT (!)
    </h3>
    <p>The logical NOT operator is denoted by '!'. It is used to make truthy values falsy and vice-versa. It
        returns false if input is a true.</p>
    <pre>
    <code>
        let alert1 = false;
        let alert2;
        let alert3 = NaN;
        let mySum = 45;
        let gone = false;
        let isFirst = true;
        
        console.log(!alert1);      // true
        console.log(!alert2);      // true
        console.log(!alert3);      // true
        console.log(!mySum);       // false
        console.log(!gone);        // true
        console.log(!isFirst);     // false
    </code>
</pre>
    <h2>Bitwise Operators
    </h2>
    <p>Bitwise operators are used to do manipulation of individual bits within the binary representation of
        numbers. There are several bitwise operators are used in JavaScript :</p>
    <ul>
        <li>Bitwise AND (&)
        </li>
        <li>
            Bitwise OR (|)
        </li>
        <li>
            Bitwise NOT (~)
        </li>
        <li>
            Bitwise XOR (^)
        </li>
        <li>
            Left Shift (&lt;&lt;) </li>
        <li>Right Shift (>>)</li>
    </ul>

    <h3>Bitwise AND (&)
    </h3>
    <p>Bitwise AND is denoted by '&'. It is used between two numbers, and the bitwise AND operation is
        performed on each corresponding bit of the two numbers.
    </p>
    <p>
        In binary system numbers are represented in 0's and 1's, so bitwise AND(&) will return 1 only when
        both
        the corresponding bits are 1 simultaneously else it will return 0.</p>
    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 1 0 1
        
        let num2 = 7;
        // Binary representation of 7 : 0 1 1 1
        
        console.log(num1 & num2);         // 5
    </code>
</pre>
    <h3>Bitwise OR (|)
    </h3>
    <p>Bitwise OR is denoted by '|'. It is used between two numbers, and the bitwise OR operation is
        performed
        on each corresponding bit of the two numbers.

    </p>
    <p>Bitwise OR(|) will return 1 if any one of the corresponding bits is 1, else it will return 0.</p>
    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 1 0 1
        
        let num2 = 8;
        // Binary representation of 7 : 1 0 0 0
        
        console.log(num1 | num2);         // 13
    </code>
</pre>
    <h3>
        Bitwise NOT (~)

    </h3>
    <p>Bitwise NOT is denoted by '~', it is used on a single number. Bitwise NOT operator inverts all the
        bits
        (0 is inverted to 1 and 1 is inverted to 0) of the given number and returns the new number as
        output.
    </p>

    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 0 0 0 1 0 1
        
        let num2 = 8;
        // Binary representation of 7 : 0 0 0 1 0 0 0
        
        let num3 = -8;
        // Binary representation of -8 : 1 1 1 1 0 0 0
        
        console.log(~num1);    // -6
        console.log(~num2);    // -9
        console.log(~num3);    // 7
    </code>
</pre>
    <h3>
        Bitwise XOR (^)

    </h3>
    <p> Bitwise XOR is denoted by '^'. It is used between two numbers, and the bitwise XOR operation is
        performed on each corresponding bit of the two numbers.
    </p>
    <p>
        In binary system numbers are represented in 0's and 1's, so bitwise XOR(^) will return 1 only when
        both
        the corresponding bits are different else it will return 0.

    </p>
    <p>For example : "1 ^ 0 = 1", "0 ^ 0 = 0", "1 ^ 1 = 0", "0 ^ 1 = 1"</p>
    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 0 0 0 1 0 1
        
        let num2 = 8;
        // Binary representation of 7 : 0 0 0 1 0 0 0
        
        console.log(num1 ^ num2);     // 13
    </code>
</pre>
    <h3>Left Shift (&lt;&lt;) </h3>
    <p>
        Left shift operator is denoted by '&lt;&lt;'. It shifts the bits of the left operand to the left, by a number
        of positions specified by the right operand. 0 comes in the place of the least significant bit after
        each shifting is done. For example, the binary representation of 5 is '00000101' , </p>
    <p>
        Now, when we use '5 &lt;&lt; 2', it means we want to shit the binary representation of 5 left by 2
        positions and then it becomes '00010100' , </p>

    <p>The number whose binary representation is '00010100', is 20.</p>
    <p>Thus '5 &lt;&lt; 2'=20.</p>
    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 0 0 0 1 0 1
        
        let num2 = 8;
        // Binary representation of 7 : 0 0 0 1 0 0 0
        
        console.log(num1 &lt;&lt; 3);     // 40
        console.log(num2 &lt;&lt; 2);     // 32
    </code>
</pre>
    <p>The left shift operator effectively multiplies the left operand by 2
        to
        the power of the right operand.</p>
    <h3>Right Shift (>>)</h3>
    <p>
        Right shift operator is denoted by '>>'. It shifts the bits of the
        left
        operand to the right, by a number of positions specified by the
        right
        operand preserving the sign of the original number.</p>
    <pre>
    <code>
        let num1 = 5;
        // Binary representation of 5 : 0 0 0 0 1 0 1
        
        let num2 = 8;
        // Binary representation of 7 : 0 0 0 1 0 0 0
        
        console.log(num1 >> 3);     // 0
        console.log(num2 >> 2);     // 2
    </code>
</pre>
    <h3>
        Ternary Operators
    </h3>
    <p>Ternary operator is a concise way to write conditional statements, it
        is
        widely used in JavaScript. It is also known as conditional operator.
        It
        has three parts: a condition, statement to execute if the condition
        is
        true and the statement to execute if the condition is false.
    </p>
    <p>Syntax:</p>
    <pre>
    <code>
        //SYNTAX

        (condition) ? (statement1) : (statement2);
    </code>
</pre>
    <p>Example:</p>
    <pre>
    <code>
        let myage = 21;

        (myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));
        
        // Output : Cannot Drive
    </code>
</pre>
    
<!-- Literals in JavaScript -->

    <h2>Literals in JavaScript
    </h2>
    <p>Literals are fundamental to variable declaration in JavaScript. When
        declaring a variable, it's crucial to use the appropriate literal to
        store values effectively. In JavaScript, literals play a pivotal
        role in
        determining the data type of a variable. Given the language's
        support
        for objects and functions, it's imperative to be mindful of
        initializing
        variables with the correct literals to avoid unexpected outcomes. In
        this article, we'll explore some of the key JavaScript literals that
        developers frequently encounter in their development endeavors.
    </p>
    <h2>Types of literals in JavaScript </h2>
    <p>
        JavaScript literals serve as syntactic representations for various
        types
        of data like objects, string, boolean, array, and more.
    </p>
    <p>
        But when we talk about the most important JavaScript literals we
        have
        the following list:</h2>
    </p>
    <ul>
        <li>String literals
        </li>
        <li>Template literals
        </li>
        <li>Object literals
        </li>
        <li>Array literals
        </li>
    </ul>
    <p>There is nothing much to discuss about these, we just need to
        understand
        the syntax/expressions followed while using these in our code. Let's
        start understanding them one by one.
    </p>
    <h3>String Literals</h3>
    <p>String literals in JavaScript are sequences of characters enclosed
        within
        single ('') or double ("") quotation marks. These literals allow us
        to
        represent textual data within our code. For example:</p>
    <pre>
<code>
let myName = "Mayank Pandey!";
let message = 'JavaScript is a scripting language.';
</code>
</pre>
    <h3>Concatenation of strings</h3>
    <p>JavaScript also supports a feature that string literals can be
        concatenated using the '+' operator:</p>
    <pre>
<code>
let firstName = "Mayank";
let lastName = "Pandey";
let fullName = firstName + " " + lastName;

console.log(fullName);

//Output : Mayank Pandey
</code>
</pre>
    <h3>
        Template Literals
    </h3>
    <p>
        Template literals are a feature introduced in ECMAScript 2015 (ES6)
        that
        provides us more flexible and readable string formatting in
        JavaScript.
        Most of the times when we need to use some variable or an expression
        in
        a string there we use template literals. They are enclosed within
        backticks (\`\`) instead of the single('') or double("") quotation
        marks.
        Template literals support multi-line strings and allow for easy
        interpolation of variables and expressions.
    </p>
    <p>

        Example of template literals
    </p>
    <p>
        Let's understand using the following examples:</p>
    <p>

        Example 1</p>
    <pre>
<code>
let number1 = 10;
let number2 = 20;

let sum = number1 + number2;

console.log(\`The sum of \${number1} + \${number2} is equal to \${sum}\`);

//Output : The sum of 10 + 20 is equal to 30
</code>
</pre>
    <p>Example 2 : Printing multi-line strings</p>
    <pre>
<code>
let string1 = "Mai pal do pal ka shayar hoon";

let string2 = "Pal do pal meri kahani hai";

let multiLineString = \`
\${string1},
\${string2}\`

console.log(multiLineString);

/*
Output :
Mai pal do pal ka shayar hoon,
Pal do pal meri kahani hai
*/
</code>
</pre>

    <h3>Object Literals</h3>
    <p>
        One of the most important features of JavaScript is that we can
        define
        objects. Objects play a crucial role in our coding journey in
        JavaScript, so before we start working with objects, it is necessary
        to
        understand how we define them in JavaScript.</p>
    <p>

        Object literals in JavaScript are a way to define and create objects
        directly within the code, without the need for a constructor
        function.
    </p>
    <p>

        They consist of key-value pairs enclosed within curly braces {}.
    </p>
    <h4>
        Example of object literals</h4>
    <p>
        Example : Let's define a person object with its properties as
        'name',
        'age' and 'isRunning', each with their respective values. This
        concise
        syntax makes it easy to define and work with objects in JavaScript.
    </p>
    <pre>
<code>
let person = {
name: 'Mayank',
age: 21,
isRunning : true
};
</code>
</pre>
    <h2>Array Literals
    </h2>
    <p>Array literals in JavaScript provide a convenient way to create
        arrays
        with initial values. They are defined using square brackets [] and
        can
        contain any number of elements separated by commas.
    </p>
    <p>
        Example of Array literals
    </p>
    <p>Example 1</p>
    <pre>
<code>
let colors = ['orange', 'red', 'aqua', 'green', 'blue'];
</code>
</pre>
    <p>In the above example, colors is an array created using an array
        literal.
        It contains five string elements: 'orange', 'red', 'aqua', 'green',
        and
        'blue'. Array literals are flexible and can hold elements of
        different
        types, including numbers, strings, objects, and even other arrays.
    </p>
    <p>
        Example 2 : Array literals in JavaScript are flexible and can hold
        elements of different types, including numbers, strings, objects,
        and
        even other array</p>
    <pre>
<code>
let container = [2, "laptop", true, "papers", "watch"];
</code>
</pre>

    <h2>
        If else statements
    </h2>
    <p>
        Conditional statements are fundamental components of programming
        languages, essential for handling logic and decision-making
        processes.
        They allow us to control the flow of our code by executing specific
        blocks of code based on certain conditions. In JavaScript,
        conditional
        statements play a crucial role in directing program execution. Let's
        delve into this foundational topic in JavaScript to understand its
        significance and explore its practical applications.</p>
    <h3>

        Introduction</h3>
    <p>
        Conditional statements in JavaScript, such as 'if' and 'if-else',
        allow
        us to control the flow of our code based on certain conditions. With
        these statements, we can specify blocks of code to be executed only
        when
        certain conditions are met. For example, using an if statement, we
        can
        execute a piece of code if a particular condition evaluates to true.
        Alternatively, with an if-else statement, we can provide an
        alternative
        code block to be executed if the condition evaluates to false. These
        conditional statements provide powerful tools for building dynamic
        and
        responsive programs in JavaScript.</p>
    <h3>If Statement
    </h3>
    <p>In JavaScript, an 'if' statement is a fundamental conditional
        statement
        that allows us to execute a block of code only if the specified
        condition is true. If the condition is false, the code block
        associated
        with the 'if' statement is skipped.
    </p>
    <h4>
        Syntax for if statements

    </h4>
    <pre>
<code>
if (condition){
// Code block to be executed if the condition is true
}
</code>
</pre>
    <h4>Examples of if statements</h4>
    <pre>
<code>
let speed = 87;

if(speed > 90){
console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
console.log("Normal");
}

if(speed <= 50){
console.log("Slow");
}

// Output: "Normal"
</code>
</pre>
    <h3>If-else Statement
    </h3>
    <p>In JavaScript, an 'if-else' statement is a conditional statement that
        allows us to execute one block of code if a specified condition
        evaluates to true, and another block of code if the condition
        evaluates
        to false.
    </p>
    <h4>
        Syntax for if-else statements</h4>
    <pre>
<code>
if (condition) {
// Code block to be executed if condition is true
} else {
// Code block to be executed if condition is false
}
</code>
</pre>
    <h4>Examples of if-else statements</h4>
    <pre>
<code>
let myAge = 15;

if(myAge >= 18){
console.log("I can Drive");
}else{
console.log("Cannot Drive");
}

// Output : "Cannot Drive"
</code>
</pre>
    <h3>
        If-else-if Statement
    </h3>
    <p>
        An if-else-if statement is a conditional statement that allows us to
        test multiple conditions and execute different blocks of code based
        on
        the outcome of those conditions. It is an extension of the if-else
        statement and provides additional flexibility for handling multiple
        scenarios.
    </p>
    <h4>Syntax for if-else-if statements</h4>
`,
        code: `if (condition1) {
    // Code block to be executed if condition1 is true
    } else if (condition2) {
    // Code block to be executed if condition2 is true
    } else {
    // Code block to be executed if all conditions are false
    }
    </code>
    </pre>
    <h4>Examples of if-else-if statements</h4>
    <pre>
    <code>
    let weight = 65;
    
    if (weight > 70) {
    console.log("You are Overweight");
    } else if (weight > 50 && weight &lt;= 70) {
    console.log("You are Fit");
    } else {
    console.log("You are Underweight");
    }
    
    // Output : "You are Fit"`,
    },
    {
        title: `Chapter 3: Datatypes in JavaScript`,
        content: `<h1>Primitive datatypes in JavaScript</h1>
<p>
    In the previous articles, we have discussed the distinction between primitive and reference data types and their
    significance in JavaScript. We have also examined the classification of various data types, which fall under
    primitive data types. Now, it's time to explore each datatype in detail, let's dive deeper into each type of data
    type, understanding its behavior and how we can efficiently utilize them in our code.
</p>
<h2> Primitive datatypes</h2>
<p>Let's have a quick recap of what do we mean by primitive datatypes and what are the datatypes which are classified
    as primitive datatypes.</p>
<p> Primitive datatypes are those datatypes whose size is fixed at compile time. Memory allocation for primitive
    datatypes is typically done on the 'Stack'.
</p>
<p>
    There are primarily five primitive datatypes :</p>
<ul>
    <li>Numbers
    </li>
    <li>Strings
    </li>
    <li>Boolean
    </li>
    <li>Undefined
    </li>
    <li>Null</li>
</ul>
<p>These primitive data types are essential for basic operations and data manipulation in programming languages. Now,
    let's briefly discuss each of these data types and their usage.
</p>
<h3>
    Numbers</h3>
<p>
    Numbers are used to represent numeric values, which can be integers or floating-point numbers.</p>
<p>In JavaScript all numeric values are internally represented as double-precision 64-bit floating-point numbers and
    thus JavaScript does not make a strict distinction between integers and floating-point numbers. However, JavaScript
    provides methods to work with both integer and floating-point numbers.
</p>
<h4>
    Examples:</h4>
<pre>
    <code>
        let integerNumber = 3;
        console.log(typeof(integerNumber));    // number
        
        let floatNumber = 3.14;
        console.log(typeof(floatNumber));       //number
        
        let output = integerNumber + floatNumber;
        // Result will be a floating-point number
        
        console.log(output);    // 6.14
    </code>
</pre>
<p>In JavaScript, we can perform arithmetic operations on numbers, including addition, subtraction, multiplication, and
    division.</p>
<pre>
    <code>
        let number1 = 13;
        let number2 = 10;
        
        let sum = number1 + number2;
        console.log(sum);                     // 23
        
        let product = number1 * number2;
        console.log(product);                // 103
        
        let quotient = number1/number2;
        console.log(quotient);               // 1.3
    </code>
</pre>
<p>Moreover, JavaScript also provides several built-in methods for working with numbers, such as 'parseInt()' and
    'parseFloat()' for converting strings to numbers.</p>
<pre>
    <code>
        let strNum = "25";
        console.log(typeof(strNum));           // string
        
        let strFloat = "35.63";
        console.log(typeof(strFloat));         // string
        
        let parsedInteger = parseInt(strNum);
        let parsedFloat = parseInt(strFloat);
        
        console.log(typeof(parsedInteger));   // number
        console.log(typeof(parsedFloat));     // number
    </code>
</pre>
<h3>Strings</h3>
<p>
    In JavaScript, the "Strings" primitive data type represents sequences of characters. Strings are used to store and
    manipulate textual data, such as words, sentences, or any other sequence of characters.</p>
<h4>Creation of strings</h4>
<p>
    Creation of strings is possible in three ways, we can create a string using double-quotes(""), single-quotes('') and
    template literals or backticks(\`\`).</p>
<pre>
    <code>
        let string1 =  "Namaste";
        console.log(typeof(string1));      // string
        
        let string2 = 'Namaste';
        console.log(typeof(string2));      // string
        
        let string3 = \`Namaste\`;
        console.log(typeof(string3));      // string
    </code>
</pre>
<h4>
    Concatenating strings
</h4>
<p> We can concatenate multiple strings in JavaScript using two different ways:
</p>
<ul>
    <li> Using the '+' operator</li>
    <li> String interpolation with template literals</li>
</ul>
<p> Let's understand the different ways of concatenation with the help of examples:
</p>
<p>
    Concatenation using '+' operator:</p>
<pre>
    <code>
        let string1 = "Mobile";

        let string2 = "Charger";
        
        let finalSentence = string1 + " and " + string2 + "!";
        
        console.log(finalSentence);
        
        //Output : Mobile and Charger!
    </code>
</pre>
<p>Concatenation using string interpolation using template literals(\`\`):</p>
<p>Backticks allow for string interpolation, where we can embed expressions within \${} inside the string, which are
    then evaluated and concatenated into the string.</p>
<pre>
    <code>
        let string1 = "Mobile";

        let string2 = "Charger";
        
        let finalSentence = \`\${string1} and \${string2}!\`;
        
        console.log(finalSentence);
        
        //Output : Mobile and Charger!
    </code>
</pre>
<p>JavaScript provides numerous built-in methods for working with strings, such as length, toUpperCase(), toLowerCase(),
    substring(), charAt(), indexOf(), split(), replace(), and many more, which allows us to perform various operations
    on strings, such as manipulation, searching, and formatting.
</p>
<h4>
    Length method on strings</h4>
<p>
    In JavaScript, the length property is used to know the length of various data types such as strings, arrays, and
    other iterable objects. When applied to a string, the length property returns the number of characters (including
    spaces, punctuation, and other characters) within that string.
</p>
<p>
    Syntax:</p>
<pre>
    <code>
        let length = string.length;
    </code>
</pre>
<p>Example</p>
<pre>
    <code>
        let message = "Hello coders";

        let messageLength = message.length;
        console.log(messageLength);        // 12
    </code>
</pre>
<h4>Uppercase and Lowercase methods on strings</h4>
<p>
    In JavaScript, we can convert a string to uppercase or lowercase using the toUpperCase() and toLowerCase() methods,
    respectively. These methods return a new string with all alphabetic characters converted to uppercase or lowercase,
    while leaving non-alphabetic characters unchanged.
</p>
<p>
    Syntax:</p>
<pre>
    <code>
        let upperCaseString = string.toUpperCase();

        let lowerCaseString = string.toLowerCase();
    </code>
</pre>
<p>Example</p>
<pre>
    <code>
        let message = "Hello coders";

        let upperCaseMessage = message.toUpperCase();
        console.log(upperCaseMessage);    // HELLO CODERS
        
        let lowerCaseMessage = message.toLowerCase();
        console.log(lowerCaseMessage);    // hello coders
    </code>
</pre>
<h4>Substring method on strings</h4>
<p>
    In JavaScript, the substring() method is used to extract a portion of a string, starting from a specified index
    position to another specified index position, or to the end of the string.
</p>
<p>
    Syntax:</p>
<pre>
    <code>
        string.substring(startIndex, endIndex);
    </code>
</pre>
<ul>
    <li>startIndex : The index position at which to begin extracting characters from the string. This parameter is
        required.</li>
    <li>
        endIndex : The index position before which to end the extraction. If we don't mention the endIndex then, the
        substring() extracts characters to the end of the string.</li>
</ul>
<p>Example</p>
<pre>
    <code>
        let message = "Hello coders";

        let substr1 = message.substring(2, 8);
        console.log(substr1);          // llo co
        
        let substr2 = message.substring(3);
        console.log(substr2);         // lo coders
    </code>
</pre>
<h4>Split method on strings</h4>
<p>
    In JavaScript, the split() method is used to split a string into an array of substrings based on a specified
    separator.</p>
<p>Syntax:</p>
<pre>
    <code>
        string.split(separator);
    </code>
</pre>
<p>separator : Separator is a string or regular expression used to specify where to split the original string. The
    output is the array of substrings.
</p>
<p>
    Example</p>
<pre>
    <code>
        let message = "Once upon a time";

        let splittedArray = message.split(" ");
        
        console.log(splittedArray);
        
        /*
        Output
        [ 'Once', 'upon', 'a', 'time' ]
        */
    </code>
</pre>
<h4>Join method on strings</h4>
<p>
    In JavaScript, the join() method is used to concatenate all the elements of an array into a single string. This
    method joins array elements using a specified separator and returns the resulting string.</p>
<p>Syntax:</p>
<pre>
    <code>
        array.join(separator);
    </code>
</pre>
<p>separator: Here in join method using the separator string is optional. The string used to separate each element of
    the array when they are concatenated into the resulting string.
</p>
<p>
    If we don't specify the separator, the default separator is a comma(,).
</p>
<p>
    Example</p>
<pre>
    <code>
        let array = ["India", "is", "the", "best"];

        let message1 = array.join(" ");
        console.log(message1);
        
        //Output : India is the best
        
        let message2 = array.join();
        console.log(message2);
        
        //Output : India,is,the,best
    </code>
</pre>
<h3>Boolean</h3>
<p>
    Another type of primitive datatype in JavaScript is boolean. The Boolean primitive datatype represents a logical
    value, which can be either true or false. Booleans are used to represent the truthfulness or falseness of an
    expression or condition.
</p>
<p>
    In JavaScript, Boolean values are often used in conditional statements (such as if statements, while loops, etc.) to
    control the flow of execution based on whether certain conditions are true or false.
</p>
<p>
    Let's understand with the help of examples.
</p>
<p>
    Example</p>
<pre>
    <code>
        let isSleeping = true;

        let isRunning = false;
        
        if(isSleeping){
            console.log("He is sleeping");
        }else{
            console.log("He is Running");
        }
        
        /*
        Output : He is sleeping
        */
        
        
        
        let x = 10;
        let y = 16;
        
        let isGreater = x > y;
        console.log(isGreater);    // False
    </code>
</pre>
<h3>Undefined</h3>
<p>
    In JavaScript, undefined is a primitive value that represents a variable that has been declared but has not been
    assigned a value. It also serves as the default value of variables that have not been initialized.
</p>
<p>
    Example</p>
<pre>
    <code>
        let range;

        console.log(range);     // undefined
    </code>
</pre>
<h3>Null</h3>
<p>
    In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is used to
    signify that a variable, object, or property does not have a value.
</p>
<p>
    Unlike undefined, which typically means a variable has been declared but not initialized, null is explicitly
    assigned to indicate that there is no value present.
</p>
<p>
    Example</p>
<pre>
    <code>
        let range = null;

        console.log(range);         // null
        console.log(typeof(range));    //object
    </code>
</pre>
<p>It's important to note that null is not the same as undefined. While both represent absence of value, null is a
    deliberate assignment, whereas undefined typically arises when a variable has been declared but not initialized.</p>
<h2>Reference datatypes in JavaScript</h2>
<p>
    Do you know how crucial it is to understand reference datatypes perfectly in JavaScript? You can imagine its
    importance when I say that 90% of the time in development, we use these data types in one form or another. These
    data types are the pillars of development. So, tighten your seat belts, we're diving into one of the most vital
    concepts of JavaScript. From here, our real development journey begins.
</p>
<h3>
    Introduction</h3>
<p>
    We know that reference data types are dynamic in nature and do not have a fixed size in memory. Before delving into
    each specific data type, let's provide a brief overview of all the data types classified as reference data types:
</p>
<p>
    The following data types are classified as reference data types:</p>
<ul>
    <li>Objects
    </li>
    <li>Arrays
    </li>
    <li>Functions
    </li>
</ul>
<h3>Objects</h3>
<p>
    Objects are one of the most important data types as we'll be using them everywhere we have to deal with data.
    Objects store the data in the form of key-value pairs where keys are strings (or Symbols) and values can be of any
    data type, including other objects, functions, arrays, etc. Objects in JavaScript play a crucial role in every
    program a developer writes and are used in both client-side and server-side programming.
</p>
<p>
    Let's consider an example where we create a 'person' object with three properties named 'name', 'age' and 'country'.
</p>
<p>
    Example:</p>
<pre>
    <code>
        let person = {
            name: "Mayank",
            age: 21,
            country: "India"
        };
        
        console.log(person.name);      // Mayank
        console.log(person.age);       // 21
        console.log(person.city);      // India
    </code>
</pre>
<p>We can access the properties of an object using:
</p>
<ul>
    <li>Dot notation</li>
    <li>
        Bracket Notation</li>
</ul>
<h4>
    Accessing the properties:</h4>
<pre>
    <code>
        let person = {
            name: "Mayank",
            age: 21,
            country: "India"
        };
        
        //Dot Notation
        console.log(person.name);      // Mayank
        
        //Bracket Notation
        console.log(person['name']);   // Mayank
    </code>
</pre>
<p>We can also dynamically add, modify and delete the properties in the objects.
</p>
<h4>
    Changing properties of object:</h4>
<pre>
    <code>
        let person = {
            name: "Mayank",
            age: 21,
            country: "India"
        };
        
        // Adding a property
        person.isSleeping = false;
        
        // Modifying a property
        person.age = 22;
        
        // Deleting a property
        delete person.country;
        
        console.log(person);
        
        // Output : { name: 'Mayank', age: 22, isSleeping: false }
    </code>
</pre>
<p>Objects can also contain functions as properties. These functions are often referred to as methods.
</p>
<h4>
    Functions in objects:</h4>
<pre>
    <code>
        let person = {
            name: "Mayank",
            age: 21,
            country : "India",
            message: function() {
                console.log("Hello, my name is " + this.name);
            }
        };
        
        person.message(); 
        
        // Output: Hello, my name is John
    </code>
</pre>
<h3>Arrays</h3>
<p>
    Arrays in JavaScript is a collection of items of same datatype or different datatype at contiguous memory locations.
    Arrays are special types of objects that store collections of data. They can hold various data types, including
    numbers, strings, objects, functions, and even other arrays. In JavaScript, arrays are commonly used to store lists
    of items, such as a list of names, numbers, or any other related data.
</p>
<p>
    Example:</p>
<pre>
    <code>
        let fruits = ["Apple", "Banana", "Orange"];

        let primeNumbers = [3, 5, 7, 11, 13];
        
        let data = [true, 'ab', "great", 34];
    </code>
</pre>
<p>In JavaScript arrays are zero-indexed, meaning the first element is at index 0, the second element at index 1, and so
    on.
</p>
<h4>
    Accessing the items in an array:</h4>
<pre>
    <code>
        let fruits = ["Apple", "Banana", "Orange"];

        let fruit2 = fruits[1];
        console.log(fruit2);                    // Banana
        
        let primeNumbers = [2, 3, 5, 7, 11, 13];
        
        let firstPrimeNum = primeNumbers[0];
        console.log(firstPrimeNum);             // 2
        
        let data = [true, 'ab', "great", 34];
        
        let data3 = data[2];
        console.log(data3);                     // great
    </code>
</pre>
<p>We can also modify our array, we can add and delete items in our array using:
</p>
<ul>
    <li>
        push : Adds an item to the end of the array.</li>
    <li>
        unshift : Adds an item to the beginning of the array.</li>
    <li>
        pop : Removes the last item from the array.</li>
    <li>
        shift : Removes the first item from the array.
    </li>
</ul>
<h4>Adding items in an array:</h4>
<pre>
    <code>
        let fruits = ["Apple", "Banana", "Orange"];

        fruits.push("Kiwi");
        
        fruits.unshift("Grapes");
        
        console.log(fruits);
        
        // Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]
    </code>
</pre>
<h4> Deleting items in an array:</h4>
<pre>
    <code>
        let fruits = ["Apple", "Banana", "Orange"];

        fruits.pop();
        
        fruits.shift();
        
        console.log(fruits);
        
        // Output : [ 'Banana' ]
    </code>
</pre>
<p>We have more methods that can be applied to arrays to modify them, such as slice(), splice(), includes(), indexOf(),
    etc. We will cover all of these in detail in the upcoming article on arrays, so don't worry. This article is just a
    brief overview of reference datatypes in JavaScript.
</p>
<h3>
    Functions
</h3>
<p>
    In JavaScript, functions are a fundamental building block of the language, functions are the reusable piece of code
    that can be called and executed at any point in our program. Functions can be defined using the function keyword
    followed by a name, a list of parameters (optional), and a block of code enclosed in curly braces {}.
</p>
<h4>
    Initializing a function:</h4>
<pre>
    <code>
        function sum(x, y){
            let result = x + y;
            return result;
        }
        
        let output = sum(3, 8);
        console.log(output);         // 11
    </code>
</pre>
<p>In the above example, sum is a function that takes two parameters x & y and returns the sum of them. Output stores
    the return value of the function sum which is then printed on the console.
</p>
<h3>
    Anonymous functions in JavaScript</h3>
<p>
    JavaScript also supports anonymous functions, which are functions without a name. They are assigned to variables or
    passed as arguments to other functions. They are particularly useful in situations where a function is needed
    temporarily or as a callback function.
</p>
<h4>
    Assignment to a variable:</h4>
<pre>
    <code>
        var add = function(x, y) {
            return x + y;
          };
    </code>
</pre>
<p>In the above example, add is a variable that holds an anonymous function that takes two parameters x and y and
    returns their sum.
</p>
<h4>
    Anonymous functions as callback functions:</h4>
<pre>
    <code>
        setTimeout(function() {
            console.log('This is an anonymous function called after 1 second.');
          }, 1000);
    </code>
</pre>
<p>Functions in JavaScript are not merely tools, they are the backbone of the language, offering a gateway to unlimited
    possibilities. While our discussion has scratched the surface, the vast ocean of functions awaits deeper
    exploration.
</p>
<p>
    From simple greetings to complex calculations, functions empower developers to encapsulate logic, enhance
    reusability, and promote code organization. However, our journey has only begun, for the realm of functions extends
    far beyond what meets the eye.
</p>

<p>Stay tuned for the next installment as we plunge into the depths of function mastery. The adventure has just begun!
</p>
<h2>Arrays in JavaScript</h2>
<p>
    Arrays are fundamental data structures in JavaScript that allow you to store and manipulate collections of data.
    Whether you're a beginner or an experienced developer, understanding arrays is crucial for mastering JavaScript
    programming. In this article, we'll explore the basics of arrays, their manipulation, common operations, and some
    useful methods provided by JavaScript for working with arrays.
</p>
<h3>
    What is an Array?</h3>
<p>
    An array in JavaScript is a special type of object that stores a collection of elements. These elements can be of
    any data type, including numbers, strings, objects, or even other arrays. Arrays in JavaScript are dynamic, meaning
    they can grow or shrink in size dynamically as elements are added or removed.
</p>
<h3>
    Creating Arrays
</h3>
<p>In JavaScript, we can create an array using</p>
<ul>
    <li>
        Array Literal Notation '[]'
    </li>
    <li>
        Array constructor</li>
</ul>
<p>
    Example:</p>
<h3>Array Literal Notation</h3>
<p>
    In JavaScript, we can create arrays using array literal notation, which involves enclosing a comma-separated list of
    elements within square brackets '[]'.
</p>
<p>
    Example:</p>
<pre>
    <code>
        // Creating an array of numbers using array literal notation
        const numbers = [1, 2, 3, 4, 5];
        
        // Creating an array of strings using array literal notation
        const fruits = ['apple', 'banana', 'orange'];
        
        // Creating an array of mixed data types using array literal notation
        const mixed = [1, 'apple', true, { name: 'John' }];
    </code>
</pre>
<h3>Array Constructor
</h3>
<p>In JavaScript, we can also create arrays using the Array constructor. The Array constructor can be called with or
    without the new keyword.
</p>
<p>Let's consider an example :</p>
<pre>
    <code>
        // Creating an array of numbers using Array constructor
        const numbers = new Array(1, 2, 3, 4, 5);
        
        // Creating an array of strings using Array constructor
        const fruits = new Array('apple', 'banana', 'orange');
        
        // Creating an empty array using Array constructor
        const emptyArray = new Array();
        
        console.log(numbers); // Output: [1, 2, 3, 4, 5]
        console.log(fruits); // Output: ['apple', 'banana', 'orange']
        console.log(emptyArray); // Output: []
    </code>
</pre>
<h3>Accessing Array Elements
</h3>
<p>In JavaScript, we can access array elements using square brackets notation '[]'. Array indexing starts from 0, where
    the first element of the array has an index of 0, the second element has an index of 1, and so on.
</p>
<p>
    Let's understand through the following example:</p>
<pre>
    <code>
        const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

        // Accessing the first element of the array
        console.log(fruits[0]);                    // apple
        
        // Accessing the third element of the array
        console.log(fruits[2]);                    // orange
        
        // Accessing the last element of the array
        console.log(fruits[fruits.length - 1]);        // kiwi
        
        // Accessing an element using a variable
        const index = 1;
        console.log(fruits[index]);               // banana
    </code>
</pre>
<h3>Insertion in Array</h3>
<p>
    In JavaScript, we can insert elements into an array using various methods. In array we can insert an item/element at
    various places of an array :
</p>
<ul>
    <li>
        Insertion at End</li>
    <li>
        Insertion at Start</li>
    <li>
        Insertion at Random Index</li>
</ul>
<p>
    Let's understand each method one by one</p>
<h4>Insertion at End</h4>
<p>
    We can insert an item/element at the end of an array using the push method.</p>
<p>
    The push method adds one or more elements to the end of an array and returns the new length of the array.</p>
<pre>
    <code>
        const fruits = ['apple', 'banana', 'orange'];

        fruits.push('kiwi');
        fruits.push('grapes');
        
        console.log(fruits); 
        // Output: [ 'apple', 'banana', 'orange', 'kiwi', 'grapes' ]
    </code>
</pre>
<h4>Insertion at Start</h4>
<p>
    We can insert an item/element at the starting of an array using the unshift method.</p>
<p>The unshift method Adds one or more elements to the beginning of an array and returns the new length of the array.
</p>
<pre>
    <code>
        const fruits = ['apple', 'banana', 'orange'];

        fruits.unshift('kiwi');
        fruits.unshift('grapes');
        
        console.log(fruits); 
        // Output: [ 'grapes', 'kiwi', 'apple', 'banana', 'orange' ]
    </code>
</pre>
<h4>Insertion at Random Index
</h4>
<p>To add an element/item at a random index inside an array we use the splice method.
</p>
<p>
    The splice method adds or removes elements from an array at a specified index.
</p>
<p>
    Syntax</p>
<pre>
    <code>
        array.splice(startIndex, deleteCount, item1, item2, ...);
    </code>
</pre>
<p>In the above syntax only thing we need to keep in mind is that
</p>
<ul>
    <li>
        If we only want to add new items then keep the 'deleteCount = 0',</li>
    <li>
        startIndex : The index at which to start changing the array.</li>
    <li>
        If startIndex is negative, it will begin that many elements from the end of the array. - If startIndex is
        greater than the length of the array, it will start at the length of the array.
    </li>
    <li>If we don't wan't to add any item we can just ignore the item parameters.</li>
</ul>
<p>
    Let's consider an example:</p>
<pre>
    <code>
        const fruits = ['apple', 'orange'];

        // Inserting 'banana' at index 1
        fruits.splice(1, 0, 'banana');
        console.log(fruits); // Output: ['apple', 'banana', 'orange']
    </code>
</pre>
<h3>Filter Method on Arrays</h3>
<p>
    In JavaScript, the filter() method is used to create a new array with all elements that satisfy the specific
    condition in the provided callback function. It doesn't change the original array.
</p>
<p>
    filter() method returns a new array with elements that satisfy the condition specified in the callback function.
</p>
<p>
    Syntax</p>
<pre>
    <code> 
        const newArray = array.filter(_callback function_);
    </code>
</pre>
<p>callback function: Function to test each element of the array. It should return true to keep the element, or false
    otherwise.
</p>
<h4>
    Example 1 : Filter Method on Array of Numbers</h4>
<pre>
    <code>
        const numbers = [-1, 0, -20, 45, 3, 74, -5, 6];

        // Filtering positive numbers
        const positiveNumbers = numbers.filter(function(number) {
          return number > 0;
        });
        
        console.log(positiveNumbers); // Output: [ 45, 3, 74, 6 ]
    </code>
</pre>
<h4>Example 2 : Filter Method on Array of Objects</h4>
<pre>
    <code>
        const products = [
        {
            id: 1,
            name: "Product A",
            price: 10 
        },
        {
            id: 2,
            name: "Product B",
            price: 20 
        },
        {
            id: 3,
            name: "Product C",
            price: 30
        },
    ];
    
    const expensiveProducts = products.filter((product) => product.price > 15);
    
    console.log(expensiveProducts);
    
    /* Output : 
    [
      { id: 2, name: 'Product B', price: 20 },
      { id: 3, name: 'Product C', price: 30 }
    ]
    */
    </code>
</pre>
<h4>Example 3
</h4>
<pre>
    <code>
        const words = ["apple", "banana", "orange", "grapefruit"];

        const longWords = words.filter((word) => word.length > 6);
        
        console.log(longWords); // Output: ["banana", "grapefruit"]
    </code>
</pre>
<h3>Reduce Method on Arrays</h3>
<p>
    In JavaScript, the reduce() method is used to reduce an array to a single value. It executes a provided callback
    function once for each element of the array, resulting in a single output value.
</p>
<p>
    Syntax 2</p>
<pre>
    <code>
        array.reduce(callback(accumulator, currentValue), initialValue)
    </code>
</pre>
<h4>Example : Summing Array Elements</h4>
<pre>
    <code>
        const numbers = [1, 2, 3, 4, 5];

        const sum = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        
        console.log(sum);
        // Output: 15
    </code>
</pre>
<h2>JavaScript Objects</h2>
<p>
    Welcome to the one-stop article on "Objects in JavaScript"! Have you ever wondered why so much emphasis is placed on
    reference data types in multiple articles? Why are topics like these given such importance? What are the real
    challenges when learning development? Why is JavaScript often referred to as the real game in the web development
    journey? Why do we invest a lot of time in learning JavaScript rather than jumping straight into React? All the
    answers to these questions will be addressed here. Let's begin with the Powerhouse, the King, the Owner of
    JavaScript: "Objects".
</p>
<h3>What are Objects in JavaScript?</h3>
<p>

    Before we start talking up the features of JavaScript Objects, let's first understand the proper definition:</p>
<p>Objects: JavaScript objects are fundamental data structures that enable the organization and storage of data in the
    form of key-value pairs. Objects are unordered collection of key value pairs. These key-value pairs, known as
    properties.</p>
<h3>Object Creation in JavaScript</h3>
<p>
    There can be typically four ways to create an Object in JavaScript.</p>
<ul>
    <li>Using object literal.</li>
    <li>
        Using new keyword</li>
    <li>
        Using Object.create() method</li>
    <li>
        Using Factory functions
    </li>
    <li>Using Constructor functions</li>
</ul>
<p>Take a deep breath. Let's start with the first method.</p>
<h4>

    Using object literal</h4>
<p>
    This is the most common, easiest and straightforward way to create an object. We can define the object and its
    properties using the object literals.
</p>
<p>
    Object literal is a list of key-value pairs enclosed in curly braces '{}'.
</p>
<p>
    Example: Lets' create an empty object person using an object literal.</p>
<pre>
    <code>
        let person = {};

        console.log(typeof(person));
        
        // Output : object
    </code>
</pre>
<p>Key : In JavaScript key must either be strings or valid identifier or variable names. Expressions cannot be keys,
    also special characters are not allowed in key names that are not strings.
</p>
<p>
    Value : Value can be anything such as numbers, strings, booleans, arrays, functions and even objects.
</p>
<p>
    Example :Let's add some properties such as firstName, lastName, age, hobbies and a message function to the person
    object.</p>
<pre>
    <code>
        let person = {
            firstName : "Mayank",
            lastName : "Pandey",
            age : 21,
            hobbies : ["reading", "writing", "painting"],
            message : function(){
                console.log("Hi my name is " + this.firstName);
            }
        };
    </code>
</pre>
<h4>Using 'new' keyword</h4>
<p>
    We can use the new keyword along with the Object constructor to create an empty object and then add properties and
    methods to it.
</p>
<p>
    Example: Let's create an empty person object using new keyword.</p>
<pre>
    <code>
        let person = new Object();

        console.log(person);
        
        // Output : {}
    </code>
</pre>
<p>Adding properties to the above newly created object is simple.</p>
<p>Example: Let's add some properties such as firstName, lastName, age to the empty object created using new keyword.
</p>
<pre>
    <code>
        let person = new Object();

        person.firstName = "Mayank";
        person.lastName = "Pandey";
        person.age = 21;
        person.hobbies = ["reading", "sleeping", "writing"];
        
        console.log(person);
        
        /* Output :
        {
          firstName: 'Mayank',
          lastName: 'Pandey',
          age: 21,
          hobbies: [ 'reading', 'sleeping', 'writing' ]
        }
        */
    </code>
</pre>
<h4>Using Object.create() method</h4>
<p>
    In JavaScript, Object.create() is another method to create objects. However, it involves an additional step compared
    to some other object creation methods. First, a prototype object is created beforehand. Then, new objects are
    created using that prototype. Afterward, properties can be added or modified on the newly created object.
</p>
<p>
    Let's dive into an example of using Object.create() to create objects in JavaScript.
</p>
<p>
    Example:</p>

<pre>
    <code>
        let personPrototype = {
            name : "Mayank"
        };
        
        let person = Object.create(personPrototype);
        
        console.log(person);          // {}
    </code>
</pre>
<p>In the above example, person is created with personPrototype as its prototype, but no additional properties are added
    to it, resulting in an empty object.
</p>
<p>
    Now, we can dynamically add properties to the person object.</p>
<p>

    Example : Let's add firstName, lastName, age and hobbies dynamically to the newly created person object.</p>
<pre>
    <code>
        let personPrototype = {
            name : "Mayank"
        };
        
        let person = Object.create(personPrototype);
        
        console.log(person);     // {}
        
        person.firstName = "Mayank";
        person.lastName = "Pandey";
        person.age = 21;
        person.hobbies = ["reading", "writing", "sleeping"];
        
        console.log(person);
        
        /* Output :
        {
          firstName: 'Mayank',
          lastName: 'Pandey',
          age: 21,
          hobbies: [ 'reading', 'writing', 'sleeping' ]
        }
        */
    </code>
</pre>
<h4>Using Factory functions</h4>
<p>
    A factory function can be defined as a function that creates an object and returns it.</p>
<p>

    Factory functions can contain inner values, methods & many more. They are just like normal functions but with a
    specific target i.e. to create objects.
</p>
<p>
    Example : Let's create a function createPerson which returns an object with properties as firstName, lastName, age
    and hobbies.</p>
<pre>
    <code>
        function createPerson(){

            return {
                firstName : "Mayank",
                lastName : "Pandey",
                age : 21,
                hobbies : ["sleeping", "writing", "playing"]
            }
        }
    </code>
</pre>
<p>The above function returns an object, let's create a person object using the factory function.</p>
<pre>
    <code>
        function createPerson(){

            return {
                firstName : "Mayank",
                lastName : "Pandey",
                age : 21,
                hobbies : ["sleeping", "writing", "playing"]
            }
        }
        
        let person = createPerson();
        
        console.log(person);
        /* Output :
        {
          firstName: 'Mayank',
          lastName: 'Pandey',
          age: 21,
          hobbies: [ 'sleeping', 'writing', 'playing' ]
        }
        */
    </code>
</pre>
<p>We can also pass parameters in our factory function.</p>
<pre>
    <code>
        function createPerson(fName, lName, age, hobbies){

            return {
                firstName : fName,
                lastName : lName,
                age : age,
                hobbies : ["sleeping", "writing", "playing"]
            }
        }
        
        let person = createPerson("Love", "Babbar", 24);
        
        console.log(person);
        /* Output :
        {
          firstName: 'Love',
          lastName: 'Babbar',
          age: 24,
          hobbies: [ 'sleeping', 'writing', 'playing' ]
        }
        */
    </code>
</pre>
<h4>Using Constructor functions</h4>
<p>
    In Constructor function we don't use return keyword to return an object. Constructor function does nothing but
    initializes and defines the properties in the function.</p>
<pre>
    <code>
        function CreatePerson(){
    
            this.firstName = "Mayank",
            this.lastName = "Pandey",
            this.age = 21,
            this.hobbies = ["sleeping", "writing", "playing"]
        
        }
    </code>
</pre>
<p>Let's create a person object using the above CreatePerson constructor function.
</p>
<p>
    In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a
    constructor is to create a new object and set values for any existing object properties.</p>
<pre>
    <code>
        function CreatePerson(){
    
            this.firstName = "Mayank",
            this.lastName = "Pandey",
            this.age = 21,
            this.hobbies = ["sleeping", "writing", "playing"]
        
        }
        
        let person = new CreatePerson();
        
        console.log(person);
        /* Output :
        {
          firstName: 'Mayank',
          lastName: 'Pandey',
          age: 21,
          hobbies: [ 'sleeping', 'writing', 'playing' ]
        }
        */
    </code>
</pre>
<p>We can also pass parameters to our constructor function.</p>
<pre>
    <code>
        function CreatePerson(fName, lName, age){
    
            this.firstName = fName,
            this.lastName = lName,
            this.age = age,
            this.hobbies = ["sleeping", "writing", "playing"]
        
        }
        
        let person = new CreatePerson("Love", "Babbar", 24);
        
        console.log(person);
        /* Output :
        {
          firstName: 'Love',
          lastName: 'Babbar',
          age: 24,
          hobbies: [ 'sleeping', 'writing', 'playing' ]
        }
        */
    </code>
</pre>
<h2>Functions in Javascript
</h2>
<p>Functions are the building blocks of JavaScript, allowing developers to encapsulate reusable blocks of code. Whether
    you're a beginner or an experienced coder, understanding functions is crucial for writing efficient and maintainable
    JavaScript code. In this article, we'll delve into the fundamentals of functions, explore different types of
    functions, discuss their usage, and cover some advanced concepts to help us level up your JavaScript skills.
</p>
<h3>
    Need of Functions
</h3>
<p>Functions are a fundamental building block in JavaScript, allowing developers to encapsulate reusable code blocks,
    enhance code readability, and facilitate modular programming. In this guide, we'll delve into the intricacies of
    JavaScript functions, exploring their syntax, types, and various usage scenarios with examples.
</p>
<h4>
    Syntax of a Function
</h4>
<p>In JavaScript, a function can be defined using the function keyword followed by a set of parentheses containing
    optional parameters and a block of code enclosed within curly braces {}.
</p>
<pre>
    <code>
        function functionName(parameter1, parameter2, ...) {
            // Function body
            // Code to be executed
            return value; // Optional
        }
    </code>
</pre>
<h3>Function Declaration vs. Function Expression</h3>
<h4>
    Function Declaration:</h4>
<p>
    A function declaration defines a named function using the function keyword. It can be called before it's defined due
    to JavaScript's hoisting mechanism.</p>
<pre>
    <code>
        function greet(name) {
            return \`Hello, \${name}!\`;
        }
        console.log(greet("John")); // Output: Hello, John!
    </code>
</pre>
<h4>Function Expression:</h4>
<p>
    A function expression defines a function as part of an expression, typically by assigning it to a variable. It's not
    hoisted, so it must be defined before it's called.</p>
<pre>
    <code>
        const greet = function(name) {
            return \`Hello, \${name}!\`;
        };
        console.log(greet("John")); // Output: Hello, John!
    </code>
</pre>
<h3>Arrow Functions</h3>
<p>
    Introduced in ES6, arrow functions provide a concise syntax for writing functions, especially for short, anonymous
    functions.</p>
<pre>
    <code>
        const greet = (name) => {
            return \`Hello, \${name}!\`;
        };
        console.log(greet("John")); // Output: Hello, John!
    </code>
</pre>
<h3>Callback Functions</h3>
<p>
    JavaScript functions can be passed as arguments to other functions, commonly known as callback functions. They're
    extensively used in asynchronous programming and event handling.</p>
<pre>
    <code>
        function fetchData(callback) {
            // Simulated asynchronous operation
            setTimeout(() => {
                const data = "Data fetched successfully";
                callback(data);
            }, 2000);
        }
        
        function processData(data) {
            console.log(\`Processing data: \${data}\`);
        }
        
        fetchData(processData); // Output: Processing data: Data fetched successfully
    </code>
</pre>
<h3>Returning Functions</h3>
<p>
    In JavaScript, functions can return other functions, enabling the creation of higher-order functions.</p>
<pre>
    <code>
        function multiplier(factor) {
            return function(number) {
                return number * factor;
            };
        }
        
        const double = multiplier(2);
        console.log(double(5)); // Output: 10
    </code>
</pre>
<h3>Built-in Functions</h3>
<p>
    JavaScript comes with several built-in functions, such as setTimeout, setInterval, and addEventListener, which take
    functions as arguments.</p>`,
        code: ` setTimeout(() => {
            console.log("Delayed function");
        }, 1000);`,
    },

    {
        title: "Chapter 4: Loops in JavaScript ",
        content: `<h1>Loops in JavaScript</h1>
<p>
    Have you ever marveled at the ability to effortlessly print large sets of natural numbers in just two or three lines
    of code? In our daily lives, humans engage in countless repetitive tasks, but have you ever stopped to ponder how
    the virtual world of computer programming autonomously executes repetitive tasks with minimal human intervention?
    The answer lies in "loops," one of the most potent features of computer programming. Loops serve as a cornerstone
    for programmers, significantly reducing the burden of manual labor and tedious typing.</p>
<h2>Introduction</h2>
<p>
    At the outset of learning to code in any specific language, grasping the concept of "loops" and their functionality
    is paramount. Loops are integral to maintaining the readability of our code and reducing pressure on the system by
    minimizing the number of lines needed to accomplish a given task. This directly enhances the quality of the code,
    improves runtime efficiency, and saves considerable time that would otherwise be spent writing extensive code.</p>
<p>When discussing loops in computer programming, it's essential to note that there are primarily three types commonly
    used.</p>
<ul>
    <li>For loop</li>
    <li>While loop</li>
    <li>Do-while loop</li>
</ul>
<h3>For loop</h3>
<p>
    The most fundamental and widely used loop is 'for' loop. The "for" loop in JavaScript allows us to execute a block
    of code repeatedly until a specified condition is met. It's particularly useful when we know how many times you want
    to iterate.
</p>
<p>
    A for loop is constituted with four parts: the initialization, the condition, increment/decrement and the code which
    has to be executed if the conditions are met true.
</p>
<p>
    Let's start with the syntax formation and then we'll understand the flow and the importance of each part.</p>
<p>Syntax of for loop</p>
<pre>
    <code>
        for (initialization; condition; increment/decrement) {
            // code block to be executed
        }
    </code>
</pre>
<ul>
    <li>Initialization: This is the first thing executed before the code block execution. This part initializes the
        loop control variable.</li>
    <li>Condition: This part specifies the condition for continuing the loop. If the condition evaluates to true, the
        loop continues; if it evaluates to false, the loop terminates.</li>
    <li>Increment/Decrement: This part modifies the loop control variable. It is executed after each iteration of the
        loop.</li>
</ul>
<p>Example of for loop</p>
<p>
    Question: Print the natural numbers less than or equal to 5.</p>
<pre>
    <code>
        for(let i=1; i<=5; i++){
            console.log(i);
        }
        
        /*
        Output :
        1
        2
        3
        4
        5
        */
    </code>
</pre>
<p>In the above example,</p>
<ul>
    <li>The loop starts with let 'i = 1', initializing the loop control variable 'i 'to 1.</li>
    <li>The condition 'i &lt;= 5' specifies that the loop will continue as long as i is less than or equal to 5.</li>
    <li>After each iteration, 'i++' increments the value of 'i' by 1.</li>
</ul>
<h3>While loop</h3>
<p>The "while" loop in JavaScript provides another method to execute a block of code repeatedly based on a specific
    condition. The primary difference between the 'for' loop and the 'while' loop lies in their syntax, also we use
    'while' loop when the number of iterations is not predetermined or when we want to keep looping until a specific
    condition is met.
</p>
<p>Let's dive straight into the syntax part. Once we've grasped the "for" loop, understanding the "while" loop will
    become more straightforward.
</p>
<p>Syntax of while loop</p>
<pre>
    <code>
        while (condition) {
            // code to be executed
        }
    </code>
</pre>
<p> Condition: This part specifies the condition for continuing the loop. If the condition evaluates to true, the loop
    continues; if it evaluates to false, the loop terminates.
</p>
<p>
    Example of while loop</p>
<p>
    Question: Print the sum of first 10 natural numbers.</p>
<pre>
    <code>
        let sum = 0;
        let i=1;
        while(i &lt;= 10){
            sum = sum + i;
            i++;
        }
        
        console.log(sum);
        
        // Output: 55
    </code>
</pre>
<h3>Do while loop</h3>
<p>
    The 'do-while' loop in JavaScript is similar to the 'while' loop but, with one key difference : the condition is
    checked after the loop body executes. Due to this property if we use 'do-while' loop, the code inside the loop will
    execute at least once, regardless of the initial condition.
</p>
<p>
    Syntax of do-while loop</p>
<pre>
    <code>
        do {
            // code to be executed
        } while (condition);
    </code>
</pre>
<ul>
    <li> The code block inside the "do" section is executed first.</li>
    <li>Then, the condition in the "while" section is evaluated.</li>
    <li>If the condition is true, the loop repeats; otherwise, it terminates.</li>
</ul>
<p>Example of do-while loop</p>
<p>
    Question: Print the sum of first 10 natural numbers.</p>
<pre>
    <code>
        let sum = 0;
        let count = 1;
        do{
            sum = sum + count;
            count = count + 1;
        }while(count &lt;= 10);
        
        console.log(sum);
        
        // Output : 55
    </code>
</pre>
<ul>
    <li> The loop starts with count = 1 & sum = 0, initializing the loop control variable i to 1.</li>
    <li>Inside the loop, the sum of all the natural numbers less than equal to 10, gets stored in the variable 'sum'
        with each iteration, and count++ increments the value of count by 1.</li>
    <li>The condition count &lt;= 10 is evaluated after the loop body executes. If true, the loop continues; otherwise,
        it terminates.</li>
</ul>
<h2>ForEach loop</h2>
<p>
    We have already covered the basics of loops such as the 'for loop', 'while loop', and 'do-while' loop in previous
    articles. As promised, we will now delve into more advanced loop concepts in JavaScript. Welcome to the new series
    where we'll explore advanced loop techniques and learn how to implement them effectively. This series consists of
    four parts, and we're kicking it off with the 'ForEach loop'.</p>
<h3>What is 'forEach' loop
</h3>
<p>The forEach loop in JavaScript provides a concise and built-in way to iterate over the elements of an array without
    the need for explicit indexing. Unlike traditional for loops, which rely on index-based iteration, the forEach loop
    directly accesses each element of the array, making the code more readable and expressive.
</p>
<p>Syntax</p>
<pre>
    <code>
        array.forEach(function() {
            // Code block to be executed on each iteration
        });
    </code>
</pre>
<p>The forEach loop in JavaScript is a method used to iterate over elements in an array. It executes a provided function
    once for each array element, in ascending order.
</p>
<h3>
    Implementation of forEach Loop</h3>
<p>
    Using the forEach method, we pass a callback function as an argument. This function is executed for each element in
    the array, it might be difficult to understand at this point. Let's take up some examples and understand how the
    forEach loop is implemented in our projects.</p>
<h4>Example 1</h4>
<p>
    Le's consider an array of numbers and we will iterate over the array using the forEach loop.</p>
<pre>
    <code>
        let numbers = [1, 2, 3, 4, 5, 6, 7];

        numbers.forEach(function(number, index){
            console.log(\`Element at \${index} : \${number}\`)
        })
        
        /* Output :
        Element at 0 : 1
        Element at 1 : 2
        Element at 2 : 3
        Element at 3 : 4
        Element at 4 : 5
        Element at 5 : 6
        Element at 6 : 7
        */
    </code>
</pre>
<h4>Example 2</h4>
<p>Let' consider an array of fruits and we will iterate over each fruit using forEach loop.</p>
<pre>
    <code>
        let fruits = ['Apple', 'Banana', 'Grapes', 'Chiku'];

        fruits.forEach(function(fruit){
            console.log(\`I love \${fruit}\`)
        })
        
        /* Output :
        I love Apple
        I love Banana
        I love Grapes
        I love Chiku
        */
    </code>
</pre>
<h2>For of loop in JavaScript</h2>
<p>
    We have already covered the basics of loops such as the 'for loop', 'while loop', and 'do-while' loop in previous
    articles. As promised, we will now delve into more advanced loop concepts in JavaScript. Welcome to the new series
    where we'll explore advanced loop techniques and learn how to implement them effectively. This series consists of
    four parts, and we're into the second part with the 'for of loop'.</p>
<h3>What is 'for of' loop</h3>
<p>The 'for of' loop was introduced in ECMAScript 6 (ES6), it simplifies the process of iterating over iterable objects
    like arrays, strings, maps, and sets.</p>
<p>The 'for of' loop in JavaScript offers a concise and built-in syntax for iterating over the elements of an iterable
    object. Unlike traditional loops that rely on indices or explicit iterator methods, the for...of loop automatically
    iterates over the values of the iterable, making the code more readable and expressive.</p>
<h4>Syntax</h4>
<pre>
    <code>
        for (variable of iterable) {
            // Code block to be executed on each iteration
          }
    </code>
</pre>
<h3>Implementation of 'for of' loop</h3>
<p>
    The 'for of' loop enhances code readability by focusing on the elements of the iterable rather than indices or
    iterator methods. The 'for of' loop is straightforward and we can implement it just by considering it's syntax.</p>
<p>Let's take up few examples and understand the applications.
</p>
<h4>
    Example 1</h4>
<pre>
    <code>
        const colors = ['red', 'green', 'blue'];

        for (let color of colors) {
          console.log(color);
        }
        
        /* Output :
        red
        green
        blue
        */
    </code>
</pre>
<h4>
    Example 2</h4>
<pre>
    <code>
        let numbers = [1, 2, 3, 4, 5, 6, 7];

        let sum = 0;
        for(let value of numbers){
            sum += value;
        }
        console.log(sum);
        
        // Output : 28
    </code>
</pre>
<h2>For in loop</h2>
<p>
    We have already covered the basics of loops such as the 'for loop', 'while loop', and 'do-while' loop in previous
    articles. As promised, we will now delve into more advanced loop concepts in JavaScript. Welcome to the new series
    where we'll explore advanced loop techniques and learn how to implement them effectively. This series consists of
    four parts, and we're into the third part with the 'for in loop'.
</p>
<h3>
    What is 'for in' loop</h3>
<p>
    The 'for in' loop in JavaScript facilitates the iteration over the enumerable properties of an object. It iterates
    through all enumerable properties of an object, including inherited ones, providing access to both keys and values.
</p>
<h4>
    Syntax</h4>
<pre>
    <code>
        for (variable in object) {
            // Code block to be executed on each iteration
          }
    </code>
</pre>
<p>Let's consider the examples and learn how to use the 'for in' loop in our code.</p>
<h3>Implementation of 'for in' loop</h3>
<p>
    The 'for in' loop dynamically iterates over the enumerable properties of an object, making it suitable for handling
    objects with varying property sets also by providing access to both property names (keys) and values, the 'for in'
    loop enables flexible manipulation of object properties.
</p>
<p>
    Let's consider few examples to get more understanding...</p>
<h4>Example 1</h4>
<pre>
    <code>
        const person = {
            name: 'Mayank',
            age: 21,
            city: 'Delhi'
          };
          
          for (const key in person) {
            console.log(key + ": " + person[key])
          }
          
          /* Output :
          name: Mayank
          age: 21
          city: Delhi
          */
    </code>
</pre>
<h4>Example 2</h4>
<pre>
    <code>
        const fruits = ['apple', 'banana', 'orange'];

        for (let index in fruits) {
          console.log(\`Index \${index}: \${fruits[index]}\`);
        }
        
        
        /* Output :
        Index 0: apple
        Index 1: banana
        Index 2: orange
        */
    </code>
</pre>
<h2>Array map() Method in JavaScript</h2>
<p>
    Do you know this is one of the most important topics in JavaScript. Literally you will be using this everywhere in
    your projects whenever you have a collection of data. Don't even try to skip this topic, do whatever you can to
    understand this method and become a champion in implementing it. I promise this will ease your life when you'll be
    doing projects and learning more heavy topics in development. So let's not wastes any time and study the map method
    in JavaScript.
</p>
<h3>
    Introduction</h3>
<p>
    The map() method in JavaScript is used to iterate over each element of an array and apply a transformation function
    to each element, creating a new array with the results of the transformations.
</p>
<p>
    It does not mutate the original array but returns a new array with the modified elements.
</p>
<h4>
    Syntax
</h4>
<pre>
    <code>
        const newArray = array.map((currentValue, index, array) => {
            // Return the transformed value for each element
          });
    </code>
</pre>
<p>It might be confusing after reading the syntax but dont worry we'll take up examples straightaway...</p>
<h4>Example 1</h4>
<p>
    Let's consider an array of numbers, and our task is to double every value inside the array using the 'map()' method.
</p>
<pre>
    <code>
        const numbers = [1, 2, 3, 4, 5];

        const doubledNumbers = numbers.map(num => num * 2);
        
        console.log(doubledNumbers); 
        
        // Output: [2, 4, 6, 8, 10]
    </code>
</pre>
<h4>Example 2</h4>
<pre>
    <code>
        let fruits = ['grapes', 'orange', 'apple', 'banana'];

        let myFruits = fruits.map(fruit) => {
            return \`\${fruit} : my fav\`
        })
        
        console.log(myFruits);
        
        /* Output :
        [
          'grapes : my fav',
          'orange : my fav',
          'apple : my fav',
          'banana : my fav'
        ]
        */
    </code>
</pre>
<h4>Example 3</h4>

<p>It's fun to play with map() method you just need to know how to implement the call back function inside the map()
    method. Everything is simple and straightforward.</p>`,
        code: ` const students = [
        { name: 'Mayank', age: 21 },
        { name: 'Love', age: 24 },
        { name: 'Pranay', age: 18 }
      ];
      
      const names = students.map(function(student) {
        return student.name;
      });
      
      console.log(names);
      
      // Output : [ 'Mayank', 'Love', 'Pranay' ]
   `,
    },
    {
        title: "Chapter 5: JavaScript Feactures",
        content: `<h1>Dynamic Typing In JavaScript</h1>
<p>
    Have you ever wondered why don't we use data types like 'int', 'char', 'string' in JavaScript, to define different
    types of variables as we do in other languages. Let's keep it short and dive straight into the world of JavaScript
    with one of its most attractive features of JavaScript: "Dynamic Typing in JavaScript".</p>
<h2>Static Typing v/s Dynamic Typing</h2>
<h3>
    Static Typing</h3>
<p>
    A statically typed languages is a language where we define the datatype of our variables explicitly at the compile
    time only. For example, in languages like C, C++, and Java, we use data types such as 'int', 'char', 'string', etc.,
    to define our variables. Since these languages require explicit declaration of data types at compile time, they are
    known as statically typed languages.</p>
<pre>
    <code>
        int marks = 95;

        char alpha = 'm';
        
        string name = "Love Babbar";
    </code>
</pre>
<h3>Dynamic Typing</h3>
<p>
    Dynamic typing as the name suggests we don't need to explicitly define the data types of the variables we define.
</p>
<p>In dynamic typing when we declare a variable, we do not need to specify what type this variable is. Javascript
    engine infers what type this variable is based on the value assigned to at run time.</p>
<pre>
    <code>
        let marks = 95;
        console.log(typeof(marks));  //number
        
        marks = "Namaste dunia";
        console.log(typeof(marks));  //string
        
        marks = 'a';
        console.log(typeof(marks));  //string
        
        marks = true;
        console.log(typeof(marks));  //boolean
    </code>
</pre>
<h3>Did You Know?</h3>
<p>A dynamically typed language the script will be compiled even if it has errors because all the checks and datatype
    declaration are done at the run time, while if a script written in a statically typed language (such as C++)
    contains errors, it will fail to compile until the errors have been fixed.</p>
<h2>JavaScript Math Object</h2>
<p>lementation. Whether it be inbuilt functions or user-defined functions the stature of functions remains unaffected.
    JavaScript within it's rich set of features offers 'Math' object, a powerhouse of mathematical functionality that
    empowers developers to perform a wide range of calculations. Let's sharpen our understanding of JavaScript with this
    comprehensive guide where we will be learning everything about JavaScript 'Math' object.</p>
<h3>Introduction</h3>
<p>
    The JavaScript Math object is a built-in object that provides mathematical constants and functions for performing
    mathematical operations in JavaScript. It provides a set of properties and methods for mathematical computations,
    making it easier to work with numbers in JavaScript.
</p>
<h4>
    Constants/Static Properties</h4>
<h4>
    Math.PI</h4>
<p>
    Math.PI represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.</p>
<pre>
    <code>
        let value = Math.PI;
        console.log(value);
        
        //Output : 3.141592653589793
    </code>
</pre>
<h4>Math.E</h4>
<p>
    Math.E represents Euler's number, approximately 2.71828.</p>
<pre>
    <code>
        let value = Math.E;
        console.log(value);
        
        //Output : 2.718281828459045
    </code>
</pre>
<h4>Math.LN2</h4>
<p>
    Math.LN2 is used to calculate the natural logarithm of 2, approximately 0.693</p>
<pre>
    <code>
        let value = Math.LN2;
        console.log(value);
        
        //Output : 0.6931471805599453
    </code>
</pre>
<h3>Functions</h3>
<h4>
    Math.random()</h4>
<p>
    Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
</p>
<p>
    Math.random() ∈ [0, 1]</p>
<pre>
    <code>
        let value = Math.random();
        console.log(value);
        //Output : 0.048542301899791696
        
        value = Math.random();
        console.log(value);
        //Output : 0.3692583661676796
    </code>
</pre>
<h4>Math.sqrt()</h4>
<p>
    Math.sqrt(x) method returns the square root of a number 'x'. It takes only one argument, and returns the square root
    as a floating-point number.</p>
<pre>
    <code>
        let value = Math.sqrt(15);
        console.log(value);
        //Output : 3.872983346207417
        
        value = Math.sqrt(36);
        console.log(value);
        //Output : 6
    </code>
</pre>
<h4>Math.pow()</h4>
<p>
    Math.pow(x, y) method is used to return a value of, 'x raised to the power of y'. It takes two arguments the base(x)
    & the exponent (y) and returns the result raising the base to the power of exponent.</p>
<pre>
    <code>
        let value = Math.pow(2,3);
        console.log(value);
        //Output : 8
        
        value = Math.pow(4,2);
        console.log(value);
        //Output : 16
    </code>
</pre>
<h4>Math.max()</h4>
<p>
    Math.max(x1, x2, x3, x4) is used to return the largest of the given numbers.</p>
<p>

    For example: Math.max(-2) = -2,</p>
<p>

    Math.max() = -Infinity</p>
<p>

    Math.max(2, -4, 68, -11) = 68</p>
<pre>
    <code>
        let value = Math.max(2,3,70,9);
        console.log(value);
        //Output : 70
        
        value = Math.max(-10,-3,-9);
        console.log(value);
        //Output : -3
        
        value = Math.max();
        console.log(value);
        //Output : -Infinity
    </code>
</pre>
<h2>Garbage Collector in JavaScript</h2>
<p>
    The most complex aspect of any coding language is memory allocation and deallocation. While memory allocation is
    relatively straightforward and not overly burdensome, deallocation presents challenges for programmers. Did you know
    that many upgrades in specific programming languages/frameworks are aimed at reducing memory consumption to increase
    code speed and prevent it from becoming bloated? Welcome to a new topic in JavaScript, where we'll explore memory
    management in JavaScript and discover why it's one of the most beloved programming languages. But before we dive in,
    I almost spilled a secret, but... I suppose it would spoil the excitement. So, get ready to engage your brain as we
    embark on this learning journey.
</p>
<h3>
    Introduction</h3>
<p>
    JavaScript, being a dynamically typed language, relies heavily on memory management. Garbage collection is a crucial
    aspect of JavaScript's memory management system, responsible for reclaiming memory occupied by objects that are no
    longer in use.
</p>
<p>
    What is Garbage Collection?</p>
<p>Garbage collection is an automatic memory management process that identifies and deallocates memory occupied by
    objects that are no longer needed by the program. In JavaScript, this process is performed by the runtime
    environment, typically a web browser or Node.js, rather than the programmer manually freeing memory.
</p>
<p>
    So, the best part of using JavaScript is that you don't have to worry about the deallocation of unused memory
    manually. JavaScript handles it on its own, and this is one of the coolest features of JavaScript.
</p>
<h4>
    Example</h4>

<p>Explanation : I know some of you might not have understood the concept by the above example, so let's elaborate it.
</p>
<p>
    Firstly we created two objects obj1 and obj2 having some properties. Now we are using the objects to reference it to
    one another.</p>
<p>But in the next lines we make both of our objects point to null. Now in JavaScript the JavaScript engine
    automatically knows that the objects {name : 'Mayank'} ,{name : 'Love'} are not in use and thus it automatically
    de-allocates / removes them from the memory.</p>`,
        code: `<pre>
    <code>
        let obj1 = { name: 'Mayank' };  // Object 1 created
        let obj2 = { name: 'Love' };  // Object 2 created
    
        obj1.reference = obj2;  // Object 1 now references Object 2
        obj2.reference = obj1;  // Object 2 now references Object 1
    
        // At this point, both obj1 and obj2 are still in use and have references to each other
    
        obj1 = null;  // Removing reference to Object 1
        obj2 = null;  // Removing reference to Object 2
    
        // Even though we've removed the references to obj1 and obj2,
        // the JavaScript engine can still identify that these objects are not reachable
        // from the root of the application (global scope or any other reachable objects)
        // and will automatically deallocate the memory occupied by these objects.
    </code>
</pre>`,
    },
    {
        title: "Chapter 6: JavaScript HTMLDOM ",
        content: `<h1>DOM, BOM and Window Object in JavaScript</h1>
<p>
    In the world of web development, understanding the Document Object Model (DOM), Browser Object Model (BOM), and the
    Window object is essential for building dynamic and interactive web applications. In this article, we'll delve into
    each of these concepts, explore their functionalities, and provide practical examples to illustrate their usage.</p>
<h2>
    Document Object Model (DOM)</h2>
<p>
    The Document Object Model (DOM) is a programming interface for web documents, providing a structured representation
    of HTML and XML documents. It allows JavaScript to interact with and manipulate the content, structure, and style of
    web pages dynamically.</p>
<h3>Browser Object Model (BOM)</h3>
<p>
    The Browser Object Model (BOM) provides JavaScript interfaces for interacting with the browser window and its
    components, such as the location, history, and navigator. It's not standardized like the DOM and varies across
    different browsers.</p>
<p>Easy to understand definition:</p>
<p>The Browser Object Model (BOM) is used to interact with the browser. The browser has the window object as its root
    object. We can access most properties and methods of the window object directly (e.g., alert(), confirm()). However,
    for better code readability and to avoid naming conflicts, it's recommended to use the window prefix explicitly
    (e.g., window.alert(), window.confirm()).</p>
<p>Example: Accessing Window Properties</p>
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;BOM Example&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;script&gt;
                // Accessing BOM properties
                console.log(window.innerWidth); // Window width
                console.log(window.innerHeight); // Window height
                console.log(window.location.href); // URL of the current page
                console.log(window.navigator.userAgent); // User agent string
            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<p>In the above example, we access various properties of the window object, such as innerWidth, innerHeight,
    location.href, and navigator.userAgent.</p>
<h3>Window Object</h3>
<p>
    The Window object represents the browser window that contains the DOM document. It serves as the global object in
    client-side JavaScript and provides access to various browser-related functionalities and properties.
</p>
<p>
    Example: Opening a New Window</p>
<pre>
  <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en"&gt;
            &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;Window Object Example&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;button onclick=&quot;openNewWindow()&quot;&gt;Open New Window&lt;/button&gt;
                
                &lt;script&gt;
                    // Opening a new window
                    function openNewWindow() {
                        window.open(&#39;https://www.codehelp.in/tutorials&#39;, &#39;_blank&#39;);
                    }
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
</pre>
<h2>JavaScript HTML DOM Elements</h2>
<p>
    Hello and welcome to the new page of JavaScript Articles, where you'll delve into more key features of JavaScript
    DOM and its applications. If you've been following us from the beginning of your JavaScript journey, we're now
    embarking on the Intermediate part of JavaScript. The basics are behind us; it's time to level up our knowledge with
    more advanced JavaScript features, making us even more proficient. I hope you've enjoyed the journey this far, and I
    assure you that the upcoming content will be just as enriching. So, let's kick things off with JavaScript DOM
    elements, where we'll learn how to select specific elements from the provided HTML.</p>
<h3>

    Accessing DOM Elements</h3>
<p>
    Accessing DOM (Document Object Model) elements is a fundamental aspect of web development, enabling us to interact
    with and manipulate the structure of web pages dynamically.</p>
<p>Let's explore various methods and techniques for accessing DOM elements using JavaScript, empowering us to harness
    the full potential of DOM manipulation in our web projects.</p>
<h3>getElementById()</h3>
<p>
    getElementById() is a method used to retrieve an HTML element from the DOM (Document Object Model) by its unique ID.
    It takes a single argument, which is the ID of the element we want to select. Once the element is selected, we can
    perform various operations such as updating its content, modifying its style, or attaching event listeners to it.
</p>
<p>
    Syntax 1</p>
<pre>
    <code>
        let element = document.getElementById(elementId);
    </code>
</pre>
<ul>
    <li>document refers to the HTML document.</li>
    <li>
        getElementById() is the method.</li>
    <li>
        elementId is the ID of the HTML element we want to retrieve.</li>
</ul>
<h4>Example 1
</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Understanding JavaScript&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1 id=&quot;codehelp1&quot;&gt;Welcome to CodeHelp1&lt;/h1&gt;
        
            &lt;h2 class=&quot;code&quot;&gt;Welcome to CodeHelp2&lt;/h2&gt;
        
            &lt;h3&gt;Welcome to CodeHelp&lt;/h3&gt;
            
            &lt;script&gt;
                //Selecting the element with id as &quot;codehelp1&quot;
                let element = document.getElementById(&quot;codehelp1&quot;);

                //Now changing the background color of the selected HTML element
                element.style.backgroundColor = &quot;red&quot;;
            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<h3>getElementsByClassName()</h3>
<p>
    The method getElementsByClassName() returns a collection of elements with the specified class name. The collection
    is in the form of array-like object of all the child elements which matches the given class name/names.
</p>
<p>
    It accepts a single argument, which is the class name to be matched.
</p>
<h4>
    Syntax 2</h4>
<pre>
    <code>
        document.getElementsByClassName(className);
</code>
</pre>
<ul>
    <li>document refers to the HTML document.</li>
    <li>
        getElementsByClassName() denotes the method.</li>
    <li>
        className represents the class name of the target elements.</li>
</ul>
<h3>getElementsByTagName()</h3>
<p>
    getElementsByTagName() is a powerful method in JavaScript used to fetch HTML elements from the DOM (Document Object
    Model) based on their tag names. It accepts a single argument, which is the tag name of the elements to be selected.
</p>
<h4>
    Syntax 3</h4>
<pre>
    <code>
        document.getElementsByTagName(tagName);
    </code>
</pre>
<ul>
    <li>document refers to the HTML document.
    </li>
    <li>getElementsByTagName() denotes the method.
    </li>
    <li>tagName represents the tag name of the target elements.
    </li>
</ul>
<h2>HTML DOM Query Selectors</h2>
<p>
    In the world of web development, one of the fundamental tasks in JavaScript programming is selecting elements from
    the HTML document, manipulating them, and performing various operations. Query selectors in JavaScript provide a
    powerful mechanism to achieve this goal. In this guide, we will delve into the depths of query selectors, exploring
    their syntax, functionalities, and best practices to harness their full potential.
</p>
<h3>
    Introduction</h3>
<p>
    Query selectors are methods in JavaScript that allow us to select HTML elements based on various criteria, such as
    tag name, class, ID, attribute, or even complex CSS selectors. They are part of the Document Object Model (DOM) API
    and provide a concise and efficient way to interact with HTML elements from JavaScript code.
</p>
<p>
    There are two different Query Selectors :</p>
<ul>
    <li>querySelector()</li>
    <li>
        querySelectorAll()</li>
</ul>
<h3>querySelector()</h3>
<ul>
    <li>Returns the first element within the document that matches the specified selector or group of selectors.</li>
    <li>
        If no matches are found, it returns null.</li>
</ul>
<h4>Syntax 1</h4>
<pre>
    <code>
        document.querySelector(selector);
    </code>
</pre>
<p>In the above syntax...</p>
<p>"selector" represents the criteria based on which elements are selected. It could be a tag name, class name, ID, etc.
</p>
<h4>
    Example 1</h4>

<pre>
      <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Understanding JavaScript&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;div id=&quot;codehelp&quot;&gt;Welcome to CodeHelp&lt;/div&gt;
            
                &lt;div class=&quot;welcome&quot;&gt;Welcome to CodeHelp1&lt;/div&gt;
                &lt;div class=&quot;welcome&quot;&gt;Welcome to CodeHelp2&lt;/div&gt;
                &lt;div id=&quot;codehelp3&quot;&gt;Welcome to CodeHelp3&lt;/div&gt;
                &lt;p class=&quot;welcome&quot;&gt;Welcome to CodeHelp4&lt;/p&gt;
                &lt;span class=&quot;welcome&quot;&gt;Welcome to CodeHelp5&lt;/span&gt;
            
                &lt;h3&gt;Welcome to CodeHelp&lt;/h3&gt;
                &lt;script&gt;
                    //Let's Select the first element with classname = welcome

                    let element = document.querySelector(&quot;.welcome&quot;);

                    element.style.backgroundColor = &quot;yellow&quot;;

                    // In the above example:
                    // Welcome to CodeHelp1 will be selected
                    //and the background colour will be changed to &quot;Yellow&quot;

                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
 </pre>
<h3>querySelectorAll()</h3>
<ul>
    <li>It returns a static NodeList representing a list of elements that match the specified group of selectors.</li>
    <li>
        If no matches are found, it returns an empty NodeList.</li>

</ul>
<h4>Syntax 2</h4>
<pre>
    <code>
        document.querySelectorAll(selector);
    </code>
</pre>
<p>In the above syntax:</p>
<p>"selector" represents the criteria based on which elements are selected. It could be a tag name, class name, ID, etc.
</p>
<h4>Example 2</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Understanding JavaScript&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;div id=&quot;codehelp&quot;&gt;Welcome to CodeHelp&lt;/div&gt;
        
            &lt;div class=&quot;welcome&quot;&gt;Welcome to CodeHelp1&lt;/div&gt;
            &lt;div class=&quot;welcome&quot;&gt;Welcome to CodeHelp2&lt;/div&gt;
            &lt;div id=&quot;codehelp3&quot;&gt;Welcome to CodeHelp3&lt;/div&gt;
            &lt;p class=&quot;welcome&quot;&gt;Welcome to CodeHelp4&lt;/p&gt;
            &lt;span class=&quot;welcome&quot;&gt;Welcome to CodeHelp5&lt;/span&gt;
        
            &lt;h3&gt;Welcome to CodeHelp&lt;/h3&gt;
        
            &lt;script&gt;
                //Let's Select the all elements with classname = welcome

                let element = document.querySelectorAll(&quot;.welcome&quot;);

                console.log(element);
                /*
                NodeList(4) [div.welcome, div.welcome, p.welcome, span.welcome]
                0: div.welcome
                1: div.welcome
                2: p.welcome
                3: span.welcome
                
                length: 4
                [[Prototype]]: NodeList
                */

                element[1].style.backgroundColor = &quot;green&quot;;

                // In the above example:
                // Welcome to CodeHelp2 will be selected
                //and the background colour will be changed to &quot;Green&quot;

            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<h4>Points to remember:</h4>
<ul>
    <li>
        The basic syntax for query selectors involves using the document object followed by the querySelector() or
        querySelectorAll() method.</li>
    <li>
        Use querySelector() for selecting a single element and querySelectorAll() for selecting multiple elements.</li>
    <li>
        Be specific with selectors to target elements efficiently and avoid unintended selections.</li>
</ul>
<h2>Modifying HTML DOM elements</h2>
<p>
    In the realm of web development, understanding how to manipulate the content of HTML elements dynamically is
    crucial. JavaScript provides several properties to accomplish this, including innerHTML, outerHTML, innerText, and
    textContent. In this article, we'll explore each of these properties, their differences, and best practices for
    their usage.</p>
<h3>Introduction</h3>
<p>
    Before diving into the intricacies of modifying HTML DOM elements, let's unveil a secret: textContent is often your
    best friend. In the vast majority of cases, using textContent will suffice for dynamically changing the content of
    your HTML DOM elements. However, don't dismiss other methods such as innerText, innerHTML, and outerHTML, as they
    hold significance, especially in interviews and more complex scenarios.</p>
<h3>innerHTML</h3>
<p>
    The innerHTML property allows us to retrieve or replace the HTML content within an element. It represents the markup
    of the element's descendants, including text and child elements.
</p>
<p>
    Let's understand through an example.
</p>
<h4>
    Example 1</h4>

<pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;JavaScript&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;p id=&quot;myPara&quot;&gt;
                    This element     has &lt;span&gt;spacing&lt;/span&gt;
                &lt;/p&gt;
            
                &lt;script&gt;
                    //Selecting the element with id &quot;myPara&quot;
                    let myElement = document.getElementById(&quot;myPara&quot;);

                    //Now retrieving innerHTML of the selected element
                    let content = myElement.innerHTML;

                    console.log(content);

                    /* Output:
                    This element     has &lt;span&gt;spacing&lt;/span&gt;
                    */

                    //Let's try to change the content of selected element
                    let newPara = &quot;Hello Dosto&quot;;
                    myElement.innerHTML = newPara;
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
</pre>
<h3>OuterHTML</h3>
<p>
    The outerHTML property, on the other hand, represents the HTML content of the element itself along with its
    descendants. It includes the element's start tag, content, and end tag.
</p>
<p>
    As always le's go through an example.
</p>
<h4>
    Example 2</h4>

<pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;JavaScript&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;p id=&quot;myPara&quot;&gt;
                    This element     has &lt;span&gt;spacing&lt;/span&gt;
                &lt;/p&gt;
            
                &lt;script&gt;
                    //Selecting the element with id &quot;myPara&quot;
                    let myElement = document.getElementById(&quot;myPara&quot;);

                    //Now retrieving outerHTML of the selected element
                    let content = myElement.outerHTML;

                    console.log(content);

                    /* Output:
                    &lt;p id=&quot;myPara&quot;&gt;
                        This element     has &lt;span&gt;spacing&lt;/span&gt;
                    &lt;/p&gt;
                    */

                    //Let's try to change the content of selected element
                    // Setting outerHTML content (replaces the entire element)
                    let newPara = '&lt;div&gt;Hiii&lt;/div&gt;';
                    myElement.outerHTML = newPara;
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
    </pre>
<h3>textContent</h3>
<p>
    The textContent property retrieves or sets the text content of the specified element, but unlike innerText, it
    includes all text content, including child elements and their text.
</p>
<p>
    The textContent property returns the content as it in the HTML markup.</p>
<p>

    Like innerText, it also ignores the HTML tags. But it doesn't consider styles, so it returns the text even though
    it's hidden.
</p>
<p>
    Let's jump into an example.</p>
<h4>

    Example 4</h4>

<pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;JavaScript&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;div id=&quot;myPara&quot;&gt;
                    This element     has &lt;span&gt;spacing&lt;/span&gt;
            
                    &lt;p style=&quot;display: none&quot;&gt;This has a property Hidden&lt;/p&gt;
                &lt;/div&gt;
            
                &lt;script&gt;
                    //Selecting the element with id &quot;myPara&quot;
                    let myElement = document.getElementById(&quot;myPara&quot;);

                    //Now retrieving textContent of the selected element
                    let content = myElement.textContent;

                    console.log(content);

                    /* Output:
                        This element     has spacing
                
                        This has a property Hidden
                    */

                    //Let's try to change the content of selected element
                    let newPara = &quot;Hiii&quot;;
                    myElement.textContent = newPara;
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
    </pre>
<h2>Modifying HTML DOM</h2>
<p>
    Modifying the HTML DOM is one of the most intriguing aspects of web development. In this article, we will delve into
    methods for altering the HTML DOM by creating and appending new elements to it. This topic is pivotal, so fasten
    your seat belts as we dive into the content.
</p>
<h3>
    createElement() Method</h3>
<p>
    The document.createElement() method is a fundamental DOM manipulation technique in JavaScript. As the name suggests,
    it allows us to dynamically create HTML elements within the DOM. The method takes a single argument.
</p>
<p>
    The single argument should be the tag name of the element to be created, and it returns a reference to the newly
    created element.
</p>
<h4>
    Syntax 1</h4>
<pre>
    <code>
        let newElement = document.createElement(tagName);
    </code>
</pre>
<h3>appendChild() Method</h3>
<p>
    The appendChild() method belongs to the Node interface and is primarily used to add a node to the end of the list of
    children of a specified parent node.
</p>
<p>
    Its syntax is relatively simple:
</p>
<h4>
    Syntax 2</h4>
<pre>
    <code>
        parentNode.appendChild(node);
    </code>
</pre>
<p>parentNode is the node to which we want to append a new child node,</p>
<p>node is the node that we want to append.</p>
<h3>Points to remember</h3>
<ul>
    <li>
        The appendChild() method adds a node to the end of the list of children of a specified parent node.</li>
    <li>
        If the node already exists in the DOM, appendChild() moves it from its current position to the new position.
    </li>
    <li>
        This method only accepts a single node as an argument. To append multiple nodes, we need to call appendChild()
        multiple times.</li>
    <li>
        The node being appended must be of a type that is acceptable as a child of the specified parent node. For
        instance, we cannot append a &lt;div&gt; element as a child of a &lt;tr&gt; element.</li>
    <li>
        Always ensure that the parent node exists in the DOM before appending child nodes to it.</li>
</ul>
<h2>
    HTML DOM setAttribute() method
</h2>
<p>
    In the previous articles, we have learned various methods to add styling to a specific element. In this article, we
    are going to explore an incredible method that not only allows us to add styling but also different attributes to
    our element in the HTML DOM. Let's delve into this concept without delay and begin learning.
</p>
<h3>
    setAttribute()</h3>
<p>
    The setAttribute() method in JavaScript is used to add a new attribute or update an existing attribute on an HTML
    element. This method allows us to dynamically modify the attributes of HTML elements in our web page.
</p>
<h4>
    Syntax 1</h4>
<pre>
    <code>
        element.setAttribute(attributeName, attributeValue);
    </code>
</pre>
<ul>
    <li>
        element: The HTML element to which we want to add or update the attribute.
    </li>
    <li>
        attributeName: The name of the attribute we want to add or update it can be class, id, style, etc.</li>
    <li>
        value: The value to assign to the attribute.</li>
</ul>
<p>First fetch/select your element from the document using querySelector or getElementById or any other method, then
    apply the setAttribute method.
</p>
<h3>getAttribute()
</h3>
<p>
    The getAttribute() method in JavaScript is used to retrieve the value of a specified attribute on an HTML element.
    This method allows us to access the value of any attribute associated with an HTML element.
</p>
<h4>
    Syntax 2</h4>
<pre>
    <code>
        var attributeValue = element.getAttribute(attributeName);
    </code>
</pre>
<ul>
    <li>element: The HTML element from which we want to retrieve the attribute value.</li>
    <li>
        attributeName: The name of the attribute whose value we want to retrieve.</li>
</ul>
<h2>HTML DOM insertAdjacentElement() Method</h2>
<p>
    In the previous articles we have covered creation of new elements, addition of the newly created element in the HTML
    DOM using append method, we have also learned manipulating the various attributes of an element in HTML DOM. Now in
    this article we are going to explore one more method which provides us the flexibility to add a newly created
    element inside the HTML DOM at a specific position according to our will. Let's directly five into the article and
    level up ours concepts in Modern JavaScript.</p>
<h3>
    insertAdjacentElement()</h3>
<p>
    The insertAdjacentElement() method allows us to insert a given element into the DOM relative to a specified target
    element. It provides precise control over where the new element is inserted, offering four different insertion
    positions:</p>
<ul>
    <li>beforebegin: Insert the element before the targetElement itself.</li>
    <li>
        afterbegin: Insert the element just inside the targetElement, before its first child.</li>
    <li>
        beforeend: Insert the element just inside the targetElement, after its last child.</li>
    <li>
        afterend: Insert the element after the targetElement itself.</li>
</ul>
<p>Let's start with the syntax and learn each of the above insertion positions one by one.
</p>
<h4>
    Syntax
</h4>
<pre>
    <code>
        targetElement.insertAdjacentElement(position, newElement);
    </code>
</pre>
<ul>
    <li>targetElement: The element relative to which the insertion will occur.</li>
    <li>
        position: A string specifying the position of the insertion relative to the targetElement.</li>
    <li>
        newElement: The element to be inserted into the DOM.</li>
</ul>
<h4>beforebegin</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Insert Adjacent Element Before Begin&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
    
        &lt;div id="container"&gt;
            &lt;div id="existingElement"&gt;Existing Element&lt;/div&gt;
        &lt;/div&gt;
    
        &lt;script&gt;
            // Create a new element
            var newElement = document.createElement("div");
            newElement.textContent = "Welcome to CodeHelp";
    
            // Get the reference to the existing element
            var existingElement = document.getElementById("existingElement");
    
            // Insert the new element before the existing element
            existingElement.insertAdjacentElement('beforebegin', newElement);
        &lt;/script&gt;
    
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>
<p>This script will add a new
    &lt;div> element with the text "Welcome to CodeHelp" just before the existing &lt;div> element with the id
    "existingElement".
    The insertAdjacentElement() method is used to insert the new element before the existing one.</p>
<h4>afterbegin</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Insert Adjacent Element After Begin&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        
        &lt;div id="container"&gt;
            &lt;div id="existingElement"&gt;Existing Element&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;script&gt;
            // Create a new element
            var newElement = document.createElement("div");
            newElement.textContent = "Welcome to CodeHelp";
    
            // Get the reference to the existing element
            var existingElement = document.getElementById("existingElement");
    
            // Insert the new element after the existing element's begin
            existingElement.insertAdjacentElement('afterbegin', newElement);
        &lt;/script&gt;
        
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>
<p>'afterbegin', which instructs the browser to insert the new element after the beginning of the existing element.
    This will result in the new element being inserted as the first child of the existing element.
</p>
<h4>beforeend

</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Insert Adjacent Element Before End&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        
        &lt;div id="container"&gt;
            &lt;div id="existingElement"&gt;Existing Element&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;script&gt;
            // Create a new element
            var newElement = document.createElement("div");
            newElement.textContent = "Welcome to CodeHelp";
    
            // Get the reference to the existing element
            var existingElement = document.getElementById("existingElement");
    
            // Insert the new element before the end of the existing element
            existingElement.insertAdjacentElement('beforeend', newElement);
        &lt;/script&gt;
        
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>
<p>'beforeend', which instructs the browser to insert the new element just before the end of the existing element.
    This will result in the new element being appended as the last child of the existing element.</p>
<h4>afterend</h4>

<p>'afterend', which instructs the browser to insert the new element just after the end of the existing element.
    This will result in the new element being inserted as a sibling element immediately after the existing element.
</p>`,
        code: `
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Insert Adjacent Element After End&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        
        &lt;div id="container"&gt;
            &lt;div id="existingElement"&gt;Existing Element&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;script&gt;
            // Create a new element
            var newElement = document.createElement("div");
            newElement.textContent = "Welcome to CodeHelp";
    
            // Get the reference to the existing element
            var existingElement = document.getElementById("existingElement");
    
            // Insert the new element after the end of the existing element
            existingElement.insertAdjacentElement('afterend', newElement);
        &lt;/script&gt;
        
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>`,
    },
    {
        title: "Chapter 7: Event Handeling in JavaScript ",
        content: `<h1>Importance of JavaScript Events</h1>
<p>
    Have you ever wondered about the difference between the frontend and the backend?. Have you ever wondered what do we
    mean when we say 'we use JavaScript to implement the functionalities in our webpage'?. Have you ever felt what
    happens when we trigger something in our UI?. Have you ever felt how different tasks are performed on the same UI
    just by using different actions?. Welcome to the world of 'events', the JavaScript basics were just to make you
    understand how to code but now you'll learn how make webpages functional as per our requirements. In this section
    you'll learn why knowing about the events is soo much necessary!. You'll get to know new a lot of tools and
    JavaScript features. So let's not waste the time and jump into the introduction of events and understand the
    importance of events.
</p>
<h3>
    What are 'Events'?</h3>
<p>
    Events are occurrences that happen in the browser environment triggered by user actions or system-generated
    notifications.</p>
<p>An event is a signal that something has happened. It could be a user clicking a button, hovering over an element,
    pressing a key, or even a system event like the completion of an asynchronous task.
</p>
<h2>Types of Events</h2>
<p>
    JavaScript supports a wide range of events, categorized into different types such as Mouse Events, Keyboard Events,
    Form Events, Document/Window Events, and Custom Events. Each type of event corresponds to a specific user action or
    system notification.
</p>
<h3>
    Mouse Events</h3>
<ul>
    <li>click: The event occurs when the user clicks on an element.</li>
    <li>
        mouseover: The event occurs when the mouse pointer is moved onto an element.</li>
    <li>
        mouseout: The event occurs when the mouse pointer is moved out of an element.</li>
    <li>
        mousemove: The event occurs when the mouse pointer is moving while it is over an element.</li>
</ul>
<p>In the above four mentioned mouse events the most important one is the 'click' event. The click event is the most
    used event during our projects.
</p>
<h3>
    Keyboard Events</h3>
<ul>
    <li>
        keydown: The event occurs when the user is pressing a key down.
    </li>
    <li>
        keyup: The event occurs when the user releases a key.</li>
    <li>
        keypress: The event occurs when a key is pressed down and then released.</li>
</ul>
<h3>
    Form Events
</h3>
<ul>
    <li>
        submit: The event occurs when a form is submitted.</li>
    <li>
        change: The event occurs when the value of an element changes (for input, textarea, and select elements).</li>
    <li>
        input: The event occurs when an input element gets user input.</li>
</ul>
<h3>Window Events</h3>
<ul>
    <li>
        load: The event occurs when the browser has finished loading all the resources of the document.</li>
    <li>
        resize: The event occurs when the browser window changes size.</li>
    <li>
        scroll: The event occurs when the document view is scrolled.</li>
</ul>
<h3>Media Events</h3>
<ul>
    <li>
        play: The event occurs when the audio/video has been started or is no longer paused.</li>
    <li>
        pause: The event occurs when the audio/video has been paused.</li>
</ul>
<h3>
    Drag and Drop Events</h3>
<ul>
    <li>
        dragstart: The event occurs when the user starts to drag an element.</li>
    <li>
        dragend: The event occurs when the user has finished dragging the element.</li>
</ul>
<h2>Event Listeners in JavaScript</h2>
<p>
    Event listeners are a fundamental aspect of JavaScript programming, enabling developers to create dynamic and
    interactive web applications. They allow us to respond to user actions such as clicks, mouse movements, keyboard
    inputs, and more. In this article, we'll explore what event listeners are, how they work, and provide practical
    examples to illustrate their usage.</p>
<h3>

    What are 'Event Listeners'</h3>
<p>
    In JavaScript, an event listener is a function that waits for a specific event to occur and then executes a callback
    function in response. Event listeners are commonly used to respond to user interactions such as clicks, mouse
    movements, keyboard inputs, or changes in the state of an HTML element.</p>
<p>

    When the specified event occurs, the associated event listener is triggered, allowing developers to execute a
    callback function to perform certain actions in response to that event.</p>
<h3>How do Event Listeners Work?</h3>
<p>
    Event listeners are attached to HTML elements, listening for specific events such as clicks, mouse movements, key
    presses, form submissions, etc. When the specified event occurs, the associated callback function is executed.</p>
<h3>addEventListener()
</h3>
<p>
    In JavaScript, addEventListener() is a method used to attach an event handler to an element, enabling it to listen
    for specific events and execute code/callback function in response to those events.
</p>
<h4>
    Syntax 1</h4>
<pre>
    <code>
        element.addEventListener(event, callbackFunction, options);
    </code>
</pre>
<ul>
    <li>element: The HTML element to which the event listener will be attached.</li>
    <li>
        event: A string representing the type of event to listen for, such as "click", "mouseover", "keydown", etc.</li>
    <li>
        callbackFunction: The function to be executed when the event occurs.</li>
    <li>
        options (optional): An object containing options that specify characteristics about the event listener, such as
        once, capture, etc.
    </li>
</ul>
<h4>Example 1</h4>
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
            &lt;title&gt;Event Listener Example&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;button id="myButton"&gt;Click me&lt;/button&gt;
        
            &lt;script&gt;
                // Get the button element
                var button = document.getElementById("myButton");
    
                // Add event listener to the button
                button.addEventListener("click", function () {
                    button.style.backgroundColor = "orange";
                    console.log("Button Clicked");
                });
            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>
<p>In the above example, when the button with the ID "myButton" is clicked, the anonymous function passed to
    addEventListener() is executed, changing the background color of the button and printing a message on the console
    window.</p>
<h3>removeEventListener()</h3>
<p>
    removeEventListener() is the opposite of addEventListener() in JavaScript. It's used to remove an event listener
    that was previously attached to an element using addEventListener(). This method is essential for managing event
    handlers, especially when they are no longer needed to prevent memory leaks and optimize performance.
</p>
<h4>
    Syntax 2</h4>
<pre>
    <code>
        element.removeEventListener(event, callbackFunction, options);
    </code>
</pre>
<ul>
    <li>element: The HTML element from which the event listener should be removed.</li>
    <li>
        event: A string representing the type of event for which the listener was originally added.</li>
    <li>
        callbackFunction: The reference to the function that was used as the event listener.</li>
    <li>
        options (optional): An object containing options that specify characteristics about the event listener, such as
        once, capture, etc. This parameter should match the options passed to addEventListener().</li>
</ul>
<h4>Example 1</h4>

<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
            &lt;title&gt;Remove Event Listener Example&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;button id="myButton"&gt;Click me&lt;/button&gt;
        
            &lt;script&gt;
                // Get the button element
                var button = document.getElementById("myButton");
    
                // Function to handle button click
                function handleButtonClick() {
                    button.style.backgroundColor = "orange";
                    console.log("Button CLicked");
                }
    
                // Add event listener to the button
                button.addEventListener("click", handleButtonClick);
    
                // Remove event listener after 5 seconds
                setTimeout(function () {
                    button.removeEventListener("click", handleButtonClick);
                    alert("Event listener removed!");
                }, 5000);
            &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
    </pre>
<h2>The Event Object</h2>
<p>
    In JavaScript, the event object plays a crucial role in event handling and allows us to access information about
    events triggered by user interactions or the browser itself. In this article, we'll explore what the event object
    is, how it works, and provide practical examples to illustrate its usage.</p>
<h3>What is the Event Object?</h3>
<p>
    The event object is a built-in object in JavaScript that contains information about the event that has occurred. It
    provides details such as the type of event, the target element, mouse coordinates, keyboard keys pressed, and more.
</p>
<p>The event object is automatically passed as an argument to event handler functions when an event is triggered.</p>
<h3>How does the Event Object Work?</h3>
<p>
    When an event is triggered, the browser creates an event object and populates it with relevant information about the
    event. This event object is then passed to the event handler function associated with the event. We can access
    properties and methods of the event object to retrieve information about the event and perform actions accordingly.
</p>
<h4>
    Example 1 : Accessing Event Properties</h4>
<pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en"&gt;
            &lt;head&gt;
              &lt;meta charset="UTF-8"&gt;
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              &lt;title&gt;Event Object Example&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
              &lt;button id="myButton"&gt;Click Me&lt;/button&gt;
            
              &lt;script&gt;
                const button = document.getElementById('myButton');
        
                button.addEventListener('click', function (event) {
                    console.log('Event type:', event.type);
                    console.log('Target element:', event.target);
                    console.log('Mouse X coordinate:', event.clientX);
                    console.log('Mouse Y coordinate:', event.clientY);
                });
        
                /* Output :
                  Event type: click
                  Target element: &lt;button id="myButton"&gt;Click Me&lt;/button&gt;
                  Mouse X coordinate: 47
                  Mouse Y coordinate: 17
                */
              &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </code>
        </pre>

<p>In the above example, when the button is clicked, the event object is automatically passed to the event handler
    function.</p>
<p>

    We then access various properties of the event object, such as type, target, clientX, and clientY, to log
    information about the click event.
</p>
<h4>
    Example 2 : Preventing Default Behavior
</h4>
<p>In the above example, when the link is clicked, the event object is passed to the event handler function. We call the
    preventDefault() method on the event object to prevent the default behavior of following the event.</p>`,
        code: `
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
          &lt;meta charset="UTF-8"&gt;
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
          &lt;title&gt;Preventing Default Behavior&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;a href="https://www.example.com" id="myLink"&gt;Click Me&lt;/a&gt;
        
          &lt;script&gt;
            const link = document.getElementById('myLink');
    
            link.addEventListener('click', function (event) {
                event.preventDefault();
                console.log('Default behavior prevented');
            });
          &lt;/script&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>`,
    },
    {
        title: "Chapter 8: Asynchronous JavaScript ",
        content: `<h1>JavaScript 'performance.now()' method</h1>
<p>
    In the world of web development, optimizing performance is crucial for delivering a seamless user experience.
    JavaScript provides several tools and techniques to measure and improve the performance of your code. One such tool
    is the performance.now() method. In this article, we'll delve into the performance.now() method, understand its
    functionality, and explore practical examples of its usage.
</p>
<h2>
    Understanding performance.now()</h2>
<p>
    The performance.now() method is part of the Performance interface, which provides access to timing-related
    performance information. It returns a high-resolution timestamp measured in milliseconds, indicating the current
    time in relation to the start of the navigation of the document.
</p>
<h3>
    Usage and Syntax</h3>
<pre>
    <code>
        const startTime = performance.now();
        // Perform some task or execute code block
        const endTime = performance.now();
        
        const elapsedTime = endTime - startTime;
        console.log(\`Elapsed time: \${elapsedTime} milliseconds\`);
    </code>
</pre>
<h3>Example: Measuring Code Execution Time</h3>
<pre>
    <code>
        function timeConsumingTask() {
            let sum = 0;
            for (let i = 0; i &lt; 1000000; i++) {
                sum += i;
            }
            return sum;
        }
        
        const start = performance.now();
        const result = timeConsumingTask();
        const end = performance.now();
        
        console.log(\`Result: \${result}\`);
        console.log(\`Execution time: \${end - start} milliseconds\`);
    </code>
</pre>
<p>In the above example, we measure the execution time of the timeConsumingTask() function using performance.now().</p>
<h1>Reflow, Repaint and Document Fragment in JavaScript</h1>
<p>
    In web development, optimizing performance is crucial for delivering a seamless user experience. Two key concepts
    that directly impact performance, particularly in the context of rendering, are reflow and repaint. In this article,
    we'll explore what reflow and repaint are, how they affect performance, and techniques to minimize their impact on
    your web applications.</p>
<h3>

    Understanding Reflow and Repaint</h3>
<h4>
    Reflow (or Layout)</h4>
<p>
    Reflow is the process of recalculating the positions and geometries of elements in the document, which may be
    triggered by changes that affect layout, such as resizing the browser window, modifying DOM elements, or changing
    CSS styles that affect layout properties (e.g., width, height, margin, padding).</p>
<h4>Repaint</h4>
<p>
    Repaint occurs after reflow and involves updating the visual representation of affected elements on the screen. It
    doesn't involve changing the layout but rather updating the pixels to reflect changes in appearance, such as color,
    background, border, or visibility.</p>
<h4>

    How Reflow and Repaint Impact Performance</h4>
<p>
    Reflow and repaint operations are resource-intensive and can significantly affect the performance of your web
    application, particularly on devices with limited processing power or memory. Excessive reflows and repaints can
    lead to sluggishness, jank, and poor user experience. Therefore, it's essential to minimize these operations
    whenever possible.</p>
<h3>

    Techniques to Minimize Reflow and Repaint</h3>
<h4>
    Batch DOM Modifications</h4>
<p>
    Instead of making multiple individual DOM modifications, batch them together whenever possible to minimize the
    number of reflows triggered.</p>
<h4>Optimize CSS</h4>
<p>
    Reduce the complexity of CSS selectors and avoid inefficient CSS rules that trigger reflows unnecessarily. Minimize
    the use of CSS properties that trigger reflows, such as width, height, top, left, and position.</p>
<h4>

    Avoid unnecessary calculations</h4>
<p>
    Be mindful of JavaScript code that frequently queries the DOM or calculates element dimensions, as these can trigger
    reflows.</p>
<h4>

    Consider using virtual DOM libraries</h4>
<p>
    Libraries like React or Vue.js maintain a virtual representation of the DOM and efficiently update the real DOM only
    when necessary.</p>
<h4>Consider using virtual DOM libraries</h4>
<p>
    Libraries like React or Vue.js maintain a virtual representation of the DOM and efficiently update the real DOM only
    when necessary.</p>
<h4>

    Document Fragment</h4>
<p>
    A document fragment is a lightweight container that acts as a temporary holding area for DOM elements. It exists
    outside the main DOM tree, allowing us to construct a section of the document structure without immediately
    affecting the page layout.</p>
<h4>

    Key Benefits of Document Fragments:</h4>
<ul>
    <li>Improved Performance: By building a DOM structure within a fragment first, you can minimize expensive browser
        reflows and repaints that occur when directly modifying the live DOM. You append the entire fragment at once,
        triggering a single reflow.</li>
    <li>
        Reduced Memory Footprint: Document fragments are lightweight and don't incur the overhead of being part of the
        main DOM tree. This can be beneficial for memory-intensive operations involving large DOM structures.</li>
    <li>
        Code Organization: Fragments can help organize complex DOM manipulation logic, making your code more
        maintainable and easier to reason about.</li>
</ul>
<pre>
    <code>
        let fragment = document.createDocumentFragment();
    </code>
</pre>
<h4>Example</h4>
<h4>
    Inefficient Code</h4>
<pre>
    <code>
        // This code triggers a reflow for every paragraph element
        for (let i = 0; i &lt; 100; i++) {
          const paragraph = document.createElement('p');
          paragraph.textContent = 'New paragraph';
          document.body.appendChild(paragraph);
        }
    </code>
</pre>
<h4>Optimized Code (Using Document Fragment)</h4>
<pre>
    <code>
        const fragment = document.createDocumentFragment();
        for (let i = 0; i &lt; 100; i++) {
          const paragraph = document.createElement('p');
          paragraph.textContent = 'New paragraph';
          fragment.appendChild(paragraph);
        }
        document.body.appendChild(fragment);
    </code>
</pre>
<h2>The Event Loop</h2>
<p>
    The Event Loop is a fundamental concept that governs how JavaScript handles asynchronous operations, callbacks, and
    concurrency. In this article, we'll explore what the Event Loop is, how it works, and how to leverage it effectively
    in your code.</p>
<h3>

    What is the Event Loop?</h3>
<p>
    Before we get to know "Event Loop", we need to understand what an Event is?</p>
<p>

    An event is an announcement which is triggered as per the actions performed by the user or the browser.</p>
<p>

    We also need to keep some points in mind...</p>
<ul>
    <li>JavaScript is a Single-Threaded language.</li>
    <li>
        A single request is executed at one time.</li>
    <li>
        Until the execution of first request gets finished, the second request won't be touched</li>
    <li>
        This means JavaScript is a Synchronous language.</li>
</ul>
<p>Now, the problem here is sometimes we get some functions to execute inside our call stack which blocks the execution
    of next lined up requests which makes our program to blow off (HINDI - "FAT JAANA") and thus the next lined-up
    requests never get to the call stack, this is also known as Blocking.
</p>
<p>
    Let's consider the following example where the execution is happening in a synchronous way:</p>
<pre>
    <code>
        console.log("First request in the Call Stack");

        function article(){
            return article();
        }
        
        article();
        
        console.log("This request never gets on the call stack");
    </code>
</pre>
<p>Since the requests are getting up lined in a synchronous way the last line of code never gets up to the call stack,
    because the call stack is already blocked at the function execution.
</p>
<p>
    So, to tackle this problem we introduce "EVENT LOOP" to our JS which makes our execution Non-Blocking or ASYNC.
</p>
<h3>The Event Loop</h3>
<p>
    The Event Loop is the mechanism that continuously checks the Call Stack and the Task Queue. When the Call Stack is
    empty, the Event Loop moves tasks from the Task Queue to the Call Stack for execution. This process ensures that
    asynchronous operations are handled in a non-blocking manner while maintaining the single-threaded nature of
    JavaScript.</p>
<h4>Example</h4>
<pre>
    <code>
        console.log("First request on call stack");

        setTimeout(function(){
            console.log("After 1000ms this will get into task queue and there it'll wait for call stack to get empty");
        }, 1000);
        
        console.log("This request gets into call stack because the above function is Non-Blocking");
        
        /* Output : 
        First request on call stack
        This request gets into call stack because the above function is Non-Blocking
        After 1000ms this will get into task queue and there it'll wait for call stack to get empty
        */
    </code>
</pre>
<h2>'setTimeout()' method in JavaScript</h2>
<p>
    In the world of JavaScript, asynchronous programming plays a vital role in handling time-based events, such as
    delaying the execution of code or performing tasks at specified intervals. One of the core methods for achieving
    such functionality is setTimeout(). In this article, we'll explore what setTimeout() is, how it works, and various
    practical examples of its usage.</p>
<h3>

    Understanding setTimeout()</h3>
<p>
    The setTimeout() method is a built-in JavaScript function that allows us to schedule the execution of a function or
    the evaluation of an expression after a specified delay, measured in milliseconds. It provides a way to execute code
    asynchronously after a certain period, without blocking the execution of subsequent code.</p>
<h4>Syntax</h4>
<pre>
    <code>
        setTimeout(function, delay);
    </code>
</pre>
<ul>
    <li>function: This is the function (or an anonymous function) that will be executed after the delay. The function
        can take arguments like any other function.</li>
    <li>
        delay: This is a numeric value (in milliseconds) representing the time to wait before executing the function. 1
        second is equivalent to 1000 milliseconds.</li>
</ul>
<h2>Promises in JavaScript</h2>
<p>
    In modern JavaScript development, Promises play a crucial role in handling asynchronous operations, providing a
    cleaner and more intuitive way to manage asynchronous code compared to traditional callback-based approaches. In
    this article, we'll delve into the concept of Promises, understand how they work, explore their syntax, and discover
    best practices for utilizing them effectively in your code.
</p>
<h3>
    What are Promises?</h3>
<p>
    A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its
    resulting value. It allows us to write asynchronous code in a more sequential and readable manner.
</p>
<h3>
    Creating a Promise</h3>
<p>
    We can create a Promise using the Promise constructor, which takes a callback function with two parameters: resolve
    and reject.</p>
<pre>
    <code>
        const myPromise = new Promise((resolve, reject) => {
            // Asynchronous operation
            if (/* operation successful */) {
                resolve("Operation completed successfully");
            } else {
                reject("Operation failed");
            }
        });
    </code>
</pre>
<h3>Promise States</h3>
<p>
    A Promise can be in one of three states:</p>
<ul>
    <li>

        Pending: Initial state, neither fulfilled nor rejected.</li>
    <li>
        Fulfilled: The operation completed successfully.</li>
    <li>
        Rejected: The operation failed.
    </li>
</ul>
<h2>Callback Functions in JavaScript</h2>
<p>
    In JavaScript, callback functions are a powerful and versatile concept used extensively in asynchronous programming,
    event handling, and functional programming paradigms. Understanding callback functions is essential for writing
    efficient and flexible JavaScript code. In this article, we'll explore what callback functions are, how they work,
    and provide practical examples of their usage.</p>
<h3>What are Callback Functions?</h3>
<p>Callback functions are functions that are passed as arguments to other functions and are invoked after the
    completion of a certain task or at a specified event. They allow for the execution of code asynchronously or in
    response to events, enabling non-blocking behavior and enhancing code modularity.</p>
<h3>How Do Callback Functions Work?</h3>
<p>
    In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments,
    and returned from other functions. Callback functions leverage this feature by being passed as arguments to
    higher-order functions, which then invoke them when necessary.</p>
<h4>Example 1: Asynchronous Callback</h4>
<pre>
    <code>
        function fetchData(callback) {
            // Simulated asynchronous operation
            setTimeout(() => {
                const data = "Data fetched successfully";
                callback(data);
            }, 2000);
        }
        
        function processData(data) {
            console.log(\`Processing data: \${data}\`);
        }
        
        fetchData(processData);
    </code>
</pre>
<p>In the above example, fetchData() simulates an asynchronous operation (e.g., fetching data from an API) and accepts a
    callback function processData() as an argument. Once the data is fetched, the callback function is invoked with the
    retrieved data.</p>
<h4>Example 2: Event Handling with Callbacks</h4>
<pre>
    <code>
        const button = document.getElementById('myButton');

        function handleClick() {
            console.log("Button clicked");
        }
        
        button.addEventListener('click', handleClick);
    </code>
</pre>
<p>In the below example, handleClick() is a callback function registered to the click event of a button element. Whenever the button is clicked, the callback function is executed, logging "Button clicked" to the console.
</p>
`,
        code: `<pre>
    <code>
        const button = document.getElementById('myButton');

        function handleClick() {
            console.log("Button clicked");
        }
        
        button.addEventListener('click', handleClick);
    </code>
</pre>`,
    },
    {
        title: "Chapter 9: AJAX and Fectch API ",
        content: `<h1>What is AJAX and its importance?</h1>
<p>
    In the early days of the web, every user interaction meant a full page reload. Imagine clicking a button and waiting
    for the entire page to refresh just to see a single piece of information updated. Thankfully, those days are gone!.
    "Asynchronous JavaScript and XML(AJAX)" revolutionized web development by enabling dynamic and responsive web pages.
</p>
<h2>What is AJAX?</h2>
<p>
    AJAX is a set of web development techniques that enable web pages to fetch data asynchronously from a server without
    reloading the entire page. It leverages a combination of JavaScript, XMLHttpRequest (XHR) objects, and server-side
    technologies (e.g., JSON, XML, HTML, plain text) to exchange data with the server and update parts of the page
    dynamically.</p>
<ul>
    <li>Asynchronous Communication: Unlike traditional page reloads, AJAX allows data exchange between the browser and
        server in the background, without interrupting the user experience.</li>
    <li>JavaScript: JavaScript acts as the glue that binds everything together. It sends requests to the server,
        processes the received data, and updates the web page dynamically.</li>
    <li>XMLHttpRequest (XHR): This built-in browser object handles the communication between JavaScript and the server.
        It can send requests (GET, POST, etc.) and retrieve data in various formats like XML, JSON, or plain text.
        (While the name mentions XML, JSON is a more popular choice nowadays due to its lightweight nature).</li>
</ul>
<p>HTML DOM Manipulation: JavaScript interacts with the HTML Document Object Model (DOM) to update specific parts of the
    web page based on the received data.
</p>
<h3>
    Importance of AJAX in JavaScript</h3>
<p>
    AJAX plays a pivotal role in creating a more engaging and user-friendly web experience. Here's how:</p>
<ul>
    <li>Enhanced Responsiveness: By eliminating full page reloads, AJAX makes web pages feel faster and more responsive.
        Users can interact with the application seamlessly without waiting for the entire page to refresh.</li>
    <li>Improved User Experience: AJAX enables features like live search suggestions, auto-complete functionality,
        real-time chat applications, and dynamic content updates. This significantly improves the user's interaction
        with the web page.</li>
    <li>Reduced Server Load: Only the necessary data is exchanged between the browser and server, minimizing unnecessary
        server requests and improving overall application performance.</li>
</ul>
<h3>Example: Fetching Data with AJAX</h3>
<p>
    Let's illustrate the concept of AJAX with a simple example. Suppose we have a web page that displays a list of
    products. When the user clicks a button, we want to fetch additional product data from the server without reloading
    the page.</p>
<pre>
    <code>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AJAX Example</title>
            <script>
                function fetchProducts() {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'products.json', true);
                    xhr.onload = function () {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            var products = JSON.parse(xhr.responseText);
                            // Update the UI with fetched product data
                            console.log(products);
                        } else {
                            console.error('Failed to fetch products');
                        }
                    };
                    xhr.send();
                }
            </script>
        </head>
        <body>
            <h1>Product List</h1>
            <button onclick="fetchProducts()">Fetch Products</button>
        </body>
        </html>
        
    </code>
</pre>
<p>In the above example, when the user clicks the "Fetch Products" button, the fetchProducts function is triggered.
    Inside this function, we create a new XMLHttpRequest object, specify the URL of the server endpoint ('products.json'
    in this case), and define the onload event handler to process the response.
</p>
<p>
    Upon successful retrieval of data, we parse the JSON response and update the UI accordingly. If an error occurs
    during the AJAX request, we handle it appropriately.</p>
<h2>API (Application Programming Interface)</h2>
<p>
    APIs (Application Programming Interfaces) play a pivotal role in enabling communication and interaction between
    different software systems. But what exactly is an API, and why is it essential in the world of JavaScript
    programming? Let's explore the concept of APIs, their importance, and how they're utilized with examples in
    JavaScript.</p>
<h3>What is an API?</h3>
<p>
    An API (Application Programming Interface) acts as a messenger between different software applications. It's a set
    of rules and specifications that define how applications communicate with each other to exchange data or
    functionality.
</p>
<p>
    Imagine we're at a restaurant. We (the user) tell the waiter (the API) what we want to order (the request). The
    waiter relays our order to the kitchen (the other application) and brings back our food (the response). In this
    analogy, the menu (the API documentation) outlines the available dishes (functions) and how to order them (proper
    request format).
</p>
<p>
    In simpler terms, an API serves as an intermediary that facilitates the exchange of data and functionality between
    different software components, enabling seamless integration and interoperability.
</p>
<h3>
    Importance of APIs in JavaScript
</h3>
<ul>
    <li>Integration and Interoperability: APIs enable seamless integration between different software systems, allowing
        them to work together harmoniously. In web development, APIs facilitate communication between the client-side
        (front end) and server-side (back end) components of web applications.</li>
    <li>

        Access to External Services and Data: APIs provide developers with access to external services, data, and
        functionalities that they can leverage in their applications. This includes accessing data from third-party
        services such as social media platforms, weather APIs, payment gateways, and more.</li>
    <li>

        Enhanced Functionality: By leveraging APIs, developers can extend the functionality of their applications
        without reinventing the wheel. Instead of building complex features from scratch, developers can integrate
        pre-existing APIs to add new capabilities to their applications quickly.</li>
    <li>

        Streamlined Development: APIs abstract away the complexities of implementation, allowing developers to focus on
        building the core features of their applications without getting bogged down by low-level details. This
        streamlines the development process and accelerates time-to-market.</li>
    <li>

        Scalability and Flexibility: APIs enable modular and scalable architecture, allowing developers to build
        flexible, component-based applications that can easily adapt to changing requirements and scale with growing
        user demands.</li>
</ul>
<h4>Example: Fetching Data from a REST API</h4>
<pre>
    <code>
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
    </code>
</pre>
<h4>Integrating with a Weather API
</h4>
<pre>
    <code>
        const apiKey = 'YOUR_API_KEY';
        const city = 'New York';
        
        fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}\`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching weather data:', error));
    </code>
</pre>
<h2>JavaScript Async/Await</h2>
<p>
    Async and Await are powerful features introduced in ECMAScript 2017 (ES8) that simplify working with asynchronous
    JavaScript code, especially Promises. They provide a more concise and synchronous-looking syntax for handling
    asynchronous operations.
</p>
<h3>
    Async Function</h3>
<p>
    Traditionally, handling asynchronous tasks involved using callback functions, promises, or chaining then() methods.
    However, the introduction of async/await functions in ES2017 (ES8) has revolutionized asynchronous programming in
    JavaScript, offering a more concise, readable, and intuitive way to work with asynchronous code.
</p>
<p>
    The async keyword is used to define a function as asynchronous. When a function is declared with the async keyword,
    it always returns a Promise. Inside an async function, we can use the await keyword to pause the execution of the
    function until a promise is settled (resolved or rejected).
</p>
<h4>
    Syntax of async/await Functions</h4>
<pre>
    <code>
        async function myAsyncFunction() {
            try {
                const result = await asyncOperation();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
    </code>
</pre>
<ul>
    <li>async: The async keyword is used to define an async function, which returns a promise. It allows the function to
        use the await keyword to pause execution until a promise is resolved or rejected.</li>
    <li>await: The await keyword is used to pause the execution of an async function until a promise is settled (either
        resolved or rejected). It "awaits" the result of the promise, which can be assigned to a variable</li>
</ul>
<h4>Example: Fetching Data with async/await</h4>
<pre>
    <code>
        async function fetchData() {
            try {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchData();
    </code>
</pre>
<p>In the above example, fetchData() is an async function that fetches data from an API using the fetch() function. By
    using await, the function pauses execution until the promise returned by fetch() is resolved. Once the response is
    received, response.json() is awaited to parse the JSON data.</p>
<h2>Fetch API in JavaScript</h2>
<p>
    The Fetch API provides a modern interface for making HTTP requests in JavaScript. It supports both GET and POST
    requests, along with other HTTP methods. Let's explore how to make GET and POST requests using the Fetch API.</p>
<h3>What is the Fetch API?</h3>
<p>
    The Fetch API is a modern interface for fetching resources (such as JSON data, HTML files, images, etc.) across the
    network. It provides a more powerful and flexible alternative to the traditional XMLHttpRequest (XHR) object for
    making HTTP requests. The Fetch API is designed to be simpler to use, promise-based, and provides built-in support
    for handling JSON data.</p>
<h3>Usage of Fetch API</h3>
<h3>
    Making a GET Request</h3>
<pre>
    <code>
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    </code>
</pre>
<h4>Making a POST Request</h4>
<pre>
    <code>
        const postData = {
            username: 'example',
            password: 'password123'
        };
        
        fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    </code>
</pre>
<h4>Importance of Fetch API</h4>
<ul>
    <li>
        Simplicity and Ease of Use: The Fetch API offers a cleaner and more intuitive syntax compared to XHR, making it
        easier for developers to work with.</li>
    <li>
        Built-in JSON Support: Fetch API natively supports JSON data, simplifying the process of sending and receiving
        JSON
        data between client and server.</li>
    <li>
        Promises-based: Fetch API uses Promises, allowing for more concise and readable asynchronous code. This
        eliminates
        the need for complex callback functions and enhances code maintainability.</li>
    <li>
        Cross-Origin Resource Sharing (CORS): Fetch API supports CORS out of the box, enabling secure communication
        between
        different origins (domains) without the need for additional configurations.</li>
</ul>
<h2>Error Handling in JavaScript</h2>
<p>
    Error handling is a crucial aspect of JavaScript development, ensuring that our code gracefully handles unexpected
    situations and provides meaningful feedback to users and developers alike. In this comprehensive guide, we'll
    explore the importance of error handling, common types of errors in JavaScript, best practices for error handling,
    and various techniques to effectively manage errors in our codebase.
</p>
<h3>
    Why Error Handling Matters</h3>
<p>
    Error handling plays a vital role in writing robust and reliable JavaScript applications. It helps identify and
    address issues during development, improves code maintainability, and enhances the user experience by preventing
    crashes and unexpected behavior.
</p>
<h3>
    Common Types of Errors</h3>
<ul>
    <li>Syntax Errors: Occur when there's a mistake in the syntax of our code, preventing it from being executed.</li>
    <li>
        Runtime Errors: Occur during the execution of our code due to invalid operations, undefined variables, or
        unexpected input.</li>
    <li>
        Logic Errors: Occur when the code executes without throwing an error, but produces incorrect results due to
        flawed logic or incorrect assumptions.</li>
</ul>
<h4>Techniques for Error Handling</h4>
<h4>
    Understanding try...catch</h4>
<p>
    The try...catch statement is used to handle exceptions (errors) that occur within a block of code.</p>
<pre>
    <code>
        try {
            // Code that may or may not throw an error
          } catch (error) {
            // Code to handle the error
            console.error('An error occurred:', error.message);
          }
    </code>
</pre>
<p>In the above example, if an error occurs within the try block, it's caught by the catch block, and the error object
    is available for further processing.
</p>
<h3>
    Handling Specific Errors</h3>
<p>
    We can catch specific types of errors using multiple catch blocks.</p>
<pre>
    <code>
        try {
            // Code that may or may not throw an error
          } catch (TypeError) {
            console.error('A type error occurred');
          } catch (error) {
            console.error('An error occurred:', error.message);
          }
    </code>
</pre>
<p>Here, the first catch block catches specific TypeError, while the second one handles any other type of error.
</p>
<h4>
    try...catch...finally</h4>
<p>
    The finally block allows us to execute code, regardless of whether an error occurs or not.</p>
<pre>
    <code>
        try {
            // Code that may throw an error
          } catch (error) {
            // Code to handle the error
          } finally {
            // Code to execute regardless of errors
          }
    </code>
</pre>
<h4>Async/Await Error Handling</h4>
<p>
    When using async/await, we can use try...catch for error handling.</p>
<pre>
    <code>
        async function fetchData() {
            try {
              const data = await fetch('https://api.example.com/data');
              return await data.json();
            } catch (error) {
              console.error('An error occurred:', error.message);
              throw error;
            }
          }
    </code>
</pre>
<h4>catch Methods</h4>
<p>
    In addition to using try...catch blocks, some asynchronous operations in JavaScript, such as promises, offer a .catch() method for error handling.</p>

<ul>
    <li>The then() method is used to handle the resolved state of a promise.</li>
    <li>
        The catch() method is used to handle the rejected state of a promise or any error that occurs during promise resolution.</li>
</ul>
<p>Using .catch() allows for cleaner and more concise error handling, especially with promise chains.</p>
`,
        code: `<pre>
    <code>
        somePromise.then((result) => {
            // Code executed if the promise resolves successfully
        }).catch((error) => {
            // Code executed if the promise is rejected or an error occurs
            console.error('An error occurred:', error.message);
        });
    </code>
</pre>`,
    },
    {
        title: "Chapter 10: Advanced JavaScript",
        content: `<h1>Browser Storage in JavaScript</h1>
<p>
    In web development, browser storage mechanisms play a crucial role in storing and retrieving data locally on the
    client-side. JavaScript provides us with several browser storage options, each with its own strengths and use cases.
    In this article, we'll delve into browser storage in JavaScript, covering the localStorage, sessionStorage, along
    with examples and best practices for their usage.</p>
<h2>localStorage</h2>
<p>
    localStorage provides a simple key-value storage mechanism that persists data even after the browser is closed. Data
    stored in localStorage remains accessible until explicitly removed or cleared.</p>
<pre>
    <code>
        // Storing data in localStorage
        localStorage.setItem('username', 'John');
        
        // Retrieving data from localStorage
        const username = localStorage.getItem('username');
        console.log(username); // Output: John
        
        // Removing data from localStorage
        localStorage.removeItem('username');
        
        // Clearing all data from localStorage
        localStorage.clear();
    </code>
</pre>
<h2>sessionStorage</h2>
<p>
    sessionStorage is similar to localStorage but scoped to the current browser tab or window. Data stored in
    sessionStorage is cleared when the tab or window is closed.</p>
<pre>
    <code>
        // Storing data in sessionStorage
        sessionStorage.setItem('theme', 'dark');
        
        // Retrieving data from sessionStorage
        const theme = sessionStorage.getItem('theme');
        console.log(theme); // Output: dark
        
        // Removing data from sessionStorage
        sessionStorage.removeItem('theme');
        
        // Clearing all data from sessionStorage
        sessionStorage.clear();
    </code>
</pre>
<h3>Best Practices for Browser Storage</h3>
<ul>
    <li>
        Data Size: Be mindful of the data size stored in browser storage to prevent exceeding storage limits and
        impacting performance.</li>
    <li>
        String-Only Storage: localStorage and sessionStorage can only store strings. If we need to store more complex
        data structures like objects or arrays, consider serializing them using JSON.stringify() before saving and
        deserializing them using JSON.parse() upon retrieval.</li>
    <li>
        Security: Avoid storing sensitive or critical data (e.g., passwords, authentication tokens) in browser storage
        due to potential security risks.</li>
    <li>
        Cross-Browser Compatibility: Test your code across different browsers to ensure compatibility, as browser
        storage APIs may have slight variations in behavior and implementation.</li>
    <li>
        Error Handling: Implement error handling mechanisms to gracefully handle storage-related errors and provide
        feedback to users when necessary.</li>
</ul>
<h2>Web API in JavaScript</h2>
<p>
    Web APIs (Application Programming Interfaces) play a pivotal role in modern web development, enabling us to harness
    the capabilities of web browsers and access a wide range of functionalities. In this article, we'll delve into what
    Web APIs are, how they work, and explore examples of their usage in JavaScript applications.
</p>
<h3>
    What are Web APIs?</h3>
<p>
    Web APIs are sets of rules and protocols that allow different software applications to communicate with each other.
    In the context of web development, Web APIs provide a standardized interface for interacting with web browsers and
    accessing various features and services provided by the browser environment.
</p>
<h3>
    Types of Web APIs</h3>
<ul>
    <li>Geolocation API: The Geolocation API allows web applications to access the user's geographical location,
        providing information such as latitude, longitude, and altitude. It enables location-based services and mapping
        functionalities in web applications.</li>
    <li>
        Canvas and WebGL APIs: Canvas and WebGL APIs enable dynamic rendering of graphics and animations in web
        browsers. They provide low-level interfaces for drawing shapes, images, and animations directly on the webpage.
    </li>
    <li>
        Web Storage APIs: Web Storage APIs (such as localStorage and sessionStorage) provide mechanisms for storing data
        locally in the browser, allowing developers to persist user preferences, settings, and application state across
        sessions.</li>
    <li>
        HTTP APIs: Hypertext Transfer Protocol (HTTP) APIs enable communication between web clients and servers over the
        internet. They provide methods for making HTTP requests (e.g., GET, POST, PUT, DELETE) and handling responses.
    </li>
    <li>
        Web Audio API: The Web Audio API allows developers to create and manipulate audio content in web applications,
        enabling features such as audio playback, synthesis, and spatial audio effects.</li>
</ul>
<h3>Geolocation API</h3>
<p>
    The Geolocation API is a feature provided by web browsers that allows web applications to access the user's
    geographical location. This API enables various location-based services, such as displaying maps, finding nearby
    businesses, or providing location-aware content.
</p>
<h4>
    Syntax</h4>

<p>When using the Geolocation API, the user's browser will typically prompt them to grant permission for the website to
    access their location. Users can choose to allow or deny this request. Additionally, users can revoke this
    permission at any time through their browser settings.</p>`,
        code: `<pre>
    <code>
        if ("geolocation" in navigator) {
            // Geolocation is supported
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            // Geolocation is not supported
        }
        
        function successCallback(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
        }
        
        function errorCallback(error) {
            console.error("Error getting user's location:", error);
        }
    </code>
</pre>`,
    },
];

const practiceQuestions = [
    {
        chapterIndex: 1, //Introduction to Javascript
        questions: [
            {
                question: "Question 1: Who developed JavaScript and in how many days?",
                solution: `JavaScript was developed by Brendan Eich at Netscape Communications in just 10 days.`,
            },
            {
                question:
                    "What were the initial names of JavaScript before it became known as JavaScript?",
                solution: `JavaScript was initially named 'Mocha' and later 'LiveScript' before it was called 'JavaScript'.`,
            },
            {
                question:
                    "What distinguishes a scripting language from a programming language?",
                solution: `Scripting languages are interpreted and executed line-by-line at runtime, allowing for quicker development and
easier debugging. Programming languages are compiled into machine code before execution.
`,
            },
            {
                question:
                    "What frameworks and libraries have revolutionized frontend development with JavaScript?",
                solution: `Frameworks and libraries such as AngularJS, ReactJS, and Vue.jshave revolutionized frontend development.`,
            },
            {
                question:
                    "What is Node.jsand how has it expanded the use of JavaScript?",
                solution: `Node.jsis a powerful JavaScript runtime environment that allows developers to run JavaScript code server-side,
thus enabling the development of scalable, high-performance web applications, APIs, and backend services.`,
            },
        ],
    },
    {
        chapterIndex: 2, //Basics of JavaScript
        questions: [
            {
                question: 'Write a "Hello, World!" program in JavaScript.',
                solution: `console.log("Hello, World!");`,
            },
            {
                question: "How do you declare variables in JavaScript?",
                solution: `var name = "John";
    let age = 30;
     const city = "New York";`,
            },
            {
                question: "What are the basic data types in JavaScript?",
                solution: `The basic data types are String, Number, Boolean, Object, Undefined, and Null.`,
            },
            {
                question:
                    "Write a function in JavaScript that takes a name as a parameter and returns a greeting message.",
                solution: `function greet(name) {
    return "Hello, " + name;
}
`,
            },
            {
                question: "How do you write an if-else statement in JavaScript?",
                solution: `let age = 20;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
`,
            },
            {
                question:
                    "Write a for loop in JavaScript to print numbers from 1 to 5.",
                solution: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}
`,
            },
        ],
    },
    {
        chapterIndex: 3, //Datatypes in JavaScript
        questions: [
            {
                question:
                    "What is the difference between null and undefined in JavaScript?",
                solution: `undefined means a variable has been declared but not yet assigned a value.

null is an assignment value that represents "no value" or "no object". It is a deliberate non-value.`,
            },
            {
                question: "How do let, const, and var differ when declaring variables?",
                solution: `var is function-scoped, can be re-declared, and is prone to hoisting.

let is block-scoped, cannot be re-declared within the same scope, and is also hoisted but not initialized.

const is block-scoped, cannot be re-declared or re-assigned, and is hoisted but not initialized.`,
            },
            {
                question:
                    "What are the key features of JavaScript's prototype-based inheritance?",
                solution: `Objects can inherit properties directly from other objects.

Each object has a prototype property that points to its prototype object.

It allows for sharing properties and methods across instances without duplication.`,
            },
            {
                question:
                    "Can you explain the concept of 'hoisting' in JavaScript? Solution:",
                solution: `Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Variable and function declarations are hoisted, but variable assignments are not.

This means you can use functions and variables before they are declared in the code.`,
            },
            {
                question:
                    "Why are functions considered first-class citizens in JavaScript?",
                solution: `Functions can be assigned to variables.

They can be passed as arguments to other functions.

They can be returned from other functions.

This makes functions highly flexible and central to JavaScript's functional programming style.`,
            },
        ],
    },
    {
        chapterIndex: 4, //Loops in JavaScript
        questions: [
            {
                question: "How do you create a for loop to print numbers from 1 to 10?",
                solution: `for (let i = 1; i <= 10; i++) {
    console.log(i);
}
`,
            },
            {
                question: "How can you use a while loop to print numbers from 1 to 10?",
                solution: `let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
`,
            },
            {
                question: "Write a do...while loop that prints numbers from 1 to 10.",
                solution: `let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
`,
            },
            {
                question:
                    "How do you use a for...in loop to iterate over the properties of an object?",
                solution: `const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(\`\${key}: \${obj[key]}\`);
}
`,
            },
            {
                question: "How can a for...of loop be used to iterate over an array?",
                solution: `const array = [10, 20, 30, 40];
for (let value of array) {
    console.log(value);
}
`,
            },
        ],
    },
    {
        chapterIndex: 5, //JavaScript Feactures
        questions: [
            {
                question: "How to reverse a string in JavaScript?",
                solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
`,
            },
            {
                question: "How to check if a number is even or odd in JavaScript?",
                solution: `function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false
`,
            },
            {
                question: "How to find the largest number in an array in JavaScript?",
                solution: `function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([1, 2, 3, 4, 5])); // Output: 5
`,
            },
            {
                question: "How to remove duplicates from an array in JavaScript?",
                solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
`,
            },
            {
                question: "How to sort an array of numbers in JavaScript?",
                solution: `function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]
`,
            },
        ],
    },
    {
        chapterIndex: 6, //JavaScript HTMLDOM
        questions: [
            {
                question:
                    "Accessing Elements: You can access elements in the DOM using different methods.",
                solution: `// Example: Selecting an element by ID
var element = document.getElementById("myElement");

// Example: Selecting elements by class name
var elements = document.getElementsByClassName("myClass");

// Example: Selecting elements by tag name
var tags = document.getElementsByTagName("div");
`,
            },
            {
                question:
                    "Modifying Content: Change the content of HTML elements dynamically.",
                solution: `// Example: Changing the inner HTML of an element
element.innerHTML = "New content here!";

// Example: Changing the text content of an element
element.textContent = "Updated text!";
`,
            },
            {
                question: "Changing Styles: Adjust the styles of HTML elements.",
                solution: `// Example: Changing the background color of an element
element.style.backgroundColor = "lightblue";

// Example: Setting multiple styles
element.style.cssText = "color: red; font-size: 20px;";
`,
            },
            {
                question:
                    "Handling Events: Respond to user actions by adding event listeners to elements.",
                solution: `// Example: Adding a click event listener to an element
element.addEventListener("click", function() {
    alert("Element was clicked!");
});

// Example: Adding a mouseover event listener
element.addEventListener("mouseover", function() {
    element.style.color = "green";
});
`,
            },
            {
                question:
                    "Creating and Removing Elements: Dynamically create and remove HTML elements.",
                solution: `// Example: Creating a new element
var newElement = document.createElement("div");
newElement.textContent = "I am a new element!";
document.body.appendChild(newElement);

// Example: Removing an element
var elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);
`,
            },
        ],
    },
    {
        chapterIndex: 7, //Event Handeling in JavaScript
        questions: [
            {
                question: "Button Click",
                solution: `document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
`,
            },
            {
                question: "Mouse Over",
                solution: `document.getElementById('myElement').addEventListener('mouseover', function() {
    console.log('Mouse over the element!');
});
`,
            },
            {
                question: "Key Down",
                solution: `document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});
`,
            },
            {
                question: "Form Submission",
                solution: `document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
`,
            },
            {
                question: "Window Load",
                solution: `window.addEventListener('load', function() {
    console.log('Page fully loaded');
});
`,
            },
            {
                question: "Input Change",
                solution: `document.getElementById('myInput').addEventListener('change', function() {
    console.log('Input value changed!');
});
`,
            },
        ],
    },
    {
        chapterIndex: 8, //Asynchronous JavaScript
        questions: [
            {
                question: "How do you use callbacks to handle asynchronous operations?",
                solution: `function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});
`,
            },
            {
                question: "How do you use Promises to handle asynchronous operations?",
                solution: `let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 2000);
});

fetchData.then((data) => {
    console.log(data);
});
`,
            },
            {
                question: "How do you use async/await for asynchronous operations?",
                solution: `async function fetchData() {
    let data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
    console.log(data);
}

fetchData();
`,
            },
            {
                question: "How do you use the Fetch API to make network requests?",
                solution: `async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}

fetchData();
`,
            },
            {
                question: "How do you handle errors in asynchronous code?",
                solution: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
`,
            },
            {
                question: "What is the Event Loop and how does it work?",
                solution: `console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');
`,
            },
        ],
    },
    {
        chapterIndex: 9, //AJAX and Fectch API
        questions: [
            {
                question: "Fetching Data from an API(AJAX)",
                solution: `let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
`,
            },
            {
                question: "Fetching Data from an API(Fetch)",
                solution: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`,
            },
            {
                question: "Submitting Form Data(AJAX)",
                solution: `let xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.example.com/submit", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send(JSON.stringify({ name: "John", message: "Hello!" }));
`,
            },
            {
                question: "Submitting Form Data(Fetch)",
                solution: `fetch("https://api.example.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", message: "Hello!" }),
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`,
            },
        ],
    },
    {
        chapterIndex: 10, //Advanced JavaScript
        questions: [
            {
                question: "Storing User Preferences with Local Storage:",
                solution: `// Save user theme preference to local storage
localStorage.setItem('theme', 'dark');

// Retrieve user theme preference from local storage
let theme = localStorage.getItem('theme');
console.log('User theme preference:', theme);
`,
            },
            {
                question: "Session Storage for Temporary Data:",
                solution: `// Save session data
sessionStorage.setItem('sessionToken', 'abc123');

// Retrieve session data
let sessionToken = sessionStorage.getItem('sessionToken');
console.log('Session Token:', sessionToken);

// Clear session storage
sessionStorage.clear();
`,
            },
            {
                question: "IndexedDB for Storing Complex Data:",
                solution: `let request = indexedDB.open('userDatabase', 1);

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id' });
};

request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction('users', 'readwrite');
    let store = transaction.objectStore('users');
    let user = { id: 1, name: 'John Doe', age: 30 };
    store.add(user);
};
`,
            },
            {
                question: "Using Cookies for User Authentication:",
                solution: `// Set a cookie with an expiration date
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Read the cookie
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
let username = getCookie("username");
console.log('Username from cookie:', username);
`,
            },
            {
                question: "Clearing Data from Local Storage:",
                solution: `let request = indexedDB.open('userDatabase', 1);

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id' });
};

request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction('users', 'readwrite');
    let store = transaction.objectStore('users');
    let user = { id: 1, name: 'John Doe', age: 30 };
    store.add(user);
};
`,
            },
        ],
    },
];

const notes = [
    {
        chapterIndex: 1, //Introduction to Javascript
        notes: [
            " JavaScript Origin: Initially developed in 10 days by Brendan Eich at Netscape Communications, originally named 'Mocha', then 'LiveScript', and finally 'JavaScript'",

            "JavaScript Usage: Widely used in web development for implementing functionalities within web applications.",

            "JavaScript Evolution: Initially designed for dynamic content and interactivity in web pages, it has now expanded with HTML5, CSS3, and frameworks like AngularJS, ReactJS, and Vue.js.",

            "JavaScript and Node.js: With Node.js, JavaScript can be used for server-side applications, making it versatile for both client-side and server-side development.",

            "JavaScript Classification: JavaScript is both a scripting language and a light-weight programming language.",

            "Scripting vs Programming Languages: Scripting languages are interpreted and used for quicker development cycles, while programming languages are compiled.",

            "JavaScript’s Versatility: Used for client-side scripting in web browsers and server-side scripting with platforms like Node.js.",

            "Client-Side and Server-Side: Historically client-side but now also used for server-side applications thanks to Node.js.",

            "JavaScript Engines: Popular engines include V8 (Google), SpiderMonkey (Mozilla Firefox), JavaScriptCore (Safari), and Chakra (Microsoft Edge).",

            "Dynamic Web Experience: JavaScript makes web pages interactive, handling forms, animations, and reacting to user actions.",
        ],
    },
    {
        chapterIndex: 2, //Basics of JavaScript
        notes: [
            "Variables: Used to store data values which can be reused throughout the program. JavaScript uses var, let, and const to declare variables.",

            "Data Types: The primary types of data in JavaScript include strings (text), numbers, booleans (true/false), objects, undefined, and null.",

            "Operators: Symbols that perform operations on variables and values. Examples include arithmetic operators for calculations, comparison operators to compare values, and logical operators for logical operations.",

            "Functions: Blocks of code that perform a specific task and can be executed when called. Functions help in organizing code and reusing it efficiently.",

            "Events: Actions or occurrences that happen in the browser, which JavaScript can react to, like clicking a button, loading a page, or submitting a form.",

            "Control Structures: These include conditional statements like if, else if, and else to execute code based on certain conditions, and loops like for, while, and do...while for repeated execution of code blocks.",

            "Arrays: Data structures used to store multiple values in a single variable, where each value can be accessed using an index.",

            "Objects: Collections of properties, each with a key and a value. Objects are used to store related data and functions together. ",
        ],
    },
    {
        chapterIndex: 3, //Datatypes in JS
        notes: [
            "Dynamic Typing: JavaScript variables can hold different types of data at different times. This flexibility allows developers to write more flexible code but requires careful handling to avoid runtime errors.",

            "Functions as First-Class Citizens: In JavaScript, functions are treated as objects. This means they can be assigned to variables, passed as arguments, and returned from other functions, giving developers powerful tools for creating modular and reusable code.",

            "Prototype-Based Inheritance: JavaScript uses a unique inheritance model where objects can directly inherit properties and methods from other objects. This contrasts with classical inheritance used in many other programming languages.",

            "=Asynchronous Programming: JavaScript provides robust support for asynchronous operations, enabling developers to write non-blocking code. This is essential for tasks like network requests or reading files, where operations can take time and would otherwise halt the execution of code.",

            "Event-Driven Nature: JavaScript is built to handle events efficiently, especially in the context of web development. It allows developers to create interactive applications that respond to user actions such as clicks, typing, and mouse movements.",
        ],
    },
    {
        chapterIndex: 4, //loops in JS
        notes: [
            "Types of Loops: JavaScript has several loop types, including for, while, do...while, and the ES6 additions for...of and for...in.",
            "For Loop: Ideal for iterating a known number of times, typically used with arrays.",

            "While Loop: Continues running as long as the specified condition is true. Useful when the number of iterations isn't predetermined.",

            "Do...While Loop: Similar to while loops, but guarantees at least one iteration since the condition is evaluated after the loop body.",

            "For...In Loop: Used to iterate over the properties of an object (enumerable properties).",

            "For...Of Loop: Introduced in ES6, it iterates over iterable objects like arrays, strings, and more.",

            "Break Statement: Used to exit a loop before it has iterated through all its items.",

            "Continue Statement: Skips the current iteration and proceeds to the next iteration of the loop.",

            "Nested Loops: Loops within loops, useful for working with multi-dimensional arrays or complex data structures.",

            "Performance Considerations: Choosing the right loop can impact performance, especially in large-scale applications or complex operations. The most efficient loop depends on the specific use case.",
        ],
    },
    {
        chapterIndex: 5, //JavaScript Feactures
        notes: [
            "Asynchronous Programming: JavaScript supports asynchronous programming through callbacks, promises, and async/await, allowing for non-blocking operations that improve performance and user experience.",

            "First-Class Functions: Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.",

            "Closures: Closures are functions that remember the scope in which they were created. This allows for data encapsulation and the creation of private variables.",

            "Prototype-Based Inheritance: Unlike class-based languages, JavaScript uses prototypes for inheritance, enabling objects to inherit properties and methods from other objects.",

            "Event-Driven Programming: JavaScript is heavily used for event-driven programming, especially in web development, where actions like clicks, keyboard inputs, and timeouts can trigger specific functions.",

            "Dynamic Typing: JavaScript is dynamically typed, meaning variable types are determined at runtime, which provides flexibility in coding but requires careful handling to avoid type-related errors.",
        ],
    },
    {
        chapterIndex: 6, //JavaScript HTMLDOM
        notes: [
            "Accessing Elements: You can select and manipulate elements within the HTML document using various methods to interact with the DOM structure.",

            "Modifying Content: JavaScript allows you to dynamically change the content of any HTML element, making your web pages interactive and responsive to user input.",

            "Changing Styles: You can alter the visual styling of elements, such as colors, fonts, and layouts, directly through JavaScript, offering dynamic visual updates.",

            "Managing Classes: Classes can be added, removed, or toggled on elements, providing a way to apply CSS styles conditionally based on user actions or other criteria.",

            "Handling Events: JavaScript can listen for and respond to user actions (like clicks, key presses, and form submissions) to create a more engaging user experience.",

            "Creating and Removing Elements: You can generate new HTML elements or remove existing ones, which helps in building dynamic content and interfaces.",
        ],
    },
    {
        chapterIndex: 7, //Event Handeling in JavaScript
        notes: [
            "Events Definition: Events are actions or occurrences that happen in the browser window, such as clicks, key presses, or page loads.",

            "Event Listeners: These are methods that wait for a specific event to occur on a particular element and then execute a function in response.",

            "Types of Events: Common events include click, mouseover, mouseout, keydown, and load.",

            "Event Handling Steps: The basic process involves selecting an HTML element, attaching an event listener to it, and defining a function to handle the event.",

            "Inline vs. External Handling: Events can be handled directly within HTML tags using attributes like onclick, but using external or internal script files is a best practice for better code organization.",

            "Event Propagation: Events have a life cycle involving bubbling and capturing phases, determining the order in which event handlers are executed.",

            "Advanced Techniques: Includes creating custom events, removing event listeners, and understanding event propagation for more complex interactions.",
        ],
    },
    {
        chapterIndex: 8, //Asynchronous JavaScript
        notes: [
            "Callbacks: Functions passed as arguments to be executed once an asynchronous operation is complete.",

            "Promises: Objects representing eventual completion or failure of an asynchronous operation, allowing chaining with .then() and .catch().",

            "Async/Await: Syntactic sugar on top of promises, enabling writing asynchronous code as if it were synchronous.",

            "Fetch API: Built-in browser API for making network requests, replacing older methods like XMLHttpRequest.",

            "Event Loop: Mechanism that handles asynchronous operations, allowing JavaScript to run non-blocking code.",

            "Error Handling: Asynchronous code requires careful error handling using .catch() for promises or try...catch for async/await.",

            "Concurrency: Asynchronous JavaScript allows multiple operations to be in progress at the same time, enhancing performance and responsiveness.",
        ],
    },
    {
        chapterIndex: 9, //AJAX and Fectch API
        notes: [
            "Asynchronous Updates: Allows parts of a web page to be updated without reloading the whole page.",

            "XMLHttpRequest: Uses the traditional XMLHttpRequest object for making HTTP requests.",

            "Versatile Data Formats: Can handle JSON, XML, HTML, and plain text.",

            'Callback Functions: Relies heavily on callback functions for handling responses, which can lead to "callback hell." ',

            "Modern Approach: Provides a more modern and clean approach to making web requests.",

            "Promise-Based: Uses Promises to handle asynchronous operations, making the code easier to read and manage.",

            "Simpler Syntax: Offers a more straightforward and concise syntax compared to XMLHttpRequest.",

            "Flexible Response Handling: Can easily handle various response types such as JSON, blobs, and text.",
        ],
    },
    {
        chapterIndex: 10, //Advanced JavaScript
        notes: [
            "Local Storage: Stores data with no expiration date. Ideal for persisting small amounts of data over time, such as user settings.",

            "Session Storage: Similar to local storage but clears data when the page session ends. Suitable for temporary data specific to a single browsing session.",

            "Cookies: Small data files stored on the client side. They can be set to expire and are sent to the server with every HTTP request. Used for things like tracking and user authentication.",

            "IndexedDB: A low-level API for storing large amounts of structured data. It’s more complex than local or session storage but allows for more powerful storage capabilities.",

            "WebSQL: An SQL-based database for client-side storage. Deprecated and not recommended for new projects.",

            "Storage Limits: Different browsers have varying limits on the amount of data that can be stored. Generally, local storage and session storage can hold around 5-10MB per origin.",

            "Security: Data stored in local storage, session storage, and cookies can be accessed via JavaScript, so sensitive information should be stored securely and encrypted if necessary.",

            "Synchronous vs. Asynchronous: Local storage and session storage are synchronous operations, which means they can block the main thread. IndexedDB operations, on the other hand, are asynchronous.",
        ],
    },
];

const articles = [
    {
        chapterIndex: 0,
        articles: [
            "The History of C Programming",
            "Understanding Memory Management in C",
            "Best Practices for Writing Clean C Code",
        ],
    },
    {
        chapterIndex: 1,
        articles: ["", ""],
    },
    {
        chapterIndex: 2,
        articles: ["", ""],
    },
];

window.addEventListener("DOMContentLoaded", () => {
    // Initialize tab switching functionality
    handleTabSwitching();

    // Render chapters in the sidebar
    renderChapters(chapters);

    // Set chapter link listeners
    setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
});
