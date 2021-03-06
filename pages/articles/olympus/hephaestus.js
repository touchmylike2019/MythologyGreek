import DocumentsLayout from '../../../components/DocumentsLayout'

const Hephaestus = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const Hephaestus = host + "olyp/Hephaestus.jpg"
    const Hephaestus1 = host + "olyp/Hephaestus1.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพเจ้าเฮเฟสตัส</h3>


            <p className="ml-3"> ฮีเฟสตัส  <b>เทพแห่งไฟ โลหะ และการช่าง</b> เป็นบุตรของซูส กับฮีรา (บางตำราว่าเป็นบุตรของฮีรา ผู้เดียว)
             พระองค์เป็นเทพที่พิการและอัปลักษณ์ ซึ่งอาจเกิดจากการที่ถูกซูสโยนลงจากสวรรค์เมื่อครั้งเข้าไปช่วยฮีรา จากการทะเลาะกับซูส
              เนื่องด้วยเหตุดังกล่าว พระองค์จึงถูกพระบิดาและมารดาทอดทิ้ง อีกทั้งพระชายาคือเทพีอโพรไดท์ยังดูแคลนจนกระทั่งไปมีชู้รักมากมาย
              รวมทั้งอนุชาร่วมอุทรของเทพฮีเฟสตัสเอง คือเทพอาเรสจนมีโอรสธิดาหลายองค์ ซึ่งแน่นอนว่าไม่มีสายเลือดสวามีอัปลักษณ์องค์นี้แม้แต่องค์เดียว
              ฮีเฟสตัสใช้เวลาช่วง 10 ปีแรกอยู่ในทะเล และได้สร้างโรงหล่อไว้ใต้ภูเขาไฟเอตนา มีไซคลอปส์เป็นคนงาน โดยสิ่งที่พระองค์สร้างขึ้น มีดังนี้  </p>
            <img className="img-doc" src={Hephaestus} alt="Hephaestus" />

            <p className="ml-3">*   อาวุธของ อคิลลีส และ อีเนียส<br></br>
                *   คทาของ อะกาเมมนอน<br></br>
                *   สร้อยคอของ Harmonia ซึ่งผู้สวมใส่จะประสบเคราะห์ร้าย<br></br>
                *   โล่ของ เฮราคลีส<br></br>
            </p>
            <img className="img-doc" src={Hephaestus1} alt="Hephaestus1" />

        </DocumentsLayout>
    )
}

export default Hephaestus
