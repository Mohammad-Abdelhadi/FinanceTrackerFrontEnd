import React from "react";
import Time from "../../Images/Time.svg";
import Battery from "../../Images/Battery.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import ThreeDot from "../../Images/ThreeDot.svg";
import { Link } from "react-router-dom";
import { useTransferContext } from "../../hooks/useTransferContext";
import useTransferConfirmation from "../../hooks/useTransferConfirmation";

const Confirmtransfer = () => {
   const { ConfirmationSend, isLoading } = useTransferConfirmation();
   const { transferInfo } = useTransferContext();

   const handleSubmit = async (e) => {
      e.preventDefault();

      await ConfirmationSend(transferInfo);
   };

   return (
      <>
         {isLoading && (
            <div className="spiner">
               <div className="circle-one"></div>
            </div>
         )}
         <div id="expense__container">
            <main id="expense__page" className="container">
               <div className="row position-relative">
                  {/* Mobile Info In top */}
                  <div className="col-12 center__battery ">
                     <div className="d-flex justify-content-between ">
                        <div>
                           <img alt="#" src={Time} />
                        </div>
                        <div>
                           <img alt="#" src={Battery} />
                        </div>
                     </div>
                  </div>
                  {/* Arrow Back and Three dot and page name */}
                  <div className="col-12">
                     <div className="d-flex justify-content-around mt-5">
                        <div>
                           <Link to="/sendmoney">
                              <img alt="#" src={ArrowBack} />
                           </Link>
                        </div>
                        <div>
                           <Link className="text__edit" to="#">
                              Send Money
                           </Link>
                        </div>
                        <div>
                           <img alt="#" src={ThreeDot} />
                        </div>
                     </div>
                  </div>
               </div>
               {/* Cards that includes Form and input */}
               <form
                  className="position-absolute z-1 center__cards px-3 test"
                  onSubmit={handleSubmit}
               >
                  <div
                     className=" text-center"
                     style={{
                        fontWeight: "500",
                        color: "#171717",
                        paddingTop: "30px",
                     }}
                  >
                     {" "}
                     Transfer Confirmation
                  </div>

                  <div className="my-3">
                     <label htmlFor="email" className="transfer__amount">
                        Send to :
                     </label>
                     <input
                        disabled
                        placeholder="Email user"
                        className={`form-control mt-2 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={transferInfo.email}
                     />
                     <div></div>
                  </div>
                  <div className="my-3">
                     <label htmlFor="amount" className="transfer__amount">
                        Transfer amount :
                     </label>
                     <input
                        id="amount"
                        type="string"
                        placeholder="0$"
                        className={`form-control mt-2 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={`${transferInfo.value}$`}
                        disabled
                     />
                  </div>
                  <div className="my-3">
                     <label htmlFor="amount" className="transfer__amount">
                        Username :
                     </label>
                     <input
                        id="amount"
                        type="string"
                        placeholder="0$"
                        className={`form-control mt-2 mb-5 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={`${transferInfo.username}`}
                        disabled
                     />
                  </div>
                  <div className="container add__btn  ">
                     <div className="my-2">
                        <button
                           type="submit"
                           className="btn w-100 "
                           disabled={isLoading}
                        >
                           Confirm transaction
                        </button>
                     </div>
                  </div>
               </form>
               {/* Button Add  */}
            </main>
         </div>
      </>
   );
};

export default Confirmtransfer;
