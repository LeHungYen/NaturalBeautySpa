import style from "./index.module.scss"
import React, { useState, useEffect } from 'react';
function ThankYou() {
    const text = `
    Cám ơn Quý khách hàng đã lựa chọn dịch vụ tại Natural Beauty.
    Chúng tôi sẽ gọi điện xác nhận đặt chỗ trực tiếp trong vòng 24 giờ.
    Trong trường hợp Quý khách hàng không nhận được xác nhận qua điện thoại, vui lòng 
    gọi cho chúng tôi theo số 0246-6899-303.
    Hẹn gặp Quý khách hàng tại <strong>625 Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam</strong>.
    Chúc quý khách hàng một ngày nhiều niềm vui và sức khỏe.
    `;

    return (
        <div className={style.container}>
            <p className={style.title}>THÔNG TIN ĐẶT CHỖ CỦA QUÝ KHÁCH HÀNG ĐÃ ĐƯỢC GỬI ĐI</p>
            <div className={style.text}>
                {text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        <p dangerouslySetInnerHTML={{ __html: line }} />
                    </React.Fragment>
                ))}
            </div>
        </div >
    );
}

export default ThankYou;