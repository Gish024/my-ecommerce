import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemListContainer/ItemCount";


const ItemDetail = ({ data }) => {
  const onAdd = (counter) => {
    alert(`Se agregaron ${counter} productos al carrito`);
  };
  return (
    <Card className="Card-container" sx={{ maxWidth: 250 }}>
      <div className="Card-header">
        <p>Ver detalle del producto</p>
      </div>
      <CardActionArea>
        <CardMedia component="img" image={data.pictureUrl} alt={data.name} />
        <CardContent className="Card-content">
          <Typography variant="h6" component="div" color="#fff">
            {data.name}
          </Typography>
          <Typography variant="h7" color="#fff">
            $ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={20} initial={0} onAdd={onAdd} />
      <div className="Stock-Products">
        <p>Stock Disponible: {data.stock} u.</p>
      </div>
    </Card>
  );
};

export default ItemDetail; 