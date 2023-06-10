import React from 'react';
import {
    Typography, Box,
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
    Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardCard from '../../../components/shared/DashboardCard';

const devices = [
    {
        id: "1",
        name: "Sunil Joshi",
        post: "Web Designer",
        pname: "Elite Admin",
        priority: "Low",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "2",
        name: "Andrew McDownland",
        post: "Project Manager",
        pname: "Real Homes WP Theme",
        priority: "Medium",
        pbg: "secondary.main",
        budget: "24.5",
    },
    {
        id: "3",
        name: "Christopher Jamil",
        post: "Project Manager",
        pname: "MedicalPro WP Theme",
        priority: "High",
        pbg: "error.main",
        budget: "12.8",
    },
    {
        id: "4",
        name: "Nirav Joshi",
        post: "Frontend Engineer",
        pname: "Hosting Press HTML",
        priority: "Critical",
        pbg: "success.main",
        budget: "2.4",
    },
];


const DeviceList = ({ showTitle, title }) => {
    const defaultTitle = "Devices";

    // actions menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // search bar
    const [searchQuery, setSearchQuery] = React.useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleAddDevice = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleFormSubmit = () => {
        // Handle form submission
        // You can implement the logic to process the form data here
        setOpenDialog(false);
    };

    const filteredDevices = devices.filter((device) => {
        const { name, pname } = device;
        const query = searchQuery.toLowerCase();
        return name.toLowerCase().includes(query) || pname.toLowerCase().includes(query);
    });

    return (

        <DashboardCard>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Typography variant="h6">{showTitle ? (title || defaultTitle) : ''}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddDevice}>
                        Ajouter device
                    </Button>
                </Box>
            </Box>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
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
                                    Priority
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Budget
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {devices.map((device) => (
                            <TableRow key={device.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {device.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {device.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {device.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {device.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: device.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={device.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                <IconButton
                                        aria-controls={`menu-${device.id}`}
                                        aria-haspopup="true"
                                        onClick={handleMenuClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id={`menu-${device.id}`}
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem onClick={handleMenuClose}>Modifier device</MenuItem>
                                        <MenuItem onClick={handleMenuClose}>Supprimer device</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Ajouter une nouvelle device</DialogTitle>
                <DialogContent>
                    {/* Render your user form fields here */}
                    <TextField label="Nom" variant="outlined" fullWidth sx={{ mb: 2 }} />
                    <TextField label="Modele" variant="outlined" fullWidth sx={{ mb: 2 }} />
                    <TextField label="Type" variant="outlined" fullWidth sx={{ mb: 2 }} />
                    {/* Add more fields as needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Annuler</Button>
                    <Button onClick={handleFormSubmit} variant="contained" color="primary">
                        Ajouter
                    </Button>
                </DialogActions>
            </Dialog>
        </DashboardCard>
    );
};

export default DeviceList;
