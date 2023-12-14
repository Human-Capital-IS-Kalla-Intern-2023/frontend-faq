import { useState, useEffect } from 'react';

const DynamicTableHeader = ({ colCells }: any) => {
  const [cellWidth, setCellWidth] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const calculateWidths = () => {
      const totalCells = colCells.length;
      const calculatedWidth = `w-${Math.floor(12 / totalCells)}`;

      const widths = Array.from({ length: totalCells }, () => calculatedWidth);
      const result = Object.fromEntries(
        widths.map((_, index) => [index, calculatedWidth])
      );

      setCellWidth(result);
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);

    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, [colCells]);

  return (
    <thead className="uppercase text-[16px]">
      <tr>
        <th scope="col" className="invisible w-12 px-2 py-4">
          {'#'}
        </th>
        {colCells.map((cell: any, index: any) => (
          <th
            key={index}
            scope="col"
            className={`px-2 py-4 ${cellWidth[index]}`}
          >
            {cell.text}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DynamicTableHeader;
