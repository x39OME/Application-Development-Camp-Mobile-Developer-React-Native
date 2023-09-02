# Week 4

##  Tasks 4 Part 2  Answers

### 1. What is the VDOM?
  ```
      The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and  synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
  ```
### 2. What are the 3 steps you need to create your first react app ?
  ```
      1- Download & Install NodeJs
      2- Open CMD npx create-react-app my-first-app-react
      3- npm run
  ```


### 3. 3 differences between JSX and HTML?
  ```
      1. JSX must return one element which we’ll call a parent element - In HTML multiple elements can be returned
      2. JSX elements have props - HTML elements have attributes.
      3. All HTML attributes and event references in JSX become camelCase - In Html It is not necessary to use camelCase
  ```


### 4. There are 5 methods (functions) in a class component. (write 3 method)
```
    1. componentDidMount()
    2. componentWillUnmount()
    3. componentDidUpdate()
```


### 5. What are the differences between mount, update, and unmount?
  ```
      The Mounting Phase begins when a component is first created and inserted into the DOM.
      The Updating Phase occurs when a component's state or props change.
      And the Unmounting Phase occurs when a component is removed from the DOM.
  ```


### 6. Write state and set state code for number variable ?

  ```
      export default class Login extends Component {
      
        ButtonOnClick = () => {
          this.setState({counter: this.state.counter + 1 });
        }
        // eslint-disable-next-line no-useless-constructor
        constructor(props){
          super(props);
          this.state={
            isLogin:true
          }
        }
        loginHandler = () =>{
          this.setState({isLogin:(this.state.isLogin)? false : true})
        }
        render() {
          return (
            <>
              {
                this.state.isLogin ? 
                  <ul>
                    {this.state.users.map((users, index)=>{
                      // if(users.isActive) {
                      //   return <li key={users.email}>{users.name}</li>
                      // }
                      return users.isActive && <li key={users.email}>{users.name}</li>
                    })}
                  </ul>
                : 
                <p>You Must Be Login To See This List</p>
              }
              <Button variant="warning" size='lg' onClick={()=>{this.loginHandler()}}>Hello loginHandler</Button>
            </>
          )
        }
      }
  ```


### 7. Write a code of Event with function change state value. (++ or - -)
  ```
      export default class ButtonOnClick extends Component {
      
        ButtonOnClick = () => {
          this.setState({counter: this.state.counter + 1 });
        }
        constructor(props){
          super(props);
          this.state = {
            counter: 0
          }
        }
        render() {
          return (
            <>
              <p>{this.state.counter}</p>
              <button onClick={this.ButtonOnClick}>+</button>
            </>
          )
        }
      }
  ```


### 8. What is the difference between Bootstrap and React Bootstrap?
  ```
      - React-Bootstrap, is a library that allows developers to use Bootstrap components in their React applications. It allows developers to use the same pre-built components from Bootstrap, but with the added flexibility and power of React.
      - Bootstrap is a popular open-source front-end framework that allows developers to quickly create responsive and mobile-first websites.
  ```


### 9. write a code of list and key ?
```
export default class keys extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state={
      users:[
        {name:"Sam", email:"Sam@hotmail.com"},
        {name:"AN", email:"AN@hotmail.com"},
        {name:"Seqweam", email:"Sqweam@hotmail.com"},
        {name:"Ahmed", email:"Ahmed@hotmail.com"},
        {name:"Ahmed123", email:"Ahmed123@hotmail.com"}
      ]
    }
  }


  render() {
    return (
      <>
        <ul>
                {this.state.users.map((users, index)=>{
                  return <li key={users.email}>{users.name}</li>
                })}
        </ul>
      </>
    )
  }
}
```


### 10. What is Condeationa Rendering and write one of his ways?
  ```
      Conditional rendering You can use it to control what content is rendered and when, and it improves user experience, simplifies your code, and helps you create more flexible and adaptable components.
  ```

