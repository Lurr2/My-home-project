import classes from './Modal.module.scss';
const Modal = ({ clickedImg, HandleRotationRight, setClickedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null);
        }
    };
    return <section>

        <div className={classes.overlay + ' ' + classes.dismiss} onClick={handleClick}>
            <img src={clickedImg} alt="some"/>
            <span className={classes.dismiss} onClick={handleClick}></span>
        </div>

    </section>;
};

export default Modal;