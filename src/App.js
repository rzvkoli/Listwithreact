import {useState} from "react";
import Singlecommponent from './Singlecomponent';
import data from './data';

export default function App() {

const [language , setLanguage] = useState(data);

  return (

    <div className="container">
      {
      language.map((index) => {
        return <Singlecommponent { ... index} />
      })
      }
    </div>
  )
}