import React from 'react';
import './Contact.css';


const Contact = () => {

	
	return (
			<div className= 'backgroundOverlay'>
				<div className= 'contentContainer'>
					<div className='formContainer'>
						<form className="pa4 black-80 center">
						<h1>Get in touch with us</h1>
						<h2 className='f5'>Or email us directly at: <a className='black' href="mailto:info@nomadicorchestra.com">info@nomadicorchestra.com</a></h2>
							<div className='flex flex-wrap mt4'>
							  <div className="tl measure mr5">
							    <label for="name" className="f6 b  mb2">Name:</label>
							    <input id="name" className="input-reset ba b--near-black pa2 mb2 w-100" type="text" aria-describedby="name-desc"/>
							  </div>
							  <div className="tl measure">
							    <label for="email" className="tl f6 b  mb2">Email:</label>
							    <input id="email" className="input-reset ba b--near-black pa2 mb2  w-100" type="text" aria-describedby="name-desc"/>
							  </div>
						  	</div>
						  
						  <div className="tl ">
						    <label for="name" className="tl f6 b db mb2">Enquiry:</label>
		  					  <textarea 
		  					  	id="comment" 
		  					  	name="comment" 
		  					  	className="border-box hover-black ba shadow-5 b--near-black pa2 mb2" 
		  					  	aria-describedby="comment-desc"
		  					  >
		  					  </textarea>
						  </div>
							  <input 
							  	className="center f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-near-black white pointer w-100 w-25-m w-20-l br2-ns" 
							  	type="submit" 
							  	value="Submit Email"/>
						</form>
					</div>
				</div>
				
	    	</div>

	);
};

export default Contact;