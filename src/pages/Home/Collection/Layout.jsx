import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useHistory } from "react-router-dom";
import V2Images from './LayoutComponents/TwoVerticalImages';
import VImage from './LayoutComponents/VerticalImage';
import H2Images from './LayoutComponents/TwoHorizontalImages';
import HImage from './LayoutComponents/HorizontalImage';

export default function CollectionItem({ collection }) {
  const img1 = `url(${collection.thumbnails[0].img}`;
  const img2 = `url(${collection.thumbnails[1].img}`;
  const img3 = `url(${collection.thumbnails[2].img}`;

  const history = useHistory();
  const maxWidthItem = "320px";

  let mouseDownTime, mouseUpTime;
  const startDraggingTime = () => {
    mouseDownTime = new Date();
  };
  const goToSearch = () => {
    mouseUpTime = new Date();
    if (mouseUpTime - mouseDownTime < 300) {
      let path = `search`;
      history.push(path);
    }
  }

  const CollectionButton = () => {
    return (
      <Button disableRipple onMouseDown={startDraggingTime} onMouseUp={goToSearch}
        style={{ marginTop: "10px", margin: "auto", paddingTop: "10px", textDecoration: 'none', color: 'primary' }} >
        <Typography variant="h6" style={{ marginTop: "10px", margin: "auto" }}>
          {collection.name}
        </Typography>
      </Button>
    );
  }

  if (collection.layoutType === 1) {
    return (
      <Stack
        direction='column'
        style={{ width: "100%", height: "100%", alignContent: "center", margin: "15px" }}>
        <Button disableRipple onMouseDown={startDraggingTime} onMouseUp={goToSearch}>
          <Stack
            direction='row'
            style={{ width: "100%", margin: "auto", maxWidth: maxWidthItem }}
          >
            <VImage src={img1} />
            <Stack direction='column' style={{ width: "50%", marginLeft: "4px" }}>
              <V2Images src1={img2} src2={img3} />
            </Stack>

          </Stack>
        </Button>
        <CollectionButton />
      </Stack>)
  }
  else if (collection.layoutType === 2) {
    return (
      <Stack
        direction='column'
        style={{ width: "100%", alignContent: "center", margin: "15px" }}>
        <Button disableRipple onMouseDown={startDraggingTime} onMouseUp={goToSearch}>
          <Stack
            direction='row'
            style={{ width: "100%", margin: "auto", maxWidth: maxWidthItem }}
          >
            <Stack direction='column' style={{ width: "50%", marginRight: "4px" }}>
              <V2Images src1={img2} src2={img3} />
            </Stack>
            <VImage src={img1} />
          </Stack>
        </Button>
        <CollectionButton />
      </Stack>)
  }
  else if (collection.layoutType === 3) {
    return (
      <Stack
        direction='column'
        style={{ width: "100%", alignContent: "center", margin: "15px" }}>
        <Button disableRipple onMouseDown={startDraggingTime} onMouseUp={goToSearch}>
          <Stack
            direction='column'
            style={{ width: "100%", margin: "auto", maxWidth: maxWidthItem }}
          >
            <Stack direction='row' style={{ width: "100%", marginBottom: "4px" }}>
              <H2Images src1={img2} src2={img3} />
            </Stack>
            <HImage src={img1} />
          </Stack>
        </Button>
        <CollectionButton />
      </Stack>)
  }
  else {
    return (
      <Stack
        direction='column'
        style={{ width: "100%", alignContent: "center", margin: "15px" }}>
        <Button disableRipple onMouseDown={startDraggingTime} onMouseUp={goToSearch}>
          <Stack
            direction='column'
            style={{ width: "100%", margin: "auto", maxWidth: maxWidthItem }}
          >
            <HImage src={img1} />
            <Stack direction='row' style={{ width: "100%", marginTop: "4px" }}>
              <H2Images src1={img2} src2={img3} />
            </Stack>
          </Stack>
        </Button>
        <CollectionButton />
      </Stack>)
  }
}