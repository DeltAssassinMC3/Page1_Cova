import React from "react";
import "../../assets/styles/components/Contact.scss";
import "../Contact/Contact";
import {
  nameAddress,
  correo,
  phoneOne,
  phoneTwo,
  phoneThree,
} from '../../utils/constants/contactInfo.json';

const Contacttable = () => {
  return (
    <div>
      <section className="contact" data-scroll-index={4}>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div className="info text-center mb-50">
                <div className="col-md-3">
                  <div className="item">
                    <span className="icon">
                      <i className="fa fa-location-arrow" aria-hidden="true" />
                    </span>
                    <h6>Dirección</h6>
                    <p>{nameAddress}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <span className="icon">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                    <h6>Email</h6>
                    <p> {correo}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <span className="icon">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                    <h6>Teléfonos</h6>
                    <p>
                      {phoneOne} <br />
                      {phoneTwo} <br />
                      {phoneThree}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <span className="icon">
                      <i className="fa fa-whatsapp" aria-hidden="true" />
                    </span>
                    <h6>
                      <a
                        href="https://wa.me/5215513986065?text=Hola%20info%20Covalu"
                        target="_blank"
                      >
                        Whatsapp
                      </a>
                    </h6>
                    <p></p>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.47690510055!2d-99.13253158318177!3d19.41440159752638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fec3a01cc22b%3A0xfb7cb896f8fe4a2!2sInt.2%2C+Manuel+Jos%C3%A9+Oth%C3%B3n+226%2C+Tr%C3%A1nsito%2C+06820+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1561873501884!5m2!1ses!2smx"
                  width={400}
                  height={200}
                  frameBorder={0}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacttable;
