'use client';
import { useState } from "react";
import { Menu } from '@headlessui/react';

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const add = () => {
    setResult(Number(num1) * Number(num2));
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <button onClick={add}>Multiple</button>
      <h2>Result: {result !== null ? result : "No result yet"}</h2>
    </div>
  );
}
