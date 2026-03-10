import { IconButton, Tooltip } from '@mui/material';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

type Props = {
  onExportPdf: () => void;
  pdfOriantion: 'p' | 'portrait' | 'l' | 'landscape' | undefined;
  onClickPdfOriantion: () => void;
};

export default function CustomToolbar({
  onExportPdf,
  pdfOriantion,
  onClickPdfOriantion,
}: Props) {
  return (
    <div className="flex items-center">
      <Tooltip title="طباعة pdf">
        <IconButton
          id="exportButton"
          onClick={() => onExportPdf()}
          className="mx-2"
        >
          <LocalPrintshopRoundedIcon />
        </IconButton>
      </Tooltip>
      {/* <Button
        id="exportButton"
        onClick={() => onExportPdf()}
        variant="contained"
        className="mx-2"
        endIcon={<LocalPrintshopRoundedIcon />}
      >
        <Typography variant="subtitle1" className="ml-2">
          طباعة
        </Typography>
      </Button> */}
      <Tooltip title="طباعة طولي / عرضي">
        <IconButton onClick={() => onClickPdfOriantion()}>
          {pdfOriantion === 'l' ? (
            <MoreHorizRoundedIcon />
          ) : (
            <MoreVertRoundedIcon />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
}
