import React from 'react'
import Button from '../components/Button/Button';


const ContactPage = () => {
  return (
    <div className='py-20'>

      <div className='border-2 border-b_gray container p-20'>
        <h2 className='text-2xl font-space mb-5'>Send a message</h2>
        <div>
          <form>
            <div className='flex  gap-x-5'>
              <input type="text" placeholder='Enter your name' />
              <input type="text" placeholder='Enter your email' />
            </div>
            <div className='flex gap-x-5'>
              <input type="text" placeholder='Mobile no' />
              <input type="text" placeholder='Company' />
            </div>
            <textarea rows={5} placeholder='Your message'></textarea>

            <Button
              name="Send Message"
              handleBtnClick=""
            />

          </form>
        </div>
      </div>
    </div>
  )
}


export default ContactPage;