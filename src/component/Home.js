import React from 'react';
import Page2 from './Page2';
import { Link } from 'react-router-dom';

// import { FaTelegramPlane, FaRegThumbsUp, FaBalanceScale } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <div className=' bgimg'>

        <div className="fad"></div>
        <img src='image1.jpeg' alt="" />
       <Link to='/contact'>
        <button className="btntop btn btn-outline-light btn-md">Get in touch</button></Link>
        <div className='container content'>
          <h1 className='heading1'>CAPTAIN.COM is available for sale or other proposals</h1>
          <p >A premium domain name like CAPTAIN.COM can help your business achieve instant brand recognition, significantly lower marketing expenses, maximise brand recall, and accelerate value creation.
          </p>
          <Link to='/contact'>
          <button className="btnbottom btn btn-outline-light btn-lg">Get in touch</button></Link>
        </div>
      </div>
      

      {/* image slide portion*/}

      <div className='container my-5'>
        <h1 className='my-5' style={{ fontWeight: 'normal', textAlign: 'center' }}>Having naming issues? You are not alone.</h1>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">

              {/* ye first image scroll hei */}

              <div className=' row  '>
                <div className='col' >
                  <div className='p-5 colm'>
                    While Flipdish(.com) was taken, both Flipdish(.ie) and Flipdish(.co.uk) were available. We ran with these for a while but as soon as we started thinking internationally, we had a problem. <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                  <div className='my-3 imge'>
                    <div style={{ height: '5rem', width: '8rem' }}>
                      <img className='images' src="image2.jpg" alt="" />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Conor McCarthy</h2>
                      <p>
                        CEO <br />
                        Company: Flipdish <br />
                        Domain name: Flipdish.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col '>
                  <div className='p-5 colm' >
                    While they would often find their way to .net, it was a poor experience and lowered the value of the company in the eyes of our biggest prospects. <br />
                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                  <div className='my-3 imge '>
                    <div style={{ height: '5rem', width: '8rem' }}>
                      <img className='images' src="image3.png" alt="" />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Jacob Smith</h2>
                      <p>
                        CMO <br />
                        Company: Packet <br />
                        Domain name: Packet.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second image scroll  */}

            <div className="carousel-item">
              <div className=' row '>
                <div className='col' >
                  <div className='p-5 colm'>
                    People are trusting us with their finances and TryDave just didn't seem to give me the same confidence as Dave.com <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                  <div className=' my-3 imge'>
                    <div style={{ height: '5rem', width: '6rem' }}>
                      <img className='images' src="image5.png" alt="" style={{ height: '4rem', width: '5rem' }} />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Conor McCarthy</h2>
                      <p>
                        CEO <br />
                        Company: Flipdish <br />
                        Domain name: Flipdish.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col '>
                  <div className='p-5 colm' >
                    We understood that many people thought our site was already Punchbowl.com even though at the time it was MyPunchbowl.com. <br />


                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                  <div className='my-3 imge '>
                    <div style={{ height: '5rem', width: '6rem' }}>
                      <img className='images' src="image6.png" alt="" style={{ height: '4rem', width: '5rem' }} />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Jacob Smith</h2>
                      <p>
                        CMO <br />
                        Company: Packet  <br />
                        Domain name: Packet.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* third image scroll */}

            <div className="carousel-item">
              <div className=' row '>
                <div className='col' >
                  <div className='p-5 colm'>
                    The problem with not having the .com of your name is that it signals weakness. <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                  <div className=' my-3 imge'>
                    <div style={{ height: '5rem', width: '8rem' }}>
                      <img className='images' src="image7.png" alt="" />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Conor McCarthy</h2>
                      <p>
                        CEO <br />
                        Company: Flipdish <br />
                        Domain name: Flipdish.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col '>
                  <div className='p-5 colm' >
                    Standing out just gets harder when people confuse you with other companies. <br />
                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                  <div className=' my-3  imge '>
                    <div style={{ height: '5rem', width: '8rem' }}>
                      <img className='images' src="image3.png" alt="" />
                    </div>
                    <div className='h2para'>
                      <h2>
                        Jacob Smith</h2>
                      <p>
                        CMO <br />
                        Company: Packet <br />
                        Domain name: Packet.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="btn carousel-control-prev-icon btn-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="btn carousel-control-next-icon btn-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className=' call'>
        <div className='call1'><h5>If you don't invest in your brand,who will? <Link to='/contact'> <button className="mx-3 my-3 btn btn-dark btn-lg ">Call us </button></Link></h5></div>
      </div>

      {/* middle vala section */}

      <div className='container '>
        <div className='row my-5 middle'>
          <div className='col-lg  middlecol'>
            <h2 className='my-3 middleheading' style={{ fontFamily: 'monospace', textAlign: 'center', fontWeight: 'lighter' }} >
              Your brand consultant
            </h2> <br />
            <p className='para'>
              Hi, my name is Tatiana. I have over 17 years of experience working with businesses on their brand and web presence. I know first hand the limitations and issues a business can suffer from when operating on an inferior domain name. <br />
              <br />

              This is why I focus on matching unique digital assets with great companies. There are no shortcuts when it comes to building exceptional brands. Having the right domain name is an intrinsic part of that journey. <br />
              <br />

              If you have high ambitions and are serious about your business online, I look forward to discussing how CAPTAIN.COM can help you grow your brand. <br />
              <br />

              #standwithukraine💙💛
            </p>
          </div>
          <div className='col-lg  cc' >
            <img src="image8.jpeg" alt="" className='image8' />

          </div>
        </div>
      </div>
      <div className=' call'>
        <div className='call1'><h5>How can i help you acqueir the best domain name for your bussiness? <Link to='/contact'> <button className="mx-3 my-3 btn btn-dark btn-lg">Get started</button></Link></h5></div>
      </div>
      <Page2 />
    </>
  )
}
