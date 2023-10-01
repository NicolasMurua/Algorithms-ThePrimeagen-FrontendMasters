# The last algorithms course you'll need

Here I will detail all the concepts that I achieved over the journy of this course.

## Introduction

- what are Merkle trees?
- Recommended books: "The Introduccion to Algorithms", "For Programmers who don't know how to DataStructure and would like to do other things well too".
  The first one is long, the second one is beginner frendly
  1st: https://dl.ebooksworld.ir/books/Introduction.to.Algorithms.4th.Leiserson.Stein.Rivest.Cormen.MIT.Press.9780262046305.EBooksWorld.ir.pdf, https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-1&linkCode=sl1&tag=theprimeagen-20&linkId=83c55b2c018fbe94a1de79ebd447b66a&language=en_US&ref_=as_li_ss_tl
  2nd: https://usermanual.wiki/Document/A20Common20Sense20Guide20To20Data20Structures20And20Algorithms2020Jay20Wengrow.1281995573.pdf, https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-16&linkCode=sl1&tag=theprimeagen-20&linkId=2000de29907b98b5ac7a98aa6b52c1d9&language=en_US&ref_=as_li_ss_tl

## Arrays Data Structure

- array is a countiniguous memory space of a centern amounts of bytes.
- Array concepts in node:
  ArrayBuffer() -> Used to represent raw binary data buffer. (basically just an array that contains raw binary data.),
  Unit8Array() -> Represents an array of 8-bit unsinged integers. All the elements are initialized to 0,
  Unit16Array() -> The same as above but whit 16-bit for each element of the array.
- The thing is that you can have a view of the same piece of memory representing the array. It's possible to see those cells of memory as 8-bit or 16-bit. The main concept that ThePrimeAgen tries to explain is that an array is just a countiniguous memory spaces containing ceros and ones.
  You can take a countiniguous memory space and intepreted in diferents ways.
- At this point I supposed that we are talking about arrays with fixed space.
- The way that we uses indexes to iterate trough an array is by multipling the offcet (the index) times the bit space that each elements have. (`0*8-bits, 1*8-bits, etc.`)
- I learn about Big-endian and Little-endian. These are 2 diferents ways of storing any number into bytes in memory. The oldest pcs and the more easy approach is using the Big-endian, but Little-endian has the advantage that allways the least significant byte is first in memory (0-7 bits) and etc. So the hardware is simplier to desing, but in the other hand if you are reading the memory it becomes harder because you have to manually rearrange the bytes in your head.
- The internet has agreed to be everythin big-endian, modern pcs uses little-endian I think. The translation bewteen big-endian and little-endian is done a cpu level, so there is no much of slowness.
- Insertion into an array is basically just overriding the old value.
- Deletion depend on how your program inteprets it, you can set that value to 0 or Null
- Geting, Insertion, and Deletion of an element on an array is constent time O(1).
- Constent time O(1) means that no matters how big the data input is, we don't do anything extra. It's doesn't mean that we do only 1 think.
- Arrays Fixed size, countiniguous memory chunks, you cannot grow it, there is no InsertAt, push or pop. But you can write yourselves. (a class or something)

## Arrays Q&A

- An array needs to have a size at initialization time. You can realocate it later.
- And more cuestions that were actually fun to listen to.
- There is a relation between how big the initial array is and how many times you have to realicate because you need more space.

## Linear Sarch & kata setup

- I coded the algorithm. And i cloned and intalled the program. It's seems pretty cool.
- He said that is not a good practice to put a return inside of a for loop. Need to look more deep into that.

## Binary Search Algorithm
- There allwas need to think about if the data imput is ordered. if it is then you will allways have some advantages to implement.