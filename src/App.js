import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import GreetFunction from "./components/GreetFunction";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import WelcomeClass from "./components/WelcomeClass";

function App() {
  return (
    <div className="App">
      {/* <GreetFunction name="mayank" heroName="superman">
        <h3>My name is mayank kumar</h3>
      </GreetFunction> */}
      {/* <WelcomeClass name="Kumar" heroName="Wonder Woman" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
