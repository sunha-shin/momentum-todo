# Overview
![image](https://github.com/sunha-shin/momentum-todo/assets/47774611/da235920-737e-4176-96da-f84f5bc9d3ff)
A to-do list manager with daily photos, a local weather info, quotes and google search option.

# Live demo link
https://sunha-momentum.netlify.app/

# Skillsets
- React
- Redux-Thunk
- JavaScript
- Styled-components
- Rest API call

# Features
<b>1. Categorized todo-list: Inbox, Today, Done (right-bottom)<b><br>
![image](https://github.com/sunha-shin/momentum-todo/assets/47774611/c11f533e-3e68-4be0-a6f4-a5e346482573)

<b>2. Current weather data (right-top)<b><br>
![image](https://github.com/sunha-shin/momentum-todo/assets/47774611/4a1facee-e986-4b3a-81f8-973806172ae0)

<b>3. Main todo list seciont with edit & clear buttons<b> (center)
![image](https://github.com/sunha-shin/momentum-todo/assets/47774611/7b2191a2-52f6-4b67-9726-16b1ac9e617e)
  
<b>4. Google search (left-top)<b><br>
![image](https://github.com/sunha-shin/momentum-todo/assets/47774611/ae933d63-d8f2-4b9b-9713-abc7fd04a493)<br>

# Challenges
- Form controlling
```  
const onKeyDown = (e) => {
      if (e.key === 'Enter' && e.target.value) {
          e.preventDefault();
          handlePageStatus(`${e.target.name}Page`);
      }
  };

 const onClick = (e) => {
      if (info[e.target.name]) {
          handlePageStatus(`${e.target.name}Page`);
      }
  }

...

<input type={'text'} name={'name'} .../>
<input type={'email} name={'email'} .../>
<input type={'password'} name={'password'} .../>

                                         
⭐ What I learned ⭐
- A function using 'e.target.name' could handle three inputs at the same time if there is a name property .
- In JavaScript, e.target.name refers to a property that represents the name attribute of the target element within an event object (e).
- It is commonly used in event handling to access the name value of the element that triggered the event.                                 
```
                               
                                
- Handling an immutable object in React
```
// A function for an add todoList
const createTodoOnKeyDown = (e) => {
    if (e.key === "Enter" && input) {
        setTodoList({
            ...todoList,
            category: {
                ...todoList.category,
                [selected]: [...todoList.category[selected], {id: nanoid(), name: input}]
            }
        })
        setInput("")
        dispatch(saveTodoList(todoList));
    }
}

                                
⭐ What I learned ⭐
- Should use a spread operator to shallaw copy for keeping an immuntability.
- In React, when working with component state or props, it is important to avoid directly mutating the original state or props.
- By using the spread operator, a new object or array is created that captures the existing values of the original state or
  props, while allowing developers to make modifications to the copied version without affecting the original data.    
```
