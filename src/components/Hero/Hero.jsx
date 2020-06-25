import React from 'react';
import '../../assets/styles/components/Hero.scss';
import {quienesSomos,nuestraConcentracion,nuestroEquipo} from "../../utils/constants/heroInfo.json";

const Hero = () => {

   return( <section className="hero section-padding pb-70" data-scroll-index={1}>
    <div className="container">
      <div className="row">

        <div className="col-md-7">
          <div className="content mb-30">
            <h3>Nosotros</h3> <br />
            <p><b>Covalu</b><br /><br /> {quienesSomos}<br /><br />
              {nuestraConcentracion} <br /><br />
              {nuestroEquipo}</p>
            
            <div className="skills">
              <div className="item">
                <div className="skills-progress">
                  <h6>BI</h6>
                  <span data-value="100%" />
                </div>
              </div>
              <div className="item">
                <div className="skills-progress">
                  <h6>Portal Web</h6>
                  <span data-value="100%" />
                </div>
              </div>
              <div className="item">
                <div className="skills-progress">
                  <h6>ERP</h6>
                  <span data-value="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-md-5">
          <div className="mb-30">
            <img src="../../../../../static/nosotros.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section> )
  
};

export default Hero;