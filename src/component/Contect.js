import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Contect() {

    return (

        <div>
            <div className='contectdiv3 bg-light'>
                <div className='contectdiv1'> </div>
                <div className='container '>

                    <div className='row p-1'>
                        <div className='col-sm  pt-3'>
                            <p className='para1'>
                                When it come to demain name, We understand you have options. You can register a new Domain name you can add Word or hyphen, or get a local domain extension. As metter of fact it means,if you are just  testing a new ideas.
                                If your product and sevices are limited in local markets and if you creating a non-profitabl or non-hobby project. We would advise just to do that.
                                <br />
                                <br />
                                If however you determine that the domain CAPTAIN.COM has the potential to uplift your brand and that you have the infrastructure and vision to extract the maximum value from such a strategic investment, we want to help and are looking forward to hearing from you.

                            </p>
                        </div>
                        <div className='col-sm p-4'>
                            <form class="row g-3 ">
                                <div class="col-md-6 p-1">
                                    <input type="text" class="form-control " placeholder='Enter your name' id="inputEmail4" />{}
                                </div>
                                <div class="col-md-6 p-1">
                                    <input type="text" class="form-control" placeholder='Enater your last name' id="inputPassword4" />
                                </div>
                                <div class="col-12 p-1">
                                    <input type="email" class="form-control" id="inputAddress" placeholder="Enter your email address" />
                                </div>
                                <div class="col-md-6 p-1">
                                    <input type="email" class="form-control" placeholder='Enter your Company name' id="inputEmail4" />
                                </div>
                                <div class="col-md-6 p-1">
                                    <input type="password" class="form-control" placeholder='Enater your Telephone no.' id="inputPassword4" />
                                </div>
                                <div class="col-12 p-1">
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="What is The Color of Blue Apple?" />
                                </div>
                                <div className='col-12'>
                                    <textarea className='p-2 textarea' name="text" id="" cols="70" rows="3" placeholder='Please specify the reason to contact us..'></textarea>
                                </div>

                                <div class="col-12 d-grid gap-2">
                                    <button type="submit" className="btn btn-dark info " >Request info</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='contectdiv2 ' ></div>
                <div className='container divfa my-4'>

                    <b>SHARE </b><FaInstagram className='fa fa1' /> <FaFacebookF className='fa fa2' /> <FaTwitter className='fa fa3' /> <FaLinkedinIn className='fa fa4' />
                    <p className=' para2 my-3 '>
                        All product names, trademarks and registered trademarks are property of their respective owners. <br /> All company, product and service names used in this website are for identification purposes only. <br /> Use of these names, trademarks and brands does not imply endorsement. <br /> All other trademarks cited herein are the
                    </p>
                </div>
            </div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <div className='container '>
                    We use cookies to ensure you get best experience on our website. <span style={{ opacity: '.6', textDecoration: 'underline', cursor: 'pointer' }}>Learn more</span>
                    <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}
