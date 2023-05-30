var btnKetQua = document.getElementById("btnKetQua");
btnKetQua.onclick = function () {

    var diemChuan = document.getElementById("diemChuan").value * 1;
    var KhuVuc = document.getElementById("KhuVuc").value * 1;
    var DoiTuong = document.getElementById("DoiTuong").value * 1;

    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;


    var total = KhuVuc + DoiTuong + number1 + number2 + number3;

    if (total < diemChuan || number1 == 0 || number2 == 0 || number3 == 0) {
        var result = "Bạn đã rớt (T-T) do điểm của bạn thấp hơn điểm chuẩn hoặc 1 môn bằng 0 .<br>Điểm hiện tại:" + Total + " điểm";
    } else {
        var result = "Bạn đã đậu L(^-^)L,  " + "tổng điểm:" + Total + "điểm  Congratulation!!";
    }


    var footerTinhKQ = document.getElementById("footerTinhKQ");
    footerTinhKQ.innerHTML = result;//xuất ra
};


// 
var btnTinhKW = document.getElementById("btnTinhKW");
btnTinhKW.onclick = function () {

    var hoTen = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKw").value * 1;
    var donGia = 500;//mac dinh giá
    if (0 < soKw && soKw <= 50) {//dau
        total2 = donGia * soKw;
    } else if (50 < soKw && soKw <= 100) {//50kw ke
        total2 = 50 * donGia + (soKw - 50) * (donGia + 150);
    } else if (100 < soKw && soKw <= 200) {//100kw ke
        total2 =
            50 * donGia + (100 - 50) * (donGia + 150) + (soKw - 100) * (donGia + 350);
    } else if (200 < soKw && soKw <= 350) {//150kw ke
        total2 =
            50 * donGia + (100 - 50) * (donGia + 150) + (200 - 100) * (donGia + 350) + (sokw - 200) * (donGia + 600);
    } else if (sokw > 350) {//con lai
        total2 =
            50 * donGia + (100 - 50) * (donGia + 150) + (200 - 100) * (donGia + 350) + (350 - 200) * (donGia + 600) + (sokw - 350) * (donGia + 800);
    } else {
        alert("Vui long nhap so luong phu hop!");
    }

    //Fomart VN
    var VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumSignificantDigits: 3
      });

    var result2 = "Họ tên: " + hoTen + "<br>Tổng tiền: " +VND.format(total2);



    var footerTinhKW = document.getElementById("footerTinhKW");
    footerTinhKW.innerHTML = result2;//xuất ra


};