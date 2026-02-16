import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import type { CardContentProps } from "../types";

const card = ({ content, children, onClick }: CardContentProps) => (
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

export default function CardWithButton({
  children,
  content,
  data,
  title,
  id,
  onClick,
}: CardContentProps) {
  // console.log("data from  ", data);
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
