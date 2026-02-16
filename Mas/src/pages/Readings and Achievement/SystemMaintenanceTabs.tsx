import { Box, Tab, Tabs } from "@mui/material";

type Props = {
  value: number;
  onChange: (value: number) => void;
};
export default function SystemMaintenanceTabs({ value, onChange }: Props) {
  return (
    <Box sx={{ direction: "rtl", width: "100%" }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        variant="fullWidth"
        
        sx={{
          backgroundColor: "#e5e7eb",
          borderRadius: 0.5,
          minHeight: 1,
          tabSize:"small",

          "& .MuiTabs-indicator": {
            height: "100%",
            backgroundColor: "#1565a9",
            borderRadius: 1,
            zIndex: 0,
          },
        }}
      >
        <Tab
          label="التحصيل"
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
          label="القراءات"
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
      </Tabs>
    </Box>
  );
}
