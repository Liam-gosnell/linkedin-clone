import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    );

    return (
    
        <div className="widgets">

            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
        {newsArticle("Goz is back", "Top news - 9099 readers")}
        {newsArticle("Coronavirus: IRE updates", "Top news - 886 readers")}
        {newsArticle("Tesla hits new highs", "Car & auto news - 300 readers")}
        {newsArticle("Sally Rooney Sells out again!", "Book news - 2080readers")}
        {newsArticle("Bitcoin breaks $35k", "Crypto news - 8000 readers")}
        {newsArticle("Record Sales of VW", "Car & auto news - 886 readers")}
        </div>
        );
}

export default Widgets;

