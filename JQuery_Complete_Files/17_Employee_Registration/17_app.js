let empId = 100;
// Click on Register Button
$('#register').click(function() {
    let employee = {
        empId : empId,
        employeeName : $('#emp_name').val(),
        employeeAge : $('#emp_age').val(),
        employeeDesg : $('#emp_desg').val(),
        jobLocation : $('#job_location').val()
    };
    displayEmployee(employee);
    empId++;
    clearFields();
});

// display Employee
let displayEmployee = (employee) => {
    console.log(employee);
    let tempRow = `<tr>
                        <td>${employee.empId}</td>
                        <td>${employee.employeeName}</td>
                        <td>${employee.employeeAge}</td>
                        <td>${employee.employeeDesg}</td>
                        <td>${employee.jobLocation}</td>
                    </tr>`;
    $('#table_body').append(tempRow);
};

// clear Fields
let clearFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#job_location').val('');
};