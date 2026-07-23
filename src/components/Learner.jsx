import Score from "./Score";

export default function Learner(props) {
//console.log(props.score)
    return (
        <div>
            <label>Name: {props.name}</label> <br />
            <label>Bio: {props.bio}</label> <br />
            {props.score.map((s) =>
                <div key={s.date}>
                <Score date={s.date} score={s.score} />
                </div>
            )}
        </div>
    );
}
