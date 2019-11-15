import DocumentsLayout from '../../../components/DocumentsLayout'

const Godofocean = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const Poseidon =  host + "ocean/Poseidon.jpg"
    const anlandtin =  host + "ocean/anlandtin.jpg"
    const posid =  host + "ocean/posid.jpg"
    const titan =  host + "ocean/titan.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพแห่งมหาสมุทร</h3>

            <p className="ml-3">เมื่อเทพซีอุสขึ้นเป็นประมุขฟ้าแล้วก็มอบอำนาจบางส่วนให้พี่ๆช่วยดูแล โดยเทพโพไซดอนรับอำนาจควบคุมครอบครองมหาสมุทร
             จากนั้นเทพบุตรโพไซดอนก็กลายเป็นพระสมุทร เทพเจ้าผู้ปกครองสรรพสิ่งในมหาสมุทรรวมถึงภูตปีศาจในทะเลอีกด้วย 
             และชาวประมงที่จับปลาเป็นอาชีพก็จะอยู่ในความคุ้มครองของพระองค์ด้วย ยามท้องทะเลปั่นป่วนเหล่าชาวประมงจึงเชื่อกันว่า 
             เทพโพไซดอนพิโรธจึงจะไม่ออกทะเลเพราะกลัวพลังอำนาจของพระองค์ เทพโพไซดอนจึงมีฉายาว่า<b>" ผู้เขย่าโลก "</b>อีกด้วย</p>
            <img className="img-doc" src={Poseidon} alt="Poseidon" />
            <img className="img-doc" src={anlandtin} alt="anlandtin" />
            <p className="ml-3">เมื่อโพไซดอน ได้รับมอบหมายให้กลายมาเป็นเทพเจ้าแห่งทะเลคนใหม่แทน เนรูสผู้ชรา เนรูสก็ทรงยกธิดาที่ชื่อว่า อัมฟิไทรต์ 
            ให้เป็นมเหสีของโพไซดอนด้วย ก่อนที่เนรุสจะผันตัวไปอยู่อย่างสงบในถ้ำใต้บาดาล นอกจากนี้ เนรูสยังทรงยกปราสาทใต้ทะเลให้แก่เทพโพไซดอนและพระราชินีองค์ใหม่ด้วย 
            โดยปราสาทหลังนี้ ประกอบขึ้นมาจากทองคำที่ตั้งอยู่ในสวนหินปะการังและไข่มุก</p>
            <img className="img-doc" src={posid} alt="posid" />

            <p className="ml-3">พระเทพีทรงมีพระโอรสให้เทพโพไซดอน คือ เทพไทรตัน โดยพระโอรสพระองค์นี้จะมีหน้าที่เป่าสังข์เป็นสัญญาณเวลาพระบิดาจะเสด็จสู่โอลิมปัส
             โดยพระองค์จะมีรูปลักษณ์เป็นคนครึ่งปลา เขาว่าพระองค์เป็นต้นตระกูลของเงือกกรีกด้วย</p>
            <img className="img-doc" src={titan} alt="titan" />
        </DocumentsLayout>
    )
}

export default Godofocean
