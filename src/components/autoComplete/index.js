import React, { Component, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { locationActions } from "../../store/reducers/location";
import classes from "./index.module.css";
const AutoComplete = (props) => {
  const inputRef = useRef();
  const autoComplete = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    const { map, mapApi } = props;
    const options = {
      // restrict your search to a specific type of result
      // types: ['geocode', 'address', 'establishment', '(regions)', '(cities)'],
      // restrict your search to a specific country, or an array of countries
      // componentRestrictions: { country: ['gb', 'us'] },
    };
    autoComplete.current = new mapApi.places.Autocomplete(
      inputRef.current,
      options
    );
    autoComplete.current.addListener("place_changed", onPlaceChanged);
    // autoComplete.current.bindTo('bounds', map);
  }, []);

  const onPlaceChanged = ({ map, addplace } = props) => {
    const place = autoComplete.current.getPlace();
    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    dispatch(locationActions.setLocation(place))
    // addplace(place);
    inputRef.current.blur();
  };

  const clearSearchBox = () => {
    inputRef.current.value = "";
  };

  return (
    <span className={classes.SearchBox}>
      <input
        ref={inputRef}
        type="text"
        onFocus={clearSearchBox}
        placeholder="Enter a location"
      />
    </span>
  );
};

export default AutoComplete;
