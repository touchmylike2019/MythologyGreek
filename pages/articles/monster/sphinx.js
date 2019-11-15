import DocumentsLayout from '../../../components/DocumentsLayout'

const Sphinx = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const monster8x2 = host + "monster/8.2.jpg"
    const monster8x4 = host + "monster/8.4.jpg"
    const monster8 = host + "monster/8.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>สฟริงซ์</h3>
            <img className="img-doc" src={monster8x2} alt="82" />
            <p className="ml-3">สฟิงซ์ของกรีกเป็นหนึ่งในลูก ๆ ของอีคิดนาและไทฟอน สฟิงซ์มีใบหน้าและทรวงอกของหญิงสาว ท่อนล่างเป็นสิงโตและมีปีกแบบนกอินทรี มีลักษณะนิสัยชอบทรยศหักหลัง ก้าวร้าวรุนแรง และกระหายเลือด และพวกนี้ยังชอบกินคนเป็นอาหารด้วย
คล้ายแมว หรือจะว่าอีกทีก็คล้ายผู้หญิงด้วย นั่นคือ มันจะพูด คุยหยอกเหยื่อของมันก่อนที่จะกินเข้าไป แต่อย่างไรก็ตาม ถ้าหากเกิดเหยื่อหนีรอดไปได้ สฟิงซ์จะบินดิ่งทิ้งตัวกระแทกพื้นหรืออะไรสักอย่าง ด้วยความโกรธเกรี้ยวจนตายไปเอง
 </p>

            <img className="img-doc" src={monster8x4} alt="8.4" />
            <img className="img-doc" src={monster8} alt="8" />
        </DocumentsLayout>
    )
}

export default Sphinx
