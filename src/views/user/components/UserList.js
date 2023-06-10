import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  MenuItem,
  Menu,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardCard from '../../../components/shared/DashboardCard';
import AjoutDevice from './AjoutDevice';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const users = [
  {
    id: 1,
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    deviceNum: "2",
    budget: "3.9",
  },
  {
    id: 2,
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    deviceNum: "2",
    budget: "24.5",
},
{
    id: 3,
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    deviceNum: "2",
    budget: "12.8",
},
{
    id: 4,
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    deviceNum: "2",
    budget: "2.4",
}
  // ...rest of the user data
];

const UserList = ({ showTitle, title }) => {
  const defaultTitle = "Product Performance";

  // actions menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (user) => {
    setAnchorEl(null);
    handleAddDevice(user);
    setSelectedUser(user);
  };

  // search bar
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddUser = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleFormSubmit = () => {
    setOpenDialog(false);
  };

  const filteredUsers = users.filter((user) => {
    const { name, pname } = user;
    const query = searchQuery.toLowerCase();
    return name.toLowerCase().includes(query) || pname.toLowerCase().includes(query);
  });

  const navigate = useNavigate();

  const handleUserClick = (user, field) => {
    if (field === 'id' || field === 'name') {
      navigate(`/user-info/${user.id}`, { state: { user } });
    }
  };

  //  Ajout device
  const [openDevicePopup, setOpenDevicePopup] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleAddDevice = (user) => {
    setSelectedUser(user);
    setOpenDevicePopup(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <DashboardCard>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6">{showTitle ? (title || defaultTitle) : ''}</Typography>
            <TextField
              label="Recherche utilisateur"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ ml: 2, width: '600px' }}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Ajouter User
          </Button>
        </Box>
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Assigned
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Num. of Devices
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Priority
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                      onClick={() => handleUserClick(user, 'id')}
                    >
                      {user.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleUserClick(user, 'name')}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {user.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {user.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                      {user.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                      {user.deviceNum}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: user.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={user.priority}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-controls={`menu-${user.id}`}
                      aria-haspopup="true"
                      onClick={handleMenuClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id={`menu-${user.id}`}
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleMenuClose(user)}>Ajouter une device</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Modifier user</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Supprimer user</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Ajouter un nouvel utilisateur</DialogTitle>
          <DialogContent>
            <TextField label="Nom" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Annuler</Button>
            <Button onClick={handleFormSubmit} variant="contained" color="primary">
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openDevicePopup} onClose={() => setOpenDevicePopup(false)}>
          <AjoutDevice
            open={openDevicePopup}
            onClose={() => setOpenDevicePopup(false)}
            selectedUser={selectedUser}
            openDevicePopup={openDevicePopup}
          />
        </Dialog>
      </DashboardCard>
    </ThemeProvider>
  );
};

export default UserList;
