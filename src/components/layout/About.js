import React from "react";
import Milk from "./about.jpeg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8">
          <h1 className=" strong">O nama</h1>
          <p>
            Mljekara Bianka je osnovana 1999 godine i početni kapacitet je
            iznosio skromnih 130 litara na dan. proizvedenom sa istog terena.
          </p>
          <p>
            Danas je to savremno opremljen pogon koji ima dnevni kapacitet
            prerade do 50.000 litara svježeg mlijeka, koje se otkupljuje od oko
            950 kooperanata sa područja 16 opština Hercegovine, Romanije i
            Podrinja. Prateci trendove razvoja mljekara Bianka stalno
            osavremenjuje proizvodne linije i razvojem novih proizvoda nastoji
            zadovoljiti potrebe potrošaca. U cilju osiguranja kvaliteta
            proizvoda, konstantno se kontroliše kvaliteta osnovne sirovine,
            prati se tok cijelog tehnološkog postupka, te provodi
            organolepticka, hemijska i mikrobiološka provjera svih gotovih
            proizvoda.
          </p>
          <p>
            Pratimo svjetske trendove tako da smo kvalitet i ozbiljnost
            poslovanja iskazali i kroz implementaciju međunarodnih srandarda.
          </p>
          <p>
            Nalazimo se u prirodnom okruženju, okruženi nezagađenom prirodom, na
            brdsko-planinskom području nadmorske visine od oko 650 m. Sirovo
            mlijeko prerađeno u mljekari je proizvedeno velikim dijelom (preko
            90%) ispašom stoke na pašnjecima hercegovačkog krša gdje ima dosta
            ljekovitog bilja te na romanijsko – podrinjskom platou, a zimi sa
            hranom proizvedenom sa istog terena.
          </p>
        </div>
        <div className="col s12 m3 offset-m1">
          <img src={Milk} alt="A milk" />
        </div>
      </div>
    </div>
  );
};

export default About;
