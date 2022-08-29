import { useEffect , useState} from "react";
import { getData } from "./api";

export function App(){
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [previousPageNo, setPreviousPageNo] = useState(0);
    const [nextPageNo, setNextPageNo] = useState(2);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setLoading(true);
        setPageData(null);
        getData(page)
        .then((actualData)=> {
        let res = actualData.results[0]
        console.log(actualData)
        setPageData(res[page])
        
        setCurrentPageNo(page)
        setPreviousPageNo(page-1)
        setNextPageNo(parseInt(page+1))
        })
        .catch((err) => {
            console.log(err, "err")
            setPageData(null);
        })
        .finally(() => {
        setLoading(false);
        });

    }, [page])
    
    const Spinner = () => <div className="spinBg"><div className="loader"></div></div>;

    return (
        <>

            {loading == true ? 
                Spinner()
                :
                <>
                    <table>
                        <caption>paginated random data of app users</caption>
                        
                        <thead>
                            <tr>
                                <td># No.</td>
                                <td>Gender</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        <tbody data-sink>
                            {pageData?.map((data, index)=>{
                                return (
                                    <tr key={data.id}>
                                        <td>{data.row}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.age}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table> 
                    <div className="btn-group">
                        {previousPageNo !== 0 && <button data-prevbtn onClick={()=>setPage(previousPageNo)}>Previous</button>}
                        <button data-nextbtn onClick={()=>setPage(nextPageNo)}>Next</button>
                        <label data-pageview>Showing Page {currentPageNo}</label>
                    </div>  
                </>
            }   
        </>
    )
}