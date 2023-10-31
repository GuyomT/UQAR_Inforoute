import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, associateCountryToUser } from '../actions';
import { Container, Typography, Grid, TextField, Button, Card, CardContent, MenuItem } from '@mui/material';
import { v4 as uuid } from 'uuid';

// Handle users such as adding, deleting and associating to a country
function Users() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedCountryId, setSelectedCountryId] = useState('');

  const users = useSelector(state => state.users);
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  // Add a user to the store
  const handleAddUser = () => {
    const id = uuid();
    const countries = [];
    dispatch(addUser({ id, name, firstName, birthDate, countries }));
    setName('');
    setFirstName('');
    setBirthDate('');
  };

  // Delete a user from the store
  const handleDeleteUser = userId => {
    dispatch(deleteUser(userId));
  };

  // Associate a user to a country in the store
  const handleAssociateCountry = () => {
    const currentUser = users.find(user => user.id === selectedUserId);
    if (selectedUserId === '' || selectedCountryId === '') {
      console.log('Merci de sélectionner un utilisateur et un pays');
      return;
    }
    if (currentUser.countries.includes(selectedCountryId)) {
      console.log('Ce pays est déjà associé à cet utilisateur');
      return;
    }
    dispatch(associateCountryToUser(selectedUserId, selectedCountryId));
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Utilisateurs
      </Typography>

      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Ajouter utilisateur
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Date de naissance"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleAddUser}>
                Ajouter
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Liste des utilisateurs
          </Typography>
          {users.map(user => (
            <div key={user.id} style={{ marginBottom: '10px' }}>
              {user.name} {user.firstName} - {user.birthDate}
              <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }} onClick={() => handleDeleteUser(user.id)}>
                Supprimer
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Associer un pays à un utilisateur
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                fullWidth
                label="Utilisateur"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
              >
                {users.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name} {user.firstName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                fullWidth
                label="Pays"
                value={selectedCountryId}
                onChange={(e) => setSelectedCountryId(e.target.value)}
              >
                {countries.map(country => (
                  <MenuItem key={country.name.common} value={country.name.common}>
                    {country.name.common}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary" onClick={handleAssociateCountry}>
                Associer
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Users;
