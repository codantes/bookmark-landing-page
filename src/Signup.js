import React from 'react';

function Signup(){
    const [email, setEmail] = React.useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log(email);
    }

    function validateEmail(text) {
        const regex = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

        return !regex.test(text);
    }
    return(
        <section className="signup">
            <h1>35,000+ already joined</h1>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    id="" />

                <button>Contact us</button>
            </form>
        </section>
    )
}

export default Signup;