import React, { Component, PropTypes } from "react";
import GridCell from "dnn-grid-cell";
import HeaderRow from "./HeaderRow";
import DetailRow from "./DetailRow";
import Button from "dnn-button";
import util from "utils";
import styles from "./Table.less";

class Table extends Component {
    getList() {
        console.log("this.props.list", this.props.list);
        return this.props.list && this.props.list.map(item => {
            return <DetailRow item={item} />;
        });
    }
    render() {
        return (
            <GridCell className={styles.table}>
                <HeaderRow />
                {this.getList() }
            </GridCell>
        );
    }
}

Table.propTypes = {
    list: PropTypes.array
};

export default Table;