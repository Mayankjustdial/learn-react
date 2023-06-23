import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import GreetFunction from "./components/GreetFunction";
import Inline from "./components/Inline";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import StyleSheet from "./components/StyleSheet";
import UserGreeting from "./components/UserGreeting";
import WelcomeClass from "./components/WelcomeClass";
import styles from "./appStyles.module.css";
import "./appStyles.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <GreetFunction name="mayank" heroName="superman">
        <h3>My name is mayank kumar</h3>
      </GreetFunction> */}
      {/* <WelcomeClass name="Kumar" heroName="Wonder Woman" /> */}
      {/* <Message />jj */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={false} /> */}
      {/* <Inline /> */}

      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      <Form />
    </div>
  );
}

export default App;
