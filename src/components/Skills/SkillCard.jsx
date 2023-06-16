import ReactCardFlip from 'react-card-flip';
import './SkillCard.css';

export const SkillCard = (props) => {

    const flipBack = () => {
        props.onFlipBack(props.id);
    };

    const flipFront = () => {
        props.onFlipFront()
    };


    return (
        <ReactCardFlip
            isFlipped={props.flipped === props.id ? true : false}
            flipDirection="horizontal"
        >
            <div
                onClick={flipBack}
                className={props.divClassName}
            >
                <img
                    className={props.imgClassName}
                    id={props.imgId}
                    src={props.imgSrc}
                    alt={props.imgAlt} />
            </div>
            <div
                onClick={flipFront}
                className={`${props.divClassName} ${props.flipped === props.id && "flipped"}`}
            >
                <h3 id="skill-h3">Jessie can:</h3>
                <ul id="skill-ul">
                    {props.skillDesc.map(desc => <li key={Math.random()}>{desc}</li>)}
                </ul>
            </div>
        </ReactCardFlip>
    )
}
