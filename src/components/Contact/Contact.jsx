import React from "react";
import "../../assets/styles/components/Contact.scss";
import Input from "../commons/Input";
/* import mail from "../../../public/mail.php" */ 

const Contact = () => {
  return (
    <div>
      <section className="contact section-padding" data-scroll-index={3}>
        <div className="container">
          <div className="row">
            <div className="section-head">
              <h3>Contáctanos</h3>
            </div>
            <form
             /* action= {mail}  */
              action="../public/mail.php"
              method="post"
              className="form"
              id="contact-form"
            >
              <div className="messages" />
              <div className="controls">
                <div className="row">
               
                  <Input
                    classColumn="col-md-6"
                    classGroup="form-group"
                    idForm="form_name"
                    inputType="text"
                    name="name"
                    placeHolder="Nombre"
                    requiredInput={true}
                  />

                <Input
                    classColumn="col-md-6"
                    classGroup="form-group"
                    idForm="form_email"
                    inputType="email"
                    name="email"
                    placeHolder="Email"
                    requiredInput= {true}
                  />
                </div>
                <div className="row">
                 
                <Input
                    classColumn="col-md-6"
                    classGroup="form-group"
                    idForm="form_name"
                    inputType="text"
                    name="tel"
                    placeHolder="Telefono"
                    requiredInput= {true}
                  />

                  <div className="col-md-6">
                    <div className="form-group">
                      <select name="category" type="text" required>
                        <option value="default" disabled selected>
                          Categoría
                        </option>
                        <option>Intelisis ERP</option>
                        <option>Qlik</option>
                        <option>Pentaho</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                </div>


              <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Mensaje"
                        rows={4}
                        required="required"
                      />
                    </div>
                    
                    <input
                      type="submit"
                      defaultValue="Enviar"
                      className="buton buton-bg"
                    />
                    <input
                      type="reset"
                      defaultValue="Borrar"
                      className="buton buton-bg"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
