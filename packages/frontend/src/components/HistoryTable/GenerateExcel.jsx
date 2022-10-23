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
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = dateToFilter
      ? `StylishWash-${formatDateToUtc(dateToFilter)}`
      : `StylishWash-${formatDateToUtc(todaysDate)}`;

    const treatedData = allServices.map((item) => {
      return [
        item.createdAt,
        item.client.model,
        item.services.map((item) => item).join(', '),
        item.seller || item.employee,
        item.price,
        item.payment
      ];
    });

    const data = [
      ['Data', 'Modelo', 'Serviços', 'Vendedor(a)', 'Valor', 'Pagamento'],
      ...treatedData
    ];

    const workSheet = XLSX.utils.aoa_to_sheet(data);
    const workBook = {
      Sheets: { data: workSheet, cols: [] },
      SheetNames: ['Histórico']
    };
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array'
    });
    const fileData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(fileData, fileName + fileExtension);
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
