import DocumentsLayout from '../../../components/DocumentsLayout'

const Pisces = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const zodiac3 = host + "zodiac/3.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{marginTop: 130}}>ราศีมีน</h3>
         <img className="img-doc" src={zodiac3} alt="3" />
            <p className="ml-3">นิทานกรีกกล่าว่าปลาทั้งสอง ในกลุ่มดาวปลาเป็นร่างแปลงของ เทพธิดาอโฟรได (Aphrodite) 
            และบุตรชาย อิรอส(Eros) ซึ่งกระโดดลงไปในแม่น้ำยูเฟรตีส เพื่อหนีภัยจากยักษ์ไทฟอน (Typhon) ผู้หายใจเข้าออกเป็นเปลวไฟ 
            แต่นิทานโรมันเล่าว่า เป็นฝูงปลาที่พาอโฟรไดที่และอิรอสไปสู่ความปลอดภัย</p>

        </DocumentsLayout>
    )
}

export default Pisces
