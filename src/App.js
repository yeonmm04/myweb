import React from 'react';
import {Button, Progress, Input} from 'semantic-ui-react'


function Login(){

  return(
    <div>
    <input/>
    <button> 로그인 </button>
    </div>

  )
}

function App() {
  return (
    <div>
    <p> 비비야 잘지내니 </p>
    <Button> 비비 밥주기 </Button>
    <button> 털 빗겨주기 </button>
    <Progress percent = {100} indicating/>
    <Login / >
    </div>
  );
}

export default App;
