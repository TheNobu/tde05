const UserInfo = ({items}) => {
    return (
        <div>
            {items.map(item=>(<div><p>{item.name}</p><p>{item.birthday}</p><p>{item.email}</p></div>))}
        </div>
    );
}

export default UserInfo;