import React from 'react';
import { LuEye } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
const MemberRow = ({data}) => {
    const {image_url,name,phone_number,active,id} = data
    return (
        <tr  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted items-start">
        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
          <img  className="rounded-full  bg-gray-300" height={40} src={image_url} width={40} style={{aspectRatio: '40 / 40', objectFit: 'cover'}} />
        </td>
        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{name}</td>
        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{phone_number}</td>
        <td className={`p-4  align-middle [&:has([role=checkbox])]:pr-0`}>
         
          <span className={` p-2 rounded-full ${active ? 'bg-green-100 text-green-800':'bg-red-100 text-red-800'}`}>{active ? 'Active':'Inactive'}</span> 
          </td>
        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2">
          <button className="inline-flex items-center bg-themelittleFirstColor text-themeFirstColor  group justify-center whitespace-nowrap rounded-md text-lg font-medium   border  h-10 w-10">
          <LuEye className='group-hover:scale-125 scale-100 transition-all duration-200' />
            <span className="sr-only">View</span>
          </button>
          <button className="inline-flex items-center bg-themelittleFirstColor text-themeFirstColor text-lg group justify-center whitespace-nowrap rounded-md font-medium   border  h-10 w-10">
          <LuPencil className='group-hover:scale-125 scale-100 transition-all duration-200' />
            <span className="sr-only">Edit</span>
          </button>
          <button className="inline-flex items-center bg-red-100 text-red-700 text-lg group justify-center whitespace-nowrap rounded-md  font-medium   border  h-10 w-10">
          <MdOutlineDeleteOutline className='group-hover:scale-125 scale-100 transition-all duration-200'></MdOutlineDeleteOutline>
            <span className="sr-only">Delete</span>
          </button>
        </td>
      </tr>
    );
};

export default MemberRow;