import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login(){

  return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      console.log(e)
      alert(e.target.value)
    } }> 로그인 </Button>
    </div>

  )
}

class Login extends React.Compnent{
constructor(){
  super()
  this.state = {id : "없지렁"}
}
  render(){
    return(
        <div>
        <Input onchange = { (e) => this.setstate({id : e.target.value }) }/>
        <Button value = {this.state.id} onClick = { (event) => {
          alert(event.target.value)
        } }> Login </Button>
        </div>
)

  }
}

function App() {
  return (
    <div>
    <p> 비비야 잘지내니 </p>
    <button> 털 빗겨주기 </button>
    <Button onClick = { () => alert("냠냠") }> 비비 밥주기 </Button>
    <Login />
    </div>
  );
}

export default App;
