import DocumentsLayout from '../../../components/DocumentsLayout'

const Hydra = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const monster9 = host + "monster/9.jpg"
    const monster9x2 = host + "monster/9.2.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ไฮดรา</h3>
            <img className="img-doc" src={monster9} alt="9" />
            <p className="ml-3">อาศัยอยู่ในบึงเลอร์นา เป็นหนึ่งในหกของลูกอสูรกายไทฟอนและอสูรกายอิคิดนา มีหลายหัว แต่ละหัวคล้ายงู ไฮดรามีหัวทั้งหมด 9 หัว เมื่อแต่ละหัวที่ถูกตัดจะมีหัวงอกขึ้นใหม่ได้ไม่มีที่สิ้นสุด บางปกรณัมกล่าวว่ามี 100 หัว บ้างก็ว่าไฮดรามีลำตัวคล้ายสุนัข ร่างกายปกคลุมด้วยเกล็ดและมีหางเหมือนมังกร
             ลมหายใจของไฮดรา มีอันตรายถึงขนาดที่ทำให้ผู้ที่เข้าไกล้ถึงแก่ความตาย ไฮดราเป็นทายาทของไทฟอนและอีคิดนา ไฮดรามีบทบาทและปรากฏตัวขึ้นในงานชิ้นที่สองของเฮอร์คิวลิส </p>



            <img className="img-doc" src={monster9x2} alt="92" />
          
        </DocumentsLayout>
    )
}

export default Hydra
