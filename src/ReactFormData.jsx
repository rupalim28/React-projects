import {useState} from 'react';
function ReactFormData(){
    const [formdata,setFormData] = useState({
        name:'',
        email:'',
        gender:'',
        married: "",
        phone: "",
    })

    // Handle input change
    const handelChange = (e) =>{
        const { name, value} = e.target;
        //This is destructuring. It just takes name and value from the input element.
        //value → the value the user typed or selected
        //name → the name of the field ("name", "email", "gender", etc.)
        //e.target is the input element itself.
        setFormData({...formdata,[name]:value})
        //...formData → copies all existing values (so we don’t lose other fields)
        //[name]: value → updates the field that changed.
        //If name="email", it updates formData.email with the new value.
    }

    // Handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        //Stops the browser from refreshing the page when you click Submit.
        console.log(formdata,"formdata")
        alert(`Form Submitted!\n${JSON.stringify(formdata, null, 2)}`);
        //converts the formData object to a readable string with indentation
        // Reset form
        setFormData({ name:'',email:'',gender:'',married: "",phone: "",})
    }
    return(
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formdata.name} onChange={handelChange} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formdata.email} onChange={handelChange} required/>
                </div>
                    <div>
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="Male" checked={formdata.gender==='Male'} onChange={handelChange} required/>{" "}Male
                    <input type="radio" name="gender" value="Female" checked={formdata.gender==='Female'} onChange={handelChange }/>{" "}Female
                </div>
                <div>
                    <label>Maretial Status:</label>
                    <select name="married" value={formdata.married} onChange={handelChange}>
                        <option value="">Select</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                    </select>
                </div>
                <div>
                    <label>Mobile No.:</label>
                    <input type="tel" name="phone" value={formdata.phone} onChange={handelChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactFormData;
