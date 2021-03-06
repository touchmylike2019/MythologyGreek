import DocumentsLayout from '../../../components/DocumentsLayout'

const Capricorn = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac1 = host + "zodiac/1.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>ราศีมังกร</h3>
            <img className="img-doc" src={zodiac1} alt="1" />
            <p className="ml-3">เทพซูสมอบหน้าที่ให้แกนิมีด ผู้ถือแก้วน้ำของเหล่าเทพเจ้าเป็นผู้ส่งน้ำไปยังโลก
             โดยเอียงแก้วให้น้ำไหลอย่างไม่ขาดสายกลายเป็นแม่น้ำหลายสายบนโลก รวมทั้งแม่น้ำไนล์ ซึ่งเป็นสถานที่รื่นรมย์ของเทพเจ้าแพน
             ผู้มีร่างเป็นแพะและชอบเป่าขลุ่ย วันหนึ่งงูยักษ์ไทฟอนจะเข้ามาทำร้าย เทพเจ้าแพน เขาจึงกระโดหนีลงน้ำ แต่ว่ายน้ำไม่เร็วเพราะกีบแพะเล็กนิดเดียว
             ดังนั้นไท้เทพซูสจึงช่วยแปลงร่างของเทพแพนให้เป็นหางปลา และเรียกสัตว์ชนิดใหม่นี้ว่า แพะทะเล หรือ มกร</p>



            


        </DocumentsLayout>
    )
}

export default Capricorn
