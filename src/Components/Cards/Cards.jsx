/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from "./Cards.module.css"
import { Link } from "react-router-dom";

const Cards = ({ results,page }) => {
  
   let display;

   if (results) {
      display = results.map(x => {

         //destructuring results
         let { id, image, name, location, status } = x

         return (
            <Link 
            to={`${page}${id}`} 
            key={id} 
            className="cards mb-4 col-4 position-relative text-light"
            style={{textDecoration:"none",}}
            >
               
               <div className={`${styles.cards}`}>
                  <img src={image} alt="" className={`${styles.img} img-fluid`} />
                  <div className="px-2 py-2 content">
                     <div className=" fs-4 fw-bold mb-3">{name}</div>
                     <div className="">
                        <div className="fs-6">Last Location:</div>
                        <div className="fs-5">{location.name}</div>

                     </div>
                  </div>
               </div>

               {(() => {
                  if (status === "Dead") {
                     return <div className={`${styles.badge} position-absolute badge bg-danger `}>
                        {status}</div>
                  } else if (status === "Alive") {
                     return <div className={`${styles.badge} position-absolute badge bg-success `}>
                        {status}</div>
                  } else {
                     return <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                        {status}</div>
                  }
               })()}

            </Link>)
      })
   } else {
      display = "No Characters Found"
   }

   return (
      <>
         {display}
      </>
   )
}

export default Cards
