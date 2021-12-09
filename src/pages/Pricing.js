import React from "react";
import data from '../data/data.json';

const Pricing = () => {
    return(
        <div className="section-container">
          {/* <h1>{data[0].type}</h1> */}
        <div className="container">
          <div className="row section-container-spacer">
            <div className="col-xs-12">
              <div className="text-center">
                <h1>Pricing</h1>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <p>Adipiscing vitae proin sagittis nisl rhoncus mattis. Bibendum enim facilisis gravida neque convallis
                  a cras semper auctor. Sit amet risus nullam eget felis eget. Metus dictum at tempor commodo ullamcorper
                  a lacus vestibulum. Sit amet facilisis magna etiam tempor orci eu. Eleifend mi in nulla posuere.
                  Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. 
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              data.map( (price) => {
                //const [color, type, amount, link ] = price;
                return(                  
                  <div className="col-md-4">
              <div className={price.color}>
                <h3>{price.type}</h3>
                <h6 className="price">{price.amount} <span>$/MO</span></h6>
              </div>
              <div className="pricing-features">
                <ul className="features">
                  <li>Gravida arcu ac tortor dignissim convallis aenean</li>
                  <li>Gravida arcu ac tortor dignissim convallis aenean</li>
                  <li>Gravida arcu ac tortor dignissim</li>
                </ul>
                <a href={price.link} className="btn btn-primary" title>Subscribe</a>
              </div>
            </div>
                )                
              })
            }
          </div>
        </div>
      </div>
    )
}

export default Pricing;