import React from 'react';



export default function Header(){
    return(
        <section>
            <section className='container my-5 justify-content'>
                <div className='row justify-content my-5'>
            <div className="col-lg-5">
                <div className='card p-5 border-0'>
                    <div card-body text-center>
                    <h1 className='card-title display-4 fw-bold text-md-start'>Nasa API</h1>
                    <p className='lead card-subtitle text-md-start'>Get access to different pictures directly from NASA.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                <div className='card p-5 border-0'>
                    <div card-body >
                  <img src="https://cdn.pixabay.com/photo/2017/08/17/00/25/image-2649619_960_720.jpg"/>
                    </div>
                    
                </div>
            </div>
            </div>
            </section>
        </section>
    )
}