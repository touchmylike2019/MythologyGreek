import DocumentsLayout from '../../../components/DocumentsLayout'

const Libra = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac10 = host + "zodiac/10.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>ราศีตุลย์</h3>

            <img className="img-doc" src={zodiac10} alt="10" />

            <p className="ml-3">คันชั่งเป็นเครื่องมือที่เทพีแห่งความยุติธรรมใช้เพื่อวัดความเที่ยงธรรมในโลกมนุษย์ ซึ่งเทพีแห่งความยุติธรรมคือ ทีมิส
              เป็นเทพีในกลุ่มไททันตามเทพปกรณัมกรีกซึ่งได้รับการพรรณนาว่าสามารถ “ให้คำปรึกษาที่ดี” และเป็นบุคคลาธิษฐานของความสงบเรียบร้อย 
              กฎหมาย และจารีตประเพณี คำว่า “Themis” แปลว่า “กฎสวรรค์” ตามความเชื่อของกรีก ทีมิสเป็นผู้จัดระบบ “กิจการสังคมของมนุษย์โดยเฉพาะการมาชุมนุมกัน” </p>
        </DocumentsLayout>
    )
}

export default Libra
