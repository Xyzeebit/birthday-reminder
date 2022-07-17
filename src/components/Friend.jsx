export default function Friend({ name, age, photo }) {
    return (
        <article>
            <img
                src={photo}
                alt=""
                width="50"
                height="50"
            />
            <div>
                <h5>{name}</h5>
                <p>{age} years</p>
            </div>
        </article>
    )
}