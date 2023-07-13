// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/navbar.css";
import NavRoutes from "../routes/NavRoutes.jsx";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Grid, List, ListItem, ListItemText } from "@mui/material";
import iconoPNG from "../img/Drawer/icon_drawer.png";

function Navbar() {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const drawerStyle = {
        width: "800px",
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <div className="mr-2">
                    <div className="border-b-2 border-gray-400">
                        <div
                            className="shadow hover:bg-gray-200 flex justify-center items-center p-2 cursor-pointer"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </div>
                    </div>
                    <Drawer
                        anchor="left"
                        open={openDrawer}
                        onClose={toggleDrawer}
                        style={drawerStyle}
                    >
                        <div className="drawer-header flex justify-center items-center">
                            <img
                                src={iconoPNG}
                                alt="Icono"
                                className="drawer-icon w-8 h-8" // Ajusta el tamaño del icono aquí
                            />
                        </div>
                        <List>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <ListItem button component={Link} to="/">
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button component={Link} to="/Games">
                                        <ListItemText primary="Games" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button component={Link} to="/Development">
                                        <ListItemText primary="Development" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button component={Link} to="/Equipment">
                                        <ListItemText primary="Equipment" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button component={Link} to="/Contact">
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button component={Link} to="/Blog">
                                        <ListItemText primary="Blog" />
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    </Drawer>
                </div>
                <a href="#" className="text-xl font-bold ml-2">
                    NERVO ESTUDIOS
                </a>
            </div>
            <ul className="flex space-x-4">
                <NavRoutes />
            </ul>
        </nav>
    );
}

export default Navbar;
