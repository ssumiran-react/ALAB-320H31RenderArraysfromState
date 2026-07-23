import Score from "./Score";

export default function Learner(props) {
console.log(props.score)
    return (
        <div>
            <label>Name: {props.name}</label>
            <label>Bio: {props.bio}</label>
            {props.score.map((s) =>
                <Score date={s.date} score={s.score} />
            )}
        </div>
    );
}
