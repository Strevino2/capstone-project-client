// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { LocationPin } from "./LocationPin";

// const Map = ({ location, zoomLevel }) => {
// const { isLoaded } = useLoadScript({
//   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
// });

// if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <div className="map">
//       {/* <h2 className="map-h2">Come Visit Us At Our Restaurant</h2> */}
//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAdBxjKpS-ABiKKfIKot1Xf5VbJ6yzIUBA" }}
//           defaultCenter={location}
//           defaultZoom={zoomLevel}
//         >
//           <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default Map;
