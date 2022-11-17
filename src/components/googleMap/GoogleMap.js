import React from 'react';
import GoogleMapReact from 'google-map-react';
import classes from "./index.module.css";

const GoogleMap = ({ children, ...props }) => (
  <div className={classes.Container}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
