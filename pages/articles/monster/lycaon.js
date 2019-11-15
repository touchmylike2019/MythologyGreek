import DocumentsLayout from '../../../components/DocumentsLayout'

const Lycaon = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const monster11 = host + "monster/11.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ไลคาอัน</h3>
            <img className="img-doc" src={monster11} alt="11" />
            <p className="ml-3">ปรากฏเรื่องของมนุษย์หมาป่า เรื่องของเรื่องเริ่มต้นจากเรื่องราวที่เมืองอาร์คาเดีย(Acadia) ผู้เป็นบุตรของพีลัสคัส และ มีลีโบอี ได้ขึ้นครองราชย์เป็นกษัตริย์พระองค์แรกของอาร์คาเดียมีบุตรรวมห้าสิบคนและลูกสาวหนึ่งคน ไลคาอัน มีลักษณะนิสัยผิดจากคนอื่นๆ กล่าวคือพระองค์พิศมัยเนื้อหนังมังสามนุษย์เป้นอาหาร
             ความโหดร้ายป่าเถื่อน</p>
        </DocumentsLayout>
    )
}

export default Lycaon
