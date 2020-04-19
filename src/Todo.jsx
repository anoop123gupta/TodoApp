import React from 'react';

export default class TodoScreen extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          "task":"",
          "task_list":[],
          
      }
    }

    handleTaskChange(e){
        this.setState({"task": e.target.value})
    }

    handleAddBTN(){
        const task_list = this.state.task_list
        if (this.state.task !== ""){
            task_list.push(this.state.task)
            this.setState({"task_list": task_list, "task": ""})
        }
    }

    handleCheck(i) {
        const task_list = this.state.task_list
        task_list.splice(i, 1);
        this.setState({"task_list": task_list})
    }

    handleEdit(i,task){
        const task_list = this.state.task_list;
        task_list.splice(i, 1);
        this.setState({"task": task, "task_list": task_list})
    }



    render(){
       
        return(
            <div className="container">
               <div className="topnav">
                    <a className="active" href="#home">TODO APP</a>
                </div>
                <div className="input-group" >
                    <input type="text" className="form-control" placeholder="type here ..."  value={this.state.task} onChange={(e)=> this.handleTaskChange(e)} />
                    <div className="input-group-btn">
                        <button className="btn btn-primary" onClick={()=> this.handleAddBTN()}><i className="glyphicon glyphicon-plus" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div>
                    {this.state.task_list.length > 0 && this.state.task_list.map((task, i)=>{
                        return (
                            <div className="input-group"  key={i}>
                                <input type="text" className="form-control" value={task} readOnly  style={{"margin-top":"5px", "margin-bottom":"5px"}} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary" onClick={()=> this.handleCheck(i)} ><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></button>
                                    <button className="btn btn-primary" onClick={()=> this.handleEdit(i, task)} ><i className="glyphicon glyphicon-pencil" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
          )
    }
}