import Styles from "@/styles/server.module.css"

const users = (props) => {
    return (
        <div className={Styles.main}>
            <h1 className="text-xl font-semibold">This is All User from serve aadsr</h1>
            <br />
            <ul>
                {props?.data?.users && props?.data?.users?.map((user, index) => (
                    <li key={index}>{user?.id} {"==>"} {user?.firstName}</li>
                ))}
            </ul>
        </div>
    )
}
export default users

export const getServerSideProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json();
    return {
        props: {
            data,
        }
    }
}