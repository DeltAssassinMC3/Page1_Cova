import React from "react";
import "../../assets/styles/components/Services.scss";
import {
  consultoria,
  outsourcing,
  soporte,
  desarrolloIntelisis,
  desarrolloWeb,
  desarrolloMovil
} from "../../utils/constants/servicesInfo.json";


const Services = () => {
  return (
    <section className="services section-padding bg-gray text-center pb-70">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Servicios</h3>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-file" aria-hidden="true" />
              </span>
              <h6>Consultoría</h6>
              <p> {consultoria}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-users" aria-hidden="true" />
              </span>
              <h6>Outsourcing</h6>
              <p>{outsourcing}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-cogs" aria-hidden="true" />
              </span>
              <h6>Soporte</h6>
              <p>
                {soporte} <br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-terminal" aria-hidden="true" />
              </span>
              <h6>Desarrollo Intelisis</h6>
              <p>{desarrolloIntelisis}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-laptop" aria-hidden="true" />
              </span>
              <h6>Desarrollo Web</h6>
              <p>
                {desarrolloWeb} <br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-mobile" aria-hidden="true" />
              </span>
              <h6>Desarrollo Móvil</h6>
              <p>
                {desarrolloMovil} <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
