import Friend from './Friend';

export default function List({ friends }) {
    return (
        <>
        {
            friends.map(friend => <Friend key={friend.id} {...friend} />)
        }
        </>
    );
}