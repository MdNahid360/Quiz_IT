import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/banner2.jpg'; 
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    // const [sendQus, setSendQus] = useState()

    return (
       <>
           <div  className="md:h-[340px] relative h-[200px] py-3 px-2 rounded-lg" style={{backgroundImage : `linear-gradient(60deg,transparent, indigo),url("${banner}")`, backgroundSize : "cover",backgroundPosition : "center", backgroundRepeat : "no-repeat"}}>
            <h1 class="typewrite text-white capitalize mt-[5%] font-bold text-center text-4xl" data-period="2000" data-type='[ "Welcome to, QUIZ IT.", "This Is a Quiz Application", "For A Web Developer", "Get Upgrade Your Skill" ]'>
                <span class="wrap"></span>
            </h1>
            <div className="flex justify-start p-3 ">
                        <Link to="/allQuiz" className="bg-[#ec3283] text-center  text-white px-8 py-2 rounded-md m-auto capitalize"> Get Started</Link>
            </div>
        </div>
           <About></About>
           <Contact></Contact>
       </>
    );
};

export default Home;