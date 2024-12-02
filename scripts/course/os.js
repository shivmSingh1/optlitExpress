import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
    {
        title: "Chapter 1: Introduction to Operating System",
        
        content: `<br><p> <b><h5>1. Introduction to Operating Systems</h5></b></p>

<p>An Operating System (OS) is a software that manages computer hardware and software resources and provides services for computer programs. It acts as an intermediary between users and the hardware of a computer, enabling programs to run efficiently and securely.</p>
<p><br></p>

<p> <b><h5> 2. Basics and Definitions </b></h5></p>

<p> Operating System (OS): It is the system software that controls computer hardware, software, and resources, providing an interface for users and applications.</p>
<p> Examples: Windows, Linux, macOS, Android.</p>
<p><br></p>

<p><b><h5> 3. Types of Operating Systems</b></h5></p>
<br>
<p><b>1. Batch OS:</b></p>
<p>&nbsp; &nbsp; Executes a series of jobs without manual intervention.</p>
<p>&nbsp; &nbsp; Jobs are processed in batches (groups) without interaction.</p>
<p>&nbsp; &nbsp; Example: Early mainframe systems.</p>
<br>
<p><b>2. TimeSharing OS:</b></p>
<p>&nbsp; &nbsp; Allows multiple users to share computer resources simultaneously by switching between tasks quickly.</p>
<p>&nbsp; &nbsp; Provides the illusion of simultaneous execution.</p>
<p>&nbsp; &nbsp; Example: UNIX, Linux.</p>
<br>
<p><b>3. Distributed OS:</b></p>
<p>&nbsp; &nbsp; Manages a group of separate computers that appear as a single system to the user.</p>
<p>&nbsp; &nbsp; Resources are shared across multiple machines.</p>
<p>&nbsp; &nbsp; Example: Google&rsquo;s Android, Hadoop.</p>
<br>
<p><b>4. RealTime OS:</b></p>
<p>&nbsp; &nbsp; Designed to handle realtime tasks that require immediate processing and response.</p>
<p>&nbsp; &nbsp; Often used in systems with strict time constraints (e.g., embedded systems, robotics).</p>
<p>&nbsp; &nbsp; Example: RTOS (RealTime Operating System), VxWorks.</p>

<p><br></p>
<p> <b><h5>4. Operating System Services and System Calls</b></h5></p>
<br>
<p> Operating System Services: These are the functions or features provided by the OS, such as memory management, file handling, process scheduling, and I/O management. They help applications run efficiently.</p>
<p>&nbsp;&nbsp;</p>
<p> System Calls: They are the mechanisms through which user programs request services from the OS. System calls serve as an interface between user space and the kernel.</p>
<p>&nbsp;  Examples of system calls include:</p>
<p>&nbsp; &nbsp;  open() &ndash; Opens a file</p>
<p>&nbsp; &nbsp;  read() &ndash; Reads data from a file</p>
<p>&nbsp; &nbsp;  write() &ndash; Writes data to a file</p>
<p>&nbsp; &nbsp;  fork() &ndash; Creates a new process</p>
<p><br></p>

<p><b><h5> 5. Kernel and User Space</b></h5></p>

<p><b> Kernel:</b></p>
<p>&nbsp;  The core part of the OS, responsible for managing hardware and system resources.</p>
<p>&nbsp;  Runs with the highest privileges and interacts directly with the hardware.</p>
<p>&nbsp;  Examples of kernel tasks: process management, memory management, device handling.</p>
<br>
<p> <b>User Space:</b></p>
<p>&nbsp;  Refers to the memory area where user applications and programs run.</p>
<p>&nbsp;  Programs in user space interact with the kernel through system calls.</p>
<p>&nbsp;  User space has restricted access to the hardware to ensure security and stability.</p>
<p><br></p>
<p></p>
<p><br></p>`,
       
    },
    {
        title: "Chapter 2: Process Management",
        content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process and Threads Concepts</title>
</head>
<body>
    <br><h5>1. Concept of a Process and Threads</h5>
    <p></p>
    <p><strong>Process:</strong> A process is a program in execution. It contains the program code (also known as the text section), current activity (represented by the program counter), a stack (for function calls and local variables), and a heap (for dynamic memory allocation). A process is an independent entity that has its own address space, resources, and execution flow.</p>

    <h5>Process Components:</h5>
     <p></p>
    <ul>
        <li><strong>Program Code:</strong> The instructions of the program.</li>
        <li><strong>Data:</strong> The variables and dynamic data the program uses.</li>
        <li><strong>Stack:</strong> Used for function calls and local variables.</li>
        <li><strong>Heap:</strong> Memory used for dynamically allocated data.</li>
        <li><strong>Process Control Block (PCB):</strong> Stores information about a process such as process ID, program counter, CPU registers, memory management info, and I/O status.</li>
    </ul>

    <p><strong>Thread:</strong> A thread is the smallest unit of execution within a process. A process may have multiple threads, which share the same address space but have separate execution paths, stack space, and program counters. Threads within the same process can share resources like memory but are scheduled and executed independently. This allows processes to perform concurrent tasks.</p>

    <h5>Thread Components:</h5>
     <p></p>
    <ul>
        <li><strong>Thread ID:</strong> Unique identifier for a thread.</li>
        <li><strong>Program Counter:</strong> Tracks the execution of instructions for the thread.</li>
        <li><strong>Registers:</strong> Holds the thread's working data.</li>
        <li><strong>Stack:</strong> Contains function calls and local variables for the thread.</li>
    </ul>
<br>
    <h5>2. Process Scheduling Algorithms</h5>
     <p></p>
    <p>Scheduling algorithms determine the order in which processes or threads are executed. The main goal is to maximize CPU utilization, ensure fairness, and minimize latency.</p>

    <h5>First-Come-First-Served (FCFS):</h5>
    <ul>
        <li><strong>Description:</strong> Processes are scheduled in the order they arrive in the ready queue.</li>
        <li><strong>Pros:</strong> Simple to implement and understand.</li>
        <li><strong>Cons:</strong> It can cause the convoy effect, where a long process delays all shorter processes. It has poor average waiting time.</li>
    </ul>

    <h5>Shortest Job First (SJF):</h5>
    <ul>
        <li><strong>Description:</strong> The process with the shortest execution time is selected for execution next. It can be preemptive (Shortest Remaining Time First, SRTF) or non-preemptive.</li>
        <li><strong>Pros:</strong> Minimizes the average waiting time.</li>
        <li><strong>Cons:</strong> Hard to predict execution times; if not preemptive, long processes can block short ones.</li>
    </ul>

    <h5>Round Robin (RR):</h5>
    <ul>
        <li><strong>Description:</strong> Each process is assigned a fixed time slice (quantum) in a cyclic order. If a process doesn't finish in its time slice, it's placed back in the queue.</li>
        <li><strong>Pros:</strong> Fair and time-sharing. Ensures all processes get CPU time.</li>
        <li><strong>Cons:</strong> The choice of time quantum is crucial. Too small leads to overhead; too large behaves like FCFS.</li>
    </ul>

    <h5>Priority Scheduling:</h5>
    <ul>
        <li><strong>Description:</strong> Each process is assigned a priority, and the process with the highest priority is executed first. Ties can be broken using FCFS or other mechanisms.</li>
        <li><strong>Pros:</strong> Suitable for time-critical applications.</li>
        <li><strong>Cons:</strong> Low priority processes can starve (never get executed). This can be mitigated by aging, where priorities of waiting processes gradually increase.</li>
    </ul>
<br>
    <h5>3. Context Switching</h5>
     <p></p>
    <p>Context Switching is the process of saving the state of a currently running process (or thread) and restoring the state of another process. The context of a process includes the program counter, CPU registers, and memory mappings.</p>
    <ul>
        <li><strong>Why it's needed:</strong> Context switching is necessary for multitasking and sharing CPU resources between multiple processes or threads.</li>
        <li><strong>Overhead:</strong> The process incurs overhead, as the CPU needs to save the current process's state and load the state of the next one. Excessive context switching can lead to performance degradation.</li>
    </ul>

    <h5>Context Switch Steps:</h5>
    <ol>
        <li>Save the state (context) of the currently running process.</li>
        <li>Update the process control block (PCB) with the saved state.</li>
        <li>Load the state (context) of the next process to execute.</li>
        <li>Update the PCB for the new process.</li>
        <li>Transfer control to the new process.</li>
    </ol>
<br>
    <h5>4. Interprocess Communication (IPC)</h5>
     <p></p>
    <p>Interprocess Communication (IPC) refers to mechanisms that allow processes to communicate with each other and synchronize their actions. IPC is necessary because processes in modern operating systems run in isolated address spaces.</p>

    <h5>Types of IPC:</h5>
    <ul>
        <li><strong>Pipes:</strong> A unidirectional communication channel where data written by one process can be read by another.</li>
        <li><strong>Message Queues:</strong> A queue in memory where messages can be placed by one process and retrieved by another, allowing for asynchronous communication.</li>
        <li><strong>Shared Memory:</strong> A region of memory that is mapped into the address space of multiple processes, allowing them to communicate by reading and writing to it.</li>
        <li><strong>Semaphores:</strong> Used for synchronization to control access to shared resources.</li>
        <li><strong>Sockets:</strong> Used for communication between processes that may be on different machines.</li>
    </ul>
<br>
    <h5>5. Deadlocks</h5>
     <p></p>
    <p>A deadlock is a situation where two or more processes are stuck in a circular wait, each waiting for a resource held by another. This results in no process making progress.</p>

    <h5>Conditions for Deadlock (Coffman Conditions):</h5>
    <ul>
        <li><strong>Mutual Exclusion:</strong> At least one resource must be held in a non-shareable mode.</li>
        <li><strong>Hold and Wait:</strong> A process holding at least one resource is waiting for additional resources held by others.</li>
        <li><strong>No Preemption:</strong> Resources cannot be forcibly removed from processes.</li>
        <li><strong>Circular Wait:</strong> A set of processes exists such that each process is waiting for a resource held by the next process in the set.</li>
    </ul>

    <h5>Deadlock Detection:</h5>
    <p>Deadlock detection algorithms can monitor the system and detect cycles in resource allocation graphs, indicating deadlock. Once detected, processes can be aborted or resources preempted to break the deadlock.</p>

    <h5>Deadlock Avoidance:</h5>
    <p>The system dynamically checks the state of resource allocation to ensure that a circular wait cannot occur. One common algorithm is the Banker's Algorithm, which checks if resource allocation leaves the system in a safe state.</p>

    <h5>Deadlock Prevention:</h5>
    <p>By ensuring that one of the Coffman conditions is never met, deadlocks can be prevented:</p>
    <ul>
        <li><strong>Prevent Hold and Wait:</strong> Processes must request all resources at once.</li>
        <li><strong>Prevent Circular Wait:</strong> Ensure that resources are requested in a specific order (resource ordering).</li>
        <li><strong>Prevent Mutual Exclusion:</strong> Not always possible, as some resources cannot be shared (e.g., printers).</li>
    </ul>
    <p><br><p>
</body>
</html>
`,
        
    },
    {
        title: "Chapter 3: Memory Management ",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Allocation and Concepts</title>
</head>
<body>
    <br><h5>1. Memory Allocation: Contiguous and Non-Contiguous</h5>
    <p></p>
    <p><strong>Contiguous Memory Allocation:</strong> In this method, each process is allocated a single, continuous block of memory. This means the process occupies a set of adjacent memory locations. It’s easy to implement but can lead to fragmentation, where free memory is scattered in small chunks that can’t be used effectively.</p>

    <p><strong>Non-Contiguous Memory Allocation:</strong> Here, a process doesn't need to occupy a single block. Instead, it can be split into chunks that are stored in different places in memory. This method is more flexible and helps avoid fragmentation. It’s commonly used in paging and segmentation.</p>
<br>
    <h5>2. Paging and Segmentation</h5>
     <p></p>
    <p><strong>Paging:</strong> This is a memory management technique where the physical memory is divided into fixed-size blocks called "pages," and the process is also divided into pages. Each page can be placed anywhere in memory. This avoids fragmentation and makes memory management easier.</p>

    <p><strong>Page Table:</strong> A table that keeps track of where each page of a process is stored in memory.</p>

    <p><strong>Segmentation:</strong> Unlike paging, segmentation divides a process into different segments based on logical units, such as code, data, and stack. Each segment can be of a different size. Segmentation makes the memory allocation more flexible and reflects the structure of the program.</p>
<br>
    <h5>3. Virtual Memory Concepts</h5>
     <p></p>
    <p><strong>Virtual Memory:</strong> This is a technique that allows programs to run as if they have access to a large block of continuous memory, even if the physical memory (RAM) is smaller. Virtual memory uses both RAM and disk space to give the illusion of a larger memory. It’s managed through the use of paging or segmentation.</p>

    <p>When the physical memory is full, some parts of a program that are not currently needed are temporarily moved to the disk (called <strong>swap space</strong>) to make room for others.</p>
<br>
    <h5>4. Page Replacement Algorithms (FIFO, LRU, Optimal)</h5>
     <p></p>
    <p>When the physical memory is full, and a new page needs to be loaded, the operating system must decide which page to remove (or replace). These are some common algorithms used to decide which page to replace:</p>

    <h6>FIFO (First-In-First-Out):</h6>
    <p>This algorithm replaces the oldest page in memory (the one that has been in memory the longest) when a new page needs to be loaded. It’s simple but not always efficient.</p>

    <h6>LRU (Least Recently Used):</h6>
    <p>This algorithm replaces the page that has not been used for the longest time. It tries to keep pages that are frequently used in memory, which can improve performance.</p>

    <h6>Optimal:</h6>
    <p>This is the ideal but impractical algorithm. It replaces the page that will not be used for the longest time in the future. It requires knowing the future page accesses, which is not possible in real systems but serves as a benchmark for other algorithms.</p>
<br>
    <h5>5. Swapping</h5>
     <p></p>
    <p><strong>Swapping:</strong> This is the process of moving a whole process from RAM to the disk (swap space) when there is not enough memory to run it, and then bringing it back to RAM when needed. This allows the system to manage limited memory more efficiently, but swapping too often can slow down the system because accessing the disk is much slower than accessing RAM.</p>

    <p>Swapping allows programs to run in environments with less physical memory, as parts of programs can be temporarily swapped out of memory to free up space for other processes.</p>
<p><br></p>
</body>
</html>
`,
      
    },
    {
        title: "Chapter 4: File System",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Systems and Algorithms</title>
</head>
<body>

    <br><h4>File Systems and Algorithms</h4>
    <br>

    <h5>1. File Concepts and Access Methods</h6>
    <p><strong>File Concept:</strong> A file is a collection of data stored on a computer. It can contain text, images, videos, or programs. Files are named and organized in a system for easy access and management.</p>

    <p><strong>Access Methods:</strong> These define how data in a file is read or written. Common access methods include:</p>
    <ul>
        <li><strong>Sequential Access:</strong> Data is read or written in order, from start to end (like reading a book).</li>
        <li><strong>Direct Access:</strong> Allows jumping to any part of the file directly (like finding a specific page in a book using an index).</li>
    </ul>
<br>
    <h5>2. Directory Structures</h5>
    <p><strong>Directory Structure:</strong> It's the way files are organized and stored in the system. Directories (also called folders) are used to group files for easier management.</p>
    <ul>
        <li><strong>Single-level Directory:</strong> All files are stored in one list.</li>
        <li><strong>Two-level Directory:</strong> A directory for each user and another for files.</li>
        <li><strong>Hierarchical Directory:</strong> Directories are nested within other directories, forming a tree-like structure for better organization.</li>
    </ul>
<br>
    <h5>3. File System Mounting and Sharing</h5>
    <p><strong>Mounting:</strong> It’s the process of making a file system available for use by linking it to the directory structure of the OS, making it accessible. Example: When you plug in a USB drive, the OS mounts it so you can access the files.</p>

    <p><strong>Sharing:</strong> Allows multiple users or systems to access the same files. This can be done through network file systems or file sharing protocols, letting different systems or users access the same data.</p>
<br>
    <h5>4. File Allocation Methods</h5>
    <p>These are the ways the operating system stores files on a disk.</p>
    <ul>
        <li><strong>Contiguous Allocation:</strong> Files are stored in consecutive blocks. It’s fast to access, but if a file grows, it may need to be moved to a new location.</li>
        <li><strong>Linked Allocation:</strong> Each file is stored in non-contiguous blocks, but each block points to the next block in the file. It’s flexible but slower to access due to the need to follow links.</li>
        <li><strong>Indexed Allocation:</strong> A special index block stores the addresses of all the blocks of a file. It’s efficient and avoids fragmentation, allowing fast access.</li>
    </ul>
<br>
    <h5>5. Disk Scheduling Algorithms</h5>
    <p>These algorithms determine the order in which disk requests are processed. The goal is to optimize the time taken to read or write data.</p>
    <ul>
        <li><strong>FCFS (First Come, First Served):</strong> The disk processes requests in the order they arrive, simple but not always efficient.</li>
        <li><strong>SSTF (Shortest Seek Time First):</strong> The disk picks the request closest to the current head position, reducing travel time.</li>
        <li><strong>SCAN (Elevator Algorithm):</strong> The disk head moves in one direction until it reaches the end, then reverses direction. This is similar to an elevator moving up and down.</li>
        <li><strong>Other Algorithms:</strong> There are other scheduling algorithms like C-SCAN (Circular SCAN) and LOOK, each with its own way to optimize disk access times.</li>
    </ul>

</body>
</html>`,
        
    },
    {
        title: "Chapter 5:Input/Output Management ",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Architecture Concepts</title>
</head>
<body>
   <br> <h4>Computer Architecture Concepts</h4>
<br>
    <h5>1. I/O Devices and Controllers</h5>
    <p><strong>I/O Devices</strong> (Input/Output Devices) are hardware that allow communication between a computer and the outside world. They can be input devices (like a keyboard or mouse) or output devices (like a monitor or printer).</p>
    <p><strong>I/O Controllers</strong> are circuits or chips that manage data transfer between the computer's CPU (central processing unit) and I/O devices. They act as intermediaries, making sure data is sent to and from devices correctly.</p>
<br>
    <h5>2. Device Drivers</h5>
    <p>A <strong>Device Driver</strong> is software that tells the computer how to communicate with a specific I/O device (like a printer or a keyboard). It acts as a translator, allowing the operating system (OS) and applications to use hardware without needing to understand all the details of the hardware itself.</p>
<br>
    <h5>3. Interrupt Handling</h5>
    <p><strong>Interrupt Handling</strong> is a method the computer uses to manage events that need immediate attention. When an event happens (like pressing a key on a keyboard), it "interrupts" the normal flow of the CPU to handle the event. The CPU stops what it's doing, runs a special program called an <strong>interrupt service routine</strong> (ISR), and then continues what it was doing before the interrupt.</p>
<br>
    <h5>4. DMA (Direct Memory Access)</h5>
    <p><strong>DMA</strong> allows certain hardware devices (like hard drives or sound cards) to directly transfer data to and from the computer's memory, without involving the CPU. This frees up the CPU to do other tasks while data is being transferred, improving system performance, especially for large data transfers.</p>
</body>
</html>`,
    
    },
    {
        title: "Chapter 6: Security and Protection",
        content: ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Concepts</title>
   
</head>
<body>
<br>
    <h4>Security Concepts</h4>
<br>
    <h5>1. Access Control and Permissions</h5>
    <p>Access control refers to the methods used to manage who can access certain resources in a system, like files, data, or devices. Permissions are the specific rights or rules given to users to either view, modify, or delete resources. For example, a file might have "read-only" permission for some users (they can only view it) and "read-write" permission for others (they can edit it).</p>
<br>
    <h5>2. Authentication Methods</h5>
    <p>Authentication is the process of verifying who you are before accessing a system. Common methods include:</p>
    <ul>
        <li><strong>Password:</strong> A secret word or phrase you enter to prove your identity.</li>
        <li><strong>Biometrics:</strong> Using physical characteristics like fingerprints or face scans.</li>
        <li><strong>Two-Factor Authentication (2FA):</strong> Combining something you know (like a password) with something you have (like a phone to receive a code).</li>
    </ul>
<br>
    <h5>3. Threats: Malware, Viruses, etc.</h5>
    <p>Threats are risks that can harm computer systems and data. Some common types of threats include:</p>
    <ul>
        <li><strong>Malware:</strong> Malicious software designed to harm or exploit systems (e.g., spyware, ransomware).</li>
        <li><strong>Viruses:</strong> A type of malware that spreads by attaching itself to files or programs.</li>
        <li><strong>Phishing:</strong> Fraudulent attempts to get sensitive information by pretending to be trustworthy sources (like fake emails).</li>
    </ul>
<br>
    <h5>4. Security Mechanisms: Firewalls, Intrusion Detection</h5>
    <p><strong>Firewalls:</strong> These act as barriers between a trusted network and potential threats from the internet. They filter incoming and outgoing traffic to block malicious activity.</p>
    <p><strong>Intrusion Detection Systems (IDS):</strong> These monitor network traffic for signs of harmful actions or intrusions. When suspicious activity is detected, an alert is raised so that security teams can respond.</p>

</body>
</html>
`,
        
    },
    // {
    //     title: "chapter 7:",
    //     content: "",
        
    // },
  
];



const practiceQuestions = [
    {
        chapterIndex: 0,
        questions: [
            {
                question:"1.What is the role of an Operating System (OS)? ",
                solution: `Answer: The OS manages computer hardware and software resources, providing services for computer programs. It acts as an intermediary between users and the hardware, enabling programs to run efficiently and securely.
`
            },
            {
                question: "2. How does an OS manage hardware and software resources?",
                solution: `Answer: The OS controls and allocates resources like CPU, memory, and storage to ensure smooth operation of programs and applications. It also provides an interface for users and applications to interact with hardware components.
`
            },
            {
                question:"3. What is the difference between a Batch OS and a TimeSharing OS?",
                solution: `Answer: A Batch OS processes jobs in groups without user interaction, while a TimeSharing OS allows multiple users to share resources simultaneously by switching between tasks quickly, giving the illusion of simultaneous execution.`
            },
            {
                question:"4. What tasks does the Kernel handle in an Operating System? ",
                solution: `Answer: The Kernel is the core part of the OS and handles tasks such as process management, memory management, and device handling. It interacts directly with hardware and ensures system resources are efficiently managed.`
            },
            {
                question:"5. What is a system call, and why is it important? ",
                solution: `Answer: A system call is a mechanism that allows a program to request services from the OS. It serves as an interface between user space and the kernel, enabling programs to perform tasks like opening files, reading or writing data, and creating processes.`
            },
            {
                question:"6. What is the purpose of User space in an Operating System?",
                solution: `Answer: User space is where user applications and programs run. It has restricted access to system resources to ensure security and stability, preventing unauthorized or harmful interactions with the hardware.`
            },
            {
                question:"7. What are some examples of real-time operating systems (RTOS) and where are they used?",
                solution: `Answer: Examples of real-time operating systems include RTOS and VxWorks. They are typically used in systems with strict time constraints, such as embedded systems and robotics, where immediate processing and responses are critical.
`
            },
        ]
    },
    {
        chapterIndex: 1,
        questions: [
            {
                question: "1. What is a process in an operating system? ",
                solution: `Answer: A process is a program in execution that includes the program code, data, stack, and heap. `
            },
            {
                question: "2. What are the components of a process? ",
                solution:  `Answer: The components of a process include the program code, data, stack, heap, and the Process Control Block (PCB). `
            },
            {
                question: "3. What is the difference between a process and a thread? ",
                solution: `Answer: A process is an independent unit of execution with its own resources, while a thread is the smallest unit of execution within a process that shares resources with other threads of the same process. `

            },
            {
                question: "4. What is the First-Come-First-Served (FCFS) scheduling algorithm? ",
                solution: `Answer: FCFS schedules processes in the order they arrive, but it may cause long processes to delay short ones. `
            },
            {
                question: " 5. What is Round Robin (RR) scheduling?",
                solution: `Answer: RR assigns a fixed time slice to each process and cycles through them. If a process doesn't finish, it's placed back in the queue. `
            },
            {
                question: "6. What is context switching? ",
                solution: `Answer: Context switching is saving the state of the current process and restoring the state of the next process to enable multitasking. `
            },
            {
                question: " 7. What is Interprocess Communication (IPC)?",
                solution: `Answer: IPC allows processes to communicate and synchronize their actions through methods like pipes, message queues, and shared memory. `
            },
            {
                question: " 8. What is a deadlock in an operating system?",
                solution: `Answer: A deadlock occurs when two or more processes are stuck in a circular wait, unable to progress.`
            },
            {
                question: "9. What are the conditions for a deadlock to occur? ",
                solution: `Answer: The Coffman conditions for deadlock are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.`
            },
            {
                question: " 10. What is deadlock avoidance in an operating system?",
                solution: `Answer: Deadlock avoidance ensures that the system never enters an unsafe state by checking resource allocation, like using the Banker's Algorithm.`
            },
            {
                question: "11. How can deadlocks be prevented?",
                solution: `Answer: Deadlocks can be prevented by avoiding the Coffman conditions, such as requiring processes to request all resources at once or following a specific order when requesting resources.

`
            }
        ]
    },
    {
        chapterIndex: 2,
        questions: [


            {
                question: " 1. What is contiguous memory allocation?",
                solution: `Answer: It gives a process a single, continuous block of memory, which can lead to fragmentation. `
            },
            {
                question: " 2. What is non-contiguous memory allocation?",
                solution: `Answer: It splits a process into chunks stored in different parts of memory, helping to avoid fragmentation. `
            },
            {
                question: " 3. What is the issue with contiguous memory allocation? ",
                solution: `Answer:  It can cause fragmentation, where free memory is scattered and cannot be effectively used.`
            },
            {
                question: " 4. What is paging in memory management?",
                solution: `Answer:  Paging divides memory and processes into fixed-size blocks called pages, which can be placed anywhere in memory. `
            },
            {
                question: " 5. What is a page table?",
                solution: `Answer:A page table keeps track of where each page of a process is located in memory. `
            },
            {
                question: " 6. What is segmentation?",
                solution: `Answer: Segmentation divides a process into logical parts, like code or data, with different sizes for each segment.`
            },
            {
                question: " 7. How does virtual memory work?",
                solution: `Answer: Virtual memory combines RAM and disk space to make it seem like there is more memory available. `
            },
            {
                question: " 8. What happens when physical memory is full? ",
                solution: `Answer: When RAM is full, parts of a program are moved to disk (swap space) to free up space in memory.
`
            },
            {
                question: " 9. What is the FIFO page replacement algorithm? ",
                solution: `Answer: FIFO replaces the oldest page in memory when a new page needs to be loaded. `
            },
            {
                question: " 10. What is the LRU page replacement algorithm?",
                solution: `Answer: LRU replaces the page that has not been used for the longest time, keeping frequently used pages in memory.
`
            },
            {
                question: "11. What is the optimal page replacement algorithm? ",
                solution: `Answer: The optimal algorithm replaces the page that will not be used for the longest time, but it is impractical because it needs to know future page accesses.`
            },
            {
                question: "12. What is swapping in memory management? ",
                solution: `Answer: Swapping moves a process from RAM to disk to free up memory, then brings it back when needed. `
            },



        ]
    },
    {
        chapterIndex: 3, // Chapter 4: File System
        questions: [

            {
                question: "1. What is a file? ",
                solution: `Answer: A file is a collection of data stored on a computer, like text, images, videos, or programs. `
            },
            {
                question: " 2. What is sequential access?",
                solution: `Answer: Sequential access means reading or writing data in order, from start to end.`
            },
            {
                question: " 3. What is direct access?",
                solution: `Answer: Direct access allows jumping to any part of the file directly, like using an index in a book.`
            },
            {
                question: " 4. What is a directory structure?",
                solution: `Answer:  A directory structure is how files are organized in the system, usually in folders for easier management.`
            },
            {
                question: " 5. What is a single-level directory?",
                solution: `Answer: A single-level directory stores all files in one list, without subdirectories.`
            },
            {
                question: " 6. What is a two-level directory? ",
                solution: `Answer: A two-level directory has one directory for each user and another for storing files.`
            },
            {
                question: " 7. What is a hierarchical directory?",
                solution: `Answer: A hierarchical directory has nested directories, creating a tree-like structure for better organization.`
            },
            {
                question: " 8. What does mounting a file system mean?",
                solution: `Answer: Mounting makes a file system accessible by linking it to the operating system’s directory structure.`
            },

            {
                question: " 9. What is file sharing?",
                solution: `Answer: File sharing allows multiple users or systems to access the same files through network protocols.`
            },
            {
                question: " 10. What is contiguous allocation in file storage? ",
                solution: `Answer: Contiguous allocation stores files in consecutive blocks, making access fast but limiting flexibility.`
            },
            {
                question: " 11. What is linked allocation?",
                solution: `Answer: Linked allocation stores files in non-contiguous blocks, with each block pointing to the next, but it's slower to access.`
            },
            {
                question: " 12. What is indexed allocation?",
                solution: `Answer: Indexed allocation uses a special index block to store addresses of file blocks, allowing faster access and avoiding fragmentation.`
            },
            {
                question: " 13. What is FCFS in disk scheduling?",
                solution: `Answer: FCFS (First Come, First Served) processes disk requests in the order they arrive, but it's not always efficient.`
            },
            {
                question: " 14. What is SSTF in disk scheduling?",
                solution: `Answer:  SSTF (Shortest Seek Time First) processes the disk request closest to the current head position, reducing travel time.`
            },
            {
                question: " 15. What is the SCAN algorithm in disk scheduling?",
                solution: `Answer:  SCAN moves the disk head in one direction, then reverses once it reaches the end, similar to an elevator.`
            },
            {
                question: " 16. What is C-SCAN in disk scheduling? ",
                solution: `Answer: C-SCAN (Circular SCAN) is a variation of SCAN, where the disk head moves in one direction and wraps around to the beginning.`
            },
            {
                question: " 17. What is the LOOK algorithm in disk scheduling?",
                solution: `Answer: LOOK moves the disk head in one direction until a request is found, then reverses direction.
`
            },
        ]
    },
    {
        chapterIndex: 4, 
        questions: [
            {
                question: " 1. What are I/O devices? ",
                solution: `Answer: I/O devices are hardware that allow a computer to communicate with the outside world, such as a keyboard (input) or a monitor (output).`
            },
            {
                question: " 2. What is an I/O controller?",
                solution: `Answer: An I/O controller is a part of the computer that helps manage the data transfer between the CPU and I/O devices.`
            },
            {
                question: " 3. What is a device driver?",
                solution: `Answer: A device driver is a special program that helps the computer talk to a specific hardware device, like a printer or keyboard`
            },
            {
                question: " 4. Why are device drivers important?",
                solution: `Answer: Device drivers allow the operating system and applications to use hardware devices without needing to know the details of how the device works.`
            },
            {
                question: " 5. What does interrupt handling mean in a computer?",
                solution: `Answer: Interrupt handling is when the computer stops its normal tasks to deal with something urgent, like pressing a key on the keyboard.`
            },
            {
                question: " 6. What is an interrupt service routine (ISR)?",
                solution: `Answer: An ISR is a special program that runs when the CPU is interrupted by an event, like a hardware signal, to handle it before going back to normal tasks.`
            },
            {
                question: " 7. What is DMA (Direct Memory Access)?",
                solution: `Answer: DMA is a method that lets devices like hard drives or sound cards transfer data directly to memory without needing the CPU to do it.`
            },
            {
                question: " 8. How does DMA improve performance?",
                solution: `Answer: DMA frees up the CPU by allowing devices to transfer data directly to memory, which speeds up the process and reduces CPU workload.`
            },
            {
                question: " 9. Why do we need interrupt handling in computers?",
                solution: `Answer: Interrupt handling helps the computer respond quickly to important events, like user input, without wasting time on tasks that aren't urgent.`
            },
            {
                question: " 10. Can the CPU be involved in every data transfer between devices and memory?",
                solution: ` 
Answer: No, with DMA, devices can transfer data to memory directly without involving the CPU, which saves processing power for other tasks.`
            },
        ]
    },
    {
        chapterIndex: 5, 
        questions: [
            {
                question: " 1. What is access control?",
                solution: `Answer: Access control is a way to decide who can use or view certain resources, like files or devices.`
            },
            {
                question: " 2. What are permissions?",
                solution: `Answer: Permissions are rules that allow a user to either view, edit, or delete a file or resource.`
            },
            {
                question: " 3. What does authentication mean?",
                solution: `Answer: Authentication is the process of verifying your identity before allowing access to a system.`
            },
            {
                question: " 4. What is the purpose of a password in authentication?",
                solution: `Answer: A password is a secret code you enter to prove your identity.`
            },
            {
                question: " 5. What is biometrics used for in authentication?",
                solution: `Answer: Biometrics uses your physical traits, like fingerprints or face scans, to verify your identity.`
            },
            {
                question: " 6. What is two-factor authentication (2FA)?",
                solution: `Answer: 2FA requires two forms of identification: something you know (like a password) and something you have (like a phone).`
            },
            {
                question: " 7. What is malware?",
                solution: `Answer: Malware is harmful software that can damage or steal information from your computer.`
            },
            {
                question: " 8. What is phishing?",
                solution: `Answer: Phishing is when a fake message or website tries to trick you into giving personal information.`
            },
            {
                question: " 9. What is a firewall?",
                solution: `Answer: A firewall blocks harmful traffic and unauthorized access to your computer or network.`
            },
            {
                question: " 10. What does an Intrusion Detection System (IDS) do?",
                solution: `Answer: An IDS watches for unusual or harmful activity on a network and sends an alert when it finds something suspicious.`
            },
            {
                question: " 11. Why is access control important?",
                solution: `Answer: Access control keeps sensitive information safe by making sure only authorized users can access it.`
            },
            {
                question: " 12. What harm can malware do to your system?",
                solution: `Answer: Malware can steal data, damage files, or make your system run slowly or crash.
These questions andAnswers cover key concepts like access control, authentication, threats, and security mechanisms in a clear and simple way.
`
            },
        ]
    }

];

const notes = [
    {
        chapterIndex: 0,
        notes: [
            " An OS manages hardware, software, and resources. .",
            "Acts as an intermediary between users and hardware.",
            "OS: Software that controls hardware and resources.",
            " Examples: Windows, Linux, macOS, Android.",
            "Batch OS: Processes jobs in batches, no user interaction. Example: Early mainframes.",
             "TimeSharing OS: Allows multiple users to share resources. Example: UNIX, Linux..",
             " Distributed OS: Manages multiple computers as one system. Example: Android, Hadoop.",
             " RealTime OS: Handles time-sensitive tasks. Example: RTOS, VxWorks.",
             " OS Services: Manage memory, files, processes, and I/O.",
             "System Calls: User requests for OS services (e.g., open(), read(), write(), fork()). ",
             "Kernel: Manages hardware and system resources. ",
             "User Space: Where programs run with limited hardware access, interacting with the kernel. ",        

        ]
    },
    {
        chapterIndex: 1,
        notes: [
           " Process: A program in execution with its code, data, stack, and heap. ",
           " Thread: Smallest unit of execution within a process; shares address space but has separate execution paths. ",
           " FCFS: Processes are scheduled in arrival order. ",
           " SJF: Shortest execution time first.",
           " Round Robin: Fixed time slices for each process. ",
           " Priority Scheduling: Processes scheduled by priority. ",
           " Context Switching: Saves the state of a running process and loads the next process.",
           " Interprocess Communication (IPC): Mechanisms like pipes, message queues, shared memory, semaphores, and sockets for process communication.",
           " Deadlock: Processes are stuck waiting for each other.",
           " Prevented by ensuring one of Coffman’s conditions is not met (e.g., no circular wait). ",
           
        ]
    },
    {
        chapterIndex: 2,
        notes: [
          " Contiguous Memory Allocation allocates a single continuous block of memory to a process.",
          " Non-Contiguous Memory Allocation splits a process into smaller chunks that can be stored in different places in memory. ",
          " Contiguous memory allocation can cause fragmentation, where free memory is scattered and cannot be used effectively. ",
          " Non-Contiguous memory allocation helps avoid fragmentation and is commonly used in paging and segmentation.",
          " Paging divides both physical memory and the process into fixed-size blocks called pages. ",
          " Page Table is a structure that keeps track of the locations of each page in memory. ",
          " Segmentation divides a process into logical units (such as code, data, and stack), where each segment can have a different size. ",
          " Segmentation provides more flexibility in memory allocation and reflects the logical structure of the program. ",
          " Virtual Memory allows programs to use more memory than physical RAM by utilizing both RAM and disk space. ",
          " When physical memory is full, parts of a program are moved to swap space (on disk) to free up RAM. ",
          " FIFO (First-In-First-Out) replaces the oldest page in memory when a new page needs to be loaded. ",
          " LRU (Least Recently Used) replaces the page that has not been used for the longest time, keeping frequently used pages in memory.",
          " The Optimal page replacement algorithm replaces the page that will not be used for the longest time in the future, though it's impractical. ",
          " Swapping moves a whole process from RAM to disk when memory is full, and brings it back to RAM when needed. ",
          " Excessive swapping can slow down the system because accessing the disk is slower than accessing RAM.",

        ]
    },
    {
        chapterIndex: 3,
        notes: [
          " File Concept: A file is a collection of data stored on a computer, such as text, images, videos, or programs",
          " Sequential Access: Data in a file is read or written in order from start to finish, like reading a book.",
          " Direct Access: Allows jumping to any part of the file directly, similar to using an index in a book.",
          " Directory Structure: Organizes files in a system for easier management, often using folders.",
          " Single-level Directory: All files are stored in one list without any subdirectories.",
          " Two-level Directory: Has one directory for each user and another for storing files, offering a bit more organization.",
          " Hierarchical Directory: Uses nested directories (folders within folders) to form a tree-like structure for better organization.",
          " Mounting: The process of linking a file system to the operating system’s directory structure to make it accessible for use.",
          " File Sharing: Allows multiple users or systems to access and share the same files through network file systems or protocols.",
          " Contiguous Allocation: Files are stored in consecutive memory blocks, providing fast access but causing fragmentation if files grow.",
          " Linked Allocation: Files are stored in non-contiguous blocks, where each block points to the next. It is flexible but slower to access.",
          " Indexed Allocation: Uses an index block to store the addresses of all file blocks, ensuring faster access and avoiding fragmentation.",
          " FCFS (First Come, First Served): A disk scheduling algorithm that processes requests in the order they arrive, though it can be inefficient.",
          " SSTF (Shortest Seek Time First): A disk scheduling algorithm that processes the closest request to the current head position, reducing travel time.",
          " SCAN Algorithm: The disk head moves in one direction until it reaches the end and then reverses direction, like an elevator moving up and down.",
       


        ]
    },{
        chapterIndex: 4,
        notes: [
          " I/O Devices: Hardware for input (e.g., keyboard) and output (e.g., monitor).",
          " I/O Controllers: Manage data transfer between CPU and I/O devices.",
          " Device Driver: Software that helps the OS control hardware devices",
          " Interrupt: A signal that stops the CPU to handle urgent tasks.",
          " ISR (Interrupt Service Routine): A program that handles the interrupt.",
          " DMA (Direct Memory Access): Allows devices to transfer data directly to memory, without the CPU.",
          " Benefit: Frees up CPU for other tasks, improving performance.",
         

        ]
    },
    {
        chapterIndex: 5,
        notes: [
          " Access Control and Permissions: Controls who can access resources, and defines what actions they can perform (e.g., view, edit, or delete).",
          " Authentication Methods: Verifies identity using passwords, fingerprints, or codes sent to your phone (2FA).",
          " Threats: Risks include harmful software (malware), viruses, fake messages (phishing), and denial-of-service (DoS) attacks.",
          " Security Mechanisms: Firewalls block harmful traffic, IDS detects suspicious activity, and encryption protects sensitive data.",
          " Data Backup: Regularly backing up data ensures recovery in case of attacks or failures.",
          " Security Patches: Updating software regularly helps fix vulnerabilities that could be exploited by attackers.",
        

        ]
    },
    // {
    //     chapterIndex: 6,
    //     notes: [
    //       " ",
    //       " ",
    //       " ",
    //       " ",
    //       " ",
    //       " ",
    //       " ",
    //       " ",

    //     ]
    // },
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
