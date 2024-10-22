---
title: "Second week"
excerpt: "Writing Your First Program, Understanding the main function, Basic I/O, and Comments"
coverImage: "/assets/blog/cpp/CPP-logo.jpeg"
date: "2024-10-16T02:28:07.322Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/cpp/CPP-logo.jpeg"
---

## Week 1: **Basic Syntax and Structure**

* Writing your first program
* Understanding the main function
* Basic input and output (cin, cout)
* Comments

---
## **Writing Your First Program**
> Let's start by writing our first C++ program. This simple program prints 'Hello, World!' to the console. The essential structure includes `#include <iostream>`, which includes the input-output stream library. The `int main() { ... }` function defines the main function where the execution of the program begins. Inside the main function, `std::cout` is used for outputting text to the console, and `return 0;` indicates that the program has completed successfully."

* Start with the essential structure:
  
``` cpp
  #include <iostream>

  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }
```

* ``` #include <iostream> ```: Includes the input-output stream library.
* ``` int main() { ... } ```: Defines the main function where execution starts.
* ``` std::cout ```: Standard character output stream.
* ``` return 0; ```: Indicates successful completion.

---
## **Understanding the Main Function**
> Now, let's delve deeper into the main function. The `int main() { ... }` is the entry point of every C++ program and it returns an integer value to the operating system. The `return 0;` statement indicates that the program ended successfully. Non-zero values typically indicate an error or special exit status. There are other possible main function signatures, like `int main(int argc, char* argv[])`, which are used for handling command-line arguments."

* `int main() { ... }`
    * Entry point of every C++ program.
    * Returns an integer value to the operating system.
* `return 0;`
    * Indicates that the program ended successfully.
    * Non-zero values typically indicate an error or special exit status.
* Other possible main function signatures:
    * `int main(int argc, char* argv[])`
    * Used for command-line arguments.

---
## **Basic Input and Output (cin, cout)**
> Next, let's look at basic input and output using `cin` and `cout`. `std::cout` is used for outputting text to the console. For example, `std::cout << "Enter a number: ";` prompts the user to enter a number. `std::cin` is used for inputting data from the user. For example, `int num; std::cin >> num;` reads an integer entered by the user. Here's a complete example that combines both `cin` and `cout` to prompt the user for a number and then display it back to them.

* `std::cout`: Used for output.
    * Example:
    ``` 
    std::cout << "Enter a number: ";
    ```
* `std::cin`: Used for input.
    * Example:
        ```
        int num;
        std::cin >> num;
        ```
* Combining `cin` and `cout`:
    ```
    #include <iostream>

    int main() {
        int num;
        std::cout << "Enter a number: ";
        std::cin >> num;
        std::cout << "You entered: " << num << std::endl;
        return 0;
    }
    ```

---
## **Comments**
> Comments are a crucial part of writing understandable and maintainable code. In C++, single-line comments start with `//` and extend to the end of the line. For example, `// This is a single-line comment`. Multi-line comments are enclosed in `/* ... */` and can span multiple lines. For example, `/* This is a multi-line comment */`. Comments improve code readability, explain code functionality, and can be used to temporarily disable code during debugging.

* Single-line comments:
    * Use `//` to write comments on a single line.
    * Example:
    ```
    // This is a single-line comment
    std::cout << "Hello, World!" << std::endl;
    ```
* Multi-line comments:
    * Use `/* ... */` to write comments spanning multiple lines.
    * Example:
    ```
    /*
    This is a multi-line comment.
    It can span multiple lines.
    */
    std::cout << "Hello, World!" << std::endl;
    ```
* Purpose of comments:
    * Improve code readability.
    * Explain code functionality.
    * Temporarily disable code during debugging.

---
## **Example Program with All Concepts**
* Example:

```cpp
#include <iostream>

int main() {
    // Prompt user for input
    std::cout << "Enter a number: ";
    int num;
    std::cin >> num; // Read user input

    // Display the input number
    std::cout << "You entered: " << num << std::endl;

    return 0; // Program ends successfully
}
```

* Review:
    * Includes the `#include <iostream>` directive.
    * Defines the main function.
    * Uses `cout` for output and `cin` for input.
    * Contains single-line comments.

---
