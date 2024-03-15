import React from 'react'

export function Intro() {
    return(
        <>
            <div className="flex sm:flex-col md:flex-row">
                <div className=" sm:order-1 sm:text-center md:my-auto md:mr-4">
                    <br />
                    <div className=" text-8xl" style={{fontFamily:"Gilroy"}}>Collin Swisher</div>
                    <br />
                    <p >
                        Prolific programmer and system administrator excels in learning new technologies and frameworks. 
                        Has years of experience configuring and hosting web services on both linux and windows including 
                        self written web applications and game servers. Proficient in the use of version control and deployment systems.
                    </p>
                </div>
                <img className=" sm:w-3/4 sm:m-auto sm:my-3 md:w-2/4 sm:order-2 rounded-lg relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] " src="https://remote.collinswisher.net/headshot_small.jpg" alt="" />
            </div>
        </>
    )
}