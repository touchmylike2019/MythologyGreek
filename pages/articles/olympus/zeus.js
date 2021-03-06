import DocumentsLayout from '../../../components/DocumentsLayout'

const Zeus = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zs = host + "olyp/zs.jpg"
    const zs2 = host + "olyp/zs2.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพเจ้าซุส</h3>

            <p className="ml-3">                เทพซูส เป็นราชาแห่งทวยเทพ ผู้ปกครองเขา โอลิมปัส (Olympus) และ<b>เทพแห่งท้องฟ้าและฟ้าร้อง</b>ของ
            ตำนานเทพปกรณัมกรีก สัญลักษณ์ประจำพระองค์คือสายฟ้า โคเพศผู้ นกอินทรี และต้นโอ๊ก นามของซีอุสแปลว่าความสว่างของท้องฟ้า
             นามของพระองค์ในตำนานเทพปกรณัมโรมันคือ เทพจูปิเตอร์ (Jupiter) และนามในตำนานอีทรูสแคนคือเทพไทเนีย (Tinia)</p>
            <p className="ml-3">พระองค์เป็นพระโอรสองค์สุดท้องของ โครนัส (Cronus) และ รีอา(Rhea) ซึ่งเป็น เทพไททัน พระองค์ได้สมรสกับ เทพีเฮร่า (Hera) เทพซูสมักมีชื่อเสียงในพฤติกรรมนอกลู่นอกทางเรื่องชู้สาว</p>
            <img className="img-doc" src={zs} alt="zs" />

            <img className="img-doc" src={zs2} alt="zs2" />





        </DocumentsLayout>
    )
}

export default Zeus
