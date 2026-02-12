import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import type { billGroupsTypes } from "../../pages/Readings and Achievement/systemmaintanance/types";
import ShowDialog from "../../pages/Readings and Achievement/systemmaintanance/billscollection/ShowDialog";

type BasicCardContentProps = {
  content: string;
  children: React.ReactNode;
  data: billGroupsTypes[];
  title: string;
  id: string;
  onClick: () => void;
};
type OutlinedCardProps = {
  content: string;
  children: React.ReactNode;
  data: billGroupsTypes[];
  title: string;
  id: string;
  onClick: () => void;
};

const card = ({
  content,
  children,
  data,
  title,
  id,

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
      <Divider className="flex flex-row w-full" />
    </CardContent>
    <CardActions className="flex flex-row justify-center items-center">
      <ShowDialog data={data} title={title} id={id} />
      {/* <Button onClick={onClick}>Test</Button> */}
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCardWithDialog({
  children,
  content,
  data,
  title,
  id,
  onClick,
}: OutlinedCardProps) {
  console.log("data from OutlinedCardWithDialog ", data);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ position: "relative", overflow: "visible" }}
      >
        {card({
          content: content,
          children: children,
          data: data,
          title: title,
          id: id,
          onClick: onClick,
        })}
      </Card>
    </Box>
  );
}
