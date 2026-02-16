import { Box } from "@mui/material";

export const SectionRow = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      background: "#e9ecef",
      px: 2,
      py: 1,
      mt: 2,
      borderRadius: 1,
      display: "flex",
      alignItems: "center",
      direction: "rtl",
    }}
  >
    {children}
  </Box>
);

export const TwoColumns = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 2,
      mt: 2,
    }}
  >
    {children}
  </Box>
);
