function Employee(props) {
    return(
        <div>
            Employee {props.name ? props.name : "No name"}
            <p>{props.role ? <p>{props.role}</p> : <h2>No role</h2>}</p>
        </div>
       
    )
};

export default Employee;