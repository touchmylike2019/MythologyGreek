import DocumentsLayout from '../../../components/DocumentsLayout'

const Aries = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac4 = host + "zodiac/4.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ราศีเมษ</h3>

         <img className="img-doc" src={zodiac4} alt="4" />

            <p className="ml-3">นิทานกรีกกล่าวว่าเทพซูส ส่งแกะขึ้นไปท้องฟ้าเพื่อช่วยพริกซัส (Phryxus) และเฮอล์ (Helle)
             ลูกของราชา แห่งเทสซาลี (Thessaly) ให้รอดพ้นจากทารุณกรรมของแม่เลี้ยงต่อมาพริกซัสได้นำแกะไปบูชายัญ และเมื่อเขาแขวนขนแกะไว้ในป่าเล็ก ๆ อันศักดิ์สิทธิ์
              ขนแกะได้ กลายเป็นทองคำ</p>


           

        </DocumentsLayout>
    )
}

export default Aries
