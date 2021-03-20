import React, {ChangeEvent} from 'react';

export class Status extends React.Component <any,any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onActivedEditMode() {
        this.setState({
            editMode: true
        })
    }

    onDeactivedEditMode() {
        debugger
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
if (prevProps.status!== this.props.status){
    this.setState({
       status:this.props.status
    })
}
    }

    render() {
        debugger
        return (
            <div>{!this.state.editMode
                ? <span
                    onDoubleClick={this.onActivedEditMode.bind(this)}>{!(this.props.status === "") ? this.props.status : "нет статуса"} </span>
                : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.onDeactivedEditMode.bind(this)}
                         type="text" value={this.state.status}/>}


            </div>
        )
    }
}