export default function Contact(){
    return(
        <div className="form">
            <h2 className="form-head">Contact <span>Me</span></h2>
            <form className="form-item">

                <label>Full Name</label><br />
                <input className="form-list" type="text" name="name" placeholder="Enter Your Name" required/><br />

                <label>Email Addres</label><br />
                <input className="form-list" type="email" name="email" placeholder="Enter Your Email" required/><br />

                <label>Phone Nuber</label><br />
                <input className="form-list" type="number" name="number" placeholder="Enter Your mobile No" required/><br/>

                <label>Message</label><br />
                <textarea  className="form-list" id="msg" rows={6} cols={20} placeholder="Enter Yore Message"></textarea><br/>

                <button className="form-but">Submit</button>

            </form>
        </div>
    )
}