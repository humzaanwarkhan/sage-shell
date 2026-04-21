# SAGE Shell

**Suggestive Auto-command Generative Environment Shell**

SAGE Shell is a modern Linux shell built in C, designed to make command-line interaction more intuitive, efficient, and informative. It enhances the traditional terminal experience with intelligent suggestions, autocomplete, and execution insights while retaining full control and performance.

---

## Overview

SAGE Shell was developed as a final year project with the goal of improving usability in command-line environments. It combines low-level system programming with user-focused features to create a more accessible and guided shell experience.

---

## Features

### Command Execution and Pipelining

* Executes Linux commands using `fork()` and `execvp()`
* Supports command chaining using pipes (`|`)

### Input and Output Redirection

* Handles input and output redirection using `<` and `>` operators

### Command Logging and History

* Maintains a log of executed commands
* Allows replaying previous command sequences

### Smart Autocomplete and Suggestions

* Provides command and path suggestions
* Detects and corrects common typing errors

### Resource-Aware Execution

* Displays CPU usage, memory usage, and execution time

### Safety and Error Handling

* Warns users before executing potentially risky commands
* Provides helpful feedback for failed commands

---

## Installation

Clone the repository and build the project:

```bash
git clone https://github.com/your-username/sage-shell.git
cd sage-shell
gcc sage.c -o sage
./sage
```

---

## Project Structure

* `sage.c` – Core implementation of the shell
* Additional modules – Handle parsing, execution, logging, and suggestions

---

## Developers

* Ishan Khan — Project Lead
* Humza Anwar Khan — System Design
* Khateeb Aamir Usmani — Core Developer
* Muhammad Ali — Testing and Optimization

---

## Motivation

Traditional shells are powerful but often unintuitive for new users. SAGE Shell aims to bridge that gap by introducing guidance, suggestions, and feedback while maintaining the flexibility of a standard Linux shell.

---

## Future Improvements

* Enhanced autocomplete with context awareness
* Plugin support for extensibility
* Improved UI/UX for terminal interaction
* Cross-platform compatibility

---

## License

This project is developed for academic and educational purposes.
