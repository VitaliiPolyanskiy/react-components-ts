import "./App.css";

import MyComponentClass from "./components/MyComponentClass.tsx";
import MyComponentFunction from "./components/MyComponentFunction.tsx";
import MyComponentArrow from "./components/MyComponentArrow.tsx";

export default function App() {
  return (
    <div className="container">
      <MyComponentClass />
      <MyComponentFunction />
      <MyComponentArrow />
    </div>
  );
}
