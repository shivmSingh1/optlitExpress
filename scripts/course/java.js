import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Chapters
const chapters = [
    {
        title: "Chapter 1: Introduction to Java and Its Features",
        content: `
<p><strong>Java</strong> is a high-level, object-oriented programming language used for developing platform-independent applications.<br><strong>Key Features:</strong></p>
<ul>
    <li><strong>Platform-independent:</strong> Write Once, Run Anywhere (WORA) using the Java Virtual Machine (JVM).</li>
    <li><strong>Object-Oriented:</strong> Supports OOP principles like inheritance, polymorphism, etc.</li>
    <li><strong>Robust:</strong> Handles errors with strong memory management.</li>
    <li><strong>Secure:</strong> Provides security features like bytecode verification.</li>
    <li><strong>Multithreaded:</strong> Supports concurrent execution of threads.</li>
</ul>
<hr>
<h3>2. <strong>Setting Up the Environment</strong></h3>
<ol>
    <li><strong>Install JDK</strong> (Java Development Kit): Download and install the latest version from <a rel="noopener" target="_new" href="https://www.oracle.com">Oracle&apos;s&nbsp;website</a>.</li>
    <li><strong>Set Path:</strong> Configure the environment variable (<code>JAVA_HOME</code>) to point to the JDK installation directory.</li>
    <li><strong>Install an IDE:</strong> Popular IDEs like IntelliJ IDEA, Eclipse, or NetBeans help write and debug code easily.</li>
</ol>
<hr>
<h3>3. <strong>Data Types, Variables, and Operators</strong></h3>
<ul>
    <li>
        <p><strong>Data Types:</strong></p>
        <ul>
            <li><strong>Primitive:</strong> int, float, char, boolean, etc.</li>
            <li><strong>Non-Primitive:</strong> String, arrays, objects.</li>
        </ul>
    </li>
    <li>
        <p><strong>Variables:</strong> Containers to store data. Example:</p>
<pre><code>int age = 25;  
</code></pre>
    </li>
    <li>
        <p><strong>Operators:</strong> Symbols to perform operations.</p>
        <ul>
            <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
            <li><strong>Relational:</strong> <code>&gt;</code>, <code>&lt;</code>, <code>==</code>, <code>!=</code></li>
            <li><strong>Logical:</strong> <code>&amp;&amp;</code>, <code>||</code>, <code>!</code></li>
        </ul>
    </li>
</ul>
<hr>
<h3>4. <strong>Input/Output in Java</strong></h3>
<ul>
    <li><strong>Input:</strong> Using <code>Scanner</code>class for user input.
        <pre><code>import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int number = sc.nextInt();
</code></pre>
    </li>
    <li><strong>Output:</strong> Using <code>System.out.println()</code>.
        <pre><div><div>java</div><div><code>System.out.println(&quot;Hello, World!&quot;);
</code></pre>
    </li>
</ul>
<hr>
<h3>5. <strong>Control Statements</strong></h3>
<ul>
    <li><strong>if-else:</strong>Decision-making.
        <pre><div><div>java</div><div><code>if (age &gt; 18) {
    System.out.println(&quot;Adult&quot;);
} else {
    System.out.println(&quot;Minor&quot;);
}
</code></pre>
    </li>
    <li><strong>switch:</strong>Multiple choices.
        <pre><div><div>java</div><div><code>int day = 2;
switch (day) {
    case 1: System.out.println(&quot;Monday&quot;); break;
    case 2: System.out.println(&quot;Tuesday&quot;); break;
    default: System.out.println(&quot;Other day&quot;);
}
</code></pre>
    </li>
    <li><strong>Loops:</strong>Repeated execution.<ul>
            <li><strong>for:</strong>
                <pre><div><div>java</div><div><code>for (int i = 0; i &lt; 5; i++) {
    System.out.println(i);
}
</code></pre>
            </li>
            <li><strong>while:</strong>
                <pre><div><div>java</div><div><code>int i = 0;
while (i &lt; 5) {
    System.out.println(i);
    i++;
}
</code></pre>
            </li>
            <li><strong>do-while:</strong>Executes at least once.
                <pre><div><div>java</div></div><div><code>int i = 0;
do {
    System.out.println(i);
    i++;
} while (i &lt; 5);</code></div></div></pre>
            </li>
        </ul>
    </li>
</ul>
<strong>Here’s a summary example code that demonstrates all the topics:</strong>
`
        ,
        code: `import java.util.Scanner;

public class JavaBasics {
    public static void main(String[] args) {
        // 1. Output (Introduction)
        System.out.println("Welcome to Java Programming!");

        // 2. Data Types and Variables
        int age = 20;              // Integer
        double price = 99.99;      // Double
        char grade = 'A';          // Character
        boolean isStudent = true;  // Boolean

        // 3. Operators
        int sum = age + 10;        // Arithmetic
        boolean isAdult = age >= 18;  // Relational

        // 4. Input
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine(); // String input
        System.out.println("Hello, " + name + "!");

        // 5. Control Statements
        // if-else
        if (isAdult) {
            System.out.println("You are an adult.");
        } else {
            System.out.println("You are a minor.");
        }

        // switch
        System.out.print("Enter a number (1-3): ");
        int choice = sc.nextInt();
        switch (choice) {
            case 1:
                System.out.println("You chose One.");
                break;
            case 2:
                System.out.println("You chose Two.");
                break;
            case 3:
                System.out.println("You chose Three.");
                break;
            default:
                System.out.println("Invalid choice!");
        }

        // Loops
        System.out.println("Printing numbers from 1 to 5 using a loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}
`,
    },
    {
        title: "Chapter 2: Object-Oriented Programming (OOP)",
        content: `
<p><strong>Object-Oriented Programming (OOP)</strong> is a programming paradigm based on the concept of objects, which contain both <strong>data</strong> (fields/attributes) and <strong>methods</strong> (functions). It helps organize code and make it reusable.</p>
<hr>
<h3>Key Concepts of OOP:</h3>
<h4><strong>1. Classes and Objects</strong></h4>
<ul>
    <li><strong>Class:</strong> A blueprint for creating objects. It defines properties (attributes) and methods (behavior).</li>
    <li><strong>Object:</strong> An instance of a class.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>class Car {
    String brand;  // Attribute
    int speed;     // Attribute

    void displayInfo() {  // Method
        System.out.println(&quot;Brand: &quot; + brand + &quot;, Speed: &quot; + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();  // Creating an object
        myCar.brand = &quot;Toyota&quot;;
        myCar.speed = 120;
        myCar.displayInfo();
    }
}
</code></pre>
<hr>
<h4><strong>2. Constructors</strong></h4>
<ul>
    <li>A special method used to initialize objects.</li>
    <li><strong>Default Constructor:</strong> Automatically provided if no constructor is defined.</li>
    <li><strong>Parameterized Constructor:</strong> Accepts arguments to initialize object values.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>class Student {
    String name;
    int age;

    // Constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println(&quot;Name: &quot; + name + &quot;, Age: &quot; + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(&quot;John&quot;, 20);  // Parameterized Constructor
        s1.display();
    }
}
</code></pre>
<hr>
<h4><strong>3. Inheritance</strong></h4>
<ul>
    <li>Allows a class (<strong>child class</strong>) to inherit properties and methods from another class (<strong>parent class</strong>).</li>
    <li>Promotes <strong>code reuse</strong>.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>class Animal {
    void eat() {
        System.out.println(&quot;This animal eats food.&quot;);
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(&quot;The dog barks.&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();   // Inherited method
        myDog.bark();  // Child class method
    }
}
</code></pre>
<hr>
<h4><strong>4. Polymorphism</strong></h4>
<ul>
    <li>Means <strong>many forms</strong>. Allows the same method to perform different tasks.</li>
    <li>Achieved using <strong>method overloading</strong> and <strong>method overriding</strong>.</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
    <li><strong>Method Overloading (Same method, different parameters):</strong></li>
</ul>
<pre><code>class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(10, 20));          // Calls int version
        System.out.println(calc.add(10.5, 20.5));      // Calls double version
    }
}
</code></pre>
<ul>
    <li><strong>Method Overriding (Child class redefines parent method):</strong></li>
</ul>
<pre><code>class Animal {
    void sound() {
        System.out.println(&quot;This animal makes a sound.&quot;);
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println(&quot;The cat meows.&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Cat();
        myAnimal.sound();  // Calls overridden method
    }
}
</code></pre>
<hr>
<h4><strong>5. Encapsulation</strong></h4>
<ul>
    <li>Restricts direct access to fields and methods by using <strong>private</strong> access modifiers.</li>
    <li>Provides controlled access via <strong>getter</strong> and <strong>setter</strong> methods.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>class Account {
    private double balance;  // Private field

    void setBalance(double balance) {  // Setter
        if (balance &gt; 0) {
            this.balance = balance;
        }
    }

    double getBalance() {  // Getter
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.setBalance(1000);  // Set value using setter
        System.out.println(&quot;Balance: &quot; + acc.getBalance());  // Access value using getter
    }
}
</code></pre>
<hr>
<h4><strong>6. Abstraction</strong></h4>
<ul>
    <li>Hides implementation details and only exposes functionality.</li>
    <li>Achieved using <strong>abstract classes</strong> and <strong>interfaces</strong>.</li>
</ul>
<p><strong>Example (Abstract Class):</strong></p>
<pre><code>abstract class Shape {
    abstract void draw();  // Abstract method
}

class Circle extends Shape {
    void draw() {
        System.out.println(&quot;Drawing a circle.&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();  // Calls implemented method
    }
}
</code></pre>
<p><strong>Example (Interface):</strong></p>
<pre><code>interface Vehicle {
    void drive();  // Abstract method
}

class Bike implements Vehicle {
    public void drive() {
        System.out.println(&quot;Driving a bike.&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myVehicle = new Bike();
        myVehicle.drive();
    }
}</code></pre>
<strong>Here’s a summary example code that demonstrates all the topics:</strong>
`,
        code: `// Class and Object
class Person {
    private String name;  // Encapsulation: private field

    // Constructor
    Person(String name) {
        this.name = name;
    }

    // Getter method (Encapsulation)
    public String getName() {
        return name;
    }
}

// Inheritance
class Employee extends Person {
    private String role;

    // Constructor (Calling parent class constructor using super)
    Employee(String name, String role) {
        super(name); // Call parent class constructor
        this.role = role;
    }

    // Method Overriding (Polymorphism)
    @Override
    public String getName() {
        return "Employee: " + super.getName();
    }

    public String getRole() {
        return role;
    }
}

// Abstract Class and Abstraction
abstract class Shape {
    abstract void draw();  // Abstract method
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Circle");
    }
}

// Interface (Abstraction)
interface Vehicle {
    void drive();  // Abstract method
}

class Car implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Driving a Car");
    }
}

public class OOPSummary {
    public static void main(String[] args) {
        // Class and Object
        Person person = new Person("Alice");
        System.out.println("Person Name: " + person.getName());

        // Inheritance and Polymorphism
        Employee employee = new Employee("Bob", "Developer");
        System.out.println(employee.getName());
        System.out.println("Role: " + employee.getRole());

        // Abstract Class and Abstraction
        Shape shape = new Circle();
        shape.draw();

        // Interface and Abstraction
        Vehicle vehicle = new Car();
        vehicle.drive();
    }
}
`,
    },
    {
        title: "Chapter 3: Core Java Concept",
        content: `<h4><strong>1. Arrays</strong></h4>
<p>An <strong>array</strong> is a collection of elements of the same data type, stored at contiguous memory locations.</p>
<ul>
    <li><strong>Syntax to declare:</strong>
        <pre><div><div>java</div><code>int[] numbers = new int[5];  // Array of integers with size 5
</code></div></pre>
    </li>
    <li><strong>Accessing elements:</strong>
        <pre><div><div>java</div><code>numbers[0] = 10;  // Assigning value
System.out.println(numbers[0]);  // Accessing value
</code></div></pre>
    </li>
    <li><strong>Looping through arrays:</strong>
        <pre><div><div>java</div> <code>for (int num : numbers) {
    System.out.println(num);
}
</code></div></pre>
    </li>
</ul>
<hr>
<h4><strong>2. Strings</strong></h4>
<p><strong>String</strong> is a sequence of characters, implemented as an object in Java.</p>
<ul>
    <li>Strings are <strong>immutable</strong> (cannot be changed once created).</li>
    <li><strong>Common operations:</strong>
        <pre><div><div>java</div>&gt;<code>String s = &quot;Hello&quot;;
System.out.println(s.length());  // Length of string
System.out.println(s.toUpperCase());  // Convert to uppercase
System.out.println(s.concat(&quot; World&quot;));  // Concatenate strings
</code></div></pre>
    </li>
</ul>
<hr>
<h4><strong>3. Exception Handling</strong></h4>
<p>Exception handling ensures a program can manage <strong>runtime errors</strong> gracefully.</p>
<ul>
    <li><strong>try-catch block:</strong>Catches exceptions and prevents program crashes.
        <pre><div><div>java</div>&gt;<code>try {
    int result = 10 / 0;  // Division by zero causes an exception
} catch (ArithmeticException e) {
    System.out.println(&quot;Error: Division by zero!&quot;);
}
</code></div></pre>
    </li>
    <li><strong>finally block:</strong>Executes regardless of an exception occurring or not.
        <pre><div><div>java</div><code>finally {
    System.out.println(&quot;This block always runs.&quot;);
}
</code></div></pre>
    </li>
    <li><strong>Throwing custom exceptions:</strong>
        <pre><div><div>java</div><code>throw new IllegalArgumentException(&quot;Invalid input!&quot;);
</code></div></pre>
    </li>
</ul>
<hr>
<h4><strong>4. Packages and Access Modifiers</strong></h4>
<ul>
    <li>
        <p><strong>Packages:</strong> Organize classes and interfaces.</p>
        <ul>
            <li>To use a class from another package:
                <pre><div><div>java</div><code>import java.util.Scanner;  // Importing Scanner class from java.util package
</code></div></pre>
            </li>
            <li>Creating a package:
                <pre><div><div>java</div><code>package myPackage;  // Define package
</code></div></pre>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Access Modifiers:</strong> Control access to classes, fields, and methods.</p>
        <table>
            <thead>
                <tr>
                    <th>Modifier</th>
                    <th>Within Class</th>
                    <th>Within Package</th>
                    <th>Subclass</th>
                    <th>Everywhere</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>public</strong></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td><strong>protected</strong></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><strong>default</strong></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><strong>private</strong></td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
            </tbody>
        </table>
    </li>
</ul>
<hr>
<h4><strong>5. Static and Final Keywords</strong></h4>
<ul>
    <li>
        <p><strong>Static Keyword:</strong></p>
        <ul>
            <li>Belongs to the class, not individual objects.</li>
            <li>Commonly used with methods or variables.</li>
            <li>
                <div>
                    <div>java</div>
                    <div><code>class Example {<br>&nbsp;static int count = 0; // Static variable<br>&nbsp;static void displayCount() { // Static method<br>&nbsp;System.out.println(&quot;Count: &quot; + count);<br>&nbsp;}<br>}<br></code></div>
                </div>
            </li>
        </ul>
        <pre>
</pre>
    </li>
    <li>
        <p><strong>Final Keyword:</strong></p>
        <ul>
            <li>Prevents modification.</li>
            <li><strong>Final variable:</strong>Cannot change value once assigned.
                <pre><div><div>java</div><code>final void show() {
    System.out.println(&quot;This method cannot be overridden.&quot;);
}
</code></div></pre>
            </li>
            <li><strong>Final class:</strong>Cannot be inherited.
                <pre><div><div>java</div><code>final class MyClass {
    // No subclass allowed
}</code></div></pre>
        <strong>  Here is the summary code  that demonstrates all the core java concepts briefly  </strong>`,

        code: `import java.util.Scanner;

public class CoreJavaSummary {
    public static void main(String[] args) {
        // Arrays
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("First element of the array: " + numbers[0]);

        // Strings
        String text = "Hello Java";
        System.out.println("String length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());

        // Exception Handling
        try {
            int result = 10 / 0; // This will throw an exception
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: Division by zero.");
        } finally {
            System.out.println("Finally block always runs.");
        }

        // Packages and Access Modifiers
        // Using Scanner from java.util package
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");

        // Static Keyword
        System.out.println("Static count: " + Example.count);
        Example.displayCount();

        // Final Keyword
        final int MAX_LIMIT = 100;  // Final variable
        System.out.println("Final variable value: " + MAX_LIMIT);
    }
}

class Example {
    static int count = 5;  // Static variable

    static void displayCount() {  // Static method
        System.out.println("Static count value: " + count);
    }
}
`,
    },
    {
        title: "Chapter 4: Java Collection Framework",
        content:`<p>The <strong>Java Collections Framework</strong> is a powerful hierarchy of interfaces and classes designed to store, retrieve, and manipulate groups of objects efficiently. It provides ready-made implementations for data structures like lists, sets, and maps.</p>
<hr>
<h3><strong>1. Core Interfaces in Collections</strong></h3>
<h4><strong>a. List Interface</strong></h4>
<ul>
    <li><strong>Definition</strong>: A collection that maintains insertion order and allows duplicate elements.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Elements can be accessed using an index.</li>
            <li>Suitable for scenarios requiring dynamic resizing or frequent access by position.</li>
        </ul>
    </li>
    <li><strong>Common Implementations</strong>:<ol>
            <li><strong>ArrayList</strong>: Backed by a dynamic array; fast for random access.</li>
            <li><strong>LinkedList</strong>: Backed by a doubly linked list; efficient for frequent insertions and deletions.</li>
        </ol>
    </li>
</ul>
<hr>
<h4><strong>b. Set Interface</strong></h4>
<ul>
    <li><strong>Definition</strong>: A collection that ensures no duplicate elements.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Does not maintain order (except LinkedHashSet).</li>
            <li>Useful for ensuring uniqueness in collections.</li>
        </ul>
    </li>
    <li><strong>Common Implementations</strong>:<ol>
            <li><strong>HashSet</strong>: Backed by a hash table; does not maintain insertion order.</li>
            <li><strong>TreeSet</strong>: Maintains sorted order using a Red-Black Tree.</li>
        </ol>
    </li>
</ul>
<hr>
<h4><strong>c. Map Interface</strong></h4>
<ul>
    <li><strong>Definition</strong>: A collection of key-value pairs, where keys are unique, and values can be duplicate.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Fast lookups by key.</li>
            <li>Keys must be unique, but multiple keys can map to the same value.</li>
        </ul>
    </li>
    <li><strong>Common Implementations</strong>:<ol>
            <li><strong>HashMap</strong>: Backed by a hash table; allows one <code>null</code> key.</li>
            <li><strong>TreeMap</strong>: Maintains keys in sorted order.</li>
        </ol>
    </li>
</ul>
<hr>
<h3><strong>2. Common Classes in Collections</strong></h3>
<h4><strong>a. ArrayList</strong></h4>
<ul>
    <li><strong>Definition</strong>: Implements the List interface using a dynamic array.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Fast random access with O(1) time complexity.</li>
            <li>Slower for insertions and deletions (O(n)) compared to LinkedList.</li>
        </ul>
    </li>
    <li><strong>Example</strong>:
        <pre><div><div>java</div><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add(&quot;Alice&quot;);
list.add(&quot;Bob&quot;);
System.out.println(list); // Output: [Alice, Bob]
</code></pre>
    </li>
</ul>
<hr>
<h4><strong>b. LinkedList</strong></h4>
<ul>
    <li><strong>Definition</strong>: Implements List and Deque interfaces using a doubly linked list.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Efficient for frequent insertions and deletions (O(1)).</li>
            <li>Slower random access (O(n)) compared to ArrayList.</li>
        </ul>
    </li>
    <li><strong>Example</strong>:
        <pre><div><div>java</div><code>LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();
list.add(&quot;Alice&quot;);
list.add(&quot;Bob&quot;);
System.out.println(list); // Output: [Alice, Bob]
</code></pre>
    </li>
</ul>
<hr>
<h4><strong>c. HashSet</strong></h4>
<ul>
    <li><strong>Definition</strong>: Implements the Set interface using a hash table.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Does not allow duplicate elements.</li>
            <li>Does not guarantee order.</li>
        </ul>
    </li>
    <li><strong>Example</strong>:
        <pre><div><div>java</div><code>Set&lt;Integer&gt; set = new HashSet&lt;&gt;();
set.add(1);
set.add(2);
set.add(1); // Ignored as it is a duplicate
System.out.println(set); // Output: [1, 2]
</code></pre>
    </li>
</ul>
<hr>
<h4><strong>d. HashMap</strong></h4>
<ul>
    <li><strong>Definition</strong>: Implements the Map interface using a hash table.</li>
    <li><strong>Key Features</strong>:<ul>
            <li>Stores data as key-value pairs.</li>
            <li>Allows one <code>null</code> key and multiple <code>null</code> values.</li>
        </ul>
    </li>
    <li><strong>Example</strong>:
        <pre><div><div>java</div><code>Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();
map.put(1, &quot;Alice&quot;);
map.put(2, &quot;Bob&quot;);
System.out.println(map); // Output: {1=Alice, 2=Bob}
</code></pre>
    </li>
</ul>
<hr>
<h3><strong>3. Iterators</strong></h3>
<ul>
    <li>
        <p><strong>Definition</strong>: A way to traverse collections like List, Set, or Map.</p>
    </li>
    <li>
        <p><strong>Key Features</strong>:</p>
        <ul>
            <li>Allows element retrieval one at a time.</li>
            <li>Can use <code>Iterator</code> or <code>ListIterator</code> (for bidirectional traversal).</li>
        </ul>
    </li>
    <li>
        <p><strong>Example with Iterator</strong>:</p>
        <pre><div><div>java</div><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add(&quot;Alice&quot;);
list.add(&quot;Bob&quot;);

Iterator&lt;String&gt; iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
</code></pre>
    </li>
</ul>
<hr>
<h3><strong>4. Streams</strong></h3>
<ul>
    <li>
        <p><strong>Definition</strong>: A modern API introduced in Java 8 for processing collections in a functional style.</p>
    </li>
    <li>
        <p><strong>Key Features</strong>:</p>
        <ul>
            <li>Supports operations like filtering, mapping, and reducing.</li>
            <li>Allows parallel processing for performance improvement.</li>
        </ul>
    </li>
    <li>
        <p><strong>Example with Stream</strong>:</p>
        <pre><div><div>java</div><code>List&lt;String&gt; names = List.of(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);
names.stream()
     .filter(name -&gt; name.startsWith(&quot;A&quot;))
     .forEach(System.out::println); // Output: Alice
</code></pre>
    </li>
</ul>
<hr>
<h3><strong>Key Differences</strong></h3>
<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th><strong>List</strong></th>
            <th><strong>Set</strong></th>
            <th><strong>Map</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duplicates</td>
            <td>Allowed</td>
            <td>Not Allowed</td>
            <td>Keys: Not Allowed</td>
        </tr>
        <tr>
            <td>Order</td>
            <td>Maintains insertion order</td>
            <td>Unordered (or sorted)</td>
            <td>Key-value pairs</td>
        </tr>
        <tr>
            <td>Access</td>
            <td>By index</td>
            <td>By element</td>
            <td>By key</td>
        </tr>
    </tbody>
</table>
<strong>  Here is the summary code  that demonstrates all the java Collectios frameworls briefly  </strong>`,

        code: `// ArrayList Example
List<String> list = new ArrayList<>();
list.add("Alice");
list.add("Bob");

// LinkedList Example
List<String> linkedList = new LinkedList<>();
linkedList.add("Alice");
linkedList.add("Bob");

// HashSet Example
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(1);  // Duplicate is ignored

// HashMap Example
Map<Integer, String> map = new HashMap<>();
map.put(1, "Alice");
map.put(2, "Bob");

// Iterator Example
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Stream Example
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);  // Output: Alice
`
    },
    {
        title: "Chapter 5: Multithreading",
        content: `<h3><strong>Multithreading in Java</strong></h3>
<p>Multithreading is the concurrent execution of more than one part of a program to maximize CPU utilization. In Java, multithreading allows a program to run multiple threads simultaneously, improving performance, especially for tasks that are independent or can run concurrently.</p>
<p>Let&apos;s break down the key concepts:</p>
<hr>
<h3>1. <strong>Threads and the Runnable Interface</strong></h3>
<ul>
    <li>
        <p><strong>Thread</strong>: A thread is a lightweight sub-process or a unit of execution in a program. It is the smallest part of a CPU&apos;s workload.</p>
    </li>
    <li>
        <p><strong>Creating a Thread</strong>: You can create a thread in two ways:</p>
        <ol>
            <li><strong>Extending the Thread class</strong>:
                <pre><div><div>java</div><code>class MyThread extends Thread {
    public void run() {
        System.out.println(&quot;Thread is running&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // starts the thread
    }
}
</code></pre>
            </li>
            <li><strong>Implementing the Runnable interface</strong>:
                <pre><div><div>java</div><code>class MyRunnable implements Runnable {
    public void run() {
        System.out.println(&quot;Thread is running&quot;);
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable r = new MyRunnable();
        Thread t1 = new Thread(r); // Thread object takes a Runnable
        t1.start();  // starts the thread
    }
}
</code></pre>
                <ul>
                    <li><strong>Runnable Interface</strong>: The <code>Runnable</code> interface represents a task to be executed by a thread. By implementing <code>Runnable</code>, you can define the code that the thread will execute in the <code>run()</code> method.</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>
        <p><strong>Difference</strong>:</p>
        <ul>
            <li>Extending <code>Thread</code> restricts your class from extending any other class because Java allows single inheritance.</li>
            <li>Implementing <code>Runnable</code> gives you the flexibility to extend another class as well, so it&rsquo;s considered a better approach for defining thread tasks.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>2. <strong>Thread Lifecycle</strong></h3>
<p>A thread in Java goes through various states during its life cycle. These states are managed by the Java Virtual Machine (JVM):</p>
<ol>
    <li>
        <p><strong>New (Born)</strong>: A thread is in this state when it is created but not yet started.</p>
        <ul>
            <li>Example: <code>Thread t = new Thread();</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Runnable</strong>: When the <code>start()</code> method is called on the thread, it moves to the runnable state. A thread is either running or ready to run based on the availability of CPU resources.</p>
        <ul>
            <li>Example: <code>t.start();</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Blocked</strong>: A thread is in this state when it is waiting to access a synchronized block or resource locked by another thread.</p>
    </li>
    <li>
        <p><strong>Waiting</strong>: A thread is in the waiting state when it is waiting for another thread to perform a particular action (e.g., <code>Thread.sleep()</code> or <code>join()</code>).</p>
    </li>
    <li>
        <p><strong>Timed Waiting</strong>: A thread is in this state if it&apos;s waiting for a specific period, like using <code>Thread.sleep(1000);</code> to wait for 1 second.</p>
    </li>
    <li>
        <p><strong>Terminated</strong>: A thread is in this state when it completes execution, either by returning from the <code>run()</code> method or being terminated by an exception.</p>
    </li>
</ol>
<hr>
<h3>3. <strong>Synchronization</strong></h3>
<p>Synchronization is used in multithreading when multiple threads access shared resources or data. Without synchronization, threads can interfere with each other, causing data inconsistency or corruption.</p>
<h4><strong>Why Synchronization?</strong></h4>
<ul>
    <li>Multiple threads trying to access or modify the same resource simultaneously can lead to race conditions, where the final result depends on the order of thread execution.</li>
</ul>
<h4><strong>Types of Synchronization in Java:</strong></h4>
<ol>
    <li>
        <p><strong>Method-level Synchronization</strong>:</p>
        <ul>
            <li>The simplest way to synchronize is by marking a method with the <code>synchronized</code>keyword:
                <pre><div><div>java</div><code>public synchronized void methodName() {
    // thread-safe code
}
</code></pre>
            </li>
            <li>This ensures that only one thread can execute this method at a time.</li>
        </ul>
    </li>
    <li>
        <p><strong>Block-level Synchronization</strong>:</p>
        <ul>
            <li>Synchronization can be applied to a block of code inside a method using a synchronized block:
                <pre><div><div>java</div><code>public void someMethod() {
    synchronized(this) {
        // thread-safe code
    }
}
</code></pre>
            </li>
            <li>Here, only one thread can execute the code inside the <code>synchronized</code> block at a time.</li>
        </ul>
    </li>
    <li>
        <p><strong>Class-level Synchronization (Static Synchronization)</strong>:</p>
        <ul>
            <li>If you want to synchronize access to static methods or static variables, you can use synchronization at the class level:
                <pre><div><div>java</div><code>public static synchronized void staticMethod() {
    // thread-safe static code
}
</code>pre>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Reentrant Locks (java.util.concurrent)</strong>:</p>
        <ul>
            <li>Java provides higher-level constructs like <code>ReentrantLock</code> from the <code>java.util.concurrent</code> package, which offers more control over locking and unlocking compared to <code>synchronized</code>.</li>
        </ul>
    </li>
</ol>
<hr>
<h4><strong>Example of Synchronization (Race Condition)</strong>:</h4>
<p>Without synchronization, multiple threads modifying the same variable can cause a race condition:</p>
<pre>java</div><code>class Counter {
    private int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        // Creating 2 threads
        Thread t1 = new Thread(() -&gt; {
            for (int i = 0; i &lt; 1000; i++) {
                counter.increment();
            }
        });
        Thread t2 = new Thread(() -&gt; {
            for (int i = 0; i &lt; 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        // Expected result: 2000
        System.out.println(counter.getCount());
    }
}
</code></div></div></pre>
<p>In the above code, without synchronization, the result might not always be 2000 due to race conditions. Using synchronization solves this problem.</p>
  <strong>Here’s a summary code that demonstrates Threads, Runnable interface, Thread Lifecycle, and Synchronization in Java:</strong> `,
        code: `// Example 1: Using Runnable interface to create a thread
class MyRunnable implements Runnable {
    public void run() {
        synchronized (this) {  // Synchronization to ensure thread-safety
            for (int i = 0; i < 5; i++) {
                System.out.println(Thread.currentThread().getName() + " - Count: " + i);
                try {
                    Thread.sleep(500); // Simulate some work (sleep for 0.5 seconds)
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) throws InterruptedException {
        MyRunnable myRunnable = new MyRunnable();
        
        // Creating two threads using Runnable
        Thread t1 = new Thread(myRunnable, "Thread-1");
        Thread t2 = new Thread(myRunnable, "Thread-2");

        System.out.println("Thread Lifecycle: Starting threads...");
        
        t1.start();  // t1 goes into 'Runnable' state and eventually 'Running'
        t2.start();  // t2 goes into 'Runnable' state and eventually 'Running'
        
        t1.join();    // Main thread waits for t1 to finish (join is part of the lifecycle)
        t2.join();    // Main thread waits for t2 to finish

        System.out.println("Thread Lifecycle: Threads finished.");
    }
}
  `
    },
    {
        title:"Chapter: 6 File Handling ",
        content:`File handling in Java allows you to read from and write to files on the disk. It involves using various classes in the java.io package, such as File, FileReader, BufferedReader, FileWriter, BufferedWriter, and others.

Let's break down the main operations:

1. Reading and Writing Files in Java
Reading Files:
You can read files in Java using different classes like FileReader, BufferedReader, and Scanner. Here’s an example using BufferedReader:

BufferedReader: Reads text from a file efficiently by buffering the input.
java
Copy code
import java.io.*;

public class FileReadingExample {
    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("input.txt"));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);  // Print each line of the file
            }
            br.close();  // Always close the reader after use
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
Explanation: The BufferedReader reads one line at a time from the file input.txt. The readLine() method returns null when the end of the file is reached. Always close the stream after reading the file to avoid memory leaks.
Writing Files:
To write data to a file, you can use FileWriter and BufferedWriter. Here's an example using BufferedWriter:

java
Copy code
import java.io.*;

public class FileWritingExample {
    public static void main(String[] args) {
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
            bw.write("Hello, this is a line of text!");
            bw.newLine();  // Adds a newline
            bw.write("Another line!");
            bw.close();  // Always close the writer after use
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
Explanation: The BufferedWriter writes data to the file output.txt. The newLine() method inserts a new line, and write() writes the text to the file.
2. Serialization and Deserialization
Serialization:
Serialization is the process of converting an object into a byte stream so that it can be saved to a file or sent over a network. In Java, the Serializable interface is used to mark classes whose objects can be serialized.

Serializable Interface: A class must implement Serializable to allow its objects to be serialized.
Example of Serialization:
java
Copy code
import java.io.*;

class Student implements Serializable {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "Student{name='" + name + "', age=" + age + "}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Student student = new Student("John", 21);

        try {
            // Serialize the object to a file
            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("student.ser"));
            oos.writeObject(student);
            oos.close();  // Close the stream after use
            System.out.println("Object has been serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
Explanation: In this example, the Student class implements Serializable, making its objects eligible for serialization. The ObjectOutputStream is used to serialize the Student object and write it to the file student.ser.
Deserialization:
Deserialization is the process of converting a byte stream back into an object. The object is restored from the serialized data.

Example of Deserialization:
java
Copy code
import java.io.*;

public class DeserializationExample {
    public static void main(String[] args) {
        try {
            // Deserialize the object from the file
            ObjectInputStream ois = new ObjectInputStream(new FileInputStream("student.ser"));
            Student student = (Student) ois.readObject();
            ois.close();  // Close the stream after use
            System.out.println("Object has been deserialized");
            System.out.println(student);  // Output the deserialized object
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
Explanation: In this example, the ObjectInputStream is used to read the serialized object from the student.ser file. The object is then deserialized and cast back to its original type (Student).
<strong>Here’s a summary code demonstrating File Handling, Serialization, and Deserialization in Java:</strong>
`,
        code:`import java.io.*;

class Student implements Serializable {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + "}";
    }
}

public class SerializationDeserializationExample {
    public static void main(String[] args) {
        // Serialization
        Student student = new Student("John", 21);
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("student.ser"))) {
            oos.writeObject(student);
            System.out.println("Object has been serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialization
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("student.ser"))) {
            Student deserializedStudent = (Student) ois.readObject();
            System.out.println("Object has been deserialized");
            System.out.println(deserializedStudent);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
`
    },
    {
        title:`Chapter : 7  Java 8 features`,
        content:`<p>Java 8 introduced several new features that improved the language and made it more powerful, especially in terms of functional programming. Let&rsquo;s break down these features:</p>
<hr>
<h3>1. <strong>Lambda Expressions</strong></h3>
<p>Lambda expressions allow you to pass behavior (as an instance of a functional interface) as an argument to a method. They provide a concise way to express instances of single-method interfaces (functional interfaces).</p>
<h4>Syntax:</h4>
<pre><div><div>java</div><code>(parameters) -&gt; expression
</code></pre>
<h4>Example:</h4>
<pre><div><div>java</div><code>// Traditional way to define a thread using Runnable
Runnable r1 = new Runnable() {
    public void run() {
        System.out.println(&quot;Hello, World!&quot;);
    }
};

// Using Lambda Expression
Runnable r2 = () -&gt; System.out.println(&quot;Hello, World!&quot;);
r2.run();  // Output: Hello, World!
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li>In the traditional way, we define an anonymous class to implement the <code>Runnable</code> interface.</li>
            <li>With a Lambda, the code is much shorter and more readable. The parameter list can be inferred, and the method body is simplified.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>2. <strong>Functional Interfaces</strong></h3>
<p>A <strong>Functional Interface</strong> is an interface that has just one abstract method. These interfaces are used primarily with lambda expressions.</p>
<h4>Example of a Functional Interface:</h4>
<pre><div><div>java</div><code>@FunctionalInterface
interface MyFunctionalInterface {
    void display(String message);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        MyFunctionalInterface myFunc = (message) -&gt; System.out.println(message);
        myFunc.display(&quot;Hello from Functional Interface!&quot;);  // Output: Hello from Functional Interface!
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li>The <code>@FunctionalInterface</code> annotation is used to indicate that the interface is meant to be a functional interface.</li>
            <li>Functional interfaces are typically used as the target type for lambda expressions.</li>
            <li>Examples of built-in functional interfaces in Java include <code>Runnable</code>, <code>Comparator</code>, <code>Consumer</code>, <code>Supplier</code>, etc.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>3. <strong>Stream API</strong></h3>
<p>The <strong>Stream API</strong> was introduced to allow working with sequences of data in a functional style. It allows you to process data in a pipeline, making it easier to work with collections and arrays.</p>
<h4>Example:</h4>
<pre><div><div>java</div><code>import java.util.*;
import java.util.stream.*;

public class StreamAPIExample {
    public static void main(String[] args) {
        List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);

        // Using Stream API to filter and sum the even numbers
        int sum = numbers.stream()  // Create a stream from the list
                         .filter(n -&gt; n % 2 == 0)  // Filter even numbers
                         .mapToInt(Integer::intValue)  // Convert to int
                         .sum();  // Sum the values

        System.out.println(&quot;Sum of even numbers: &quot; + sum);  // Output: Sum of even numbers: 20
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li><code>stream()</code> creates a stream from the collection.</li>
            <li><code>filter()</code> is used to retain only the even numbers.</li>
            <li><code>mapToInt()</code> converts the elements to integers.</li>
            <li><code>sum()</code> calculates the sum of the even numbers.</li>
            <li>The Stream API promotes clean and efficient data processing with methods like <code>filter()</code>, <code>map()</code>, <code>reduce()</code>, and more.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>4. <strong>Default and Static Methods in Interfaces</strong></h3>
<p>In Java 8, interfaces were enhanced to allow default and static methods.</p>
<h4>Default Methods:</h4>
<ul>
    <li><strong>Default methods</strong> are methods that have a body and are defined in interfaces. They provide a default implementation, which means classes implementing the interface don&rsquo;t have to provide an implementation for those methods.</li>
</ul>
<h4>Example of Default Method:</h4>
<pre><div><div>java</div><code>interface MyInterface {
    default void sayHello() {
        System.out.println(&quot;Hello from Default Method!&quot;);
    }
}

class MyClass implements MyInterface {
    // No need to implement sayHello()
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.sayHello();  // Output: Hello from Default Method!
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li>The <code>sayHello()</code> method is defined with a default implementation, so <code>MyClass</code> doesn&rsquo;t need to override it.</li>
        </ul>
    </li>
</ul>
<h4>Static Methods:</h4>
<ul>
    <li><strong>Static methods</strong> in interfaces are similar to static methods in classes. These methods can be called using the interface name and can&rsquo;t be overridden by implementing classes.</li>
</ul>
<h4>Example of Static Method:</h4>
<pre><div><div>java</div><code>interface MyInterface {
    static void sayGoodbye() {
        System.out.println(&quot;Goodbye from Static Method!&quot;);
    }
}

public class StaticMethodExample {
    public static void main(String[] args) {
        MyInterface.sayGoodbye();  // Output: Goodbye from Static Method!
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li>The static method <code>sayGoodbye()</code> is called using the interface name <code>MyInterface</code>.</li>
            <li>Static methods are not inherited by implementing classes and must be called through the interface.</li>
        </ul>
    </li>
</ul> 
<strong>Here are the summary codes for the Java 8 features:</strong>
`,

code:``,

    },
    {
        title:`Chapter: 8 Advanced Java`,
        content:`<p>Generics allow you to write more flexible and reusable code by defining classes, interfaces, and methods with type parameters. It enables type safety by allowing you to specify the types of objects that a class or method can work with, at compile time. This reduces runtime errors and eliminates the need for explicit type casting.</p>
<h4>Example:</h4>
<pre><div><div>java</div><code>// Generic class
class Box&lt;T&gt; {
    private T value;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

public class GenericsExample {
    public static void main(String[] args) {
        Box&lt;Integer&gt; intBox = new Box&lt;&gt;();
        intBox.setValue(5);
        System.out.println(intBox.getValue());  // Output: 5

        Box&lt;String&gt; strBox = new Box&lt;&gt;();
        strBox.setValue(&quot;Hello&quot;);
        System.out.println(strBox.getValue());  // Output: Hello
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li>The <code>Box&lt;T&gt;</code> class can store any type of object (denoted by the type parameter <code>T</code>).</li>
            <li>We can use <code>Box&lt;Integer&gt;</code> to store an integer and <code>Box&lt;String&gt;</code> to store a string, providing type safety at compile time.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>2. <strong>Annotations</strong></h3>
<p>Annotations in Java are metadata or labels that provide additional information about code to the compiler or runtime environment. They do not modify the behavior of the code but are used to provide supplementary information or instructions, such as marking a method as deprecated or instructing the compiler to suppress warnings.</p>
<h4>Common Annotations:</h4>
<ul>
    <li><code>@Override</code>: Marks a method as overriding a superclass method.</li>
    <li><code>@Deprecated</code>: Marks a method as deprecated.</li>
    <li><code>@SuppressWarnings</code>: Tells the compiler to suppress specific warnings.</li>
    <li><code>@FunctionalInterface</code>: Marks an interface as a functional interface (one method only).</li>
</ul>
<h4>Example:</h4>
<pre><div><div>java</div><code>class MyClass {
    @Override
    public String toString() {
        return &quot;This is MyClass&quot;;
    }

    @Deprecated
    public void oldMethod() {
        System.out.println(&quot;This method is deprecated.&quot;);
    }

    @SuppressWarnings(&quot;unchecked&quot;)
    public void suppressWarning() {
        List rawList = new ArrayList();
        rawList.add(&quot;Hello&quot;);
    }
}

public class AnnotationExample {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        System.out.println(myClass.toString());  // Output: This is MyClass
        myClass.oldMethod();  // Output: This method is deprecated.
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li><code>@Override</code> ensures the method correctly overrides a superclass method.</li>
            <li><code>@Deprecated</code> signals that the method should not be used anymore.</li>
            <li><code>@SuppressWarnings(&quot;unchecked&quot;)</code> is used to suppress the unchecked warning from the compiler when using raw types.</li>
        </ul>
    </li>
</ul>
<hr>
<h3>3. <strong>Networking in Java</strong></h3>
<p>Java provides a powerful API for network programming, which allows you to build network-based applications. Java&rsquo;s <code>java.net</code> package provides classes for performing tasks such as sending and receiving data over the network, creating server and client applications, and handling URLs.</p>
<h4>Key Classes:</h4>
<ul>
    <li><code>Socket</code>: Represents a client-side connection to a server.</li>
    <li><code>ServerSocket</code>: Used to create a server-side socket that listens for client requests.</li>
    <li><code>URL</code>: Represents a URL (Uniform Resource Locator) to handle HTTP requests.</li>
</ul>
<h4>Example: Simple Client-Server Program</h4>
<p><strong>Server Code</strong>:</p>
<pre><div><div>java</div><code>import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println(&quot;Server is listening on port 8080&quot;);
            Socket socket = serverSocket.accept();
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            out.println(&quot;Hello from server!&quot;);
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</code></pre>
<p><strong>Client Code</strong>:</p>
<pre><div><div>java</div><code>import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket(&quot;localhost&quot;, 8080)) {
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String message = in.readLine();
            System.out.println(&quot;Server says: &quot; + message);  // Output: Server says: Hello from server!
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</code></pre>
<ul>
    <li><strong>Explanation</strong>:<ul>
            <li><strong>Server</strong>: The server creates a <code>ServerSocket</code> to listen on port 8080, accepts a client connection, and sends a message to the client.</li>
            <li><strong>Client</strong>: The client connects to the server on <code>localhost</code> at port 8080, reads the message sent by the server, and prints it.</li>
        </ul>
    </li>
</ul>`,
code:``,
    
    }
    
];


// Practice Questions 
const practiceQuestions = [
    {
        chapterIndex: 1,
        questions: [
            {
                question: "Write a program to check whether a number is odd or even.",
                solution: `import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = sc.nextInt();\n    if (number % 2 == 0) {\n      System.out.println("Even Number");\n    } else {\n      System.out.println("Odd Number");\n    }\n  }\n}`
            },
            {
                question: "Write a program to print the multiplication table of 5 using a for loop.",
                solution: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 10; i++) {\n      System.out.println("5 x " + i + " = " + (5 * i));\n    }\n  }\n}`
            },
            {
                question: "Write a program to check the day of the week using a switch statement.",
                solution: `import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.print("Enter a number (1-7): ");\n    int day = sc.nextInt();\n    switch (day) {\n      case 1: System.out.println("Monday"); break;\n      case 2: System.out.println("Tuesday"); break;\n      case 3: System.out.println("Wednesday"); break;\n      case 4: System.out.println("Thursday"); break;\n      case 5: System.out.println("Friday"); break;\n      case 6: System.out.println("Saturday"); break;\n      case 7: System.out.println("Sunday"); break;\n      default: System.out.println("Invalid day!");\n    }\n  }\n}`
            },
            {
                question: "Write a program to take a user's name as input and print a welcome message.",
                solution: `import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.print("Enter your name: ");\n    String name = sc.nextLine();\n    System.out.println("Welcome, " + name + "!");\n  }\n}`
            },
            {
                question: "Write a program to find the sum of two numbers entered by the user.",
                solution: `import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = sc.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = sc.nextInt();\n    System.out.println("Sum = " + (num1 + num2));\n  }\n}`
            }

        ]
    },
    {
        chapterIndex: 2,
        questions: [
            
                {
                    question: "What is the difference between a class and an object in Java?",
                    solution: "class Car {\n    String model;\n\n    Car(String model) {\n        this.model = model;\n    }\n\n    void displayModel() {\n        System.out.println(\"Car model: \" + model);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car car = new Car(\"Tesla\");\n        car.displayModel(); // Output: Car model: Tesla\n    }\n}"
                },
                {
                    question: "What is the role of a constructor in a class? Can a constructor have a return type?",
                    code: "class Car {\n    String model;\n\n    // Constructor\n    Car(String model) {\n        this.model = model;\n    }\n\n    void displayModel() {\n        System.out.println(\"Car model: \" + model);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car car = new Car(\"Tesla\");\n        car.displayModel(); // Output: Car model: Tesla\n    }\n}"
                },
                {
                    question: "What is inheritance in Java, and how does it benefit code reusability?",
                    solution: "class Animal {\n    void sound() {\n        System.out.println(\"Some sound\");\n    }\n}\n\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.sound(); // Output: Bark\n    }\n}"
                },
                {
                    question: "What is polymorphism in Java, and how does method overriding demonstrate it?",
                    solution: "class Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Output: Dog barks\n    }\n}"
                },
                {
                    question: "What is the difference between encapsulation and abstraction?",
                    solution: "class Person {\n    private String name;\n\n    // Encapsulation: Getter and Setter\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person();\n        person.setName(\"John\");\n        System.out.println(person.getName()); // Output: John\n    }\n}\n\n// Abstraction\nabstract class Animal {\n    abstract void sound();\n}\n\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound(); // Output: Bark\n    }\n}"
                }
            ]
            
        
    },
    
        {
            chapterIndex: 3,
            questions: [
                {
                    question: "Write a program to store and print the elements of an array.",
                    solution: "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = 0; i < arr.length; i++) {\n            System.out.println(arr[i]); // Output: 1 2 3 4 5\n        }\n    }\n}"
                },
                {
                    question: "Write a program to reverse a string.",
                    solution: "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        String reversed = \"\";\n        for (int i = str.length() - 1; i >= 0; i--) {\n            reversed += str.charAt(i);\n        }\n        System.out.println(reversed); // Output: olleH\n    }\n}"
                },
                {
                    question: "Write a program to handle division by zero using exception handling.",
                    solution: "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0; // This will throw ArithmeticException\n        } catch (ArithmeticException e) {\n            System.out.println(\"Error: Division by zero\"); // Output: Error: Division by zero\n        }\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of access modifiers.",
                    solution: "class Person {\n    public String name;\n    private int age;\n    protected String address;\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person();\n        person.name = \"John\"; // Public access\n        person.setAge(25); // Accessing private method\n        person.address = \"New York\"; // Protected access\n        System.out.println(person.name + \" - \" + person.getAge()); // Output: John - 25\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of static and final keywords.",
                    solution: "class MyClass {\n    static int count = 0;\n    final int MAX = 10;\n\n    public MyClass() {\n        count++;\n    }\n\n    public void show() {\n        System.out.println(\"Count: \" + count + \", MAX: \" + MAX);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyClass obj1 = new MyClass();\n        obj1.show(); // Output: Count: 1, MAX: 10\n        MyClass obj2 = new MyClass();\n        obj2.show(); // Output: Count: 2, MAX: 10\n    }\n}"
                }
            ]
        },
        
    
        {
            chapterIndex: 4, 
            questions: [
                {
                    question: "Write a program to demonstrate the use of an ArrayList in Java.",
                    solution: "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        list.add(\"Cherry\");\n        for (String item : list) {\n            System.out.println(item); // Output: Apple, Banana, Cherry\n        }\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of a HashSet in Java.",
                    solution: "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashSet<String> set = new HashSet<>();\n        set.add(\"Apple\");\n        set.add(\"Banana\");\n        set.add(\"Apple\");\n        for (String item : set) {\n            System.out.println(item); // Output: Apple, Banana (Order is not guaranteed)\n        }\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of a HashMap in Java.",
                    solution: "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> map = new HashMap<>();\n        map.put(\"Apple\", 1);\n        map.put(\"Banana\", 2);\n        map.put(\"Cherry\", 3);\n        System.out.println(\"Value for Banana: \" + map.get(\"Banana\")); // Output: Value for Banana: 2\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of an Iterator with a List.",
                    solution: "import java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        list.add(\"Cherry\");\n        Iterator<String> iterator = list.iterator();\n        while (iterator.hasNext()) {\n            System.out.println(iterator.next()); // Output: Apple, Banana, Cherry\n        }\n    }\n}"
                },
                {
                    question: "Write a program to filter a list using Java Streams.",
                    solution: "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        list.add(\"Cherry\");\n        List<String> filteredList = list.stream().filter(s -> s.startsWith(\"A\")).collect(Collectors.toList());\n        filteredList.forEach(System.out::println); // Output: Apple\n    }\n}"
                }
            ]
        },
        
    
        {
            chapterIndex: 5,
            questions: [
                {
                    question: "Write a program to create a thread using the Thread class.",
                    solution: "class MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread is running\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyThread thread = new MyThread();\n        thread.start(); // Output: Thread is running\n    }\n}"
                },
                {
                    question: "Write a program to create a thread using the Runnable interface.",
                    solution: "class MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable thread is running\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyRunnable runnable = new MyRunnable();\n        Thread thread = new Thread(runnable);\n        thread.start(); // Output: Runnable thread is running\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the lifecycle of a thread.",
                    solution: "class MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread is running\");\n        try {\n            Thread.sleep(1000); // Thread is in sleeping state\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println(\"Thread has finished\"); // Thread is in terminated state\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        MyThread thread = new MyThread();\n        System.out.println(\"Thread state before start: \" + thread.getState());\n        thread.start();\n        System.out.println(\"Thread state after start: \" + thread.getState());\n        thread.join();\n        System.out.println(\"Thread state after finish: \" + thread.getState());\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate thread synchronization in Java.",
                    solution: "class Counter {\n    private int count = 0;\n\n    public synchronized void increment() {\n        count++;\n    }\n\n    public synchronized int getCount() {\n        return count;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Thread thread1 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) {\n                counter.increment();\n            }\n        });\n        Thread thread2 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) {\n                counter.increment();\n            }\n        });\n        thread1.start();\n        thread2.start();\n        thread1.join();\n        thread2.join();\n        System.out.println(\"Final count: \" + counter.getCount()); // Output: Final count: 2000\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate thread interruption in Java.",
                    solution: "class MyThread extends Thread {\n    public void run() {\n        try {\n            for (int i = 0; i < 5; i++) {\n                System.out.println(\"Running thread: \" + i);\n                Thread.sleep(1000);\n            }\n        } catch (InterruptedException e) {\n            System.out.println(\"Thread interrupted\"); // Output: Thread interrupted\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        MyThread thread = new MyThread();\n        thread.start();\n        Thread.sleep(2000);\n        thread.interrupt();\n    }\n}"
                }
            ]
        },
        
        {
            chapterIndex: 6,
            questions: [
                {
                    question: "Write a program to read the content of a text file and display it.",
                    solution: "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        FileReader fr = new FileReader(\"file.txt\");\n        BufferedReader br = new BufferedReader(fr);\n        String line;\n        while ((line = br.readLine()) != null) {\n            System.out.println(line); // Output: Content of file.txt\n        }\n        br.close();\n        fr.close();\n    }\n}"
                },
                {
                    question: "Write a program to write data into a text file.",
                    solution: "import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        FileWriter fw = new FileWriter(\"file.txt\");\n        BufferedWriter bw = new BufferedWriter(fw);\n        bw.write(\"Hello, World!\");\n        bw.newLine();\n        bw.write(\"This is a text file.\");\n        bw.close(); // Content is written to file.txt\n    }\n}"
                },
                {
                    question: "Write a program to append data to an existing text file.",
                    solution:"import java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        FileWriter fw = new FileWriter(\"file.txt\", true);\n        BufferedWriter bw = new BufferedWriter(fw);\n        bw.write(\"Appending new content to the file.\");\n        bw.newLine();\n        bw.close(); // Data appended to file.txt\n    }\n}"
                },
                {
                    question: "Write a program to serialize an object in Java.",
                    solution: "import java.io.*;\n\nclass Person implements Serializable {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Person person = new Person(\"John\", 25);\n        FileOutputStream fileOut = new FileOutputStream(\"person.ser\");\n        ObjectOutputStream out = new ObjectOutputStream(fileOut);\n        out.writeObject(person);\n        out.close();\n        fileOut.close(); // Object serialized into person.ser\n    }\n}"
                },
                {
                    question: "Write a program to deserialize an object in Java.",
                    solution: "import java.io.*;\n\nclass Person implements Serializable {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) throws IOException, ClassNotFoundException {\n        FileInputStream fileIn = new FileInputStream(\"person.ser\");\n        ObjectInputStream in = new ObjectInputStream(fileIn);\n        Person person = (Person) in.readObject();\n        in.close();\n        fileIn.close();\n        System.out.println(\"Deserialized Person: \" + person.name + \", Age: \" + person.age); // Output: John, 25\n    }\n}"
                }
            ]
        },
        
        {
            chapterIndex: 7,
            questions: [
                {
                    question: "Write a program to demonstrate the use of a lambda expression to implement a functional interface.",
                    solution: "interface Greet {\n    void greet(String name);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Greet greet = (name) -> System.out.println(\"Hello, \" + name);\n        greet.greet(\"John\"); // Output: Hello, John\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate a functional interface with a single abstract method and how to use lambda expressions to implement it.",
                    solution: "interface Add {\n    int sum(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Add add = (a, b) -> a + b;\n        System.out.println(add.sum(10, 20)); // Output: 30\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of the Stream API to filter and print even numbers from a list of integers.",
                    code: "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        numbers.stream()\n               .filter(n -> n % 2 == 0)\n               .forEach(System.out::println); // Output: 2, 4, 6, 8, 10\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate default and static methods in interfaces.",
                    solution: "interface MyInterface {\n    default void defaultMethod() {\n        System.out.println(\"This is a default method\");\n    }\n    static void staticMethod() {\n        System.out.println(\"This is a static method\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyInterface obj = new MyInterface() {};\n        obj.defaultMethod(); // Output: This is a default method\n        MyInterface.staticMethod(); // Output: This is a static method\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of method references with the Stream API.",
                    solution: "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"John\", \"Jane\", \"Alex\", \"Emily\");\n        names.stream()\n             .map(String::toUpperCase)\n             .forEach(System.out::println); // Output: JOHN, JANE, ALEX, EMILY\n    }\n}"
                }
            ]
        },
        
        {
            chapterIndex: 8,
            questions: [
                {
                    question: "Write a program to demonstrate the use of Generics in Java.",
                    solution: "class Box<T> {\n    private T value;\n    public void setValue(T value) {\n        this.value = value;\n    }\n    public T getValue() {\n        return value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Box<Integer> intBox = new Box<>();\n        intBox.setValue(10);\n        System.out.println(intBox.getValue()); // Output: 10\n\n        Box<String> strBox = new Box<>();\n        strBox.setValue(\"Hello\");\n        System.out.println(strBox.getValue()); // Output: Hello\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of annotations in Java.",
                    solution: "import java.lang.annotation.*;\n\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\n@interface MyAnnotation {\n    String value();\n}\n\npublic class Main {\n    @MyAnnotation(value = \"Hello, Annotation!\")\n    public void myMethod() {\n        System.out.println(\"Method executed\");\n    }\n\n    public static void main(String[] args) throws Exception {\n        Main obj = new Main();\n        obj.myMethod();\n        MyAnnotation annotation = obj.getClass().getMethod(\"myMethod\").getAnnotation(MyAnnotation.class);\n        System.out.println(annotation.value()); // Output: Hello, Annotation!\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of a basic Socket in Java for networking.",
                    solution: "// Client Code\nimport java.net.*;\nimport java.io.*;\n\npublic class Client {\n    public static void main(String[] args) throws IOException {\n        Socket socket = new Socket(\"localhost\", 1234);\n        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n        out.println(\"Hello Server!\");\n        socket.close();\n    }\n}\n\n// Server Code\nimport java.net.*;\nimport java.io.*;\n\npublic class Server {\n    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(1234);\n        Socket socket = serverSocket.accept();\n        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));\n        String message = in.readLine();\n        System.out.println(\"Received from client: \" + message); // Output: Hello Server!\n        socket.close();\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of wildcard with generics in Java.",
                    solution: "class Printer {\n    public static void printItems(List<?> list) {\n        for (Object item : list) {\n            System.out.println(item);\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> intList = Arrays.asList(1, 2, 3, 4);\n        List<String> strList = Arrays.asList(\"A\", \"B\", \"C\");\n        Printer.printItems(intList); // Output: 1, 2, 3, 4\n        Printer.printItems(strList); // Output: A, B, C\n    }\n}"
                },
                {
                    question: "Write a program to demonstrate the use of `@Override` annotation in Java.",
                    solution: "class Animal {\n    public void makeSound() {\n        System.out.println(\"Animal makes sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Dog barks\"); // Output: Dog barks\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.makeSound();\n    }\n}"
                }
            ]
        }
        
                                    ];
                                    
                                
                            
                        
                        
                    
                
            
 // Notes part
const notes = [
    {
        chapterIndex: 1,
        notes: [
            "Java programs are compiled into bytecode, which can run on any device with a JVM, regardless of the underlying operating system..",
            "Core principles include abstraction, encapsulation, inheritance, and polymorphism, making Java suitable for designing modular and reusable applications.",
            "Java is designed to be easy to learn with a syntax similar to C/C++ but eliminates complex features like pointers and multiple inheritance.",
            "Java provides a secure runtime environment by avoiding explicit pointer use and incorporating features like the Java Security Manager and sandboxing.",
            "Built-in support for multithreading allows Java to handle multiple tasks simultaneously, improving performance in applications.",
            "Java handles memory management automatically with Garbage Collection and provides tools to handle exceptions effectively.",
            "Java is Just-In-Time (JIT) compiler optimizes performance, making Java applications fast enough for most use cases.",
            "Java comes with a rich set of APIs (Java Standard Library) for tasks such as data structures, networking, GUI development, and more.",
        ]
    },
    {
        chapterIndex: 2,
        notes: [
            "Classes are blueprints for creating objects; objects are instances of classes.",
            "Constructors are special methods used to initialize objects when they are created.",
            "Inheritance allows a child class to reuse the properties and methods of a parent class.",
            "Polymorphism enables methods to perform different tasks based on the object or input.",
            "Encapsulation restricts access to class fields and methods, allowing controlled access using getters and setters.",
            "Abstraction hides implementation details and shows only the essential features to the user."


        ]
    },
    {
        chapterIndex: 3,
        notes: [
           "Arrays are used to store multiple elements of the same data type in contiguous memory locations.",
           "Strings are immutable objects used to handle text, with operations like concatenation, slicing, and case conversion.",
           "Exception handling is a mechanism to handle runtime errors using try-catch blocks, finally blocks, and custom exceptions.",
           "Packages are used to organize related classes, and access modifiers (public, private, protected, default) control visibility.",
           "The static keyword associates variables or methods with the class, and final prevents modification of variables, methods, or inheritance of classes.",
        ]
    },
    {
        chapterIndex:4,
        notes:[
             "Java Collections Framework provides reusable data structures and algorithms.",
             "Core Interfaces: List (ordered, allows duplicates), Set (unique elements, unordered), Map (key-value pairs, unique keys).",
             "Key Classes: ArrayList (dynamic array, fast access), LinkedList (doubly linked list, efficient insert/delete), HashSet (hash table, no duplicates), HashMap (key-value pairs, hash table).",
             "Iterators are used for traversing collections; Streams (Java 8+) simplify processing with functional programming.",
             "Use List for indexed access, Set for uniqueness, and Map for key-based lookups.",
            
        ]
    },

   { 
    chapterIndex:5,
    notes:[

        "A thread is the smallest unit of execution in a program.",
        "The Runnable interface represents a task to be executed by a thread, with the run() method defining the task.",
        "Threads can be created in two ways",
        "By extending the Thread class and overriding the run() method",
        "By implementing the Runnable interface and passing it to a Thread object.",
        "New: The thread is created but not yet started.",
        "Runnable: The thread is ready to execute or is currently running.",
        "Blocked: The thread is waiting for a resource, like a synchronized block.",
        "Waiting: The thread is waiting indefinitely for another thread to perform a specific action.",
        "Timed Waiting: The thread is waiting for a specific period, e.g., using Thread.sleep().",
        "Terminated: The thread has completed its task or has been terminated.",
        "Synchronization ensures that shared resources are accessed safely by multiple threads, preventing data corruption.",
        "It can be applied at the method level using the synchronized keyword or at the block level using a synchronized block.",
        "Without synchronization, multiple threads accessing the same resource can lead to race conditions.",
        "Use start() to begin a thread's execution.",
        "join() is used to make the main thread wait for other threads to complete.",
        "The sleep() method is used to pause a thread for a specific time.",
        "The Thread class provides methods like getName() and currentThread() to manage thread properties.",   
    ]
   },
   {
    chapterIndex: 6,
    notes:[
        "FileReader and FileWriter are used for reading and writing characters to files, they are basic but not efficient for larger files",
        "BufferedReader and BufferedWriter are more efficient as they read and write larger chunks of data at a time, improving performance",
        "Serialization is used to convert objects into a byte stream so that they can be saved or transmitted",
        "Deserialization is the reverse of serialization, where a byte stream is converted back into the original object",
        "Serializable Interface: Classes must implement Serializable to enable serialization"
    ]
   },
   {
    chapterIndex:7,
    notes:[
        "Lambda expressions provide a concise way to pass behavior (as an instance of a functional interface) to methods.",
         "Functional interfaces are interfaces with just one abstract method and are commonly used with lambda expressions.",
         "Stream API allows you to process sequences of data with methods like filter(), map(), and reduce() in a functional way.",
         "Default methods in interfaces provide default implementations, reducing the need to override them in implementing classes.",
         "Static methods in interfaces are called using the interface name and cannot be overridden by implementing classes.",
    ]
   },
   {
    chapterIndex:8,
    notes:[
        "Generics allow you to write more flexible and type-safe code by defining classes, interfaces, and methods with type parameters.",
        "Annotations are metadata that provide additional information to the compiler or runtime environment, such as @Override, @Deprecated, and @SuppressWarnings.",
        "Networking in Java involves using the java.net package to create client-server applications, using classes like Socket, ServerSocket, and URL for communication over the network.",
    ]
   }

    
];

const articles = [
    {
        chapterIndex: 0,
        articles: [
           
        ]
    },
    {
        chapterIndex: 1,
        articles: [
         
        ]
    },
    {
        chapterIndex: 2,
        articles: [
          
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
