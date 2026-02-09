import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";

export default function CollectorFilterBar() {
  return (
    <Box className="flex gap-4 items-end " sx={{ direction: "rtl" }}>
      <Box className="flex gap-3 items-end">
        <div className="w-140">
          <Typography fontSize={13} fontWeight="bold">
            الكشاف / المحصل
          </Typography>

          <Select
            size="small"
            fullWidth
            defaultValue=""
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fcfcfc",
                height: 30,
                fontSize: "0.8rem",
              },
              "& .MuiOutlinedInput-input": {
                padding: "3px 5px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "0.75rem",
                top: -2,
              },
              "& .MuiFormHelperText-root": {
                fontSize: "0.7rem",
                marginTop: "2px",
              },
            }}
          >
            <MenuItem value="">dd-9147</MenuItem>
          </Select>
        </div>

        <Button
          variant="contained"
          size="small"
          disabled
          sx={{
            minHeight: 30,
            height: 30,
            gap: 1,
            px: 1.8,
            fontSize: "0.8rem",
            textTransform: "none",
            "& .MuiButton-startIcon svg": {
              fontSize: 18,
            },
          }}
          endIcon={<RedoIcon />}
        >
          تراجع
        </Button>
      </Box>

      <Box className="w-110 ms-5">
        <Typography fontSize={13} fontWeight="bold">
          الكشاف / المحصل
        </Typography>

        <Select
          size="small"
          fullWidth
          defaultValue=""
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fcfcfc",
              height: 30,
              fontSize: "0.8rem",
            },
            "& .MuiOutlinedInput-input": {
              padding: "3px 5px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "0.75rem",
              top: -2,
            },
            "& .MuiFormHelperText-root": {
              fontSize: "0.7rem",
              marginTop: "2px",
            },
          }}
        >
          <MenuItem value="">abcd-9144</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
