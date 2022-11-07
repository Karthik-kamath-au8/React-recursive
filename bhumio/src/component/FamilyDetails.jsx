import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const FamilyDetails = (Data) => {
  console.log(Data,'famile')
  return (
    <Grid md={12}>
    <Card sx={{ minHeight:355,border:'1px solid',margin:'10px' }}>
      {/* <span>Name:{Data.name}</span>
      <br/>
      <span>Spouse:{Data.Spouse}</span>
      <br/>
      <span>Location:{Data.location}</span>
      <br/>
      <span>Birth Year:{Data.Birth}</span>
      <br/>
      <span>Present Address:{Data.Address}</span>
      <br/>
      <span>Family Photo:{Data.photo}</span> */}

    </Card>
    </Grid>
  );
}

// const mapStateToProps = () => state => {
//     return {
//         family: state.familyList,
//     };
// };
export default FamilyDetails;
