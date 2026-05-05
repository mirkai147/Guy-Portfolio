"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function TablePreview({ file }: { file: string }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(file)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        setData(json);
      })
      .catch((err) => {
        console.error("엑셀 불러오기 실패:", err);
      });
  }, [file]);

  if (data.length === 0) {
    return <p>데이터 로딩중...</p>;
  }

  return (
    <div className="w-full overflow-x-auto">
    <table className="min-w-[800px] text-sm border">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="border p-2 bg-gray-100">
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 20).map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val: any, j) => (
                <td key={j} className="border p-2">
                  {String(val)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}