import Score from "./Score";

export default function Learner(props) {

    return (
        <div>
            <label>Name: {props.name}</label>
            <label>Bio: {props.bio}</label>
            {/* {props.scores.map((s) =>
                <Score date={s.date} score={s.score} />
            )} */}
        </div>
    );
}
