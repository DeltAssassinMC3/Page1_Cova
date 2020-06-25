import React from 'react';
import '../../assets/styles/components/Header.scss';


const Header = () => {
  return (

<section
  id="home"
  className="header"
  data-scroll-index={0}
  style={{ backgroundImage: 'url("../../../../../static/bg.jpg")' }}
  data-stellar-background-ratio="0.8">
  <svg
  
    className="left-svg"
    width="50%"
    height={80}
    viewBox="0 0 100 102"
    preserveAspectRatio="none">
    <path d="M0 100 L100 100 L0 10 Z" />
  </svg>

  <svg
    className="right-svg"
    width="50%"
    height={80}
    viewBox="0 0 100 102"
    preserveAspectRatio="none">
    <path d="M0 100 L100 100 L100 10 Z" />
  </svg>

  <div className="v-middle">
    <div className="container">
      <div className="row">
  
        <div className="caption">
          <h5>Covalu S.C.</h5>
          <h1 className="cd-headline clip">
            <span className="blc"> {`Implementacion de `}   </span>
            <span className="cd-words-wrapper">
              <b className="is-visible"> ERP </b>
              <b> CRM </b>
              <b> BI </b>
              <b> WMS </b>
              <b> Portal Web </b>
            </span>
          </h1>
       
          <div className="social-icon">
            <a
              href="https://www.facebook.com/Covalu-SC-436381337123343/"
              target="_blank">
              <span>
                <i className="fa fa-facebook" aria-hidden="true" />
              </span>
            </a>
            
            <a href="https://www.instagram.com/covalu_sc/?igshid=x44jupj381sb"
              target="_blank" >
              <span>
                <i className="fa fa-instagram" aria-hidden="true" />
              </span>
            </a>
            
            <a href="https://www.linkedin.com/company/covalu-s-c"
              target="_blank">
              <span>
                <i className="fa fa-linkedin" aria-hidden="true" />
              </span>
            </a>

            <a href="https://www.youtube.com/channel/UCeEeunTtohz-BSvDu8Z3yLg"
              target="_blank" >
              <span>
                <i className="fa fa-youtube" aria-hidden="true" />
              </span>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5215549138189=Hola&nbsp;info&nbsp;covalu"
              target="_blank">
              <span>
                <i className="fa fa-whatsapp" aria-hidden="true" />
              </span>
            </a>

          </div>
        </div>
   
      </div>
    </div>
  
  </div>

</section>
  );
}
export default Header;
