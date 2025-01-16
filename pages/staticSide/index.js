const UsersPage = (props) => {
    return (
        <div className="container mx-auto p-7">
            <h1 className="text-xl font-semibold">This is All User</h1>
            <br />
            <ul>
                {props?.data?.users && props?.data?.users?.map((user, index) => (
                    <li key={index}>{user?.id} {"==>"} {user?.firstName}</li>
                ))}
            </ul>
        </div>
    )
}
export default UsersPage

export const getStaticProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json();
    return {
        props: {
            data
        }
    }
}