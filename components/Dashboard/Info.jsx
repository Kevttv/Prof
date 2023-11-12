'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
    },
];

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

export default function App() {
    return (
        <div className="h-full w-full p-5 flex items-center">
            
        <Table className="border-2 border-purple-900 h-full w-full  " aria-label="Example table with dynamic content">
            <TableHeader className="" columns={columns}>
                {(column) => <TableColumn className="h-[10vh] w-auto border-2 border-black" key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody className="" items={rows}>
                {(item) => (
                    <TableRow className=" border-2 border-red-950 " key={item.key}>
                        {(columnKey) => <TableCell className="border-2 border-white text-center">{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    );
}
