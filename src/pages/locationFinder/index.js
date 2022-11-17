import React, { useState } from "react";

// components:
import { Content, Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";

// consts
import DEFAULT_CENTER from "../../const/default_center";
import { Col, Layout, PageHeader, Row } from "antd";

// project imports
import classes from "./index.module.css";

import Marker from "../../components/marker/Marker";
import GoogleMap from "../../components/googleMap/GoogleMap";
import AutoComplete from "../../components/autoComplete";

import List from "./components/list";

const LocationFinder = (props) => {
  const [state, setState] = useState({
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
  });
  const selectedPlaces = useSelector((state) => state.location.places);

  const apiHasLoaded = (map, maps) => {
    setState((pre) => {
      return { ...pre, mapApiLoaded: true, mapInstance: map, mapApi: maps };
    });
  };

  return (
    <Layout className={classes.index}>
      <Header>
        <div className={classes.logo}>Place Finder</div>
      </Header>
      <Content>
        <PageHeader>
          <Title level={2} align="center">
            Find Where You Want
          </Title>
        </PageHeader>
        <Row>
          <Col span={8} className="Component">
            <Row>
              <Col span={24}>
                <Title level={3}>Find Where You Want</Title>
                {state.mapApiLoaded && (
                  <AutoComplete map={state.mapInstance} mapApi={state.mapApi} />
                )}
              </Col>
              <Col span={24}>
                <Title level={3}>Recent List</Title>
                {state.mapApiLoaded && (
                  <List map={state.mapInstance} />
                )}
              </Col>
            </Row>
          </Col>
          <Col span={16} className="Component">
            <div className={classes.MapContainer}>
              <GoogleMap
                defaultZoom={10}
                defaultCenter={DEFAULT_CENTER}
                bootstrapURLKeys={{
                  key: "",
                  libraries: ["places", "geometry"],
                }}
                onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
              >
                {selectedPlaces.length &&
                  selectedPlaces.map((place) => (
                    <Marker
                      key={place.place_id}
                      text={place.name}
                      lat={place.geometry.location.lat()}
                      lng={place.geometry.location.lng()}
                    />
                  ))}
              </GoogleMap>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LocationFinder;
