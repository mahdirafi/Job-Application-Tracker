1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
Finds a specific element using its unique ID , Finds all elements that have a specific Class name ,  Finds all elements of a specific Tag type (div, p, h1).
Finds only the first element that matches a CSS selector / Finds all elements that match a CSS selector.


2. How do you create and insert a new element into the DOM?
Answer:  document.createElement() to make the element and appendChild() (or append()) to insert it into the DOM.

3. What is Event Bubbling? And how does it work?
Answer: Event Bubbling** is a mechanism where an event triggered on a child element propagates upward through its parent elements.  
It works by starting at the target element and moving up the DOM tree, allowing each ancestor to handle the event if they have a listener. translate bangla


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:  Event Delegation is a technique where you attach a single event listener to a parent element and handle events from its child elements using event.target.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser’s default action for an event (like following a link or submitting a form).
stopPropagation() prevents the event from bubbling up or capturing down the DOM tree to other event listeners.



 