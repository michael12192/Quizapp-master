import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What\'s Object Orientated Programming?',
      answer: [
        { option: 'a programming paradigm that relies on the concept of classes ', correct: false },
        { option: 'a programming paradigm that relies on the concept of objects', correct: false },
        { option: 'a programming paradigm that relies on the concept of classes and objects', correct: true },
        { option: 'a programming paradigm that relies on the concept of classes and object', correct: false },
      ]
    },
    {
      question: 'What are the 4 basics of OOP?',
      answer: [
        { option: 'Abstraction, Inheritance, Stored Function, Encapsulation', correct: false },
        { option: 'Abstraction, Encapsulation, Inheritance, and Polymorphism', correct: true },
        { option: 'Abstraction, Procedure, Stored Function, Encapsulation', correct: false },
        { option: 'Abstraction, Inheritance, Stored Function, Encapsulation', correct: false },
      ]
    },
    {
      question: 'What is Anguluar? What is the current version?',
      answer: [
        { option: 'Angular is a JavaScript web application framework that runs in web browser, 12', correct: true },
        { option: 'Angular is a JavaScript web application back-end framework that runs in web browser, 12', correct: false },
        { option: 'Angular is a JavaScript web application framework that runs in web browser, 11', correct: false },
        { option: 'Angular is a JavaScript web application front-end framework that runs in web browser, 12', correct: false }
      ]
    },
    {
      question: 'What are some benefits to using Angular?',
      answer: [
        { option: 'Angular allows Microsoft Visual Stuido to be its main editor', correct: false },
        { option: 'AngularJS used Scopes and Directives', correct: false },
        { option: 'Angular is cross platform compatible, and has increased speed and performance', correct: true },
        { option: 'Angular is compatible with native mobile apps such as Cordova, Ionic, NativeScript and Unity', correct: false }
      ]
    },
    {
      question: 'What is the most common computer program that allows developers to see if there code can compile, load, run and see the output of a program?',
      answer: [
        { option: 'Hell0 World', correct: false },
        { option: 'Hello World', correct: true },
        { option: 'Hellloo World', correct: false },
        { option: 'Hello WorlD', correct: false }
      ]
    },
 
    {
      question: 'What date was Security Benefit founded on?',
      answer: [
        { option: 'Feb. 22, 1982', correct: false },
        { option: 'Feb. 22, 1902', correct: false },
        { option: 'Feb. 22, 1892', correct: true },
        { option: 'Feb. 22, 1890', correct: false }
      ]
    },
    {
      question: 'What are Javas access modifiers?',
      answer: [
        { option: 'private, public, protected, modifier', correct: false },
        { option: 'private, public, no modifier, protected, unique', correct: false },
        { option: 'private, no modifier, protected, public', correct: true },
        { option: 'private, public', correct: false },
      ]
    },
    {
      question: 'What is Abstraction?',
      answer: [
        { option: 'A concept of programming that shows only essential attributes', correct: false },
        { option: 'A concept of object-orientated programming that shows only essential attributes and unnessary information', correct: false },
        { option: 'A concept of object-orientated programming that shows only essential attributes and hides unecessary information', correct: true },
        { option: 'A concept of object-orientated programming that shows only esSential attributes and hides unecessary information ', correct: false }
      ]
    },
    {
      question: 'Why is data flow important?',
      answer: [
        { option: 'Data flow is important because you need to understand how the data flows through your program and what each methods and function does in order to finish the task at hand and complete the assignment within a minimal amount of time with no mistakes/errors ever in the code', correct: false },
        { option: 'Data flow is important because you need to understand how the data flows through your program and what each does in order to finish the task at hand', correct: false },
        { option: 'Data flow is important because you need to understand how the data flows through your program and what each methods and function does in order to finish the task at hand', correct: true },
        { option: 'Data flow is important because without knowing the data and see what it is doing you can not manipulate the data in what you want to do', correct: false }
      ]
      
    },
    {
      question: 'What did i learn about angular?S',
      answer: [
        { option: 'I learned that Angular is a easy language to learn', correct: false },
        { option: 'I learned that Angular is a hard language and is impossible to learn', correct: false },
        { option: 'a programming paradigm that relies on the concept of classes and objects that is hard languange to be introduced but over time it does seem to get easier to understand it', correct: true },
        { option: 'a programming paradigm that relies on the concept of classes and object', correct: false },
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}