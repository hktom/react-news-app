import { Tooltip, IconButton } from "@mui/material";

export interface IButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const ToolBarButton = (props: IButtonProps) => {
  const { title, children, onClick } = props;
  return (
    <Tooltip title={title}>
      <IconButton sx={{ mx: 0 }} onClick={() => onClick()}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ToolBarButton;
