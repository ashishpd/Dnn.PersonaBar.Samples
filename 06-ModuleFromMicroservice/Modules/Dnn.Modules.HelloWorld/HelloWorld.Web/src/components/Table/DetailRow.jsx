import React, { PropTypes } from "react";
import GridCell from "dnn-grid-cell";
import RowDefinitions from "./RowDefinitions";
const DetailRow = ({item}) => (
    <GridCell className="user-detail-row">
        {RowDefinitions.map(rowDetail => {
            return <GridCell columnSize={rowDetail.columnSize}>
                <h6>{item}</h6>
            </GridCell>;
        }) }
    </GridCell>
);

DetailRow.propTypes = {
    item: PropTypes.object
};

export default DetailRow;