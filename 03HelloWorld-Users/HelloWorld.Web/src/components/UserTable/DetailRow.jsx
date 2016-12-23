import React, { PropTypes } from "react";
import GridCell from "dnn-grid-cell";
import RowDefinitions from "./RowDefinitions";

const DetailRow = ({userDetail}) => (
    <GridCell className="user-detail-row">
        {RowDefinitions.map(rowDetail => {
            return <GridCell columnSize={rowDetail.columnSize}>
                <h6>{userDetail[rowDetail.key]}</h6>
            </GridCell>;
        })}
    </GridCell>
);

DetailRow.propTypes = {
    userDetail: PropTypes.object
};

export default DetailRow;