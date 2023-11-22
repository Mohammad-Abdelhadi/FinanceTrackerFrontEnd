import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sendmoney.css";
import useTransferInformation from "../../hooks/useTransferInformation";
const Sendmoney = () => {
   const { informationCheck, isLoading, error } = useTransferInformation();

   const [value, setValue] = useState("");
   const [email, setEmail] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      await informationCheck(email, value);
   };

   return (
      <>
         {isLoading && (
            <div className="spiner">
               <div className="circle-one"></div>
            </div>
         )}
         <div id="expense__container_sendmoney">
            <main id="expense__page" className="container">
               <div className="row position-relative">
                  {/* Mobile Info In top */}
                  {/* Arrow Back and Three dot and page name */}
                  <div className="col-12">
                     <div className="d-flex justify-content-around mt-5">
                        <div>
                           <Link className="text__edit" to="#">
                              Send Money
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Cards that includes Form and input */}
               <form
                  className="position-absolute z-1 center__cards px-3 "
                  onSubmit={handleSubmit}
               >
                  <div className="my-3">
                     <label htmlFor="Email" className="transfer__amount">
                        Send to :
                     </label>
                     <input
                        id="Email"
                        type="text"
                        required
                        placeholder="Example@example.com"
                        className={`form-control mt-2 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>

                  <div className="my-3">
                     <label htmlFor="amount" className="transfer__amount">
                        Transfer amount :
                     </label>
                     <input
                        id="amount"
                        type="number"
                        placeholder="0$"
                        required
                        className={`form-control mt-2 `}
                        aria-label="Siyzing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setValue(e.target.value)}
                        min="1"
                        value={value}
                     />
                     <div className="error_container">
                        {error && (
                           <div className="signin_error_div">{error}</div>
                        )}
                     </div>
                  </div>
                  <div className="container add__btn  ">
                     <div className="my-2">
                        <button
                           type="submit"
                           className="btn w-100 send__btn"
                           disabled={isLoading}
                        >
                           send
                        </button>
                     </div>
                  </div>
               </form>
            </main>
         </div>
      </>
   );
};

export default Sendmoney;
