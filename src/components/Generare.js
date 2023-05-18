import React, { useState, useEffect, useRef } from 'react';
import "tailwindcss/tailwind.css"

import { Button } from './Button';

import { getWhiteboardIdFromUrl } from '../constantFunction'

export default function Generate() {
    let [showSiteUrl, setShowSiteUrl] = useState(false)
    let [siteUrl, setSiteUrl] = useState('')
    const inputRef = useRef(null);


    const handleGenerateBtnClick = () => {


        console.log(inputRef.current.value);
        // 获取白板 ID
        const whiteboard_id = inputRef.current.value.replace('https://app.heptabase.com/w/', '')

        const url = 'https://share.dabing.one/post?whiteboard_id=' + whiteboard_id

        console.log(url);
        //https://app.heptabase.com/w/21922130d0a9f43c68cb0cc1bfbe3ab5a5aaa29acf163c04b50b2fb78932eefb?id=7bf671f4-9433-4556-a575-91cd4d6b1c7f
        setSiteUrl(url)
        setShowSiteUrl(true)

        // 清除本地的旧数据
        const whiteboardId = getWhiteboardIdFromUrl(url)
        console.log(whiteboardId);
        localStorage.removeItem(whiteboardId)
    }


    return <div className='p-4 flex flex-col '>

        <input ref={inputRef} className='h-10 border mb-4 w-full md:max-w-md pl-3 text-sm text-gray-800 rounded-sm'
            placeholder='Fill in your whiteboard link.'
        />
        <Button onClick={handleGenerateBtnClick} className=''>Generate</Button>

        {showSiteUrl && <div className='pt-6'>
            🎉<a className='underline' href={siteUrl}>Access your website</a>
            <p className='mt-4 text-gray-700'>After Hepta is updated, the website will be automatically updated within <strong>20 minutes</strong> at the latest. <strong>If you want to update it immediately, you can click generate again here.</strong></p>
        </div>}


    </div>
}