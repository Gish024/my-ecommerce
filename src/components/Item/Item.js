import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const cards = [1];

const Item = ({ detail }) => { 
    
  return (    
    <Container xs={{ py: 8, heigth: '60%', width: '30%' }} maxWidth="xs">
          {/*   End hero unit */}
          <Grid Container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ heigth: '100%', display: 'flex', flexDirection: 'column', background: 'rgb(249, 251, 248)', margin: '2em'
                   }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56,25%', heigth: '80%', width: '95%', paddingLeft: '15px', paddingTop: '15px'
                    }}
                    img src={detail.images} alt={detail.name}                
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom="h4" component="h2" sx={{ fontFamily: 'fantasy', fontSize: '1.4em', color: 'rgb(110, 105, 105)', textAlign: 'center' }}>
                      {detail.name}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Franklin Gothic Medium', fontSize: '1.5em', color: 'rgb(4, 177, 111)', textAlign: 'center' }}>
                      $ {detail.price}
                    </Typography>                    
                  </CardContent>
                  <CardActions sx={{ alignItems: 'center', marginLeft: '7em' }}>
                    <Link to={`/detail/${detail.id}` } sx={{ textDecoration: 'none'}}>
                      <Button size="small" sx={{ background: 'rgb(93, 184, 245)', fontWeight: 'bold', color: 'rgb(112, 109, 109)', transition: 'background, color 0.5s', outline: '#0026ff', border: 'none', textDecoration: 'none'  }}>Ver detalle</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>           
        
  );
};

export default Item;




