import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { updateFamily } from "../redux/actions/addFamily";
import { connect } from "react-redux";

const FamilyForm = ({ updateFamily, setOpen, family, selectedMember }) => {
  console.log(setOpen, "open");
  const [name, setName] = React.useState("");
  const [spouse, setSpouse] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const add = () => {
    selectedMember.children = [{
      id: Math.floor(Math.random() * 1000),
      name: name,
      spouse: spouse,
      location: location,
      birth: birth,
      address: address,
      photo: photo,
      parentId: 74,
  }]

  updateFamily({...family})
    // addFamily({
    //   id: Math.floor(Math.random() * 1000),
    //   name: name,
    //   spouse: spouse,
    //   location: location,
    //   birth: birth,
    //   address: address,
    //   photo: photo,
    //   parentId: 74,
    // });
    setOpen(false);
  };

  return (
    <Grid md={12}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
        }}
      >
        <Card sx={{ minHeight: 355, border: "1px solid", margin: "10px" }}>
          <TextField
            name="name"
            onChange={(e) => setName(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            label={"Name"}
            id="margin-none"
          />
          <br />
          <TextField
            name="spouse"
            onChange={(e) => setSpouse(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            label={"Spouse"}
            id="margin-dense"
            margin="dense"
          />
          <TextField
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            label={"loaction"}
            id="margin-normal"
            margin="normal"
          />
          <br />
          <br />
          <TextField
            name="birth"
            onChange={(e) => setBirth(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            label={"Birth"}
            id="margin-normal"
            margin="normal"
          />
          <br />
          <TextField
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            label={"Address"}
            id="margin-normal"
            margin="normal"
          />
          <br />
          <TextField
            name="photo"
            type='file'
            onChange={(e) => setPhoto(e.target.value)}
            style={{ width: "50%", margin: "10px" }}
            id="margin-normal"
            margin="normal"
          />
          <Button
            onClick={add}
            sx={{ width: "50%", margin: "10px" }}
            variant="outlined"
          >
            Submit
          </Button>
        </Card>
      </Box>
    </Grid>
  );
};

const mapDispatchToProps = {
  updateFamily,
};
export default connect(null, mapDispatchToProps)(FamilyForm);
