import {useState} from "react";
import { useBearsStore } from "./store"


export function App() {
  const bearsState = useBearsStore()
console.log("bearsstate", bearsState)
  return (
  <div><h1>App</h1></div>
)
}


