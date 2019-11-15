import DocumentsLayout from '../../../components/DocumentsLayout'

const Apuarius = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac2 = host + "zodiac/2.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>ราศีกุมภ์</h3>
            <img className="img-doc" src={zodiac2} alt="2" />

            <p className="ml-3">สัญลักษณ์คือชายถือคนโทใส่น้ำ ชายคนที่ว่าคือแกนิมิด โอรสรูปงามแห่งกษัตริย์เมืองทรอยโดยมีตำนานเล่าว่า
             เมื่อครั้งที่เทพซุสเดินทางมายังโลกมนุษย์ เขาได้หลงรักแกนิมิด(ชาวกรีกโบราณถือว่าชายรักชายเป็นเรื่องปกติ)
             ซุสจึงแปลงกายเป็นนกยักษ์แล้วลักพาตัวแกนิมิดไปอยู่ด้วย โดยให้เขามีหน้าที่แบกคนโทใส่น้ำให้แก่เหล่าเทพและกลายเป็นกลุ่มดาวราศีกุมภ์เมื่อเสียชีวิต</p>





        </DocumentsLayout>
    )
}

export default Apuarius
