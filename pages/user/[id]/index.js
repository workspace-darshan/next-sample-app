import { useRouter } from "next/router";
import useSWR from "swr";

const userFetcher = (url) => fetch(url).then(res => res.json())

const Setting = () => {
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(`https://dummyjson.com/users/${query?.id}`, userFetcher)
    if (error) throw console.error(error)
    console.log("🚀 ~ Setting ~ data:", data)

    // const [user, SetUser] = useState([])

    // const FetchUser = async () => {
    //     const response = await fetch(`https://dummyjson.com/users/${query?.id}`)
    //     const data = await response.json();
    //     SetUser(data)
    // }
    // useEffect(() => {
    //     FetchUser()
    // }, [])

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-xl font-semibold">This is Page for {isLoading ? <>Loading...</> : data?.username}</h1>
            <div className="my-3">
                {isLoading ?
                    <h1 className="text-base font-semibold">Loading....</h1> :
                    <ul>
                        <li><span className="font-semibold">firstName :-</span> {data?.firstName}</li>
                        <li><span className="font-semibold">username :-</span> {data?.username}</li>
                        <li><span className="font-semibold">maidenName :-</span> {data?.maidenName}</li>
                        <li><span className="font-semibold">gender :-</span> {data?.gender}</li>
                        <li><span className="font-semibold">email :-</span> {data?.email}</li>
                        <li><span className="font-semibold">phone :-</span> {data?.phone}</li>
                        <li><span className="font-semibold">eyeColor :-</span> {data?.eyeColor}</li>
                        <li><span className="font-semibold">height :-</span> {data?.height}</li>
                        <li><span className="font-semibold">weight :-</span> {data?.weight}</li>
                        <li><span className="font-semibold">university
                            :-</span> {data?.university
                            }
                        </li>
                        <li>
                            <img src={data?.image} alt="img" />
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}
export default Setting;