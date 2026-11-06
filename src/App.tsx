import "./App.css";
import MyComponentClass from "./components/MyComponentClass";
import MyComponentFunction from "./components/MyComponentFunction";
import MyComponentArrow from "./components/MyComponentArrow";

export default function App() {
  return (
    <main className="container">
      <h1 className="main-title">Способи створення компонентів</h1>
      <div className="cards-grid">
        <MyComponentClass />
        <MyComponentFunction />
        <MyComponentArrow />
      </div>
    </main>
  );
}