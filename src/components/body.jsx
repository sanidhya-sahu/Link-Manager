import React, { useRef, useEffect }  from 'react'
import './body.css'
import searchicon from './searchicon.png'
export default function Body() {
    const gridRef = useRef(null);
    useEffect(() => {
        const innerDiv = gridRef.current.querySelectorAll('div');
        for(var innerdiv of innerDiv){
        const height = innerdiv.getBoundingClientRect().height;
        if (height > 200) {
          console.log('Greater than 100px');
          console.log(innerdiv)
        }}
        console.log(
            gridRef.current.getBoundingClientRect().height
        )
      }, []);
    return (
        <>
            <div className="toolbar-wraper">
                <div className="toolbar">
                    <div className="create-note">
                        <button>
                            Add Link...
                        </button>
                    </div>
                    <div className="find-note">
                        <button>
                            <img src={searchicon} className='search-logo' alt="🔎" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-stack">
                <div className="sub-stack" id='grid' ref={gridRef}>
                    <div className="card-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam ea. Culpa magnam iure exercitationem laborum adipisci numquam facere.</div>
                    <div className="card-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam ea.</div>
                    <div className="card-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam ea.</div>
                    <div className="card-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam ea. Culpa magnam iure exercitationem laborum adipisci numquam facere.</div>
                    <div className="card-wrapper"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam ea. Culpa magnam iure exercitationem laborum adipisci numquam facere.</div>
                </div>
            </div>
        </>
    )
}
