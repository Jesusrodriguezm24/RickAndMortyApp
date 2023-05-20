import { useEffect, useState } from "react";

export const usePagination = (list, quantityPages) => {

    const [numberPage, setNumberPage] = useState(1);

    const lowerLimit = quantityPages * ( numberPage - 1);
    const upperLimit = quantityPages * numberPage - 1;
    const totalPages = Math.ceil(list.length / quantityPages);

    const sliceList = list.slice(lowerLimit, upperLimit + 1);

    const changePageTo = (page) => {
        if(page > totalPages) setNumberPage(totalPages);
        else if (page < 1) setNumberPage(1);
        else setNumberPage(page);
      }

     const pages = Array(totalPages).fill()
      .map((_,i)=>i +1); 

      useEffect(() => {
        setNumberPage(1);
      }, [quantityPages])
      

      return [numberPage, sliceList, changePageTo, pages ]
        
}