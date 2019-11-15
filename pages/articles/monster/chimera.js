import DocumentsLayout from '../../../components/DocumentsLayout'

const Chimera = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const monster10 = host + "monster/10.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ไคเมร่า</h3>
            <img className="img-doc" src={monster10} alt="10" />
            <p className="ml-3">เป็นลูกของอีคิดนาและไทฟอน เป็นพี่ชายของเซอร์เบอรัส คิเมียรามีร่างกายกำยำและเป็นที่รวมของสัตว์ร้าย 3 ชนิด คือ 
            ส่วนหัวถึงหน้าอกเป็นสิงโต ลำตัวเป็นแพะ บั้นท้ายเป็นมังกรหรืองู นอกจากนี้ ยังสามารถพ่นไฟได้เหมือนมังกรอีกด้วย คิเมียราถูกวีรบุรุษเบลเลอโรฟอนผู้ขี่ม้าบินเพกาซัสแทงตายด้วยหอก </p>
           
        </DocumentsLayout>
    )
}

export default Chimera
