import { saveAs } from 'file-saver';
import XLSX from 'xlsx';

/* eslint-disable */
function datenum(v, date1904) {
  if (date1904) v += 1462;
  const epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

// 将数组转成，单元格：内容
function sheetFromArrayOfArrays(data, opts) {
  const ws = {};
  const range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  };
  for (let i = 0; i !== data.length; i += 1) {
    for (let j = 0; j !== data[i].length; j += 1) {
      if (range.s.r > i) range.s.r = i;
      if (range.s.c > j) range.s.c = j;
      if (range.e.r < i) range.e.r = i;
      if (range.e.c < j) range.e.c = j;
      const cell = {
        v: data[i][j],
      };
      if (cell.v == null) continue;
      // i是横坐标，j是纵坐标，将坐标传进去，获取到sheet的单元格位置
      const cellRef = XLSX.utils.encode_cell({
        c: j,
        r: i,
      });
      // 数据类型
      if (typeof cell.v === 'number') cell.t = 'n';
      else if (typeof cell.v === 'boolean') cell.t = 'b';
      else if (cell.v instanceof Date) {
        cell.t = 'n';
        // 字符串格式
        cell.z = XLSX.SSF.table[14];
        cell.v = datenum(cell.v);
        console.log('cell.v: ', cell);
      } else cell.t = 's';
      ws[cellRef] = cell;
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; i += 1) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

// 处理表头
function getHeader(data) {
  const multiHeader = [
    [],
  ];
  const header = [];
  const filterVal = [];
  data.forEach((item) => {
    if (item.children) {
      item.children.forEach((element) => {
        multiHeader[0].push(item.label);
        header.push(element.label);
        filterVal.push(element.prop);
      });
    } else {
      multiHeader[0].push(item.label);
      header.push(item.label);
      filterVal.push(item.prop);
    }
  });
  return {
    multiHeader,
    header,
    filterVal,
  };
}

// 处理表格数据
function formatJson(filterVal, jsonData) {
  return jsonData.map((v) => filterVal.map((j) => v[j]));
}

// 下载普通的表格（无单元格合并）
export function exportToExcel({
  filename = '测试表格', // 文件名称
  columns, // 表头
  tableData, // 表格数据
  autoWidth = true,
  bookType = 'xlsx',
} = {}) {
  /**
   * multiHeader:除最后一层之外的表头
   * header：最后一层表头
   * filterVal：最后一层表头对应的prop
   */
  const header = columns.map((item) => item.label);
  const filterVal = columns.map((item) => item.prop);
  // 将每一条表格数据处理成二维数组数据
  const data = formatJson(filterVal, tableData);
  // 在最开头添加最后一层表头
  data.unshift(header);

  const ws = sheetFromArrayOfArrays(data);

  // 设置worksheet每列的最大宽度
  if (autoWidth) {
    const colWidth = data.map((row) => row.map((val) => {
      // 先判断是否为null/undefined
      if (val == null) {
        return {
          wch: 10,
        };
      }
      // 再判断是否为中文
      if (val.toString().charCodeAt(0) > 255) {
        return {
          wch: val.toString().length * 2,
        };
      }
      return {
        wch: val.toString().length,
      };
    }));
    // 以第一行为初始值,查找出最长的内容
    const result = colWidth[0];
    for (let i = 1; i < colWidth.length; i += 1) {
      for (let j = 0; j < colWidth[i].length; j += 1) {
        if (result[j].wch < colWidth[i][j].wch) {
          result[j].wch = colWidth[i][j].wch;
        }
      }
    }
    ws['!cols'] = result;
  }

  // 将工作表添加到工作簿
  const wb = new Workbook();
  wb.SheetNames.push('SheetJS');
  wb.Sheets.SheetJS = ws;

  // 编写工作簿
  const wbout = XLSX.write(wb, {
    bookType,
    bookSST: false,
    type: 'binary',
  });
  saveAs(new Blob([s2ab(wbout)], {
    type: 'application/octet-stream',
  }), `${filename}.${bookType}`);
}

// 下载二级表头的表格
export function exportJsonToExcel({
  filename = '测试表格', // 文件名称
  columns, // 表头
  tableData, // 表格数据
  merges = [], // 合并配置
  autoWidth = true,
  bookType = 'xlsx',
} = {}) {
  /**
   * multiHeader:除最后一层之外的表头
   * header：最后一层表头
   * filterVal：最后一层表头对应的prop
   */
  const { multiHeader, header, filterVal } = getHeader(columns);
  // 将每一条表格数据处理成二维数组数据
  const data = formatJson(filterVal, tableData);
  // 在最开头添加最后一层表头
  data.unshift(header);
  // 将另外的表头也在最开始的位置添加进去
  for (let i = multiHeader.length - 1; i > -1; i -= 1) {
    data.unshift(multiHeader[i]);
  }

  const ws = sheetFromArrayOfArrays(data);

  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = [];
    merges.forEach((item) => {
      ws['!merges'].push(XLSX.utils.decode_range(item));
    });
  }
  // 设置worksheet每列的最大宽度
  if (autoWidth) {
    const colWidth = data.map((row) => row.map((val) => {
      // 先判断是否为null/undefined
      if (val == null) {
        return {
          wch: 10,
        };
      }
      // 再判断是否为中文
      if (val.toString().charCodeAt(0) > 255) {
        return {
          wch: val.toString().length * 2,
        };
      }
      return {
        wch: val.toString().length,
      };
    }));
    // 以第一行为初始值,查找出最长的内容
    const result = colWidth[0];
    for (let i = 1; i < colWidth.length; i += 1) {
      for (let j = 0; j < colWidth[i].length; j += 1) {
        if (result[j].wch < colWidth[i][j].wch) {
          result[j].wch = colWidth[i][j].wch;
        }
      }
    }
    ws['!cols'] = result;
  }

  // 将工作表添加到工作簿
  const wb = new Workbook();
  wb.SheetNames.push('SheetJS');
  wb.Sheets.SheetJS = ws;
  console.log('打印: ', ws);

  // 编写工作簿
  const wbout = XLSX.write(wb, {
    bookType,
    bookSST: false,
    type: 'binary',
  });
  saveAs(new Blob([s2ab(wbout)], {
    type: 'application/octet-stream',
  }), `${filename}.${bookType}`);
}
