export function NavBar() {
    return (
        <>
        {/* max-w-screen-xl */}
        {/* className=" max-w-screen-xl flex items-center justify-center" */}
        <div className=" md:w-3/4 md:m-auto flex flex-wrap items-center justify-between mx-auto">
            <a className=" text-2xl m-5" style={{fontFamily:"Gilroy"}} href="https://remote.collinswisher.net/">Home</a>
            <a className=" text-2xl m-5" style={{fontFamily:"Gilroy"}} href="https://remote.collinswisher.net/resume.pdf">Resume</a>
            <a className=" text-2xl m-5" style={{fontFamily:"Gilroy"}} href="https://remote.collinswisher.net/gitbucket">Gitbucket</a>
            <a className=" text-2xl m-5" style={{fontFamily:"Gilroy"}} href="https://www.linkedin.com/in/collin-swisher-3431b9292/">Linkedin</a>
        </div>
        </>
    )
}