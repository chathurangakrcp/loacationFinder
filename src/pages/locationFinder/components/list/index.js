import React from "react";
import { Avatar, List } from "antd";
import { useSelector } from "react-redux";

const Index = ({map}) => {
  const selectedPlaces = useSelector((state) => state.location.places);
  const onItemClick = (place) => {
    map.setCenter(place.geometry.location);
  };
  return (
    <List
      dataSource={selectedPlaces}
      renderItem={(item) => (
        <List.Item onClick={() => onItemClick(item)}>
          <List.Item.Meta
            avatar={<Avatar src={item.icon_mask_base_uri} />}
            title={item.name}
          ></List.Item.Meta>
        </List.Item>
      )}
    />
  );
};

export default Index;
