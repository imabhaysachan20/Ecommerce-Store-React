import { useEffect, useState } from "react";
import { useLoaderData,useLocation,useNavigate } from "react-router-dom"



const PaginationContainer = () => {
  const {meta} = useLoaderData();
  const {pageCount,page}= meta.pagination;
  
  
  const pages = Array.from({length:pageCount},(_,index)=>{
    let number = index+1;
    return number; 
  })
  const {search,pathname} = useLocation()
  const navigate = useNavigate()
  const handlePageChange =(pageNO)=>{
    const url = new URLSearchParams(search);
    url.set("page",pageNO);
    const newUrl = `${pathname}?${url}`
    navigate(newUrl);
    
  }
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item" onClick={()=>{let prevPage = page-1;
          if (prevPage <1) prevPage=pageCount;
          handlePageChange(prevPage)}}>Prev</button>
        {pages.map((pageNO)=>{
          return <button key={page} className={`btn btn-x sm:btn-md join-item ${pageNO==page ?"bg-base-300":""}`} onClick={
            ()=>{handlePageChange(pageNO)}}>{pageNO}</button>
        })}
        <button className="btn btn-xs sm:btn-md join-item" onClick={()=>{
          let nextPage = page+1;
          if (page+1>pageCount) {
            nextPage = 1;
          }
          handlePageChange(nextPage)}}>Next</button>
      </div>
    </div>
  )
}

export default PaginationContainer
