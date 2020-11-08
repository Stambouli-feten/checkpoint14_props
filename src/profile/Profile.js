
import "./Profile.css"
import PropTypes from "prop-types";

export default function Profile({fullName,bio,email,children,handleName}) {
    return(
        <div className="cadre">
            <div className="section"><h2>{fullName}</h2></div>
        <div className="section"><h4>{bio}</h4></div>
        <div className="section"><h3>{email}</h3></div>
        <div className="photo">{children}</div>
        <button onClick={handleName}><b> Show user's Name</b></button>
        </div>
    )
}
Profile.defaultProps = {
    fullName:"user",
    bio:"user",
    email:"user@gmail.com"
    };
Profile.propTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
email:PropTypes.string.isRequired,
}