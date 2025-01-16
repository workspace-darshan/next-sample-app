import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

const User = () => {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);
    if (error) throw console.error(error)
    const count = data?.users?.length || 0;

    // const [users, SetUsers] = useState([])
    // const [count, setCount] = useState(0)

    // const FetchUsers = async () => {
    //     try {
    //         const response = await fetch('https://dummyjson.com/users')
    //         const data = await response.json();
    //         SetUsers(data)
    //         setCount(data?.users?.length);
    //         setIsLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     FetchUsers()
    // }, [])

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-xl font-semibold">This is All User</h1>
            <p>Total Users: {isLoading ? <>counting...</> : count}</p>
            <br />
            <ul>
                {isLoading ?
                    <h1 className="text-base font-semibold">Loading....</h1> :
                    data.users && data?.users?.map((user, index) => (
                        <li key={index}>{user?.id} {"==>"} <Link href={`/user/${user?.id}`}>{user?.firstName}</Link></li>
                    ))}
            </ul>
        </div>
    )
}

export default User;