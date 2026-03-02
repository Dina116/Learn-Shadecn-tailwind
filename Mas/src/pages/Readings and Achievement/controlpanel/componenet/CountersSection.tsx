import React from "react";
import { Box, Typography, Button } from "@mui/material";

type Counters = {
  success: number;
  failed: number;
  pending: number;
  completed?: number;
};

type Props = {
  counters: Counters;
  showCounters?: boolean;
  showCompletedCounter?: boolean;
  completedCounterTitle?: string;
  onExecute?: () => void;
  isExecuting?: boolean;
};

const CounterCard = ({
  value,
  title,
  color,
}: {
  value: number;
  title: string;
  color: string;
}) => (
  <Box sx={{ textAlign: "center" }}>
    <Box
      sx={{
        border: 1,
        borderColor: "black",
        width: 60,
        height: 50,
        pt: 1,
        bgcolor: color,
        color: "white",
        textAlign: "center",
        borderRadius: 1,
        mx: "auto",
      }}
    >
      <Typography variant="h6">{value}</Typography>
    </Box>
    <Typography variant="body2" color="gray">
      {title}
    </Typography>
  </Box>
);

const CountersSection: React.FC<Props> = React.memo(
  ({
    counters,
    showCounters,
    showCompletedCounter,
    completedCounterTitle = "التامة",
    onExecute,
    isExecuting,
  }) => {
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        {showCompletedCounter ? (
          <CounterCard
            value={counters?.completed || 0}
            title={completedCounterTitle}
            color="info.main"
          />
        ) : (
          <Box />
        )}

        {showCounters && (
          <Box display="flex" gap={3}>
            <CounterCard
              value={counters?.success || 0}
              title="الناجحة"
              color="success.light"
            />
            <CounterCard
              value={counters?.failed || 0}
              title="الأخطاء"
              color="error.main"
            />
            <CounterCard
              value={counters?.pending || 0}
              title="قيد المعالجة"
              color="#ffc107"
            />
          </Box>
        )}

        {onExecute ? (
          <Button
            variant="contained"
            onClick={onExecute}
            disabled={isExecuting}
            sx={{
              height: 40,
              border: 1,
              borderColor: "black",
              backgroundColor: "orangered",
            }}
            size="small"
          >
            {isExecuting ? "جاري التنفيذ..." : "تنفيذ"}
          </Button>
        ) : (
          <Box />
        )}
      </Box>
    );
  }
);

export default CountersSection;