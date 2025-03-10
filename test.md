# System-Wide FD Tables (Command Line Tool)
## *1. Metadata*
*Muhammad Shaaf Yousaf* \
*8th March 2025*

## *2. Introduction*
This is program is written by Shaaf Yousaf in **C** language and is meant to be used on **UNIX** systems.
With this program you can display tables used by the OS to keep track of open files, assignation of File Descriptors (FD) and processes.

The following details can be displayed of open processes:
- Process IDentifier Number (PID)
- File Descriptor Number (FD)
- Inode Number
- FileNames associated with PID and its FD numbers

<img src="https://github.com/user-attachments/assets/05cc2a04-6c74-4ab2-94aa-6c3d4ac212e6" height="300">

## *3. Approach behind the implementation*
Displaying only the **user's processes that are currently open** was the entire point of this program. Hence, our program reads information **once** while exploiting **UNIX** file permissions to our advantage. For processes are not our's, we are denied access to the directory ```/proc/PID/FD``` (due to lack of permissions). So this program transverses through every directory ```/proc/PID```, and checks if ```/proc/PID/FD``` is accessible, and if it is then we further retrieve information using ```struct dirent *``` to find the filename for the opened process of that specific FD and PID number.

## *4. Implementation*
***4.1:*** The program uses multiple functions to properly. Since the nature of this problem involves reading *information* once (as processes are constantly being created and killed), so one of our functions is responsible to read ```PID```, ```FD```, ```FileName```, ```Inode``` which it stores in three different ```.txt``` files to be used later by other functions. This ensures that all of the information is being stored without the inconvenience of allocating memory inside **C** to store all of this information. 


***4.2 & 4.3:*** We only have one module for this program ```main.c```, and it includes the following functions:
- Function responsible for reading and storing all file information:
```C
  systemScan(); // Reads and Stores all Information in three .txt files
                // Libraries used: <dirent.h>, <unistd.h>
                // System Calls: readlink();
  ```
- Functions responsible for displaying our 6 Tables, these functions use our .txt files and prints them onto the command line:
```C
    Composite(); // prints PID, FD, FileName, Inode from systeminfo.txt
    systemWIDE(); // prints PID, FD, FileName from systeminfo.txt
    Vnode(); // prints FD, Inode from systeminfo.txt
    perProcess(); // prints PID, FD from systeminfo.txt
    Summary(); // prints PID and total FD associated to that PID from summary.txt
    offendingProcess(); // prints PID and total FD associated to that PID from offending.txt that are above a FD threshold
  ```
- Function responsible for making it all work together:
```C
  main(); // home base for our program
  ```
- The following UNIX resources are used to display above details:
  - The directory ```/proc/####``` where #### is the PID number.
  - The file ```/proc/PID/##``` where ## is the FD number.
  - Using ```struct dirent *``` data structure, we are able to retreive Inode number and name for the associated file in above directories.
  - We use ```readlink()``` along with information from ```struct dirent *``` to find the actual open process-name associated with currrent open FD number.

## *5. Program FlowChart*
![light](https://github.com/user-attachments/assets/f4dad7cd-9505-4e3d-87aa-1f419b776b05)

## *6. Instructions on Compiling*
Using the makefile, we can compile the code using ```make``` command in the terminal.\
We can also use ```make clean``` to delete all files produced by make and by the program.\
If we instead would like to compile the program without makefile, we can use the following command: \
```C
gcc main.c -std=gnu99
```

## *7. Expected Results*
The program is ```e

