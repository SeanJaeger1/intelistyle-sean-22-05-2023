import React from "react"
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material"

const GarmentList = ({ garments }) => {
  return (
    <List>
      {garments.map((garment) => (
        <ListItem key={garment._id}>
          <ListItemAvatar>
            <Avatar
              alt={garment.product_title}
              src={garment.images[0].s3_url_resized}
            />
          </ListItemAvatar>
          <ListItemText
            primary={garment.product_title}
            secondary={`Price: ${garment.price} ${garment.currency_code}`}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default GarmentList
