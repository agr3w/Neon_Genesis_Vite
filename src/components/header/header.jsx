import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import "./herder.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <AppBar position="fixed" className="nav">
      <Toolbar>
        <img src={logo} alt="NEON GENESIS" className="nav-logo-img" />

        <Typography variant="h6" className="nav-titulo">
          Neon Genesis
        </Typography>

        <div className="nav-itens">
          <Button className="nav-itens-btn">Suporte</Button>
          <Button className="nav-itens-btn">compra</Button>
          <Button className="nav-itens-btn">teste</Button>
          <span className="nav-itens-iconCart">
            
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
