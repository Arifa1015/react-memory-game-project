import { Component } from 'react';
import './App.css';
import ContactItem from './Component/ContactItem/index';
import {v4 as uuidv4} from 'uuid';


const initialContactList = [
  {
    id:uuidv4(),
    name:'Azar',
    mobileNo:'9515491074',
    isFavorite:true,
  },
  {
    id:uuidv4(),
    name:'Arifa',
    mobileNo:'8639225734',
    isFavorite:true,
  },
  {
    id:uuidv4(),
    name:'Salima',
    mobileNo:'7867867861',
    isFavorite:true,
  }
]

class App extends Component {

  state ={
    contactList : initialContactList,
    name:'',
    mobileNo:'',
  }
  AddContact = event =>{
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newContactList ={
      id : uuidv4(),
      name,
      mobileNo,
      isFavorite:false,
    }

    this.setState(prevState=>({
      contactList : [...prevState.contactList, newContactList],
      name: '',
      mobileNo:'',
    }))

  }
  onChangeName = event =>{
    this.setState({name : event.target.value})
  }
  onChangeMobileNo = event =>{
    this.setState({mobileNo : event.target.value})
  }
  render(){
    const {name, mobileNo, contactList} = this.state
  return (
    <div className="App">
      <h1>Contacts</h1>
      <form type="submit" onSubmit={this.AddContact}>
        <input type="text" value={name} placeholder='Name' onChange={this.onChangeName}/>
        <input type="text" value={mobileNo} placeholder='Mobile No' onChange={this.onChangeMobileNo}/>
        <button type="submit">Submit</button>
      </form>
      <div>
      <ul>
        {contactList.map(eachContact => (
          <ContactItem key={eachContact.id} contactDetails={eachContact}/>
        ))}
      </ul>
      </div>
    </div>
  );

  }
}

export default App;
