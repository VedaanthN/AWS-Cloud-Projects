var API_ENDPOINT = "https://42jq4nalyl.execute-api.ap-south-1.amazonaws.com/student-api";

// ✅ Save Student (POST)
document.getElementById("savestudent").onclick = function () {
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT + '?t=' + new Date().getTime(),  // force no-cache
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            try {
                let res = typeof response === "string" ? JSON.parse(response) : response;
                let msg = res.body ? JSON.parse(res.body).message : "Student Data Saved!";
                document.getElementById("studentSaved").innerText = msg;
            } catch (e) {
                document.getElementById("studentSaved").innerText = "Saved, but response error.";
            }
        },
        error: function (xhr, status, error) {
            alert("❌ Error saving student data: " + error);
        }
    });
};

// ✅ Get Students (GET)
document.getElementById("getstudents").onclick = function () {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            try {
                let res = typeof response === "string" ? JSON.parse(response) : response;
                let students = res.body ? JSON.parse(res.body) : res;

                $('#studentTable tr').slice(1).remove();
                jQuery.each(students, function (i, data) {
                    $("#studentTable").append("<tr> \
                        <td>" + data['studentid'] + "</td> \
                        <td>" + data['name'] + "</td> \
                        <td>" + data['class'] + "</td> \
                        <td>" + data['age'] + "</td> \
                    </tr>");
                });
            } catch (e) {
                alert("Error parsing student data.");
                console.error(e);
            }
        },
        error: function (xhr, status, error) {
            alert("❌ Error retrieving student data: " + error);
        }
    });
};
