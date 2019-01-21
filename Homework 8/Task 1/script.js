var root = "https://services.odata.org/V4/TripPinServiceRW/People/";

var str_array = [
    "$count",
    "?$top=5",
    "?$expand=Trips($filter=Name eq 'Trip in US')",
    "?$orderby=UserName",
    "?$search=russell",
    "?$select=UserName,FirstName,LastName",
    "?$skip=5",
    "?$filter=FirstName eq 'Scott'"
];

var data = [];

function toRouteRequest(btn) {
    pressed_btn = btn.id;
    switch (pressed_btn) {
        case "count":
            showExp(str_array[0]);
            oDataRequest(root + str_array[0]);
            break;
        case "top":
            showExp(str_array[1]);
            oDataRequest(root + str_array[1]);
            break;
        case "expand":
            showExp(str_array[2]);
            oDataRequest(root + str_array[2]);
            break;
        case "orderBy":
            showExp(str_array[3]);
            oDataRequest(root + str_array[3]);
            break;
        case "search":
            showExp(str_array[4]);
            oDataRequest(root + str_array[4]);
            break;
        case "select":
            showExp(str_array[5]);
            oDataRequest(root + str_array[5]);
            break;
        case "skip":
            showExp(str_array[6]);
            oDataRequest(root + str_array[6]);
            break;
        case "filter":
            showExp(str_array[7]);
            oDataRequest(root + str_array[7]);
            break;
    }
}

function showExp(value) {
    alert('Query expression: ' + value);
}

function oDataRequest(array_item) {
    $.ajax({
        url: array_item,
        contentType: 'application/json; charset=utf-8',
        type: 'GET',
        error: function (xhr, status) {
            alert(status);
        },
        success: function (result) {
            if (typeof (result) == 'string') {
                alert('Number of records: ' + result);
            } else {
                clearTable();
                data = result.value;
                addToTable(data);
            }
        }
    })
}

function addToTable(_data) {
    var table = document.getElementById("table-data");
    for (var i = 0; i < _data.length; i++)
        table.appendChild(getRowToDataTable(_data[i]));
}

function getRowToDataTable(dataElement) {
    var row = document.createElement("tr");
    row.appendChild(getTD(dataElement.UserName));
    row.appendChild(getTD(dataElement.FirstName));
    row.appendChild(getTD(dataElement.LastName));
    return row;
}

function getTD(value) {
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}

function clearTable()
{
    var table = document.getElementById("table-data");
    while(table.childElementCount != 2)
    {
        table.removeChild(table.lastChild);
    }
}