import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SignupImage from "../images/signup.jpg";

const Signup = () => {
    const history = useHistory();
    const [nam, setNam] = useState({
        author: "", email: "", password: "", city: "", mobile: "", jobprofile: ""
    });
    const inputEvent = (event) => {
        //  const value=event.target.value;
        //     const name=event.target.name;
        const { value, name } = event.target;
        setNam((pre) => {
            console.log(pre);
            return {
                ...pre,
                [name]: value,
            };
        });
        // setNam({...nam,[name]:value});
    };
    const PostData = async (e) => {
        e.preventDefault();
        const { author, email, password, city, mobile, jobprofile } = nam;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                author, email, password, city, mobile, jobprofile,
            })
        });
        console.log(res);

        const data = await res.json();
        console.log(data);
        if (res.status === 422) {
           alert("User Already Exist")
        }
        else {
           alert("Successful Register ");
            history.push('/Login');
        }

    }
    return (
        <>

            <div className="my-body">
                <img src={SignupImage} alt="images" />
                <form>
                    <h3>Register Here</h3>
                    <label>Username</label>
                    <input type="email" onChange={inputEvent} placeholder="Email or Username" name="email" value={nam.email} />

                    <label for="password">Password</label>
                    <input type="password" onChange={inputEvent} placeholder="Password" name="password" value={nam.password} />

                    <label>Name</label>
                    <input type="text" onChange={inputEvent} placeholder="Name" name="author" value={nam.name} />

                    <label>City</label>
                    <input type="text" onChange={inputEvent} placeholder="City" name="city" value={nam.city} />

                    <label>Mobile</label>
                    <input type="text" onChange={inputEvent} placeholder="Mobile" name="mobile" value={nam.mobile} />

                    <label>Profession</label>
                    <input type="text" onChange={inputEvent} placeholder="profile" name="jobprofile" value={nam.jobprofile} />

                    <button className="button" onClick={PostData}>Register</button>
                    <button className="button"><Link to="">Log In</Link></button>
                </form>
            </div>

          
                


                        {/* <input type="radio"  onChange={inputEvent} name="gender" value="Male" className="rbtn" />
                        <label for="ans1" className="lab">Male</label>

                        <input type="radio"  onChange={inputEvent}   name="gender" value="Female" className="rbtn" />
                        <label for="ans2"  className="lab">Female</label>
                        <br />

                        <input type='checkbox' value="HTML, CSS ,Javascript ,jquery" onChange={inputEvent} checked={nam.Languages} name="Languages"/>
                        <label htmlFor="v1"  className="lab2">HTML, CSS ,Javascript ,jquery</label>
                        <br />
                        <input type='checkbox' value="ReactJs / AngularJs (any one)" onChange={inputEvent}  checked={nam.Frameworks} name="Frameworks"/>
                        <label htmlFor="v2"  className="lab2">ReactJs / AngularJs  (any one)</label><br />
                        <input type='checkbox' value="MongoDB / Mysql / Firebase (any one)" onChange={inputEvent} checked={nam.Databases} name="Databases"/>
                        <label htmlFor="v3"  className="lab2">MongoDB / Mysql / Firebase  (any one)</label> */}
         

        </>
    );
};
export default Signup;
