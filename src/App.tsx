import { useState } from "react";
import "./App.css";
import { Turnstile } from "@marsidev/react-turnstile";
function App() {
  const [token, setToken] = useState("");
  return (
    <>
      <input placeholder="enter your name" />
      <Turnstile
        onSuccess={(token) => setToken(token)}
        siteKey="0x4AAAAAAAZnKpNxUSV"
      />
      {token}
    </>
  );
}

export default App;
