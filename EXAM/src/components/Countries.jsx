import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, List, ListItem } from '@mui/material';

// Display all countries fetched from the API
function Countries() {
  const countries = useSelector(state => state.countries);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Pays
      </Typography>
      <Grid container spacing={3}>
        {countries.map(country => (
          <Grid item key={country.name.common} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={country.flags.png}
                alt={country.name.common}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Continent:</strong> {country.continents}<br />
                  <strong>Capitale:</strong> {country.capital}<br />
                  <strong>Monnaie(s):</strong>
                  <List dense>
                    {Object.entries(country.currencies).map(([code, currency]) => (
                      <ListItem key={code} disablePadding>
                        <Typography variant="body2">
                          {currency.name} ({currency.symbol})
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Countries;
