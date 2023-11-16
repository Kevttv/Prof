'use client'
import React from "react";
import { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const url = 'https://adso-lookstyle.onrender.com/api/v1/users'

async function getUser() {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const columns = [
    {
        key: "id",
        label: "ID",
    },
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "last_name",
        label: "LAST NAME",
    },
    {
        key: "email",
        label: "EMAIL",
    },
];

export default function InfoUsers() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await getUser();
            setUserData(result.data);
        }
        getData();
    }, []);
    return (
        <Table className="w-auto h-full flex justify-between bg-dakColor-dC rounded-xl text-white" aria-label="Example static collection table">
            <TableHeader className="" columns={columns}>
                {(column) => <TableColumn className="bg-graytColor-gC text-center p-4" key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={userData}>
                {(item) => (
                    <TableRow className="" key={item.key}>
                        {(columnKey) => <TableCell className="text-center">{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
