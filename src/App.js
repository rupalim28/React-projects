import {useState} from 'react';
import Childcomponentt from './Childcomponentt.jsx';
import PureParenttoChild from './PureParenttoChild.jsx';
import PureChildtoParent from './PureChildtoParent.jsx';
import ReactFormData from './ReactFormData.jsx';

function App() {
  const [name,setNAme] = useState('rupali')
  const msg = 'good morning';
  const [message,setMsg] = useState('');
  return (
    <div>
      <p>Parent Component</p>
      <h1>name in parent is :{name}</h1>
      {/* <h2>as i have passed both name and setname so this will become READ + UPDATE</h2> */}
      <Childcomponentt ogname ={name} updatedname = {setNAme} />
      
      {/* as i have just passed the variable so it become pure parent to child READ ONLY  */}
      <PureParenttoChild parentmsg = {msg} />

      <p>message from child:{message}</p>
      {/* here i have pass setMsg that can update, it is child to parent that UPDATE */}
      <PureChildtoParent valuetoupdate = {setMsg} />

      <ReactFormData/>
    </div>
  );
}

export default App;
