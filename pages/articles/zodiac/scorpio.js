import DocumentsLayout from '../../../components/DocumentsLayout'

const Scorpio = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac11 = host + "zodiac/11.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>ราศีพิจิก</h3>


            <img className="img-doc" src={zodiac11} alt="11" />

            <p className="ml-3"> แมงป่องตัวนี้เป็นแมงป่องยักษ์ที่ทวดจีอาสั่งให้ไปฆ่านายพรานโอไรออน เพราะโกรธที่โอไรออนพูดว่าเขาสามารถฆ่าสัตว์ป่า 
            ซึ่ง เปรียบเสมือนลูกหลานของนางได้หมดทั้งโลก แม้ว่าจะกลายเป็นกลุ่มดาว บนท้องฟ้าไปแล้ว โดยกลุ่มดาวแมงป่องจะขึ้น ในขณะที่กลุ่มดาวนายพราน
             กำลังตกลับขอบฟ้า อยู่ทิศตรงข้ามกันตลอดกาล</p>
        </DocumentsLayout>
    )
}

export default Scorpio
