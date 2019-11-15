import DocumentsLayout from '../../../components/DocumentsLayout'

const Cancer = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac7 = host + "zodiac/7.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ราศีกรกฎ</h3>

        <img className="img-doc" src={zodiac7} alt="7" />
            <p className="ml-3">ปูเป็นสมุนลับ ๆ ของเฮรา ผู้เป็นมเหสีของซูส และเป็นศัตรูของเฮอร์คิวลิส เฮราได้สั่งให้ปูไปทำร้ายเฮอร์คิวลิส
             ขณะที่เฮอร์คิวลิส กำลังต่อสู้กับงูไฮดรา แต่ก็ต้องพ่ายแพ้แก่เฮอร์คิวลิส เฮราจึงนำไปไว้บนสวรรค์กลายเป็นกลุ่มดาวปู</p>
        </DocumentsLayout>
    )
}

export default Cancer
