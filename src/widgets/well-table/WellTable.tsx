import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, HeaderGroup,Column, UseSortByColumnProps, Row, useRowSelect } from 'react-table';
import { v4 as uuidv4 } from 'uuid'; 
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./well-table.module.scss";
import { RowData } from '@tanstack/react-table';

interface DataRow {
	id: any;
	depth: any;
	CX_raw: any;
	CY_raw: any;
	CZ_raw: any;
	BX_raw:any;
	BY_raw:any;
	BZ_raw:any;
	CX: any;
	CY: any;
	CZ: any;
	BX:any;
	BY:any;
	BZ:any;
	Gtotal?:any;
	Btotal_raw?:any;
	Btotal_corr:any;
	DIP_raw?:any;
	DIP_corr:any;
	Zenit?:any;
	Azimut?:any;
	Azimut_Grid?:any;
	comment:any;
	instatistics?:any;
	isSorted?:any;
	// Add other properties as needed
  }


export const WellTable  = ({selectRun, selectWell,coefficients}: { selectRun: any; selectWell: any; coefficients: any })  => {
	const {dec,grid_convergence} = useSelector((store) =>store.wells.currentWell)
	console.log(selectRun)
	console.log(selectWell)
	console.log(coefficients)
	console.log(typeof(coefficients.CX))
	let CXcoeff = coefficients.CX
	let CYcoeff = coefficients.CY
	
	const preData = React.useMemo(
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
	
		
	function calculateCX_raw( CX:any, CXcoeff:any) {
	
		let res = CX-CXcoeff
     
		return CX-CXcoeff
	  }
	  		
	function calculateCY_raw ( CY:any, CYcoeff:any) {
		console.log(CYcoeff)
       if(CYcoeff){
		const match = CYcoeff.match(/\/([\d.]+)/);
	  
       let result
       if (match) {
           // Получаем найденное число как строку
           const numberAsString = match[1];
        
           // Преобразуем строку в число с плавающей точкой
           const number = parseInt(numberAsString);
         console.log(number)
           if (!isNaN(number)) {
             // Выполняем деление
            
			 return CY * number;
              // Выводит результат деления
           } else {
             console.log("Неверное число в строке.");
           }
         } else {
           console.log("Число не найдено в строке.");
         }
       
       }
	   else {
		let result =""
		return result
	   }
	}
	function calculateDIP(CX:any, CY:any, CZ:any,BX:any, BY:any, BZ:any) {
		function degrees(radians:any) {
			return radians * (180 / Math.PI);
		}
	
		const dotProduct = CX * BX + CY * BY + CZ * BZ;
		const magnitudeC = Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2);
		const magnitudeB = Math.sqrt(BX ** 2 + BY ** 2 + BZ ** 2);
	
		const angleInRadians = Math.asin(dotProduct / (magnitudeC * magnitudeB));
		const angleInDegrees = degrees(angleInRadians);
	
		return Math.abs(Math.round(angleInDegrees * 100) / 100);
	}
	
	function calculateZenit(CX:any, CY:any, CZ:any) {
		function degrees(radians:any) {
		  return radians * (180 / Math.PI);
		}
	  
		return Math.round(
		  degrees(Math.acos(CZ / Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2))) * 100
		) / 100;
	  }
	function calculateGtotal(CX:any, CY:any, CZ:any) {
		return (Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2)).toFixed(5);
	  }
	function calculateBtotal(BX:any, BY:any, BZ:any) {
		return (Math.sqrt(BX ** 2 + BY ** 2 + BZ ** 2)).toFixed(1);
	  }
	function calculateAzimuth(CX:any, CY:any, CZ:any,BX:any, BY:any, BZ:any) {

		function degrees(radians:any) {
		return radians * (180 / Math.PI);
		  }
		// const HSTF = Math.atan(CY/(-CX))
		// const INCL = Math.acos(CZ/ Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2))

	
		const term1 = (CX * BY - CY * BX) * (Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2));
	    const term2 = (BZ * (CX ** 2 + CY ** 2)) - (CZ * (CX * BX + CY * BY));
	    const azimuthInRadians = Math.atan(term1/term2);
     
		let azimInDegrees = degrees(azimuthInRadians);
	
		if ( azimInDegrees <= 0) {
			azimInDegrees += 360;
			
		}
		let azim = Math.round(azimInDegrees * 100) / 100;
		return azim;
		
	}
	function calculateAzimuth_Grid(CX:any, CY:any, CZ:any,BX:any, BY:any, BZ:any, dec:any,grid_convergence:any) {

		function degrees(radians:any) {
			return radians * (180 / Math.PI);
		  }
		// const HSTF = Math.atan(CY/(-CX))
		// const INCL = Math.acos(CZ/ Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2))

	
		const term1 = (CX * BY - CY * BX) * (Math.sqrt(CX ** 2 + CY ** 2 + CZ ** 2));
	    const term2 = (BZ * (CX ** 2 + CY ** 2)) - (CZ * (CX * BX + CY * BY));
	    const azimuthInRadians = Math.atan(term1/term2);
     
		let azimInDegrees = degrees(azimuthInRadians)+dec-grid_convergence;
	
		if ( azimInDegrees <= 0) {
			azimInDegrees += 360;
			
		}
		let azim = Math.round(azimInDegrees * 100) / 100;
		return azim;
		
	}

  const [tableData, setTableData] = useState<DataRow[]>([]);
  const [selectedRows, setSelectedRows] = useState<Row<DataRow>[]>([]);
  interface RowDataItem {
	id: any;
	depth: any;
	CX_raw?: any,
	CY_raw?: any,
	CZ_raw?: any,
	BX_raw?: any,
	BY_raw?: any,
	BZ_raw?:any,
	CX: any;
	CY: any;
	CZ: any;
	BX:any;
	BY:any;
	BZ:any;
	Gtotal?:any;
	Btotal_raw?:any;
	Btotal_corr:any;
	DIP_raw?:any;
	DIP_corr:any;
	Zenit?:any;
	Azimut?:any;
	Azimut_Grid?:any;
	comment:any;
	instatistics?:any;
	isSorted?:any;
	// Add other properties as needed
  }
  useEffect(() => {
	const data = preData.map((item: RowDataItem) => ({
	  ...item,
	  CX_raw: calculateCX_raw(item.CX, CXcoeff),
	  CY_raw: calculateCY_raw(item.CY, CYcoeff),
	  CZ_raw: item.CZ_raw !== undefined ? item.CZ_raw : '',
	  BX_raw: item.BX_raw !== undefined ? item.BX_raw : '',
	  BY_raw: item.BY_raw !== undefined ? item.BY_raw : '',
	  BZ_raw: item.BZ_raw !== undefined ? item.BZ_raw : '',
	  Gtotal: calculateGtotal(item.CX, item.CY, item.CZ),
	  Btotal_raw: calculateBtotal(item.BX, item.BY, item.BZ),
	  Btotal_corr: item.Btotal_corr !== undefined ? item.Btotal_corr : '',
	  DIP_raw: calculateDIP(item.CX, item.CY, item.CZ,item.BX, item.BY, item.BZ),
	  DIP_corr: item.DIP_corr !== undefined ? item.DIP_corr : '',
	  Zenit: calculateZenit(item.CX, item.CY, item.CZ),
	  Azimut: calculateAzimuth(item.CX, item.CY, item.CZ,item.BX, item.BY, item.BZ),
	  Azimut_Grid: calculateAzimuth_Grid(item.CX, item.CY, item.CZ,item.BX, item.BY, item.BZ,dec,grid_convergence),
	 }));
	setTableData(data);
  }, [preData,coefficients]);
  const [newRow, setNewRow] = useState<DataRow>({
	id:'',
    depth: '',
	CX_raw: '',
	CY_raw: '',
	CZ_raw: '',
	BX_raw:'',
	BY_raw:'',
	BZ_raw:'',
    CX: '',
    CY: '',
    CZ: '',
	BX: '',
	BY: '',
	BZ: '',
	Gtotal:'',
	Btotal_raw: '',
	Btotal_corr: '',
	DIP_raw: '',
	DIP_corr: '',
	Zenit: '',
	Azimut: '',
	Azimut_Grid:'',
	comment: '',
  });

  const handleAddRow = () => {
    setTableData([...tableData, newRow]);
    setNewRow({
	  id: uuidv4(),
      depth: '',
	  CX_raw: '',
	  CY_raw: '',
	  CZ_raw: '',
	  BX_raw:'',
	  BY_raw:'',
	  BZ_raw:'',	    
      CX: '',
      CY: '',
      CZ: '',
	  BX: '',
      BY: '',
      BZ: '',
      Gtotal: '',
      Btotal_raw: '',
      Btotal_corr: '',
      DIP_raw: '',
      DIP_corr: '',
      Zenit: '',
      Azimut: '',
	  Azimut_Grid:'',
      comment: '',
    });
  };
  const handleCopy = () => {
    const copiedText = rows
      .map((row) =>
        columns
          .slice(2, 10) // Выбираем только колонки с инпутами
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
      .slice(2, 10) // Выбираем только колонки с инпутами
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

  
  const handleCopySelected = () => {
   console.log(rows)
   const rowsFilt = rows.map((cell) => cell.original)
   console.log(rowsFilt)
   console.log(selectedRows)
   const selectedIds = selectedRows.map((row) => row.id);
  
    const copiedText = rowsFilt
    .filter((row) => selectedIds.includes(row.id))
    .map((row) =>
      columns
        .slice(2,10) // Выбираем только колонки с инпутами
        .map((column) => row[column.accessor as keyof typeof row])
        .join('\t')
    )
    .join('\n');
	console.log(copiedText);
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
		Header: '', // Заголовок для столбца с чекбоксами
		id: 'selection',
		Cell: ({ row }: { row: any }) => (
		  <input
			type="checkbox"
			checked={selectedRows.some((r) => r.id === row.values.id)}
			onChange={() => handleRowSelect(row)}
		  />
		),
	  },
      {
        Header: 'инд-р',
        accessor: 'id',
      },
      {
        Header: 'Глубина',
        accessor: 'depth',
        Cell: ({ row, value } : { row: any; value: any }) => (
            <input
              value={value}
              onChange={(e) => handleCellChange(row, 'depth', e.target.value)}
        
            />
          ),
		  sortType: 'basic', // Добавьте это
      },
      {
        Header: 'Gx_raw',
        accessor: 'CX_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CX_raw', e.target.value)}
          
          />
        ),
      },
      {
        Header: 'Gy_raw',
        accessor: 'CY_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CY_raw', e.target.value)}
          />
        ),
      },
      {
        Header: 'Gz_raw',
        accessor: 'CZ_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CZ_raw', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Bx_raw',
        accessor: 'BX_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BX_raw', e.target.value)}
          />
        ),
      },
	  {
        Header: 'By_raw',
        accessor: 'BY_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BY_raw', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Bz_raw',
        accessor: 'BZ_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BZ_raw', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Gx',
        accessor: 'CX',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CX', e.target.value)}
          
          />
        ),
      },
      {
        Header: 'Gy',
        accessor: 'CY',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CY', e.target.value)}
          />
        ),
      },
      {
        Header: 'Gz',
        accessor: 'CZ',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'CZ', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Bx',
        accessor: 'BX',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BX', e.target.value)}
          />
        ),
      },
	  {
        Header: 'By',
        accessor: 'BY',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BY', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Bz',
        accessor: 'BZ',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'BZ', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Gtotal',
        accessor: 'Gtotal',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Gtotal', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Btotal_raw',
        accessor: 'Btotal_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Btotal_raw', e.target.value)}
          />
        ),
      },

	  {
        Header: 'Dip_raw',
        accessor: 'DIP_raw',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'DIP_raw', e.target.value)}
          />
        ),
      },

	  {
        Header: 'Зенитный угол',
        accessor: 'Zenit',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Zenit', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Магнитный азимут',
        accessor: 'Azimut',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Azimut', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Картографический азимут',
        accessor: 'Azimut_Grid',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Azimut_Grid', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Btotal_corr',
        accessor: 'Btotal_corr',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'Btotal_corr', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Dip_corr',
        accessor: 'DIP_corr',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'DIP_corr', e.target.value)}
          />
        ),
      },
	  {
        Header: 'Комментарии',
        accessor: 'comment',
        Cell: ({ row, value }: { row: any; value: any }) => (
          <input
            value={value}
            onChange={(e) => handleCellChange(row, 'comment', e.target.value)}
          />
        ),
      },
      {
        Header: 'action',
        Cell: ({ row}: { row: any; value: any }) => (
            <DeleteOutlined  type="delete" className="ml10" onClick={() => handleDeleteRow(row)}/>
     
        ),
      },
    ],
    [selectedRows]
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
	  useSortBy,
	  useRowSelect
  );

  
  const handleRowSelect = (row: any) => {
	if (selectedRows.some((r) => r.id === row.values.id)) {
	  setSelectedRows((prevSelectedRows: Row<DataRow>[]) =>
		prevSelectedRows.filter((selectedRow) => selectedRow.id !== row.values.id)
	  );
	} else {
	  setSelectedRows((prevSelectedRows: Row<DataRow>[]) => [...prevSelectedRows, row.values]);
	}
	console.log(selectedRows)
  };

  //вставка данных
  
  const handlePaste = () => {
    navigator.clipboard.readText().then((pastedText) => {
      const rowsToPaste = pastedText.split('\n').map((row) => row.split('\t'));
      
      if (rowsToPaste.length > 0) {
        const newRows = rowsToPaste.map((values) => ({
          id: uuidv4(),
          depth: values[0] || '',
		  CX_raw: values[1] || '',
	      CY_raw: values[2] || '',
	      CZ_raw: values[3] || '',
	      BX_raw: values[4] || '',
	      BY_raw: values[5] || '',
	      BZ_raw: values[6] || '',
          CX: values[7] || '',
          CY: values[8] || '',
          CZ: values[9] || '',
		  BX: values[10] || '',
		  BY: values[11] || '',
		  BZ: values[12] || '',
		  Gtotal:values[13] || '',
		  Btotal_raw: values[14] || '',
		  DIP_raw: values[15] || '',
		  Zenit: values[16] || '',
		  Azimut: values[17] || '',
		  Azimut_Grid: values[18] || '',
		  comment: values[19] || '',
		  Btotal_corr: values[20] || '',
		  DIP_corr: values[21]|| '',
        }));
        
        setTableData([...tableData, ...newRows]);
      }
    });
  };
  
  //сортировка
  const handleSort = (field: keyof DataRow) => {
	
    setTableData((prevData: DataRow[]) => {
      const sortedData = [...prevData].sort((a, b) => {
        if (a[field] < b[field]) {
			console.log(a[field])
          return -1;
        }
        if (a[field] > b[field]) {
			console.log(a[field])
          return 1;
        }
        return 0;
      });

      return sortedData;
	
    });
	console.log(tableData)
  };



  return (
    <div>
         <button onClick={handlePaste}>Вставить</button>    
        <button onClick={handleAddRow}>Добавить строку</button>
        <button onClick={handleCopy}>Copy all</button>
        <button onClick={handleCopyLast}>Copy Last </button>
        <button onClick={handleCopySelected}>copy selected</button>
		<div className={styles.table}>
      {/* <button onClick={handlePaste}>Paste</button>  */}
      <table {...getTableProps()} className={styles.table__container}>
      <thead className={styles.table__header}>
	  {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps( )}>
            {headerGroup.headers.map((column : Column<DataRow> & HeaderGroup<DataRow>) => (
           <th {...column.getHeaderProps()} className={styles.table__head}>
                {column.render('Header')}
				{column.id === 'select' && (
            <span>Select All</span>
          )}
				{column.id === 'depth' && (
                    <button onClick={() => handleSort('depth')}>Sort</button>
                  )}
               </th>
            ))}
  </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}  className={styles.table__row}>
                      {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles.table__item}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
	</div>
   
  );
};

