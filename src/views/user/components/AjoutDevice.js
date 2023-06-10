import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const AjoutDevice = ({ open, onClose, selectedUser }) => {
  const [selectedDevice, setSelectedDevice] = React.useState('');

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  const handleFormSubmit = () => {
    // Handle form submission
    onClose();
  };

  return (
    selectedUser && (
      <Dialog open={open} onClose={onClose} sx={{ minWidth: 400 }}>
        <DialogTitle sx={{ marginBottom: theme.spacing(2) }}>Ajout de device {selectedUser.name}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel id="device-label">Device</InputLabel>
            <Select
              labelId="device-label"
              value={selectedDevice}
              onChange={handleDeviceChange}
              label="Device"
            >
              <MenuItem value="Device 1">Device 1</MenuItem>
              <MenuItem value="Device 2">Device 2</MenuItem>
             
              {/* Add more device options as needed */}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Annuler</Button>
          <Button onClick={handleFormSubmit} variant="contained" color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
};

export default AjoutDevice;
