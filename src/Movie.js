import { Component } from "react/cjs/react.production.min";
import react from "react";
import PropTypes from "prop-types"

function Movie({id,title,summary,year,poster}){
    return (<div>
        <img src={poster}></img>
        <h4>{id} {year} {title}</h4>
        <h5>{summary}</h5>
        </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired

}
export default Movie;