import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import convex from './images/convexHull.png';
import puzzle from './images/15puzzle.PNG';
import turing from './images/turing.jpg';
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
      
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
       

   ]
}