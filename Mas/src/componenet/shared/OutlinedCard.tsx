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
  subTitle?: string;
};

type OutlinedCardProps = {
  content: string;
  children: React.ReactNode;
  path?: string;
  onClick?: () => void;
  subTitle?: string;
};

const card = ({
  content,
  children,
  onClick,
  subTitle,
}: BasicCardContentProps) => (
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
      {subTitle && (
        <Typography
          component="div"
          color="gray"
          sx={{
            fontSize: "0.80rem",
          }}
        >
          {subTitle}
        </Typography>
      )}

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
  onClick,
  subTitle,
}: OutlinedCardProps) {
  const navigation = useNavigate();
  const handleOnClick = () => {
    if (path) {
      navigation(path);
    } else {
      onClick?.();
    }
  };

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ position: "relative", overflow: "visible" }}
      >
        {card({
          content: content,
          children: children,
          onClick: handleOnClick,
          subTitle: subTitle,
        })}
      </Card>
    </Box>
  );
}
