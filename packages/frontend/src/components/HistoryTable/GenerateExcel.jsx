import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';
import { useService } from '../../context/Services';
import { Button, CircularProgress } from '@mui/material';
import formatDateToUtc from '../../util/formatDateToUtc';

export default function GenerateExcel({ rawData, columns }) {
  const { todaysDate, allServices, dateToFilter } = useService();
  const [loading, setLoading] = useState(false);

  const exportToSpreadsheet = () => {
    setLoading(true);
    const fileType = 'application/octet-stream';
    const fileExtension = '.xlsx';
    const fileName = dateToFilter
      ? `StylishWash-${formatDateToUtc(dateToFilter)}`
      : `StylishWash-${formatDateToUtc(todaysDate)}`;

    const data = allServices.map((item) => ({
      createdAt: item.createdAt,
      model: item.client.model,
      services: item.services.map((item) => item).join(', '),
      seller: item.seller || item.employee,
      price: item.price,
      payment: item.payment
    }));

    // const data = [...treatedData];
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Histórico');
    XLSX.utils.sheet_add_aoa(
      workSheet,
      [['Data', 'Modelo', 'Serviços', 'Vendedor(a)', 'Valor', 'Pagamento']],
      {
        origin: 'A1'
      }
    );
    const max_width = data.reduce(
      (w, r) => Math.max(w, r.createdAt.length),
      10
    );
    workSheet['!cols'] = [{ wch: max_width }];

    XLSX.writeFileXLSX(workBook, fileName + fileExtension, {
      compression: true
    });
    setLoading(false);
  };

  return (
    <Button
      size="small"
      color="primary"
      variant="contained"
      onClick={exportToSpreadsheet}
    >
      {loading ? <CircularProgress /> : <FileDownloadIcon fontSize="small" />}
    </Button>
  );
}
