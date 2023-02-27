import * as React from 'react'


export default function Contact(){
    const [hasErrors,setHasErrors] = React.useState([])
    console.log("Has E",hasErrors)
    const [state, setState] = React.useState({
        name: "",
        email: ""
      })
      function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
console.log("ST",state)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email} = state;

    
    const errors = validate(name, email);

    if (errors.length > 0) {
      setHasErrors({ errors });
      return;
    }
    
        // send the form...
      };
    return(
        <>

         <div className="container display-f justify-center">
            <h1 className="font-xl mb-2  mt-2">Contact Us</h1>
        </div>

           <div className="container display-f justify-center">
        
        <form className="shadow-2 p-2 pt-1 pb-1 display-b gap-1 br-sm" onSubmit={handleSubmit}>
            
            <div className="gap-1">
                <label className="text-primary-light-4" htmlFor="name">
                    Name
                    <span className="text-info tooltip--ne font-sm" data-tipsy="Insert name">
                        <svg width="20" height="20">
                        <circle cx="10" cy="10" r="10" fill="#0077C8" />
                        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="20px" fontFamily="Verdana" dy=".3em">?</text>
                        ?
                        </svg>
                    </span>
                </label>
                <input value={state.name}
          onChange={handleChange} className="text-primary w-full br-xs" type="text" name="name" placeholder="Insert Name" autoComplete="off" />
            </div>

            <div className="gap-1">
                <label className="text-primary-light-4" htmlFor="email">
                    Email Address
                    <span className="text-info tooltip--ne font-sm" data-tipsy="Insert email">
                        <svg width="20" height="20">
                        <circle cx="10" cy="10" r="10" fill="#0077C8" />
                        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="20px" fontFamily="Verdana" dy=".3em">?</text>
                        ?
                        </svg>
                    </span>
                </label>
                <input value={state.email}
          onChange={handleChange} className="text-primary w-full br-xs" type="email" name="email" placeholder="test@test.com" autoComplete="off" />
            </div>

            <div className="gap-1">
                <label className="text-primary-light-4" htmlFor="message">
                    Message
                    <span className="text-info tooltip--ne font-sm" data-tipsy="Insert desired message.">
                        <svg width="20" height="20">
                        <circle cx="10" cy="10" r="10" fill="#0077C8" />
                        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="20px" fontFamily="Verdana" dy=".3em">?</text>
                        ?
                        </svg>
                    </span>
                </label>
                <textarea className="text-primary w-full br-xs" name="message" cols="30" rows="10" placeholder="Insert message ..."></textarea>
            </div>
            

            <div className="display-f justify-center">
                
                
  <button type="submit" className="btn-outlined-primary text-primary text-hover-white"><span >Submit</span></button>

            </div>
        </form>
    </div>
        </>
    )
}
function validate(name, email, password) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (name.length === 0) {
      errors.push({name:"Name can't be empty"});
    }
  
    if (email.length < 5) {
      errors.push({emailLength:"Email should be at least 5 charcters long"});
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push({emailV:"Email should contain a @"});
    }
    if (email.indexOf(".") === -1) {
      errors.push({emailD:"Email should contain at least one dot"});
    }
  
    // if (password.length < 6) {
    //   errors.push("Password should be at least 6 characters long");
    // }
  
    return errors;
  }