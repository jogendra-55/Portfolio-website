import React from 'react'
import './Projects.css'
import M1 from '../../assets/Mart_1.jpeg'
import M2 from '../../assets/Mart_2.jpeg'
import M3 from '../../assets/Mart_3.jpeg'
import M4 from '../../assets/Mart_4.jpeg'
import M5 from '../../assets/Mart_5.jpeg'
import M6 from '../../assets/Mart_6.jpeg'
import C1 from '../../assets/Chat_app_1.jpeg'
import C2 from '../../assets/Chat_app_2.jpeg'


function Projects() {

    return (

        <section id='myproject'>
            <h5>Get to Know</h5>
            <h2>About My Projects</h2>

            <div className="container about_projects">
                <h2>1. AJPS Mart :</h2>
                <div>
                This is a grocery ordering website. On this website the new user can register for self, and then login into his/her account.
                The user will able to order grocery products through his/her account and the same order can be track in his/her account. For 
                creating this website the technologies used are HTML, CSS, JavaScript for Frontend and for Backend Django Framework is used.
                For storing the data of this , Mysql is used. Following are pictures of some of the pages of website.
                </div> 
                <div className="project__item-img">
                   <img className='project_img' src={M1} alt="" />
                   <img className='project_img' src={M2} alt="" />
                   <img className='project_img' src={M3} alt="" />
                   <img className='project_img' src={M4} alt="" />
                   <img className='project_img' src={M5} alt="" />
                   <img className='project_img' src={M6} alt="" />
                   
                </div>    
            </div>
            <div className="container about_projects" >
                <h2>2. Color Identifier :</h2>
                <div>
                    It is a Chrome Extension, created with HTML, CSS, and JavaScript. At the time when this extension is active and 
                    you click on any color on your desktop screen ,this extension will display the hexadecimal code of that color.
                    And the same code will be copied to your clipboard for future use.
                </div> 
                  
            </div>
            <div className="container about_projects" >
                <h2>3. Chat Application :</h2>
                <div>
                This is my another personal project on which I am working on.It can be used to communicate with our peer ones.
                For building frontend of this application I had use HTML, CSS and React, and for Backend I will be using NodeJs. For this the databse will be MongoDB.
                Following are pictures of some of the pages of application.</div>
                <div className="project__item-img">
                   <img className='project_img' src={C1} alt="" />
                   <img className='project_img'src={C2} alt="" />
                </div>    
            </div>
        </section>
    );
}

export default Projects