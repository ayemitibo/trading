import React from 'react'
import './Header.css'

const Header = () => {
    return (
       <div className="container-fuild p-4" style={{border: "0.5px solid #ece8e8"}} >
           <div className="row justify-content-center "  >
               <div className="col-md-9">
                   <div className="row">
                        <div className="col-md-3">
                            <img src="" alt="logo"/>
                        </div>
                        <div className="col-md-9">
                            <div className="row justify-content-end">
                                <ul class="nav ">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Active</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" >Login</a>
                                    </li>
                                </ul>
                                <div class="ml-2 row align-items-center">
                                    <a id="header_action_button" href="https://dashboard.tawk.to/signup">Sign up Free</a>
                                </div>
                            </div>
                            
                            
                        </div>
                       
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Header;