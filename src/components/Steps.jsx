import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
    return (
        <div className="mx-4 lg:mx-44 py-20 xl:py-40">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">
            Steps to remove background <br /> image in seconds
            </h1>

            <div>
            <div>
                <img src={assets.upload_icon} alt="" />
                <div>
                <p>Upload image</p>
                <p>
                    This is a demo text, will replace it later. This is a demo..
                </p>
                </div>
            </div>
            </div>
        </div>
)
}

export default Steps
