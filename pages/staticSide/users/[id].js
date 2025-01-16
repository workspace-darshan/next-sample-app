const UserProfile = (props) => {
    return (
        <div className="container mx-auto p-7">
            <h1 className="text-xl font-semibold">This is User from static = {props?.data?.firstName} </h1>
            <br />
            <div className="my-3">
                <ul>
                    <li><span className="font-semibold">firstName :-</span> {props?.data?.firstName}</li>
                    <li><span className="font-semibold">username :-</span> {props?.data?.username}</li>
                    <li><span className="font-semibold">maidenName :-</span> {props?.data?.maidenName}</li>
                    <li><span className="font-semibold">gender :-</span> {props?.data?.gender}</li>
                    <li><span className="font-semibold">email :-</span> {props?.data?.email}</li>
                    <li><span className="font-semibold">phone :-</span> {props?.data?.phone}</li>
                    <li><span className="font-semibold">eyeColor :-</span> {props?.data?.eyeColor}</li>
                    <li><span className="font-semibold">height :-</span> {props?.data?.height}</li>
                    <li><span className="font-semibold">weight :-</span> {props?.data?.weight}</li>
                    <li><span className="font-semibold">university
                        :-</span> {props?.data?.university
                        }
                    </li>
                    <li>
                        <img src={props?.data?.image} alt="img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfile

export const getStaticPaths = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json();
    const AllUserIds = data.users.map(user => user.id)
    return {
        paths: AllUserIds.map((userId) => ({ params: { id: `${userId}` } })),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    return {
        props: {
            data,
        }
    }
}