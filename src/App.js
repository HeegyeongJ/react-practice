import "./App.css";
import Toast from "./components/Toast";
import Dropdown from "./components/Dropdown";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right.",
    },
    {
      title: "error",
      text: "Un oh! Something went terribly wrong!",
    },
  ];

  const options = [
    { label: "빨강", value: "red" },
    { label: "녹색", value: "green" },
    { label: "파랑", value: "blue" },
  ];

  return (
    <>
      <div className="wrapper">
        {messageArray.map((message) => (
          <Toast message={message} />
        ))}
        <Dropdown options={options}></Dropdown>
      </div>
    </>
  );
}

export default App;
