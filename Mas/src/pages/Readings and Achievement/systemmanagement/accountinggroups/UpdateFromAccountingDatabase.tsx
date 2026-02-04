import { Alert, Box, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useUpdateGroup } from "./api/useUpdateGroup";

export default function UpdateFromAccountingDatabase() {
  const [openAlert, setOpenAlert] = useState(false);

  const { mutate, isPending, isError } = useUpdateGroup();

  const handleUpdateClick = () => {
    mutate(undefined, {
      onSuccess: () => {
        setOpenAlert(true);
      },
    });
  };
  const handleCloseAlert = (reason?: string) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };

  return (
    <>
      <Box sx={{ paddingTop: 1, mb: 1 }}>
        <Button variant="contained" onClick={handleUpdateClick}>
          {isPending ? "جاري التحديث..." : "تحديث من قاعدة بيانات الفواتير"}
        </Button>
      </Box>

      <Snackbar
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          icon={false}
          sx={{
            width: "100%",
            direction: "rtl",
            backgroundColor: "#1fb155",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span>تم تحديث قاعدة بيانات الفواتير</span>
            <CheckCircleOutlineIcon sx={{ fontSize: "22px" }} />
          </Box>
        </Alert>
      </Snackbar>
      {isError && (
        <Snackbar open autoHideDuration={4000}>
          <Alert severity="error" variant="filled">
            حدث خطأ أثناء التحديث
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
