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
The program accepts the following command-line arguments:

***By Default, if  no arguemnts are provided, our program will run ```--composite``` and will display all currently running processes.***
- ```--per-process``` indicates that only the process FD table will be displayed
<img src="https://github.com/user-attachments/assets/c9bf7e2c-79cf-4509-8ad5-29d6a7da861a" width="200">

- ```--systemWide``` indicates that only the system-wide FD table will be displayed
<img src="https://github.com/user-attachments/assets/df253c14-5b6a-4e1e-97be-40e64cb3599e" width="400">

- ```--Vnodes``` indicates that the Vnodes FD table will be displayed
<img src="https://github.com/user-attachments/assets/485e81b1-0e35-4e35-946a-08595f8e3030" width="150">

- ```--composite``` indicates that only the composed table will be displayed
<img src="https://github.com/user-attachments/assets/906408d1-f479-4a7e-a75d-cf36a5277fe1" width="500">

- ```--summary``` indicates that a table summarizing number of FDs open per process will be displayed
<img src="https://github.com/user-attachments/assets/3c9fe04b-c5ef-44f4-8634-bb1007cc6235" width="500">

- ```--threshold=X``` where X denotes an integer, indicating that processes which have a number of FD assigned larger than X should be flagged in the output. For this it will list the PID and number of assigned FDs, e.g. PID (FD)
<img src="https://github.com/user-attachments/assets/9fd95f60-b73f-4ebc-abba-ffd9e806e8b7" width="600">

- One positional argument indicating a particular process id number (PID), 
(if not specified the program will attempt to process all the currently running processes for the user executing the program)
<img src="https://github.com/user-attachments/assets/97fcef84-c4cd-4ada-a03a-ccc0e4efb7c5" width="500">

- ```--output_TXT``` and ```--output_binary``` when these flags are used the program will save the "composite" table in text (ASCII) or binary format into a file named ```compositeTable.txt``` or ```compositeTable.bin``` respectively.



## *8. Test Cases*
***8.1: General Cases***


The program will run as many recognized arguments: 

```./main.out --composite --Vnodes --per-proces```

In case ann unrecognized argument is provided, the program will ignore that argument and run any other recognized arguments:

```./main.out --composite efwfwefewf```

However, if the only argument provided is not recognized then the program will not display any tables:

```./main.out efwfwefewf```
***8.2: Producing Text and Binary File***

In order to produce ```compositeTable.txt``` and/or ```compositeTable.bin``` using their respective flags, we need to make sure we do not target any ***PID*** using the ```--threshold=X``` flag. This is because the program reads system information only once and stores it in ```systeminfo.txt```, which is later used to write to both ```.txt``` and ```.bin``` files. 

In case we target a specific ***PID***, the function ```systemScan()``` will discard storing all other ***PIDs*** inside ```systeminfo.txt``` and therefore the ```.txt``` and ```.bin``` files will only show information for the target ***PID***.



## *9. Disclaimer*
***9.1: General Information***

In case the program is not able to remove ```systeminfo.txt``` or ```summary.txt``` or ```offending.txt``` from a previous run, then the next time we run out program it will not be able to properly display new updated information regarding that specific ```.txt``` file.

***9.2: Producing Text and Binary File***

As stated in ***8.2***, we must be careful when using ```--output_TXT``` and ```--output_binary```. For proper usage please refer to ***8.2***.


## *10. References*
- https://man7.org/linux/man-pages/man5/proc.5.html
- https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/proc.html
- https://man7.org/linux/man-pages/man2/readlink.2.html
- https://www.tutorialspoint.com/c_standard_library/c_function_fwrite.htm

