import {
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import type { RearrangementFormValues, SubmitAction } from "../../types";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import FireplaceIcon from "@mui/icons-material/Fireplace";

export default function RearrangementForm() {
  const [action, setAction] = useState<SubmitAction | null>(null);

  const { control, handleSubmit } = useForm<RearrangementFormValues>({
    defaultValues: {
      bookno: "",
      walkno: "",
      mode: "READER",
    },
  });

  const onSubmit = (data: RearrangementFormValues) => {
    console.log("ACTION:", action);
    console.log("DATA:", data);
  };

  return (
    <Paper
      sx={{
        pt: 1,
        px: 2,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: 140,
      }}
      dir="rtl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col flex-1">
            <Typography fontSize={14} mb={0.5} sx={{ fontWeight: "bold" }}>
              السجل
            </Typography>
            <Controller
              name="walkno"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{
                    backgroundColor: "#f3f4f6",
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 10px",
                      fontSize: "14px",
                    },
                    "& .MuiOutlinedInput-root": {
                      height: 30,
                    },
                  }}
                />
              )}
            />
          </div>
          <div className="flex flex-col flex-1">
            <Typography fontSize={14} mb={0.5} sx={{ fontWeight: "bold" }}>
              المسار
            </Typography>
            <Controller
              name="bookno"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  sx={{
                    backgroundColor: "#f3f4f6",
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 10px",
                      fontSize: "14px",
                    },
                    "& .MuiOutlinedInput-root": {
                      height: 30,
                    },
                  }}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col flex-1">
            <Typography fontSize={14} mb={0.5} sx={{ fontWeight: "bold" }}>
              النوع
            </Typography>
            <Box
              sx={{
                height: 30,
                backgroundColor: "#f3f4f6",
                borderRadius: 1,
                pt: 0.5,
              }}
            >
              <Controller
                name="mode"
                control={control}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel
                      value="READER"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            p: 0.5,
                            "& .MuiSvgIcon-root": { fontSize: 16 },
                          }}
                        />
                      }
                      label="القراءات"
                      sx={{
                        m: 0,
                        "& .MuiFormControlLabel-label": {
                          fontSize: 13,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="COLLECTOR"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            p: 0.5,
                            "& .MuiSvgIcon-root": { fontSize: 16 },
                          }}
                        />
                      }
                      label="التحصيل"
                      sx={{
                        m: 0,
                        "& .MuiFormControlLabel-label": {
                          fontSize: 13,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="BOTH"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            p: 0.5,
                            "& .MuiSvgIcon-root": { fontSize: 16 },
                          }}
                        />
                      }
                      label="القراءات والتحصيل"
                      sx={{
                        m: 0,
                        "& .MuiFormControlLabel-label": {
                          fontSize: 13,
                        },
                      }}
                    />
                  </RadioGroup>
                )}
              />
            </Box>
          </div>
          <div className="flex flex-row flex-1 pt-6 justify-between">
            <Button
              size="small"
              type="submit"
              variant="contained"
              endIcon={<CloudDownloadIcon />}
              onClick={() => setAction("download")}
              sx={{
                backgroundColor: "#2317aa",
                minHeight: 28,
                height: 28,
                px: 1.5,
                py: 0,
                fontSize: 13,
                lineHeight: 1,
                gap: 1,
              }}
            >
              تحميل
            </Button>
            <Button
              size="small"
              type="submit"
              endIcon={<SaveAltIcon />}
              variant="contained"
              onClick={() => setAction("save")}
              sx={{
                backgroundColor: "#0e6508",
                minHeight: 28,
                height: 28,
                px: 1.5,
                py: 0,
                fontSize: 13,
                lineHeight: 1,
                gap: 1,
              }}
            >
              حفظ
            </Button>
            <Button
              size="small"
              type="submit"
              variant="contained"
              endIcon={<FireplaceIcon />}
              sx={{
                bgcolor: "#f26a09e7",
                "&:hover": { bgcolor: "#ea580c" },
                minHeight: 28,
                height: 28,
                px: 1.5,
                py: 0,
                fontSize: 13,
                lineHeight: 1,
                gap: 1,
              }}
              onClick={() => setAction("post")}
            >
              ترحيل
            </Button>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="error"
              endIcon={<FireplaceIcon />}
              onClick={() => setAction("postMain")}
              sx={{
                minHeight: 28,
                height: 28,
                px: 1.5,
                py: 0,
                fontSize: 13,
                lineHeight: 1,
                gap: 1,
              }}
            >
              ترحيل الى المركز الرئيسي
            </Button>
          </div>
        </div>
      </form>
    </Paper>
  );
}
