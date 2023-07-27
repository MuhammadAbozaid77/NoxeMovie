import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <>
      <div className='footer py-5'>
          <div className="row align-items-center">
             <div className="col-md-6 col-12">
             <ul className=''> 
                <li> <Link> Home </Link> </li>
                <li> <Link> Movies </Link> </li>
                <li> <Link> TV-Shows </Link> </li>
                <li> <Link> People </Link> </li>
            </ul>
             </div>
             <div className="col-md-6 col-sm-12">
                <h4 className='text-white text-center'> Subscribe to our Website </h4>
                  <li className="nav-item d-flex justify-content-center">
                    <Link className="nav-link  mx-2 mb-1" to=""> <i className="fa-brands fa-facebook"></i> </Link>
                    <Link className="nav-link  mx-2 mb-1" to=""> <i className="fa-brands fa-spotify"></i> </Link>
                    <Link className="nav-link  mx-2 mb-1" to=""> <i className="fa-brands fa-instagram"></i> </Link>
                    <Link className="nav-link  mx-2 mb-1" to=""> <i className="fa-brands fa-youtube"></i> </Link>
                  </li>
                <div className='text-center'>
                    <input className='p-2 rounded-3 border-0 mb-2' type="search" />
                    <button className='btn btn-primary'> Search </button>
                </div>
</div>
          </div>
      </div>
  
  </>
}




