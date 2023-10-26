import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Facture = (props) => {
  return (
    <Modal open={props.show} onClose={props.handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Détail de la facture
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Date de payement: {props.data.DateDepayement}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Vols
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Airline</TableCell>
                <TableCell>Date De Depart</TableCell>
                <TableCell>Date De Retour</TableCell>
                <TableCell>Origin</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Nombre De Passager</TableCell>
                <TableCell>Numero De Vol</TableCell>
                <TableCell>Prix (CAD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.Vols.map((vol, index) => (
                <TableRow key={index}>
                  <TableCell>{vol.Airline}</TableCell>
                  <TableCell>{vol.DateDeDepart}</TableCell>
                  <TableCell>{vol.DateDeRetour}</TableCell>
                  <TableCell>{vol.Origin}</TableCell>
                  <TableCell>{vol.Destination}</TableCell>
                  <TableCell>{vol.NombreDePassager}</TableCell>
                  <TableCell>{vol.NumeroDeVol}</TableCell>
                  <TableCell>{vol.Prix}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="subtitle1" gutterBottom>
          Hotels
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nom Hotel</TableCell>
                <TableCell>Nombre Etoiles</TableCell>
                <TableCell>Pays</TableCell>
                <TableCell>Ville</TableCell>
                <TableCell>Nombre De Passager</TableCell>
                <TableCell>Prix (CAD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.Hotels.map((hotel, index) => (
                <TableRow key={index}>
                  <TableCell>{hotel.NomHotel}</TableCell>
                  <TableCell>{hotel.NombreEtoiles}</TableCell>
                  <TableCell>{hotel.Pays}</TableCell>
                  <TableCell>{hotel.Ville}</TableCell>
                  <TableCell>{hotel.NombreDePassager}</TableCell>
                  <TableCell>{hotel.Prix}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
          Total: {props.data.Total} (CAD)
        </Typography>
      </Box>
    </Modal>
  );
};

export default Facture;
