import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className="mockup-window border border-base-300">
  <div >
    <h1 className='text-2xl font-bold'>1.What are the different ways to manage a state in a React application?</h1>
   
    <p>There are four main types of state you need to properly manage in your React apps:
        <br />
        1.Local state 2.Server state 3.URL state</p>
    </div>
  <div >
    <h1 className='text-2xl font-bold'>2. How does prototypical inheritance work?</h1>
    <br />
    <h2>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. <br />
         It is a method by which an object can inherit the properties and methods of another object. <br />
         Traditionally, in order to get and set the  of an object, we use Object. getPrototypeOf and Object.</h2>
    </div>
  <div >
    <h1 className='text-2xl font-bold'>3. What is a unit test? Why should we write unit tests?</h1>
    <br />
    <h2>The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />
        Unit testing is an important step in the development process, <br />
         because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h2>
    </div>
  <div >
    <h1 className='text-2xl font-bold'>4.React vs. Angular vs. Vue?</h1>
    <br />
    <h2>Vue provides higher customizability and hence is easier to learn <br />
        than Angular or React. Further, Vue has an overlap with Angular and React with respect to their <br />
         functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</h2>
    </div>
</div>
        </div>
    );
};

export default Blog;