import DocumentsLayout from '../../../components/DocumentsLayout'

const Taurus = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac5 = host + "zodiac/5.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>ราศีพฤกษภ</h3>

            <img className="img-doc" src={zodiac5} alt="5" />

            <p className="ml-3">      ในประเทศเฟนิเซียโบราณมีสาวงามชื่อยูโรปา ลูกสาวของอินาคัว ยูโรปาชอบฝูงสัตว์เลี้ยงของพ่อมาก
            เทพปริณายกซูสได้หลง รักยูโรปา แต่รู้ว่าอินาคัสคงไม่ยอมแน่ จึงแปลงร่างเป็นวัวสีขาวราวหิมะไปปะปนในฝูงสัตว์ เมื่อยูโรปาเห็นวัวสีขาวที่ไม่ดุจึงเข้าไปลูบวัว
             และขึ้นไปขึ่บนหลัง วันต่อมาเมื่อยูโรปาขึ้นขี่วัวอีก ซูสคิดจะพาเธอไปเกาะครีต (Grete) จึงวิ่งไปอย่างเร็วแต่ไปไม่พ้นเพราะน้ำลึก ด้วยเหตุนี้ เองกลุ่มดาววัวบนท้องฟ้า
              จึงเห็นเพียงหน้าวัวและโหนกวัวเท่านั้นเอง</p>





        </DocumentsLayout>
    )
}

export default Taurus
