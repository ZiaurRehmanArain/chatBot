import './App.css';
import {Configuration,OpenAIApi} from 'openai'
import OptionSelect from './component/OptionSelect';
import { arrayItems } from './Aioptions';
import Translation from './component/Translation';
import { useState } from 'react';

function App() {

  const configuration = new Configuration({
    apiKey:  process.env.REACT_APP_API_KEY,
  });


  // console.log(`${process.env.REACT_APP_API_KEY}`)

  const openai = new OpenAIApi(configuration);
  const [option, setoption] = useState({})
  const [input, setinput] = useState("")
  let [respons, setrespons] = useState("")


  const selectedoption = (option) => {
    setoption(option)

  };

  // console.log(Object.values(option).length)
  const doStuff = async () => {
    // setoption({ ...option, prompt: input })
try {
  let Object={ ...option, prompt: input }
    const response = await openai.createCompletion(Object);
    // console.log(response.data)
    setrespons(`${response.data.choices[0].text}`)
} catch (error) {
  alert(error.message)
}


   }
  //  console.log(option)

  return (
    <div className="App">
      {Object.values(option).length === 0 ?
        <OptionSelect arrayItems={arrayItems} selectedoption={selectedoption} />
        : <Translation doStuff={doStuff} setinput={setinput} />}

        <pre style={{textAlign:'left'}}>{respons}</pre>
    </div>

  );
}

export default App;



// import React from 'react';
// import Chatbot from './component/chatbot';

// const App = () => {
//   return (
//     <div>
//       <h1>Chatbot App</h1>
//       <Chatbot />
//     </div>
//   );
// };

// export default App;
