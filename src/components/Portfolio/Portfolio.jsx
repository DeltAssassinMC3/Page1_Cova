import React from "react";
import "../../assets/styles/components/Portfolio.scss";
import InputPortfolio from "../commons/InputPorfolio";
import { infoCard } from "../../utils/constants/portfolioCards.json";

const Portfolio = () => {
  return (
    <section className="portfolio section-padding pb-70" data-scroll-index={2}>
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Nuestros Partners</h3>
          </div>
          <div className="filtering text-center mb-50">
            <span data-filter=".partner" className="active">
              Todos
            </span>
            <span data-filter=".intelisis">Intelisis</span>
            <span data-filter=".qlik">Qlik</span>
            <span data-filter=".penta">Pentaho</span>
          </div>
          <div className="gallery text-center">
            {infoCard.map((item, index) => {
              return (
                <InputPortfolio
                  key = {`ComponenteParaElPortafolio${index}`}
                  classColumn={item.classColumn}
                  classItem={item.classItem}
                  srcImage={item.srcImage}
                  altImage={item.altImage}
                  imageItem={item.imageItem}
                  positionText={item.positionText}
                  messageTitle={item.messageTitle}
                  tittleTool={item.tittleTool}
                  tittleDescription={item.tittleDescription}
                  classIcon={item.classIcon}
                  iconLink={item.iconLink}
                  srcImage={item.srcImage}
                  tittleDescription={item.tittleDescription}
                  classSvg={item.classSvg}
                  ariaHidden={item.ariaHidden}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
