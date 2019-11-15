import DocumentsLayout from '../../../components/DocumentsLayout'

const Ophiuchus = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const Asclepius2 = host + "constellations/Asclepius2.png"
    const Asclepius = host + "constellations/Asclepius.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>กลุ่มดาวคนแบกงู</h3>

            <img className="img-doc" src={Asclepius2} alt="Asclepius2" />


            <p className="ml-3">  ตามตำนานกรีกเล่าว่า กลุ่มดาวนี้คือตัวแทนของแพทย์อัจฉริยะชาวกรีกนามว่า แอสคลีปิอุส (Asclepius) ซึ่งวันหนึ่งเข้าได้ล่วงรู้ความลับการทำให้ชีวิตเป็นอมตะจากการสุงเกตุสมุนไพรที่งูนำมากินเป็นประจำ เมื่อมหาเทพซุสได้รู้เข้า จึงทำการสังหาร แอสครีปิอุส ทันที
             เพื่อไม่ให้ความลับของสวรรค์รั่วไหลและเพื่อรักษาสมดุลของโลกมนุษย์ไว้ จากนั้นซุสจึงนำดวงวิญญาณของ แอสครีปิอุส ไปประดับเป็นกลุ่มดาวคนแบกงูบนท้องฟ้า เพื่อไว้อาลัยและระลึกถึงเขา</p>
            <img className="img-doc" src={Asclepius} alt="Asclepius2" />
        </DocumentsLayout>
    )
}

export default Ophiuchus
