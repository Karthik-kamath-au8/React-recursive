import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import FamilyDetails from "./FamilyDetails";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FamilyForm from "./FamilyForm";
import ReactToPrint from "react-to-print";

const FamilyTree = ({ family }) => {
  console.log(family, "family");
  var [Data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const componentRef = useRef();
  const formOpen = () => setOpen(true);
  const RenderTree = (family) => {
    // const [Data, setData] =useState('');
    const handleClick = () => {
      setData({
        id: family.id,
        name: family.name,
        spouse: family.spouse,
        location: family.location,
        birth: family.birth,
        address: family.address,
        photo: family.photo,
      });
    };
    return (
      <>
        <TreeItem
          key={family.id}
          nodeId={family.id}
          onClick={handleClick}
          label={family.name}
        >
          {family.children && family.children.map(RenderTree)}
        </TreeItem>
      </>
    );
  };

  console.log(Data, "Data");
  return (
    <Grid container spacing={-2}>
      <Grid item xs={3} md={3} spacing={-2}>
        <Card sx={{ minHeight: 270, border: "1px solid", margin: "10px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }} component="div">
              Family Tree
            </Typography>
            <Divider />
            <TreeView
              items
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              {RenderTree(family)}
            </TreeView>
          </CardContent>
        </Card>
        <Grid item sm={12} md={12}>
          <Button
            sx={{ width: "94%", marginLeft: "10px" }}
            onClick={formOpen}
            variant="outlined"
          >
            Add Family
          </Button>
          <ReactToPrint
            trigger={() => (
              <Button
                sx={{ width: "94%", marginLeft: "10px", marginTop: "5px" }}
                variant="outlined"
              >
                Print Family Tree
              </Button>
            )}
            content={() => componentRef.current}
          />
        </Grid>
        <Grid item sm={12} md={12}></Grid>
      </Grid>
      <Grid md={9} xs={9}>
        {open === false ? (
          <>
            <FamilyDetails Data={Data} ref={componentRef} />
          </>
        ) : (
          <FamilyForm family={family} setOpen={setOpen} />
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    family: state.familyList,
  };
};
export default connect(mapStateToProps)(FamilyTree);
