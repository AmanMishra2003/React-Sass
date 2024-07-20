export default function Color(){
    return(
        <div >
        <h1>Colors</h1>
        <div className="stack-column" style={{gap:0}}>
                <h3>Text Color</h3>
            <div className="stack-row">
                <div className="text-primary">text-primary</div>
                <div className="text-secondary">text-secondary</div>
                <div className="text-danger">text-danger</div>
                <div className="text-warning">text-warning</div>
                <div className="text-dark">text-dark</div>
                <div className="text-black">text-black</div>
                <div className="text-light" >text-light</div>
                <div className="text-white bg-dark">text-white</div>
            </div>
                <h3>Background Color</h3>
            <div className="stack-row">
                <div className="bg-primary">text-primary</div>
                <div className="bg-secondary">text-secondary</div>
                <div className="bg-danger">text-danger</div>
                <div className="bg-warning">text-warning</div>
                <div className="bg-dark" >text-dark</div>
                <div className="bg-black text-white">text-black</div>
                <div className="bg-light" >text-light</div>
                <div className="bg-white">text-white</div>
            </div> 
        </div>

        <div className="stack-column" style={{gap:'0'}}>
        <h3>Light color combination</h3>
            <div className="stack-row" >
                <div className="stack-column">
                    { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-primary-light-${ele}`}>{`text-primary-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-secondary-light-${ele}`}>{`text-secondary-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-danger-light-${ele}`}>{`text-danger-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-warning-light-${ele}`}>{`text-secondary-warning-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-dark-light-${ele}`}>{`text-dark-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                    { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-primary-light-${ele}`}>{`bg-primary-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-secondary-light-${ele}`}>{`bg-secondary-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-danger-light-${ele}`}>{`bg-danger-light-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-warning-light-${ele}`}>{`bg-secondary-warning-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-dark-light-${ele}`}>{`bg-dark-light-${ele}`}</div>
                    }) }
                </div>
            </div>
        </div>
        <div className="stack-column" style={{gap:'0'}}>
        <h3>Dark color combination</h3>
            <div className="stack-row">
                <div className="stack-column">
                    { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-primary-dark-${ele}`}>{`text-primary-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-secondary-dark-${ele}`}>{`text-secondary-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-danger-dark-${ele}`}>{`text-danger-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-warning-dark-${ele}`}>{`text-warning-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`text-dark-dark-${ele}`}>{`text-dark-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                    { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-primary-dark-${ele}`}>{`bg-primary-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-secondary-dark-${ele}`}>{`bg-secondary-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-danger-dark-${ele}`}>{`bg-danger-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-warning-dark-${ele}`}>{`bg-warning-dark-${ele}`}</div>
                    }) }
                </div>
                <div className="stack-column">
                { [1,2,3,4,5].map(ele=>{
                        return <div className={`bg-dark-dark-${ele}`}>{`bg-dark-dark-${ele}`}</div>
                    }) }
                </div>
            </div>
        </div>
        

        </div>
    )
}