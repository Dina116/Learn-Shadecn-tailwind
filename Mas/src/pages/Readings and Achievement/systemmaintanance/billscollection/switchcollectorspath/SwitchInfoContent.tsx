import { Box, Grid, Typography } from "@mui/material";

type Props = {
  labelFrom: string;
  labelTo: string;
  bookNo: number | string;
  billGroup: number | string;
  walkNo: number | string;
  title: string;
};

export default function SwitchInfoContent({
  labelFrom,
  labelTo,
  bookNo,
  billGroup,
  walkNo,
  title,
}: Props) {
  return (
    <Box sx={{ direction: "rtl" }}>
      {/* ===== Title ===== */}
      <Typography
        sx={{
          textAlign: "start",
          fontWeight: 600,
          fontSize: "15px",
          mb: 3,
        }}
      >
        {title}
      </Typography>

      {/* ===== From / To ===== */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#ee9696",
              p: 1.5,
              borderRadius: 2,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {labelFrom}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#b4eadf",
              p: 1.5,
              borderRadius: 2,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {labelTo}
          </Box>
        </Grid>
      </Grid>

      {/* ===== Details ===== */}
      <Grid container spacing={2} textAlign="center">
        <Grid item xs={4}>
          <Typography fontWeight="bold">رقم السجل :</Typography>
          <Typography>{bookNo}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography fontWeight="bold">رقم المجموعة :</Typography>
          <Typography>{billGroup}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography fontWeight="bold">رقم المسار :</Typography>
          <Typography>{walkNo}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
