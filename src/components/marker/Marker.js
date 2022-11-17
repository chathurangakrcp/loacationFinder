import { Tooltip } from 'antd';
import React from 'react';
import classes from "./index.module.css";

const Marker = ({ text }) => (
  <Tooltip title={text}>
    <div className={classes.Marker} />
  </Tooltip>
  
);

export default Marker;
