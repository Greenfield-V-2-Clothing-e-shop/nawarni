import React,{useState} from "react"


export default function Contact(){
  const [name, setName]=useState<string>('')
  const [email, setEmail]=useState<string>('')
  const [tel,setTel]=useState<string>('')
  const [message, setMessage]=useState<string>('')
  const [popup, setPopup]=useState<Boolean>(false)

  const handleSubmit= async(e: React.SyntheticEvent)=>{
    e.preventDefault()
    setPopup(true)
    console.log('sending') 
    let data:any={
      name,
      email,
      tel,
      message,
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })
  }


  return <div className="backk">
   <section id="contact-page">
			<div className="section-content">
				<h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
				<h3 className="hashthree">We provide you with the finest wears</h3>
			</div>
			<div className="contact-section" >
			<div className="container">
				<form className="elform"  
  //       onSubmit={(e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const target = e.target as typeof e.target & {
  //     name: { value: string };
  //     email: { value: string };
  //     tel: { value: number };
  //     message:{value:string};
  //   };
  //   const name = target.name.value; // typechecks!
  //   const email = target.email.value; // typechecks!
  //   const tel = target.tel.value;
  //   const message = target.message.value;
  //   console.log(name,email,tel,message)
  // }}


  >
					<div className="col-md-6 form-line">
			  			<div className="form-group">
			  				<label className="exampleInputUsername" >Your name</label>
					    	<input type="text" className="form-control" id="" placeholder=" Enter Name" onChange={(e)=>setName(e.target.value) 
                  }/>
				  		</div>
				  		<div className="form-group">
					    	<label className="exampleInputEmail">Email Address</label>
					    	<input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" onChange={(e)=>setEmail(e.target.value)}/>
					  	</div>	
					  	<div className="form-group">
					    	<label className="telephone">Mobile No.</label>
					    	<input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." onChange={(e)=>setTel(e.target.value)}/>
			  			</div>
			  		</div>
			  		<div className="col-md-6">
			  			<div className="form-group">
			  				<label className ="description"> Message</label>
			  			 	<textarea  className="form-control" id="description" placeholder="Enter Your Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
			  			</div>
			  			<div>
			  				<button type="submit" className="btn1" onClick={handleSubmit}>  Send Message</button>
			  			</div>
              <div>
                {popup? <div className="alert alert-success">
  <strong>Success!</strong> Your message I sent to our Email, we will contact you :D
</div>:null}
              </div>
			  			
					</div>
				</form>
			</div>
      </div>
		</section>
  </div>
}