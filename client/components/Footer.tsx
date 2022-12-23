import React from 'react'

const Footer = () => {
  return (

    <footer className="text-center text-lg-start bg-light text-muted ">

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks: </span>
          <a href="/signup" className="me-4 text-reset">
            <i >Create an acount</i>
          </a>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>NAWARNI 
              </h6>
              <p>
                Here we present a tunisian-american e commmerce that give a man a classy and trendy clothes
              </p>
            </div>
    
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                contact 
              </h6>
              <p>

                <a href="/products" className="text-reset">All-prodects</a>
              </p>
              <p>
                <a href="/Shoes" className="text-reset">shoes</a>
              </p>
              <p>
                <a href="/Jean" className="text-reset">pants</a>
              </p>
              <p>
                <a href="/Tshirt" className="text-reset">T-shirt</a>

              

              </p>
            </div>
    
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="https://www.hermes.com/us/en/" className="text-reset">hermes</a>
              </p>
              <p>
                <a href="https://www.louisvuitton.com/dispatch" className="text-reset">louis vuitton</a>
              </p>
              <p>
                <a href="/Contact" className="text-reset">Help</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    
      
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">NAWARNI</a>
      </div>
      
    </footer>
    
  )
}

export default Footer