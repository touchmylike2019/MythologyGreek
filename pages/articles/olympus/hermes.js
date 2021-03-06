import DocumentsLayout from '../../../components/DocumentsLayout'

const Hermes = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const Hermes4 = host + "olyp/Hermes4.jpg"
    const Hermes2 = host + "olyp/Hermes2.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพเจ้าเฮอร์เมส</h3>
            <p className="ml-3">  เฮอร์มีส  เรียกชื่อในตำนานเทพเจ้าโรมัน ว่า เมอร์คิวรี่
เป็นเทพผู้คุ้มครองเหล่านักเดินทาง คนเลี้ยงแกะ โจรผู้เร่ร่อน กวี นักกีฬา นักประดิษฐ์ และพ่อค้า อาจเรียกได้ว่า เฮอร์มีสเป็น<b>เทพแห่งการสื่อสาร</b> </p>
            <img className="img-doc" src={Hermes4} alt="Hermes4" />





            <p className="ml-3">สื่อสาร พระองค์เป็นบุตรของเทพซุสเกิดแต่นางเมยา (Maia) มีของวิเศษคือหมวกและรองเท้ามีปีก
             เรียกว่า เพตตะซัส (Petasus) ซึ่งเป็นของขวัญที่ได้รับจากเทพบิดา เพื่อให้ปฏิบัติหน้าที่เป็นเทพสื่อสาร และมีคถาคาดูเซียส (Caduceus)
              ซึ่งรูปร่างของคถาจะมีคถางูไขว้อยู่สองตัว เฮอร์มีสพบงูสองตัวนี้เมื่อเห็นมันสู้กันเลยเอาคถาทิ่มระหว่างงูสองตัวเพื่อห้ามไม่ให้เกิดความวิวาท
              งูเลยเลื้อยมาพันอยู่รอบไม้แล้วหันหัวเข้าหากันจึงกลายเป็นสัญลักษณ์ของความเป็นกลางด้วย
บุตรของเทพเฮอร์มีสได้แก่ เทพแพน เทพเฮอร์มาโฟรไดทัส และเทพออโตไลคัส</p>
            <img className="img-doc" src={Hermes2} alt="Hermes2" />


        </DocumentsLayout>
    )
}

export default Hermes
