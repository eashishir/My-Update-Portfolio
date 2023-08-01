import React from "react"
import "./Home.css"
import hero from "../Pic/Picsart_22-12-23_03-43-30-381.jpg"
import skill2 from "../Pic/React-icon.svg.png"
import skill1 from "../Pic/CSS3_and_HTML5_logos_and_wordmarks.svg.png"
import skill3 from "../Pic/Mongodb-icon.svg.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top '>
            <h3>WELCOME TO MY Portfolio</h3>
            <h1>
              Hi, I’m <span>Shishir</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Frontend Developer.", " Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Hi I'm  a web developer with 2 years of experience in creating dynamic and user-friendly websites. Experienced front-end web developer specializing in crafting intuitive and seamless user interfaces. With expertise in HTML5, CSS3, and JavaScript frameworks such as React and Next JS, I have successfully translated design concepts into Figma, responsive websites. With a keen eye for detail and a passion for delivering exceptional user experiences, I thrive on solving complex problems and continuously improving the performance and usability of web applications.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a href="https://www.facebook.com/Eftekhar.Ahmed20"><button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button></a>
                    <a href="https://www.instagram.com/ea_shishir/"><button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button></a>
                    <a href="https://www.linkedin.com/in/eftakher-the-front-end-web-developer-in-bd/">
                      <button className='btn_shadow'>
                        <i class='fab fa-linkedin-in'></i>
                      </button>
                    </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home