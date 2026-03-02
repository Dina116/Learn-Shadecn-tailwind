import { Box, Tab, Tabs } from "@mui/material";

type Props = {
  value: number;
  onChange: (value: 0 | 1 | 2 | 3) => void;
};
export default function PanelTabs({ value, onChange }: Props) {
  return (
    <Box sx={{ direction: "rtl", width: "100%" }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        variant="fullWidth"
        sx={{
          bgcolor:  "#e5e7eb",
          borderRadius: "3px",
          minHeight:1,
          "& .MuiTab-root": {
            borderLeft: "2px solid gray",
            fontWeight: "bold",

          },
          "& .MuiTab-root:nth-last-child(1)": { borderLeft: "none" },
          "& .Mui-selected": {
            background:  "#1565a9",
            color: "white",
          },
        }}
      >
        <Tab
          label="العمليات"
          value={0}
          sx={{
            zIndex: 1,
            color: "#6b7280",
            fontWeight: "bold",
            minHeight: 1,
            "&.Mui-selected": {
              color: "white",
            },
          }}
        />
        <Tab
          label="عمليات التجهيز"
          value={1}
          sx={{
            zIndex: 1,
            color: "#6b7280",
            fontWeight: "bold",
            minHeight: 1,
            "&.Mui-selected": {
              color: "white",
            },
          }}
        />
        <Tab
          label="خاص بالوحده المحمولة"
          value={2}
          sx={{
            zIndex: 1,
            color: "#6b7280",
            fontWeight: "bold",
            minHeight: 1,
            "&.Mui-selected": {
              color: "white",
            },
          }}
        />
        <Tab
          label="عمليات خارجية"
          value={3}
          sx={{
            zIndex: 1,
            color: "#6b7280",
            fontWeight: "bold",
            minHeight: 1,
            "&.Mui-selected": {
              color: "white",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
