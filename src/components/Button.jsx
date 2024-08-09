
export default function Button(){
    return(
        <>
        <h1>Buttons</h1>
        <div className="stack-row" style={{gap:10, paddingBottom:'10px'}}>
            <button className="btn-primary">btn-primary</button>
            <button className="btn-secondary">btn-secondary</button>
            <button className="btn-danger">btn-danger</button>
            <button className="btn-warning">btn-warning</button>
            <button className="btn-light">btn-light</button>
            <button className="btn-dark">btn-dark</button>
            <button className="btn-white">btn-white</button>
            <button className="btn-black">btn-black</button>
        </div>
        <div className="stack-row" >
            <button className="btn-outlined-primary">btn-primary</button>
            <button className="btn-outlined-secondary">btn-secondary</button>
            <button className="btn-outlined-danger">btn-danger</button>
            <button className="btn-outlined-warning">btn-warning</button>
            <button className="btn-outlined-dark">btn-dark</button>
            <button className="btn-outlined-black">btn-black</button>
            <button className="btn">btn</button>
            <button className="btn-complement-dark">btn</button>
            <button className="btn-complement-secondary ">btn</button>
            <button className="bg-warning rounded-circle pl-3">asdasdafdsds</button>
        </div>

        <div style={{width:'100%', height:'200px'}} className="changing-color-box">

        </div>
        </>
    )
}