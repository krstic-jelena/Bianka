import React from "react";
import Nature from "./history.jpg";

const History = () => {
  return (
    <div className="container">
      <h1>
        <strong>Kroz istoriju</strong>
      </h1>
      <div className="row">
        <div className="col s12 m8">
          <img src={Nature} alt="A nature" />
          <h5 className="blue-text">
            <strong>
              Pratimo svjetske trendove tako da smo kvalitet i ozbiljnost
              poslovanja iskazali i kroz implementaciju međunarodnih srandarda:
            </strong>
          </h5>
          <div className="row">
            <div className="col s12 m2 blue-text">
              <strong>2008</strong>
            </div>
            <div className="col s12 m10 blue-text">
              <strong>Certifikacija HACCP-a</strong>
              <p className="black-text">
                Izvršili smo certifikaciju HACCP-a od Austrijske firme
                Qualityaustria Secceed with Quality, Vienna
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m2 blue-text">
              <strong>2011</strong>
            </div>
            <div className="col s12 m10 blue-text">
              <strong>Certifikacija ISO 9001:2008 starnarda</strong>
              <p className="black-text">
                Izvršili smo recertifikaciju HACCP-a i certifikaciju ISO
                9001:2008 starnarda od Austrijske firme Qualityaustria Secceed
                with Quality, Vienna.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m2 blue-text">
              <strong>2016</strong>
            </div>
            <div className="col s12 m10 blue-text">
              <strong>Izvoz u EU</strong>
              <p className="black-text">
                Dobili smo dozvolu za izvoz naših proizvoda u zemlje Evropske
                Unije.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m2 offset-m2">
          <div className="input-field">
            <button className="btn btn-primary">FACEBOOK</button>
          </div>
          <h5>
            <strong>Imate dodatna pitanja???</strong>
          </h5>
          <p>Kontaktirajte nas i putem nase facebook stranice</p>
          <div className="input-field">
            <button className="btn btn-primary">Kontakt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
