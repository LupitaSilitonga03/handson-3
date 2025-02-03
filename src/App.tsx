import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p style={{ color: "red" }}>Hello World</p>
      <table>
        <tr>
          <th>Name</th>
          <th>NIM</th>
          <th>Address</th>
          <th>Email</th>
        </tr>

        <tr>
          <th>Lupitasari Marito Oktolina Silitonga</th>
          <th>2381017</th>
          <th>UNAI</th>
          <th>2381017@unai.edu</th>
        </tr>
      </table>
    </>
  );
}

export default App;