import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
            {props.alert && <div style={{width: '83%', height: '45px'}} className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0 container-fluid px-3 py-2`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert