'use client';
import React from 'react'
import Sidebar from './sidebar'

const layout = ({ children }) => {
    return (
        <div>

            <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div class="row-span-2 ">
                    <Sidebar />
                </div>
                <div class="col-span-4 mt-5 ">
                    {children}
                </div>

            </div>


        </div>
    )
}

export default layout