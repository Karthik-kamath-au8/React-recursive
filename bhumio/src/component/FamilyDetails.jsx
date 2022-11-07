import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FamilyDetails = React.forwardRef(({Data},ref) => {
  console.log(Data,'data')
  return (
    <Grid md={12} ref={ref}>
    <Card sx={{ minHeight:390,border:'1px solid',margin:'10px' }}>
    <Typography sx={{ fontSize: 14,fontWeight:600, textAlign:'center' }} component="div">
            Family Tree
      </Typography>
      <span style={{margin:'10px'}}><strong>Name:</strong> {Data.name}</span>
      <br/>
      <br/>
      <span style={{margin:'10px'}}><strong>Spouse:</strong> {Data.spouse}</span>
      <br/>
      <br/>
      <span style={{margin:'10px'}}><strong>Location:</strong> {Data.location}</span>
      <br/>
      <br/>
      <span style={{margin:'10px'}}><strong>Birth Year:</strong> {Data.birth}</span>
      <br/>
      <br/>
      <span style={{margin:'10px'}}><strong>Present Address:</strong> {Data.address}</span>
      <br/>
      <br/>

      <span style={{margin:'10px'}}><strong>Family Photo:</strong><img style={{width:'70px',position:'fixed', margin:"10px"}} src={Data.photo} alt=""/></span>

    </Card>
    </Grid>
  );
}
)

export default FamilyDetails;
