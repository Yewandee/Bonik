import React from 'react';

const Head = () => {
    return(
        <div>
           <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>+2348158348908</label>
                        <i className='fa fa-envelope'></i>
                        <label>ybiobaku@gmail.com</label>
                    </div>
                    <div className='right row RText'>
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <span>🏳️</span>
                        <label htmlFor='EN'>EN</label>
                        <span>🏳️</span>
                        <label htmlFor='USD'>USD</label>
                        
                    </div>
                </div>
           </section>
        </div>
    )
}

export default Head