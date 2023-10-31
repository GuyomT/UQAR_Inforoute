import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Select,
  CardMedia,
  Box,
  Paper,
  Button,
} from '@mui/material';

function Summary() {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const users = useSelector(state => state.users);
  const countries = useSelector(state => state.countries);

  const selectedUser = users.find(user => user.id === selectedUserId);
  const associatedCountries = selectedUser
    ? selectedUser.countries.map(countryName =>
        countries.find(country => country.name.common === countryName)
      )
    : [];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Galerie
      </Typography>

      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Sélectionner un utilisateur
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                value={selectedUserId}
                onChange={e => setSelectedUserId(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Sélectionner un utilisateur
                </MenuItem>
                {users.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name} {user.firstName}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {selectedUserId && (
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Pays associés à {selectedUser.name} {selectedUser.firstName}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowInfo(!showInfo)}
            style={{ marginBottom: '20px' }}
          >
            {showInfo ? 'Cacher' : 'Afficher'}
          </Button>
          {showInfo && (
            <Grid container spacing={2}>
              {associatedCountries.map(country => (
                <Grid item key={country.name.common} xs={12} sm={6} md={4} lg={3}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={country.flags.png}
                      alt={country.name.common}
                      sx={{ borderRadius: '4px', marginBottom: '10px' }}
                    />
                    <Typography variant="h6" component="div" gutterBottom>
                      {country.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Continent:</strong> {country.continents}
                      <br />
                      <strong>Capitale:</strong> {country.capital}
                      <br />
                      <strong>Monnaie(s):</strong>{' '}
                      {Object.values(country.currencies).map((currency, i, arr) => (
                        <span key={currency.name}>
                          {currency.name} ({currency.symbol})
                          {i < arr.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
}

export default Summary;
