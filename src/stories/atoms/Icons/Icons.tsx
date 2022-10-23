import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import { Button, Tooltip } from "@mui/material";

const components = [
  {
    nameComponent: AbcRoundedIcon,
    link: 'import {AbcRoundedIcon} from "@mui/icons-material";',
  },
];

const copyToClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copy Success");
  } catch {
    alert("Copy Failed");
  }
};

export const Icons = () => (
  <div className="d-grid">
    {components &&
      components.map((component) => (
        <Tooltip title={component.link}>
          <Button variant="outlined" onClick={()=>copyToClipBoard(component.link)}>
            <component.nameComponent />
          </Button>
        </Tooltip>
      ))}
  </div>
);