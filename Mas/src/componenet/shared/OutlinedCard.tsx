import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

type BasicCardContentProps = {
  content: string;
  children: React.ReactNode;
  onClick: () => void;
};

type OutlinedCardProps = {
  content: string;
  children: React.ReactNode;
  path: string;
};

const card = ({ content, children, onClick }: BasicCardContentProps) => (
  <React.Fragment>
    {children}
    <CardContent className="flex flex-col items-center justify-center">
      <Typography
        component="div"
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        {content}
      </Typography>
      <Divider className="flex flex-row w-full" />
    </CardContent>
    <CardActions className="flex flex-row justify-center items-center">
      <Button size="small" variant="contained" onClick={onClick}>
        عرض
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard({
  children,
  content,
  path,
}: OutlinedCardProps) {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation(path);
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ position: "relative", overflow: "visible" }}
      >
        {card({
          content: content,
          children: children,
          onClick: handleNavigation,
        })}
      </Card>
    </Box>
  );
}
