import React from 'react'
import styles from "./style";
import {Billing, Hero} from './Components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div>
      <Billing></Billing>
    </div>
    <div>
      <Hero></Hero>
    </div>
  </div>
);

export default App;