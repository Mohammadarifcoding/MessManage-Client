import React from 'react';
import { LuEye } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
const AllMembers = () => {
    const members = [
        {
          id: 1,
          name: "John Doe",
          image_url: "https://source.unsplash.com/random/200x200/?person",
          phone_number: "+1234567890"
        },
        {
          id: 2,
          name: "Jane Smith",
          image_url: "https://source.unsplash.com/random/200x200/?woman",
          phone_number: "+1987654321"
        },
        {
          id: 3,
          name: "Michael Johnson",
          image_url: "https://source.unsplash.com/random/200x200/?man",
          phone_number: "+1122334455"
        },
        {
          id: 4,
          name: "Emily Brown",
          image_url: "https://source.unsplash.com/random/200x200/?girl",
          phone_number: "+1555666777"
        },
        {
          id: 5,
          name: "David Lee",
          image_url: "https://source.unsplash.com/random/200x200/?boy",
          phone_number: "+1443322111"
        },
        {
          id: 6,
          name: "Sarah Williams",
          image_url: "https://source.unsplash.com/random/200x200/?female",
          phone_number: "+1777888999"
        }
      ];
      
      
    return (
<div className="p-6" id="e67wmh3tkf">
  <div className="flex justify-end mb-4">
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
      Export
    </button>
  </div>
  <div className="flex flex-col gap-4 w-full">
    <div className="flex items-center gap-4">
      <div className="flex items-center  flex-row-reverse">
        <div className='px-3 py-[11px] rounded-r-md  border-y border-r bg-white hover:bg-gray-100 cursor-pointer font-semibold'>
        <IoIosSearch></IoIosSearch>
        </div>

        <input className="flex h-10 rounded-l-md  border-y border-l  bg-background px-3 py-2 text-sm focus:outline-none" placeholder="Search" type="search" />
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
      <CiFilter></CiFilter>
        <span className="sr-only">Filter</span>
      </button>
    </div>
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="p-0">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[80px]">
                  Image
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Mobile
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
                {members?.map(member => (
              <tr key={member.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted items-start">
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <img alt="Avatar" className="rounded-full" height={40} src="/placeholder.svg" width={40} style={{aspectRatio: '40 / 40', objectFit: 'cover'}} />
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">Sophia Anderson</td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">555-555-5555</td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Active</td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2">
                <button className="inline-flex items-center  justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <LuEye />
                  <span className="sr-only">View</span>
                </button>
                <button className="inline-flex items-center  justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <LuPencil />
                  <span className="sr-only">Edit</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
<MdOutlineDeleteOutline></MdOutlineDeleteOutline>
                  <span className="sr-only">Delete</span>
                </button>
              </td>
            </tr>
                ))}



            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default AllMembers;