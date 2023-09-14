import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, HeaderGroup,Column, Row, useRowSelect } from 'react-table';
import { v4 as uuidv4 } from 'uuid'; 
import { DeleteOutlined } from '@ant-design/icons';
import { Sort } from "../../ui-kit/svg/icons";
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./well-table.module.scss";
import "./well-table.module.scss"; 
import { RowData } from '@tanstack/react-table';
import { Delete } from "../../ui-kit/svg/icons";

interface DataRow {
	id: any;
	depth: any;
	CX_raw?: any;
	CY_raw?: any;
	CZ_raw?: any;
	BX_raw?:any;
	BY_raw?:any;
	BZ_raw?:any;
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
	DIP_corr?:any;
	Zenit?:any;
	Azimut?:any;
	Azimut_Grid?:any;
	comment:any;
	instatistics?:any;
	// isSorted?:any;
	// Add other properties as needed
  }

//({selectRun, selectWell}: { selectRun: any; selectWell: any;}) 
export const WellTable  =  ({coefficients} :{coefficients:any}) => {
	const {dec,grid_convergence} = useSelector((store) =>store.wells.currentWell)

	if (Object.keys(coefficients).length === 0 ) {
		coefficients = 	{
			   "device_title": "_",
		        "CX": "+0",
		        "CY": "+0",
		        "CZ": "+0",
		        "BX": "+0",
		        "BY": "+0",
		        "BZ": "+0"
		}
	}

	let CXcoeff = coefficients.CX
	let CYcoeff = coefficients.CY
	let CZcoeff = coefficients.CZ
	let BXcoeff = coefficients.BX
	let BYcoeff = coefficients.BY
	let BZcoeff = coefficients.BZ

	const preData = React.useMemo(
       () => [
		{
			"id": 4093,
			"depth": 2544.7,
			"CX_raw": 0.458,
			"CY_raw": 0.6045,
			"CZ_raw": 0.6523,
			"BX_raw": -0.37740,
			"BY_raw": -0.32280,
			"BZ_raw": 0.315400,
			"CX": 0.458,
			"CY": 0.6045,
			"CZ": 0.6523,
			"BX": 37740.0,
			"BY": 32280.0,
			"BZ": 31540.0,
			"Btotal_corr": 58830.1,
			"DIP_corr": 77.112,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4094,
			"depth": 2562.9,
			"CX_raw": 0.7471,
			"CY_raw": -0.1123,
			"CZ_raw": 0.6563,
			"BX_raw": -0.47120,
			"BY_raw": 0.17970,
			"BZ_raw": 0.31590,
			"CX": 0.7471,
			"CY": -0.1123,
			"CZ": 0.6563,
			"BX": 47120.0,
			"BY": -17970.0,
			"BZ": 31590.0,
			"Btotal_corr": 59414.7,
			"DIP_corr": 76.595,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4095,
			"depth": 2581.4,
			"CX_raw":-0.4178,
			"CY_raw":0.607,
			"CZ_raw":0.6755,
			"BX_raw":0.18980,
			"BY_raw":-0.45780,
			"BZ_raw":0.32710,
			"CX": -0.4178,
			"CY": 0.607,
			"CZ": 0.6755,
			"BX": -18980.0,
			"BY": 45780.0,
			"BZ": 32710.0,
			"Btotal_corr": 59239.3,
			"DIP_corr": 76.744,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4096,
			"depth": 2599.9,
			"CX_raw": -0.3814,
			"CY_raw": 0.6162,
			"CZ_raw": 0.6895,
			"BX_raw": 0.17010,
			"BY_raw": -0.46220,
			"BZ_raw": 0.33210,
			"CX": -0.3814,
			"CY": 0.6162,
			"CZ": 0.6895,
			"BX": -17010.0,
			"BY": 46220.0,
			"BZ": 33210.0,
			"Btotal_corr": 59256.8,
			"DIP_corr": 76.727,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4097,
			"depth": 2618.31,
			"CX_raw":-0.6005,
			"CY_raw":0.3115,
			"CZ_raw":0.734,
			"BX_raw":0.36380,
			"BY_raw":-0.29770,
			"BZ_raw":0.36280,
			"CX": -0.6005,
			"CY": 0.3115,
			"CZ": 0.734,
			"BX": -36380.0,
			"BY": 29770.0,
			"BZ": 36280.0,
			"Btotal_corr": 59194.9,
			"DIP_corr": 76.797,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},	
		{
			"id": 4100,
			"depth": 2673.35,
			"CX_raw":0.1857,
			"CY_raw":0.4691,
			"CZ_raw":0.8634,
			"BX_raw":-0.22830,
			"BY_raw":-0.31230,
			"BZ_raw":0.45430,
			"CX": 0.1857,
			"CY": 0.4691,
			"CZ": 0.8634,
			"BX": 22830,
			"BY": 31230,
			"BZ": 45430,
			"Btotal_corr": 59347.5,
			"DIP_corr": 76.67,
			"in_statistics": true,
			"comment": null,
			"run": 82
		  },
	{
			"id": 4179,
			"depth": 3583.4,
			"CX_raw": 0.62818,
			"CY_raw": -0.77824,
			"CZ_raw": -0.00332,
			"BX_raw": -0.30169,
			"BY_raw": 0.49652,
			"BZ_raw": -0.11113,
		    "CX": 0.62818,
			"CY": -0.77824,
			"CZ": -0.00332,
			"BX": 30169.0,
			"BY": -49652.0,
			"BZ": -11113.0,
			"Btotal_corr": 59372.0,
			"DIP_corr": 76.579,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4180,
			"depth": 3592.4,
			"CX_raw": 0.3309,
			"CY_raw": 0.94263,
			"CZ_raw": -0.00471,
			"BX_raw": -0.26456,
			"BY_raw": -0.51797,
			"BZ_raw": -0.11090,
			"CX": 0.3309,
			"CY": 0.94263,
			"CZ": -0.00471,
			"BX": 26456.0,
			"BY": 51797.0,
			"BZ": -11090.0,
			"Btotal_corr": 59453.0,
			"DIP_corr": 76.609,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},
		{
			"id": 4181,
			"depth": 3601.8,
			"CX_raw": -0.14062,
			"CY_raw": 0.98926,
			"CZ_raw": -0.01562,
			"BX_raw": 0.00488,
			"BY_raw": -0.57959,
			"BZ_raw": -0.11816,
			"CX": -0.14062,
			"CY": 0.98926,
			"CZ": -0.01562,
			"BX": -488.0,
			"BY": 57959.0,
			"BZ": -11816.0,
			"Btotal_corr": 59396.0,
			"DIP_corr": 76.602,
			"in_statistics": true,
			"comment": null,
			"run": 82
		},

		{
			"id": 4183,
			"depth": 3620.5,
			"CX_raw":  0.95508,
			"CY_raw":  -0.29492,
			"CZ_raw":  -0.02246,
			"BX_raw":  -0.52490,
			"BY_raw":  0.24219,
			"BZ_raw":  -0.12207,
			"CX": 0.95508,
			"CY": -0.29492,
			"CZ": -0.02246,
			"BX": 52490.0,
			"BY": -24219.0,
			"BZ": -12207.0,
			"Btotal_corr": 59345.0,
			"DIP_corr": 76.613,
			"in_statistics": true,
			"comment": null,
			"run": 82
		}
		],
		[]
	  )	
	
		
	function calculateCxyzConv( G:any, Gcoeff:any) {
		if(Gcoeff){
		 const match = Gcoeff.match(/(\/)(\d+)(?!\.\d+)/) // ищет "/100" но не искало /9,81
		 const match1 = Gcoeff.match(/(?<!\()\-(\d+)/);// ищет "-100"	/(?<!\()\-(\d+)/
		 const match2 = Gcoeff.match(/\*\(\-(\d+)\)/);// ищет "*(-100)"
		 const match3 = Gcoeff.match(/[*][-]([\d.]+)/)  // ищет "*-100"
		 const match4 = Gcoeff.match(/\/(\d+\.\d+)/) // ищет "/9.81"
		 const match5 = Gcoeff.match(/^(\*)(\d+)$/)  // ищет "*100"
		 const match6 = Gcoeff.match(/\/\((-)(\d+\.\d+)\)/) // ищет "/(-9.81)"
		 const match7 = Gcoeff.match(/\/\((-)(\d+\))/) // ищет "/(-100)"
		if (match) {
	  
			const number = parseInt(match[2], 10);
		
			if (!isNaN(number)) {
				console.log(number)   
			  return G / number;
																													  
			}
		}
		if (match1) {
	  		const number = parseInt(match1[1], 10);
				
			 if (!isNaN(number)) {
				console.log(number) 	 
		   return  G * (-number);
																													   
		 } else {
		   return ""
		 } 
	 }
	 if (match2) {
		
		const number = parseInt(match2[1], 10);
     
        if (!isNaN(number)) {
     		console.log(number)   
      return  G * (-number);
     																											 
     } else {
      return ""
     } 
     }
	 if (match3) {
	  
		const number = parseInt(match3[1], 10);
		
	 if (!isNaN(number)) {
		console.log(number) 	 
	   return  G * (-number);
																												   
	 }
   }
   if (match4) {
	  
	const number = parseFloat(match4[1])
	
    if (!isNaN(number)) {
   	  console.log(number) 	 
      return  G / (number);
     }
   }
   if (match5) {

	const number = parseInt(match5[2], 10);
	
   if (!isNaN(number)) {
		 
   return  G * (number);
																											   
   }
  }
  if (match6) {

	const number = parseFloat(match6[2]);
	
   if (!isNaN(number)) {
	console.log(number)
	console.log(G)
   return  G / (-number);
																											   
   }
  }
  if (match7) {

	const number = parseInt(match7[2],10);
	
   if (!isNaN(number)) {
		 
   return  G / (-number);
																											   
   }
  }
   else  {
			 return G
		}
	  }
	}
    
    function calculateBxyzConv ( B:any, Bcoeff:any) {
		
		if(Bcoeff){
			const match  =  Bcoeff.match(/(\/)(\d+)/)// ищет "/100"
			const match1 = Bcoeff.match(/(?<!\()\-(\d+)/);// ищет "-100"
			const match2 = Bcoeff.match(/\*\((-\d+)\)/);// ищет "*(-100) (/\*\(\-(\d+)\)/)
			const match3 = Bcoeff.match( /\\*\\-(\\d+)/)  // ищет "*-100"
			const match4 = Bcoeff.match(/^(\*)(\d+)$/)  // ищет "*100"
			const match5 = Bcoeff.match(/\*\-\((\d+)\)/)  // ищет "*-(100000) "
			const match6 = Bcoeff.match(/\/(\d+\.\d+)/) // ищет "/9.81"
			const match7 = Bcoeff.match(/\/\((-)(\d+\.\d+)\)/) // ищет "/(-9.81)"
			const match8 = Bcoeff.match(/\/\((-)(\d+\))/) // ищет "/(-100)"
		   if (match) {
		 
			const number = parseInt(match[2], 10);
		
			if (!isNaN(number)) {
				console.log(number)   
			  return B / number;
																													  
			}
		   }
		   if (match1) {
			
					 const number = parseInt(match1[1], 10);
					console.log(number)
				if (!isNaN(number)) {
						
			  return  B * (-number);
																														  
			} else {
			  return ""
			} 
		}
		if (match2) {
			console.log('s')
		   const number = parseInt(match2[1], 10);
		
		     if (!isNaN(number)) {
				console.log(number)	   
		 return  B * (-number);
																													 
		} else {
		 return ""
		 } 
		}
		if (match3) {
			console.log('s')
		   const number = parseInt(match3[1], 10);
		   console.log(number)
		if (!isNaN(number)) {
			console.log(number)
		  return  B * (-number);
																										  
		}
	  }
	  if (match4) {

		const number = parseInt(match4[2], 10);
		
	   if (!isNaN(number)) {
			
	   return  B * (number);
																												   
	  }
    }
	if (match5) {

		const number = parseInt(match5[1], 10);
		
	   if (!isNaN(number)) {
			 console.log (B)
	   return  B * (-number);
																												   
	  }
    }
	if (match6) {
	  
		const number = parseFloat(match6[1])
		
		if (!isNaN(number)) {
			 console.log(number) 	 
		  return  B / (number);
		 }
	   }

	if (match7) {

		const number = parseFloat(match7[2]);
		
	   if (!isNaN(number)) {
		console.log(number)
		console.log(B)
	   return  B / (-number);
																												   
	   }
	  }
	   
	  if (match8) {

		const number = parseInt(match8[2],10);
		
	   if (!isNaN(number)) {
			 
	   return  B / (-number);
																												   
	   }
	  }
		   else  {
				return B
		   }
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
	const data = preData.map((item: RowDataItem) => {
		const calculatedCX = calculateCxyzConv(item.CX_raw, CXcoeff);
		
	    const calculatedCY = calculateCxyzConv( item.CY_raw,CYcoeff);
		const calculatedCZ = calculateCxyzConv( item.CZ_raw,CZcoeff);
		const calculatedBX = calculateBxyzConv( item.BX_raw,BXcoeff);
		const calculatedBY = calculateBxyzConv( item.BY_raw,BYcoeff);
		const calculatedBZ = calculateBxyzConv( item.BZ_raw,BZcoeff);
		return{
	     ...item,
	     CX:calculatedCX.toFixed(4),
         CY:calculatedCY.toFixed(4),
         CZ:calculatedCZ.toFixed(4),
         BX:calculatedBX.toFixed(4),
         BY:calculatedBY.toFixed(4),
         BZ:calculatedBZ.toFixed(4),
	     Gtotal: calculateGtotal(calculatedCX, calculatedCY, calculatedCZ),
	     Btotal_raw: calculateBtotal(calculatedBX, calculatedBY, calculatedBZ),
	     Btotal_corr: item.Btotal_corr !== undefined ? item.Btotal_corr : '',
	     DIP_raw: calculateDIP(calculatedCX, calculatedCY, calculatedCZ,calculatedBX, calculatedBY, calculatedBZ),
	     DIP_corr: item.DIP_corr !== undefined ? item.DIP_corr : '',
	     Zenit: calculateZenit(calculatedCX, calculatedCY, calculatedCZ),
	     Azimut: calculateAzimuth(calculatedCX, calculatedCY, calculatedCZ,calculatedBX, calculatedBY, calculatedBZ),
	     Azimut_Grid: calculateAzimuth_Grid(calculatedCX, calculatedCY, calculatedCZ, calculatedBX, calculatedBY, calculatedBZ,dec,grid_convergence),
	    }
	});
	setTableData(data);
  }, [coefficients]);


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
          .slice(2, 9) // Выбираем только колонки с инпутами
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
      .slice(2, 9) // Выбираем только колонки с инпутами
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

   const rowsFilt = rows.map((cell) => cell.original)
   
   const selectedIds = selectedRows.map((row) => row.id);
  
   const copiedText = rowsFilt
    .filter((row) => selectedIds.includes(row.id))
    .map((row) =>
      columns
        .slice(2,9) // Выбираем только колонки с инпутами
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
		className: 'hide',
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
        console.log(updatedData); 
        return updatedData;
      });

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
  };

const handleDeleteSelected = () => {
	const rowsFilt = rows.map((cell) => cell.original)
   
	const selectedIds = selectedRows.map((row) => row.id);
	console.log(selectedIds)
	setTableData((prevData : any) => {
        const updatedData = prevData.filter((item:any) => !selectedIds.includes(item.id));
        return updatedData;
      });

} 
  //вставка данных
  
  const handlePaste = () => {
    navigator.clipboard.readText().then((pastedText) => {
		let rowsToPaste = pastedText.split(/\r?\n/).map((row) => row.split('\t'));

		let nonEmptyRows  = rowsToPaste.filter((values) => values.some((value) => value.trim() !== ''));
      console.log(rowsToPaste)
      if (nonEmptyRows.length > 0) {
        const newRows = nonEmptyRows.map((values) => ({
         id: uuidv4(),
		  depth: values[0] || '',
		  CX_raw: values[1] || '',
	      CY_raw: values[2] || '',
	      CZ_raw: values[3] || '',
	      BX_raw: values[4] || '',
	      BY_raw: values[5] || '',
	      BZ_raw: values[6] || '',
          CX: values[7] ||  calculateCxyzConv( values[1],CXcoeff),
          CY: values[8] ||  calculateCxyzConv( values[2],CYcoeff),
          CZ: values[9] ||  calculateCxyzConv( values[3],CZcoeff),
		  BX: values[10] || calculateBxyzConv( values[4],BXcoeff),
		  BY: values[11] || calculateBxyzConv( values[5],BYcoeff),
		  BZ: values[12] || calculateBxyzConv( values[6],BZcoeff),
		  Gtotal:values[13] || calculateGtotal( calculateCxyzConv( values[1],CXcoeff), calculateCxyzConv( values[2],CYcoeff),  calculateCxyzConv( values[3],CZcoeff)),
		  Btotal_raw: values[14] || calculateBtotal(calculateBxyzConv (values[4],BXcoeff), calculateBxyzConv( values[5],BYcoeff),  calculateBxyzConv( values[6],BZcoeff)),
		  DIP_raw: values[15] || calculateDIP(calculateCxyzConv( values[1],CXcoeff), calculateCxyzConv( values[2],CYcoeff),  calculateCxyzConv( values[3],CZcoeff),
		  calculateBxyzConv( values[4],BXcoeff), calculateBxyzConv( values[5],BYcoeff),  calculateBxyzConv( values[6],BZcoeff)),
		 
		  Zenit: values[16] || calculateZenit( calculateCxyzConv( values[1],CXcoeff), calculateCxyzConv( values[2],CYcoeff),  calculateCxyzConv( values[3],CZcoeff)),
		  Azimut: values[17] || calculateAzimuth(calculateCxyzConv( values[1],CXcoeff), calculateCxyzConv( values[2],CYcoeff),  calculateCxyzConv( values[3],CZcoeff),
		  calculateBxyzConv( values[4],BXcoeff), calculateBxyzConv( values[5],BYcoeff),  calculateBxyzConv( values[6],BZcoeff)),
		  Azimut_Grid: values[18] ||  calculateAzimuth_Grid(calculateCxyzConv( values[1],CXcoeff), calculateCxyzConv( values[2],CYcoeff),  calculateCxyzConv( values[3],CZcoeff),
		  calculateBxyzConv( values[4],BXcoeff), calculateBxyzConv( values[5],BYcoeff),  calculateBxyzConv( values[6],BZcoeff),dec,grid_convergence),
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

  };



  return (
    <div>
		 <button onClick={handleDeleteSelected} style={{ height: '34px',width: '20px',marginLeft: '5px'}}> <Delete/></button>    
         <button onClick={handlePaste} style={{ margin: '10px'}}>Вставить</button>    
        <button onClick={handleAddRow} style={{margin: '10px' }}>Добавить строку</button>
        <button onClick={handleCopy} style={{ margin: '10px'}}>Скопировать</button>
        <button onClick={handleCopyLast} style={{ margin: '10px' }}>Скопировать последний </button>
        <button onClick={handleCopySelected} style={{ margin: '10px' }}>Скопировать выбранное</button>
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
                    <button className={styles.sortBtn} onClick={() => handleSort('depth')}><Sort/></button>
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

