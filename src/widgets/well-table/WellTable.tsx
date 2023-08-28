import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, HeaderGroup,Column, UseSortByColumnProps, Row } from 'react-table';
import { v4 as uuidv4 } from 'uuid'; 
import { DeleteOutlined } from '@ant-design/icons';

interface DataRow {
	id: any;
	depth: any;
	CX: any;
	CY: any;
	CZ: any;
	isSorted?:any;
	// Add other properties as needed
  }


export const WellTable  = () => {
	const data = React.useMemo(
       () => [
			{
				"id": 6720,
				"depth": 2389.37,
				"CX": -0.87949,
				"CY": 0.4793,
				"CZ": 0.02109,
				"BX": -47578.0,
				"BY": 34980.0,
				"BZ": 10547.0,
				"Btotal_corr": 59772.2992857608,
				"DIP_corr": 78.4649594239844,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6721,
				"depth": 2398.94,
				"CX": 0.2877,
				"CY": 0.95801,
				"CZ": 0.02754,
				"BX": 24141.0,
				"BY": 53730.0,
				"BZ": 10840.0,
				"Btotal_corr": 59824.9137773182,
				"DIP_corr": 78.429314203781,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак\r\nRAW",
				"run": 147
			},
			{
				"id": 6733,
				"depth": 2408.52,
				"CX": -0.975,
				"CY": 0.22852,
				"CZ": 0.03809,
				"BX": -54902.0,
				"BY": 21387.0,
				"BZ": 11250.0,
				"Btotal_corr": 59808.7051547282,
				"DIP_corr": 78.5153335740888,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6734,
				"depth": 2418.09,
				"CX": 0.63398,
				"CY": 0.77285,
				"CZ": 0.01816,
				"BX": 42949.0,
				"BY": 40078.0,
				"BZ": 10020.0,
				"Btotal_corr": 59670.8647149055,
				"DIP_corr": 78.4599043673188,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6736,
				"depth": 2427.66,
				"CX": 0.99434,
				"CY": -0.10547,
				"CZ": 0.00293,
				"BX": 57012.0,
				"BY": -13945.0,
				"BZ": 9082.0,
				"Btotal_corr": 59798.8452054892,
				"DIP_corr": 78.5264278330197,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6738,
				"depth": 2437.24,
				"CX": -0.74004,
				"CY": 0.675,
				"CZ": -0.00762,
				"BX": -37969.0,
				"BY": 45762.0,
				"BZ": 8555.0,
				"Btotal_corr": 59852.2658806057,
				"DIP_corr": 78.4486002971503,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6742,
				"depth": 2446.82,
				"CX": -0.53203,
				"CY": -0.84785,
				"CZ": -0.02227,
				"BX": -38320.0,
				"BY": -45000.0,
				"BZ": 7500.0,
				"Btotal_corr": 59801.1883515002,
				"DIP_corr": 78.5080335186296,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6744,
				"depth": 2456.39,
				"CX": -0.29355,
				"CY": -0.95684,
				"CZ": -0.02578,
				"BX": -25254.0,
				"BY": -53320.0,
				"BZ": 7266.0,
				"Btotal_corr": 59748.3242984656,
				"DIP_corr": 78.5100694950484,
				"in_statistics": true,
				"comment": "210 -290 -55 1.003 1.0026 0.9802 Геотрак",
				"run": 147
			},
			{
				"id": 6747,
				"depth": 2465.96,
				"CX": 0.93398,
				"CY": 0.35566,
				"CZ": -0.03633,
				"BX": 57305.0,
				"BY": 13535.0,
				"BZ": 6738.0,
				"Btotal_corr": 59643.885447049,
				"DIP_corr": 78.4731614996691,
				"in_statistics": true,
				"comment": "250 -285 50 1.0038 1.0026 0.9681 Геотрак",
				"run": 147
			},
			{
				"id": 6825,
				"depth": 2475.54,
				"CX": -0.98613,
				"CY": -0.16934,
				"CZ": -0.04395,
				"BX": -59473.0,
				"BY": -1758.0,
				"BZ": 6270.0,
				"Btotal_corr": 59791.6008373741,
				"DIP_corr": 78.5377906849953,
				"in_statistics": true,
				"comment": "255 -280 170 1,0037 1,0027 0,9558",
				"run": 147
			},
			{
				"id": 6829,
				"depth": 2485.11,
				"CX": 0.53555,
				"CY": -0.84316,
				"CZ": -0.0334,
				"BX": 24258.0,
				"BY": -53555.0,
				"BZ": 6855.0,
				"Btotal_corr": 59692.9111846483,
				"DIP_corr": 78.5194514233367,
				"in_statistics": true,
				"comment": "245 -285 -205 1,0036 1,0027 0 Геотрак",
				"run": 147
			},
			{
				"id": 6835,
				"depth": 2494.68,
				"CX": -0.81562,
				"CY": -0.58008,
				"CZ": -0.0293,
				"BX": -52852.0,
				"BY": -27012.0,
				"BZ": 7031.0,
				"Btotal_corr": 59860.3282597812,
				"DIP_corr": 78.5230714376885,
				"in_statistics": true,
				"comment": "245 -285 -205 1,0036 1,0027 0 Геотрак",
				"run": 147
			},
			{
				"id": 6836,
				"depth": 2504.26,
				"CX": 0.45293,
				"CY": 0.89121,
				"CZ": -0.0293,
				"BX": 34102.0,
				"BY": 48516.0,
				"BZ": 7266.0,
				"Btotal_corr": 59800.6247535913,
				"DIP_corr": 78.6598103484343,
				"in_statistics": true,
				"comment": "190 -230 -220 1.0031 1.0025 1 Геотрак",
				"run": 147
			},
			{
				"id": 6837,
				"depth": 2513.84,
				"CX": -0.14062,
				"CY": -0.99023,
				"CZ": -0.02812,
				"BX": -16172.0,
				"BY": -56953.0,
				"BZ": 7148.0,
				"Btotal_corr": 59926.8383757549,
				"DIP_corr": 78.6319238041941,
				"in_statistics": true,
				"comment": "190 -230 -220 1.0031 1.0025 1 Геотрак",
				"run": 147
			},
			{
				"id": 6842,
				"depth": 2523.41,
				"CX": 0.99609,
				"CY": -0.08789,
				"CZ": -0.0252,
				"BX": 57832.0,
				"BY": -13477.0,
				"BZ": 7383.0,
				"Btotal_corr": 60046.4953958118,
				"DIP_corr": 78.3258775247247,
				"in_statistics": true,
				"comment": "115 -200 -245 1.0013 1.0027 1 Геотрак",
				"run": 147
			},
			{
				"id": 6843,
				"depth": 2532.98,
				"CX": -0.80859,
				"CY": 0.59004,
				"CZ": -0.02695,
				"BX": -42188.0,
				"BY": 41074.0,
				"BZ": 7266.0,
				"Btotal_corr": null,
				"DIP_corr": null,
				"in_statistics": true,
				"comment": "115 -200 -245 1.0013 1.0027 1 Геотрак Искл из MSA",
				"run": 147
			},
			{
				"id": 6851,
				"depth": 2542.56,
				"CX": 0.04629,
				"CY": -0.99902,
				"CZ": -0.03047,
				"BX": -5215.0,
				"BY": -58945.0,
				"BZ": 7031.0,
				"Btotal_corr": 59877.0441662912,
				"DIP_corr": 78.5802629740704,
				"in_statistics": true,
				"comment": "80 -170 -240 1.0009 1.0026 1 Геотрак",
				"run": 147
			},
			{
				"id": 6852,
				"depth": 2552.14,
				"CX": 0.86719,
				"CY": 0.49687,
				"CZ": -0.02812,
				"BX": 55137.0,
				"BY": 21973.0,
				"BZ": 7324.0,
				"Btotal_corr": 59853.5544630137,
				"DIP_corr": 78.2446615934366,
				"in_statistics": true,
				"comment": "80 -170 -240 1.0009 1.0026 1 Геотрак",
				"run": 147
			},
			{
				"id": 7038,
				"depth": 2561.72,
				"CX": -0.47109,
				"CY": -0.88242,
				"CZ": -0.02871,
				"BX": -34570.0,
				"BY": -47988.0,
				"BZ": 7148.0,
				"Btotal_corr": 59777.2058958595,
				"DIP_corr": 78.6933762062545,
				"in_statistics": true,
				"comment": "65 -160 -215 1,0011 1,0023 1 Геотрак",
				"run": 147
			},
			{
				"id": 7039,
				"depth": 2571.29,
				"CX": -0.94746,
				"CY": 0.32461,
				"CZ": -0.0252,
				"BX": -52559.0,
				"BY": 26602.0,
				"BZ": 7441.0,
				"Btotal_corr": null,
				"DIP_corr": null,
				"in_statistics": true,
				"comment": "65 -160 -215 1,0011 1,0023 1 Геотрак Искл из MSA",
				"run": 147
			},
			{
				"id": 7073,
				"depth": 2580.86,
				"CX": 0.39258,
				"CY": 0.91992,
				"CZ": -0.02695,
				"BX": 30820.0,
				"BY": 50625.0,
				"BZ": 7383.0,
				"Btotal_corr": 59730.1542888658,
				"DIP_corr": 78.2237143266152,
				"in_statistics": true,
				"comment": "35 -130 -245 1,0006 1,0027 1",
				"run": 147
			},
			{
				"id": 7074,
				"depth": 2590.44,
				"CX": 0.98438,
				"CY": -0.16992,
				"CZ": -0.0375,
				"BX": 56660.0,
				"BY": -18105.0,
				"BZ": 6738.0,
				"Btotal_corr": 59955.3036186924,
				"DIP_corr": 78.3834908957415,
				"in_statistics": true,
				"comment": "35 -130 -245 1,0006 1,0027 1",
				"run": 147
			},
			{
				"id": 7077,
				"depth": 2600.02,
				"CX": -0.64395,
				"CY": 0.76641,
				"CZ": -0.04277,
				"BX": -31348.0,
				"BY": 50039.0,
				"BZ": 6504.0,
				"Btotal_corr": 59673.9825088165,
				"DIP_corr": 78.345361590118,
				"in_statistics": true,
				"comment": "35 -130 -245 1,0006 1,0027 1 Геотрак Искл из MSA",
				"run": 147
			},
		],
		[]
	  )
  const [tableData, setTableData] = useState<DataRow[]>(data);
  const [selectedRows, setSelectedRows] = useState<Row<DataRow>[]>([]);
  const [newRow, setNewRow] = useState<DataRow>({
    id: uuidv4(),
    depth: '',
    CX: '',
    CY: '',
    CZ: '',
  });

  const handleAddRow = () => {
    setTableData([...tableData, newRow]);
    setNewRow({
      id: uuidv4(),
      depth: '',
      CX: '',
      CY: '',
      CZ: '',
    });
  };
  const handleCopy = () => {
    const copiedText = rows
      .map((row) =>
        columns
          .slice(1, 10) // Выбираем только колонки с инпутами
          .map((column:any) => row.values[column.accessor])
          .join('\t')
      )
      .join('\n');

    navigator.clipboard.writeText(copiedText).then(
      () => {
        console.log('Data copied to clipboard');
      },
      (err) => {
        console.error('Unable to copy data to clipboard', err);
      }
    );
  };
  const handleCopyLast = () => {
    const lastRow = rows[rows.length - 1];

    const copiedText = columns
      .slice(1, 10) // Выбираем только колонки с инпутами
      .map((column:any) => lastRow.values[column.accessor])
      .join('\t');

    navigator.clipboard.writeText(copiedText).then(
      () => {
        console.log('Last row data copied to clipboard');
      },
      (err) => {
        console.error('Unable to copy data to clipboard', err);
      }
    );
  };
//raw selection

const handleRowSelect = (row:any) => {
    console.log(row)
    if (selectedRows.includes(row)) {
       
      setSelectedRows(selectedRows.filter((selectedRow:any) => selectedRow !== row));
      console.log(selectedRows);
    } else {
      setSelectedRows([...selectedRows, row]);
      console.log(selectedRows)
    }
  };
  
  const handleCopySelected = () => {
   
    const copiedText = rows
    .filter((row) => selectedRows.includes(row))
    .map((row) =>
      columns
        .slice(1,) // Выбираем только колонки с инпутами
        .map((column:any) => row.values[column.accessor])
        .join('\t')
    )
    .join('\n');
  
    navigator.clipboard.writeText(copiedText).then(
      () => {
        console.log('Selected rows data copied to clipboard');
      },
      (err) => {
        console.error('Unable to copy data to clipboard', err);
      }
    );
  };
  const columns: Column<DataRow>[]  = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Depth',
        accessor: 'depth',
        Cell: ({ row, value } : { row: any; value: any }) => (
            <input
              value={value}
              onChange={(e) => handleCellChange(row, 'depth', e.target.value)}
        
            />
          ),
      },
      {
        Header: 'CX',
        accessor: 'CX',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CX', e.target.value)}
          
          />
        ),
      },
      {
        Header: 'CY',
        accessor: 'CY',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CY', e.target.value)}
          />
        ),
      },
      {
        Header: 'CZ',
        accessor: 'CZ',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CZ', e.target.value)}
          />
        ),
      },
      {
        Header: 'Actions',
        Cell: ({ row}: { row: any; value: any }) => (
            <DeleteOutlined  type="delete" className="ml10" onClick={() => handleDeleteRow(row)}/>
     
        ),
      },
    ],
    []
  );
  
  //изменение
  
  const handleCellChange = (row: any, field: any, value: any)=> {
    setTableData((prevData:any) => {
        const updatedData = prevData.map((item:any) =>
          item.id === row.original.id ? { ...item, [field]: value } : item
        );
        return updatedData;
      });
  };

  const handleDeleteRow = (row:any) => {
    setTableData((prevData : any) => {
        const updatedData = prevData.filter((item:any) => item.id !== row.original.id);
        console.log(updatedData); // Вывод обновленных данных в консоль
        return updatedData;
      });
    // Здесь вы можете добавить логику для отправки данных на сервер
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy
  );

  //вставка данных
  
  const handlePaste = () => {
    navigator.clipboard.readText().then((pastedText) => {
      const rowsToPaste = pastedText.split('\n').map((row) => row.split('\t'));
      
      if (rowsToPaste.length > 0) {
        const newRows = rowsToPaste.map((values) => ({
          id: uuidv4(),
          depth: values[0] || '',
          CX: values[1] || '',
          CY: values[2] || '',
          CZ: values[3] || '',
        }));
        
        setTableData([...tableData, ...newRows]);
      }
    });
  };
  
  return (
    <div>
          <button onClick={handlePaste}>Вставить</button>    
    <button onClick={handleAddRow}>Добавить строку</button>
        <button onClick={handleCopy}>Copy all</button>
        <button onClick={handleCopyLast}>Copy Last </button>
        <button onClick={handleCopySelected}>copy selected</button>
      {/* <button onClick={handlePaste}>Paste</button>  */}
      <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
	  {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column : Column<DataRow> & HeaderGroup<DataRow>) => (
           <th>
                {column.render('Header')}
               </th>
            ))}
  </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
                  <td>
          <input
            type="checkbox"
            checked={selectedRows.includes(row)}
            onChange={() => handleRowSelect(row)}
          />
        </td>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
   
  );
};

