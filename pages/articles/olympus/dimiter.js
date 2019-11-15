import DocumentsLayout from '../../../components/DocumentsLayout'

const Dimiter = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const dt1 = host + "olyp/dt1.jpg"
    const dt2 = host + "olyp/dt2.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพีดิมิเทอร์</h3>
            <img className="img-doc" src={dt1} alt="dt1" />


            <p className="ml-3"> ดิมีเทอร์ เป็นธิดาองค์ที่2 ของโครนัส และรีอา นางเป็น<b>เทพีแห่งความอุดมสมบูรณ์ และการเก็บเกี่ยว</b>
            นางมักจะปรากฏตัวพร้อมกับดอกไม้ ผลไม้ และเมล็ดธัญญาหาร ต่อมาได้เป็นชายาของเทพซูส และมีธิดาองค์หนึ่งทรงนามว่า
            โพรสเสอพิน (Proserpine) หรือ เพอร์เซโฟนี (Persephone) เป็นเทวีครองฤดูผลิตผลของพืชทั้งปวง </p>


            <img className="img-doc" src={dt2} alt="dt2" />


        </DocumentsLayout>
    )
}

export default Dimiter
