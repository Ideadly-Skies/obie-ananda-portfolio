import React from 'react'
import { FaFacebook, FaGit, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className='sflex bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='flex'>
          <div className='flex-1'>
            <h3>Obie Ananda</h3>
            <p>Full-Stack Web Developer based in Indonesia</p>
          </div>

          <div className='flex-1'>
            <form>
              <input type="email" placeholder="Enter Email"/>
              <button>Subscribe</button>
            </form>
          </div>
          
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}
          </p>

          <div className="flex space-x-4 md:my-0">
            <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-white">
              <FaFacebook/>
            </a>
            
            <a href="https://www.linkedin.com/in/obie-ananda-a87a64212" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin/>
            </a>

            <a href="https://www.instagram.com/obert_charmany" target="_blank" className='text-gray-400 hover:text-white'>
              <FaInstagram/>
            </a>

            <a href="https://github.com/Ideadly-Skies" target="_blank" className='text-gray-400 hover:text-white'>
              <FaGithub/>
            </a>
          </div>

          <div className='flex space-x-4'>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Services
            </a>

          </div>

        </div>
      </div>
    </footer> 
  )
}

export default Footer