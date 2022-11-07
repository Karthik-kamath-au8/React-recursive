import { useState } from "react";
import TreeItem from '@mui/lab/TreeItem';
import { connect } from "http2";

const RenderTree = (family) => {
    const [Data, setData] =useState('');
    const handleClick = () =>{
      setData({
        id: family.id,
        name:family.name,
        Spouse: family.Spouse,
        Location:family.Location,
        Birth: family.Birth,
        Address:family.Address,
        photo:family.photo
      })
    }
      return  <TreeItem Data={Data} family={family} key={family.id} nodeId={family.id} onClick={handleClick}   label={family.name}>
              {family.children && family.children.map(RenderTree)} 
           </TreeItem>
    }

    const mapStateToProps = state => {
        return {
            family: state.familyList,
        };
    };
    export default connect(mapStateToProps)(RenderTree)
