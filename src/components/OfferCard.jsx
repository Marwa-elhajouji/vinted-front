// // // import { Link } from "react-router-dom"

// // // export default function OfferCard({ offer }) {
// // //   // console.log("offercard", offer);
// // //   return (
// // //     <Link to={`/offer/${offer._id}`} key={offer._id}>
// // //       <div className="offer-card">
// // //       <div>
// // //   {offer.owner && offer.owner.account && offer.owner.account.avatar && (
// // //     <img
// // //       src={offer.owner.account.avatar.secure_url}
// // //       alt=""
// // //       className="avatar"
// // //     />
// // //   )}
// // //   {offer.owner && offer.owner.account && (
// // //     <p>{offer.owner.account.username}</p>
// // //   )}
// // // </div>
// // //         <div>
// // //           {offer.product_image && (
// // //             <img src={offer.product_image.secure_url} alt="" />
// // //           )}
// // //         </div>

// // //         <div>
// // //           <p>{offer.product_price} €</p>
// // //         </div>
// // //       </div>
// // //     </Link>
// // //   )
// // // }



// // The error you are encountering is likely related to the usage of the key prop inside the Link component. The key prop should not be used on a Link component because it is not a valid prop for this component. The key prop is used to uniquely identify elements in lists, not for navigation components like Link.

// // To resolve the error, simply remove the key prop from the Link component, like this:

// // jsx
// // Copy code
// // import { Link } from "react-router-dom";

// // export default function OfferCard({ offer }) {
// //   // console.log("offercard", offer);
// //   return (
// //     <Link to={`/offer/${offer._id}`}>
// //       <div className="offer-card">
// //         <div>
// //           {offer.owner && offer.owner.account && offer.owner.account.avatar && (
// //             <img
// //               src={offer.owner.account.avatar.secure_url}
// //               alt=""
// //               className="avatar"
// //             />
// //           )}
// //           {offer.owner && offer.owner.account && (
// //             <p>{offer.owner.account.username}</p>
// //           )}
// //         </div>
// //         <div>
// //           {offer.product_image && (
// //             <img src={offer.product_image.secure_url} alt="" />
// //           )}
// //         </div>
// //         <div>
// //           <p>{offer.product_price} €</p>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // }
// import { Link } from "react-router-dom";

// export default function OfferCard({ offer }) {
//   // Make sure offer exists before accessing its properties
//   if (!offer) {
//     return null; // Or display a loading/error message
//   }

//   const owner = offer.owner && offer.owner.account;

//   return (
//     <Link to={`/offer/${offer._id}`}>
//       <div className="offer-card">
//         <div>
//           {owner && owner.avatar && (
//             <img src={owner.avatar.secure_url} alt="" className="avatar" />
//           )}
//           {owner && <p>{owner.username}</p>}
//         </div>
//         <div>
//           {offer.product_image && (
//             <img src={offer.product_image.secure_url} alt="" />
//           )}
//         </div>
//         <div>
//           <p>{offer.product_price} €</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// import { Link } from "react-router-dom";

// export default function OfferCard({ offer }) {
//   // Make sure offer exists and has product_image before rendering
//   if (!offer || !offer.owner || !offer.owner.avatar || !offer.owner.avatar.secure_url) {
//     return null; // Or display a loading/error message
//   }

//   // const owner = offer.owner && offer.owner.account;

//   return (
//     <Link to={`/offer/${offer._id}`}>
//       <div className="offer-card">
//         <div>
//           {owner && owner.avatar && (
//             <img src={owner.avatar.secure_url} alt="" className="avatar" />
//           )}
//           {owner && <p>{owner.username}</p>}
//         </div>
//         <div>
//           {offer.product_image && (
//             <img src={offer.product_image.secure_url} alt="" />
//           )}
//         </div>
//         <div>
//           <p>{offer.product_price} €</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

import { Link } from "react-router-dom";

export default function OfferCard({ offer }) {
  return (
    <Link to={`/offer/${offer._id}`} key={offer._id}>
      <div className="offer-card">
        <div>
          {offer.owner.account.avatar && (
            <img
              src={offer.owner.account.avatar.secure_url}
              alt=""
              className="avatar"
            />
          )}

          <p>{offer.owner.account.username}</p>
        </div>

        <img src={offer.product_image.secure_url} alt="" />

        <div>
          <p>{offer.product_price} €</p>
        </div>
      </div>
    </Link>
  );
}
