import React, { useState } from 'react';
import { FaTelegramPlane, FaRegThumbsUp, FaBalanceScale } from 'react-icons/fa'
import Contect from './Contect';
import {Link} from 'react-router-dom'


export default function Page2() {
  const [text, setText] = useState('Click on steps  1 , 2 , 3');
  // const[text1,setText1] = useState
  const getchar = () => {
    setText("Introduction call A 15 minutes call to give you an idea of my way of work, answer any questions you may have and generally determine if we are a fit.")
  }

  const [getelement, setGetelement] = useState('');

  const getelmnt = () => {
    setGetelement('Proposal If after our introduction call you determine that you wish to submit a business proposal or a cash-only offer for CAPTAIN.COM, I will provide you with guidance on how to do that. For cash only transactions we consider all serious proposals ')
  }
  const [getelement2, setGetelement2] = useState('');

  const getelmnt2 = () => {
    setGetelement2('Domain Transfer For the peace of mind of everyone involved payments are handled via a secure Escrow service. Once payment/s are cleared the domain will be transferred to your account under your ownership. I will be there to guide you through the process and answer any question you may have along the way. ')
  }
  return (
    <>
      <div>
        <div className='container'>
          <h1 className='my-5' style={{ textAlign: 'center', fontFamily: 'sans-serif' }}> My process</h1>

          <div className='flex-container' >
            <div className='divs div1 dd1' onClick={getelmnt} > <FaBalanceScale className='icons icon1' /><strong>step 2</strong></div>
            <div className='divs div2 dd2' onClick={getelmnt2}><FaRegThumbsUp className='icons icon1' /><strong>step 3</strong></div>
            <div className='divs div3 dd3' onChange={getchar} onClick={getchar} ><FaTelegramPlane className='icons icon1' /><strong>step 1</strong></div>
          </div>
        </div>
        <p className='container paragraph'>{text} <br /> <br />  {getelement} <br /> <br /> {getelement2}</p>
        {/* <p className=' container paragraph'>{txt}</p> */}

      </div>
      <div className='chessimage'>
        <div className='container image9h5'>
          <h5>“Companies pay too much attention to the cost of doing something. They should worry more about the cost of not doing it."</h5>
          <p className='my-3'>Philip Kotler <br />
            Author, Marketing Professor, Economist and Consultant, Founder of World Marketing Summit</p>
        </div>
        <img src="image9.jpeg" className='image9' alt="" />
      </div>
      <div className=' call'>
        <div className='call1 '><h5>How much risk are you willing to take your brand? <Link to='/contact'> <button className="mx-5 my-3 btn btn-dark btn-lg"> Let's talk...</button></Link></h5></div>
      </div>

      <h4 className='my-5 heading4' style={{ textAlign: 'center', padding: '2rem' }}>Considering and upgrading and existing Domain? <br /> you are in good company</h4>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <div className='row'>
              <div className='col mlt'>

                <img src="image16.png" class="d-block w-100 mdt" alt="..." />
              </div>
              <div className='col mlt '>

                <img src="image17.png" class="d-block w-100 mdt" alt="..." />
              </div>
            </div>

          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className='row'>
              <div className='col '>
                <img src="image12.png" class="d-block w-100" alt="..." />

              </div>
              <div className='col '>
                <img src="image13.png" class="d-block w-100" alt="..." />

              </div>
            </div>

          </div>
          <div class="carousel-item">
            <div className='row'>
              <div className='col '>
                <img src="image14.png" class="d-block w-100" alt="..." />

              </div>
              <div className='col'>
                <img src="image15.png" class="d-block w-100" alt="..." />

              </div>
            </div>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className=' call'>
        <div className='call1 '><h5>What kind of new opportunities can CAPTAIN.COM open up for your business? <Link to='/contact'> <button className="mx-5 my-3 btn btn-dark btn-lg"> Let's talk...</button></Link></h5></div>
      </div>
      <div className='container '>
        <div className='row my-5 middle'>
          <div className='col-lg  middlecol'>
            <h2 className='my-3 middleheading' style={{ fontFamily: 'monospace', textAlign: 'center', fontWeight: 'lighter' }} >
              You have arrived :
            </h2> <br />
            <p className='para'>
              Congratulations! You are now the proud owner of CAPTAIN.COM. As the news spread amongst your partners, employees, and customers, your mobile is ringing for three days. You've got a huge number of calls, a mailbox full of messages and congrats. Everything is looking good but you need a bit of time, to process it all, to see the numbers.
              <br /> <br />
              It has now been six months and the numbers are in! 40% increase in direct traffic, then shortly after the number is 70%. Repeat customers have grown well over 200%. Who would have thought? Increased trust, word of mouth, no traffic leaks, an important immunity against another brand who may grab the domain, better SEO and more effective marketing campaigns. You didn't even realize you were missing on all of those before.
              <br />
              <br />

              I hope you enjoyed the journey. While the story is fictional, it is based on real people and real events, all of which are listed below.
              <br /> <br />
            </p>
          </div>
          <div className='col-lg cc' >
            <img src="image1.jpeg" alt="" className='image8' />

          </div>
        </div>
      </div>
      {/* ......................image carousal second........................ */}
      {/* <iv className='container my-5'> */}
        <div id="carouselExampleSlidesOnly" class=" container carousel slide carousel-fade my-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <div className=' row '>
                <div className='col p-3' >
                  <div className='p-5 colm backimage d-block w-100" alt="...'>
                    <strong> <h4>Close.com</h4></strong>
                    Beyond just the benefits of properly aligning our brand with the .com name, we knew that owning this domain would illustrate to future customers that we’re here to stay for the long haul.
                    <br /> <br />
                    Steli Efti, CEO of Close.com
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                </div>
                <div className='col p-3 '>
                  <div className='p-5 colm backimage2  d-block w-100" alt="...' >
                    <strong><h4> Hive.com</h4></strong>
                    We saw a 40% increase in traffic immediately after securing our preferred domain. <br />
                    <br />

                    John Furneaux, Hive.com
                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <div className=' row '>
                <div className='col' >
                  <div className='p-5 colm backimage3 d-block w-100" alt="...'>
                    <strong> <h4>Close.com</h4></strong>
                    Beyond just the benefits of properly aligning our brand with the .com name, we knew that owning this domain would illustrate to future customers that we’re here to stay for the long haul.
                    <br /> <br />
                    Steli Efti, CEO of Close.com
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                </div>
                <div className='col '>
                  <div className='p-5 colm backimage4 d-block w-100" alt="...' >
                    <strong><h4> Hive.com</h4></strong>
                    We saw a 40% increase in traffic immediately after securing our preferred domain. <br />
                    <br />

                    John Furneaux, Hive.com
                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <div className=' row '>
                <div className='col' >
                  <div className='p-5 colm backimage5 d-block w-100" alt="...'>
                    <strong> <h4>Close.com</h4></strong>
                    Beyond just the benefits of properly aligning our brand with the .com name, we knew that owning this domain would illustrate to future customers that we’re here to stay for the long haul.
                    <br /> <br />
                    Steli Efti, CEO of Close.com
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Sans serif</p>
                  </div>
                </div>
                <div className='col '>
                  <div className='p-5 colm backimage6 d-block w-100" alt="...' >
                    <strong><h4> Hive.com</h4></strong>
                    We saw a 40% increase in traffic immediately after securing our preferred domain. <br />
                    <br />

                    John Furneaux, Hive.com
                    <br />
                    <p style={{ float: 'right', fontSize: '.7rem' }}>Jocob smith sello</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </iv> */}
      <div className=' call'>
        <div className='call1 '><h5>What is your vision for CAPTAIN.COM?<Link to="/contact"><button className="mx-5 my-3 btn btn-dark btn-lg"> Let's talk...</button></Link></h5></div>
      </div>
      <div class="container text-center">
        <p className='my-4'>RECENT BRAND UPGRADES</p>
        <div class="row row-cols-4 row-cols-lg-6 ">
          <div class="col">
            <div class="">
              <img src="image10.png" className='imagelist' alt="" />
            </div>
          </div>
          <div class="col">
            <div class="">
              <img src="image12.png" className='imagelist' alt="" />
            </div>
          </div>
          <div class="col">
            <div class="">
              <img src="image14.png" className='imagelist' alt="" />
            </div>
          </div>
          <div class="col">
            <div class="">
              <img src="image16.png" className='imagelist' alt="" />
            </div>
          </div>
          <div class="col">
            <div class="">
              <img src="image12.png" className='imagelist' alt="" />
            </div>
          </div>
          <div class="col">
            <div class=""><img src="image18.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image19.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image20.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image21.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image23.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image24.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image25.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image22.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image26.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image27.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image28.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image16.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image21.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image16.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image10.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image21.png" className='imagelist' alt="" /></div>
          </div>
          <div class="col">
            <div class=""><img src="image16.png" className='imagelist' alt="" /></div>
          </div>
        </div>
      </div>

      {/* FAQ vali list listtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt list */}
      <div>
        <div class="container accordion FAQ   my-5" id="accordionExample">
          <h2 className='my-4 mx-4'><b>Frequently Asked Question</b></h2>
          <div class="accordion-item accordionlist border-0 p-3">
            <h2 class="accordion-header" id="headingOne">
              <button className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5><b>What is your Premium Domain Name?</b></h5>

              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordionlist border-0 p-3">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5><b>Is this Domain for Sale?</b></h5>

              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordionlist border-0 p-3">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5><b>What is the Price for this Domain Name?</b></h5>

              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordionlist border-0 p-3">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5><b>How Do i value the Domain for my Business?</b></h5>

              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordionlist border-0 p-3">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5><b>How Do Securing a Premium Domain name?</b></h5>

              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contect />
    </>
  )
}
