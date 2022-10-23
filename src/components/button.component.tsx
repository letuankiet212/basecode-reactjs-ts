import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  label:string
}

export const Button = ({label,...rest}:ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
)

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};