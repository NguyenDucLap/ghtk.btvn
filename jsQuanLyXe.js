var stt = 0;

function nhap(){
    var car = {
        name: document.getElementById("txt_name").value.trim(),
        wheel: document.getElementById("slc_typeWheel").value,
        engine: document.getElementById("slc_typeEngine").value,
        color: document.getElementById("txt_color").value,
        status: ""
    }

    if(car.name.length <= 0) {
        alert("bạn chưa nhập tên xe !!");
        return;
    }
    if(car.wheel.length <= 0) {
        alert("bạn chưa chọn loại bánh xe !!");
        return;
    }
    if(car.engine.length <= 0) {
        alert("bạn chưa chọn loại động cơ !!");
        return;
    }
    if(car.color.length <= 0) {
        alert("bạn chưa chọn màu sắc cho xe !!");
        return;
    }

    if(car.wheel == "1" && car.engine == "1") {
        car.status = "Xe bình thường";
    } else if(car.wheel == "2" && car.engine == "2") {
        car.status = "Siêu xe";
    } else {
        car.status = "Xe đã qua sử dụng";
    }

    var up = ++stt;
    var table = document.getElementById("output_list");
    var row = table.insertRow(up);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerHTML = up;
    cell1.innerHTML = car.name;
    cell2.innerHTML = car.wheel;
    cell3.innerHTML = car.engine;
    cell4.innerHTML = car.color;
    cell5.innerHTML = car.status;
}   


